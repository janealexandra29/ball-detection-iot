const express = require('express');
const axios = require('axios');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Konfigurasi multer untuk upload file
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadDir = 'uploads/';
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
    fileFilter: function (req, file, cb) {
        if (file.mimetype.startsWith('image/')) {
            cb(null, true);
        } else {
            cb(new Error('Hanya file gambar yang diperbolehkan!'), false);
        }
    }
});

// API Key Roboflow
const ROBOFLOW_API_KEY = "Am7lrBZW1eYzrwt0rWvc";
const ROBOFLOW_URL = "https://serverless.roboflow.com/ball-t8zxj/15";

// Route untuk halaman utama
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API endpoint untuk deteksi bola dari file upload
app.post('/api/detect-ball', upload.single('image'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'Tidak ada file yang diupload' });
        }

        // Baca file gambar
        const imageBuffer = fs.readFileSync(req.file.path);
        const base64Image = imageBuffer.toString('base64');

        // Kirim ke Roboflow API
        const response = await axios({
            method: "POST",
            url: ROBOFLOW_URL,
            params: {
                api_key: ROBOFLOW_API_KEY
            },
            data: base64Image,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        });

        // Hapus file temporary
        fs.unlinkSync(req.file.path);

        res.json({
            success: true,
            predictions: response.data.predictions,
            time: response.data.time,
            image: {
                width: response.data.image.width,
                height: response.data.image.height
            }
        });

    } catch (error) {
        console.error('Error detecting ball:', error.message);

        // Hapus file jika ada error
        if (req.file && fs.existsSync(req.file.path)) {
            fs.unlinkSync(req.file.path);
        }

        res.status(500).json({
            error: 'Terjadi kesalahan saat mendeteksi bola',
            details: error.message
        });
    }
});

// API endpoint untuk deteksi bola dari URL
app.post('/api/detect-ball-url', async (req, res) => {
    try {
        const { imageUrl } = req.body;

        if (!imageUrl) {
            return res.status(400).json({ error: 'URL gambar diperlukan' });
        }

        // Kirim ke Roboflow API dengan URL
        const response = await axios({
            method: "POST",
            url: ROBOFLOW_URL,
            params: {
                api_key: ROBOFLOW_API_KEY,
                image: imageUrl
            }
        });

        res.json({
            success: true,
            predictions: response.data.predictions,
            time: response.data.time,
            image: {
                width: response.data.image.width,
                height: response.data.image.height
            }
        });

    } catch (error) {
        console.error('Error detecting ball from URL:', error.message);
        res.status(500).json({
            error: 'Terjadi kesalahan saat mendeteksi bola dari URL',
            details: error.message
        });
    }
});

// Route untuk mendapatkan status sistem
app.get('/api/status', (req, res) => {
    res.json({
        status: 'online',
        timestamp: new Date().toISOString(),
        service: 'Ball Detection IoT System',
        version: '1.0.0'
    });
});

// Error handling middleware
app.use((error, req, res, next) => {
    console.error('Error:', error);
    res.status(500).json({
        error: 'Terjadi kesalahan internal server',
        details: error.message
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: 'Endpoint tidak ditemukan' });
});

app.listen(PORT, () => {
    console.log(`🚀 Server Ball Detection IoT berjalan di port ${PORT}`);
    console.log(`📱 Buka browser dan kunjungi: http://localhost:${PORT}`);
    console.log(`🔍 API Status: http://localhost:${PORT}/api/status`);
}); 
