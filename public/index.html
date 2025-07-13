<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>IoT Ball Detection System</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            color: #333;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }

        .header {
            text-align: center;
            margin-bottom: 40px;
            color: white;
        }

        .header h1 {
            font-size: 2.5rem;
            margin-bottom: 10px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        .header p {
            font-size: 1.1rem;
            opacity: 0.9;
        }

        .main-content {
            display: flex;
            flex-direction: column;
            gap: 30px;
            margin-bottom: 30px;
        }

        .card {
            background: white;
            border-radius: 15px;
            padding: 30px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            transition: transform 0.3s ease;
            max-width: 800px;
            margin: 0 auto;
            width: 100%;
        }

        .card:hover {
            transform: translateY(-5px);
        }

        .card h2 {
            color: #667eea;
            margin-bottom: 20px;
            font-size: 1.5rem;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .upload-area {
            border: 3px dashed #ddd;
            border-radius: 10px;
            padding: 40px;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s ease;
            margin-bottom: 20px;
            background: linear-gradient(135deg, #f8f9ff 0%, #e8f2ff 100%);
            position: relative;
        }

        .upload-area:hover {
            border-color: #667eea;
            background: linear-gradient(135deg, #f0f4ff 0%, #e0f0ff 100%);
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(102, 126, 234, 0.2);
        }

        .upload-area.dragover {
            border-color: #667eea;
            background: linear-gradient(135deg, #e0f0ff 0%, #d0e8ff 100%);
            transform: scale(1.02);
        }

        .upload-area::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(45deg, transparent 30%, rgba(102, 126, 234, 0.1) 50%, transparent 70%);
            opacity: 0;
            transition: opacity 0.3s ease;
            pointer-events: none;
        }

        .upload-area:hover::before {
            opacity: 1;
        }

        .upload-icon {
            font-size: 3rem;
            color: #667eea;
            margin-bottom: 15px;
        }

        .file-input {
            display: none;
        }

        .btn {
            background: linear-gradient(45deg, #667eea, #764ba2);
            color: white;
            border: none;
            padding: 12px 25px;
            border-radius: 25px;
            cursor: pointer;
            font-size: 1rem;
            font-weight: 600;
            transition: all 0.3s ease;
            margin: 5px;
            box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
            position: relative;
            overflow: hidden;
        }

        .btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
        }

        .btn:active {
            transform: translateY(0);
            box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
        }

        .btn:disabled {
            opacity: 0.6;
            cursor: not-allowed;
            transform: none;
            box-shadow: none;
        }

        .btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: left 0.5s;
        }

        .btn:hover::before {
            left: 100%;
        }

        .url-input {
            width: 100%;
            padding: 12px;
            border: 2px solid #ddd;
            border-radius: 8px;
            font-size: 1rem;
            margin-bottom: 15px;
            transition: border-color 0.3s ease;
        }

        .url-input:focus {
            outline: none;
            border-color: #667eea;
        }

        .preview-container {
            margin-top: 20px;
            text-align: center;
        }

        .preview-image {
            max-width: 100%;
            max-height: 300px;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        .results {
            background: white;
            border-radius: 15px;
            padding: 30px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            margin-top: 30px;
        }

        .results h2 {
            color: #667eea;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .loading {
            display: none;
            text-align: center;
            padding: 20px;
        }

        .spinner {
            border: 4px solid #f3f3f3;
            border-top: 4px solid #667eea;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            animation: spin 1s linear infinite;
            margin: 0 auto 15px;
        }

        @keyframes spin {
            0% {
                transform: rotate(0deg);
            }

            100% {
                transform: rotate(360deg);
            }
        }

        .prediction-item {
            background: #f8f9ff;
            border-radius: 10px;
            padding: 15px;
            margin-bottom: 10px;
            border-left: 4px solid #667eea;
        }

        .prediction-item h4 {
            color: #667eea;
            margin-bottom: 8px;
        }

        .confidence-bar {
            background: #e9ecef;
            border-radius: 10px;
            height: 8px;
            margin: 8px 0;
            overflow: hidden;
        }

        .confidence-fill {
            background: linear-gradient(45deg, #667eea, #764ba2);
            height: 100%;
            border-radius: 10px;
            transition: width 0.3s ease;
        }

        .status {
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 10px 20px;
            border-radius: 25px;
            color: white;
            font-weight: 600;
            z-index: 1000;
            transform: translateX(400px);
            transition: transform 0.3s ease;
        }

        .status.show {
            transform: translateX(0);
        }

        .status.success {
            background: #28a745;
        }

        .status.error {
            background: #dc3545;
        }

        .system-info {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 10px;
            padding: 20px;
            color: white;
            text-align: center;
            margin-top: 20px;
        }

        .system-info h3 {
            margin-bottom: 10px;
        }

        .info-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
            margin-top: 15px;
        }

        .info-item {
            background: rgba(255, 255, 255, 0.1);
            padding: 15px;
            border-radius: 8px;
        }

        .segmented-control {
            display: flex;
            justify-content: center;
            margin-bottom: 30px;
            gap: 10px;
        }

        .seg-btn {
            background: #fff;
            color: #764ba2;
            border: 2px solid #764ba2;
            border-radius: 25px 25px 25px 25px;
            padding: 12px 28px;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s;
            outline: none;
            box-shadow: 0 2px 8px #764ba211;
        }

        .seg-btn.active,
        .seg-btn:hover {
            background: linear-gradient(45deg, #667eea, #764ba2);
            color: #fff;
            border-color: #667eea;
            transform: translateY(-2px) scale(1.04);
        }

        .webcam-area video {
            width: 100%;
            max-width: 400px;
            border-radius: 12px;
            margin-bottom: 10px;
        }

        @media (max-width: 900px) {
            .main-content {
                gap: 20px;
            }

            .segmented-control {
                flex-direction: column;
                gap: 8px;
            }
        }

        @media (max-width: 600px) {
            .container {
                padding: 8px;
            }

            .card {
                padding: 12px;
            }

            .header h1 {
                font-size: 1.3rem;
            }

            .btn,
            .seg-btn {
                font-size: 1rem;
                padding: 10px 16px;
            }
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="header">
            <h1><i class="fas fa-futbol"></i> IoT Ball Detection System</h1>
            <p>Sistem Deteksi Bola Berbasis IoT</p>
        </div>
        <div class="ball-types-info"
            style="background:rgba(255,255,255,0.15);border-radius:12px;padding:18px 20px;margin-bottom:24px;text-align:center;color:#fff;font-size:1.1rem;">
            <b>🎯 Jenis Bola yang Bisa Dideteksi (6 Macam)</b><br>
            <span style="font-size:1.3rem;">
                ⚾ Baseball &nbsp;•&nbsp; 🏀 Basket &nbsp;•&nbsp; ⚽ Sepak Bola &nbsp;•&nbsp; 🏌️ Golf &nbsp;•&nbsp; 🎾
                Tenis &nbsp;•&nbsp; 🏐 Voli
            </span>
        </div>

        <!-- Segmented Control -->
        <div class="segmented-control" id="modeControl">
            <button class="seg-btn active" id="btnUploadMode"><i class="fas fa-upload"></i> Upload</button>
            <button class="seg-btn" id="btnWebcamMode"><i class="fas fa-camera"></i> Kamera</button>
        </div>

        <div class="main-content" id="mainContent">
            <!-- Upload File Card -->
            <div class="card" id="uploadCard">
                <h2><i class="fas fa-upload"></i> Upload Gambar</h2>
                <div class="upload-area" id="uploadArea">
                    <div class="upload-icon">
                        <i class="fas fa-cloud-upload-alt"></i>
                    </div>
                    <p style="color: #666; font-size: 0.95rem;">Drag & drop gambar di sini atau <strong>klik area
                            ini</strong> untuk memilih file</p>
                    <div
                        style="margin-top: 15px; padding: 8px 16px; background: rgba(102, 126, 234, 0.1); border-radius: 8px; display: inline-block;">
                        <span style="color: #667eea; font-size: 0.9rem;">💡 Klik area ini untuk upload</span>
                    </div>
                    <input type="file" id="fileInput" class="file-input" accept="image/*">
                </div>
                <button class="btn" id="detectBtn" disabled>
                    <i class="fas fa-search"></i> Deteksi Bola
                </button>
                <div class="preview-container" id="previewContainer" style="display: none;">
                    <img id="previewImage" class="preview-image">
                </div>
            </div>

            <!-- Webcam Card -->
            <div class="card" id="webcamCard" style="display:none;">
                <h2><i class="fas fa-camera"></i> Kamera</h2>
                <div class="webcam-area" style="text-align:center;">
                    <video id="webcamVideo" autoplay playsinline
                        style="border-radius:12px;max-width:100%;box-shadow:0 2px 8px #0002;"></video>
                    <canvas id="webcamCanvas" style="display:none;"></canvas>
                </div>
                <button class="btn" id="captureBtn" style="margin-top:18px;">
                    <i class="fas fa-camera-retro"></i> Ambil Foto
                </button>
                <button class="btn" id="detectWebcamBtn" style="display:none;margin-top:10px;">
                    <i class="fas fa-search"></i> Deteksi Bola
                </button>
                <div class="preview-container" id="webcamPreviewContainer" style="display: none;">
                    <img id="webcamPreviewImage" class="preview-image">
                </div>
            </div>
        </div>

        <!-- Loading -->
        <div class="loading" id="loading">
            <div class="spinner"></div>
            <p>Sedang mendeteksi bola...</p>
        </div>

        <!-- Results -->
        <div class="results" id="results" style="display: none;">
            <h2><i class="fas fa-chart-bar"></i> Hasil Deteksi</h2>
            <div class="preview-container" id="resultImageContainer" style="margin-bottom: 20px; display:none;">
                <div style="position:relative; display:inline-block;">
                    <img id="resultImage" class="preview-image" style="position:relative; z-index:1;">
                    <canvas id="resultCanvas" style="position:absolute; left:0; top:0; z-index:2;"></canvas>
                </div>
            </div>
            <div id="resultsContent"></div>
        </div>

        <!-- System Info -->
        <div class="system-info">
            <h3><i class="fas fa-info-circle"></i> Informasi Sistem</h3>
            <div class="info-grid">
                <div class="info-item">
                    <strong>Status:</strong> <span id="systemStatus">Checking...</span>
                </div>
                <div class="info-item">
                    <strong>Model:</strong> Ball Detection v15
                </div>
                <div class="info-item">
                    <strong>API:</strong> Roboflow
                </div>
                <div class="info-item">
                    <strong>Versi:</strong> 1.0.0
                </div>
            </div>
        </div>
    </div>

    <!-- Status Message -->
    <div class="status" id="statusMessage"></div>
    <footer
        style="margin-top:40px;text-align:center;padding:18px 0 12px 0;background:rgba(255,255,255,0.10);color:#fff;font-size:1.08rem;border-radius:0 0 16px 16px;">
        <div style="margin-bottom:4px;">🎓 IoT Project: Smart Ball Detection System using Computer Vision</div>
        <div>Made by: Alvin, Daffa, Abidzar, Ridho &bull; Powered by Roboflow AI &amp; Flask</div>
    </footer>

    <script>
        // Elements
        const uploadArea = document.getElementById('uploadArea');
        const fileInput = document.getElementById('fileInput');
        const detectBtn = document.getElementById('detectBtn');
        const previewContainer = document.getElementById('previewContainer');
        const previewImage = document.getElementById('previewImage');
        const loading = document.getElementById('loading');
        const results = document.getElementById('results');
        const resultsContent = document.getElementById('resultsContent');
        const statusMessage = document.getElementById('statusMessage');
        const systemStatus = document.getElementById('systemStatus');

        // Segmented control logic
        const btnUploadMode = document.getElementById('btnUploadMode');
        const btnWebcamMode = document.getElementById('btnWebcamMode');
        const uploadCard = document.getElementById('uploadCard');
        const webcamCard = document.getElementById('webcamCard');
        btnUploadMode.onclick = () => {
            btnUploadMode.classList.add('active');
            btnWebcamMode.classList.remove('active');
            uploadCard.style.display = '';
            webcamCard.style.display = 'none';
        };
        btnWebcamMode.onclick = () => {
            btnWebcamMode.classList.add('active');
            btnUploadMode.classList.remove('active');
            uploadCard.style.display = 'none';
            webcamCard.style.display = '';
            startWebcam();
        };

        // Webcam logic
        const webcamVideo = document.getElementById('webcamVideo');
        const webcamCanvas = document.getElementById('webcamCanvas');
        const captureBtn = document.getElementById('captureBtn');
        const detectWebcamBtn = document.getElementById('detectWebcamBtn');
        const webcamPreviewContainer = document.getElementById('webcamPreviewContainer');
        const webcamPreviewImage = document.getElementById('webcamPreviewImage');
        let webcamStream = null;
        function startWebcam() {
            if (webcamStream) return;
            navigator.mediaDevices.getUserMedia({ video: true })
                .then(stream => {
                    webcamVideo.srcObject = stream;
                    webcamStream = stream;
                })
                .catch(err => {
                    showStatus('Tidak bisa mengakses kamera: ' + err.message, 'error');
                });
        }
        captureBtn.onclick = () => {
            webcamCanvas.width = webcamVideo.videoWidth;
            webcamCanvas.height = webcamVideo.videoHeight;
            webcamCanvas.getContext('2d').drawImage(webcamVideo, 0, 0);
            const dataUrl = webcamCanvas.toDataURL('image/jpeg');
            webcamPreviewImage.src = dataUrl;
            webcamPreviewContainer.style.display = 'block';
            detectWebcamBtn.style.display = '';
        };
        detectWebcamBtn.onclick = async () => {
            const dataUrl = webcamPreviewImage.src;
            if (!dataUrl) return;
            loading.style.display = 'block';
            results.style.display = 'none';
            try {
                // Convert base64 to blob
                const blob = dataURLtoBlob(dataUrl);
                const formData = new FormData();
                formData.append('image', blob, 'webcam.jpg');
                const response = await fetch('/api/detect-ball', {
                    method: 'POST',
                    body: formData
                });
                const data = await response.json();
                if (data.success) {
                    displayResults(data);
                    showStatus('Deteksi berhasil!', 'success');
                } else {
                    throw new Error(data.error);
                }
            } catch (error) {
                showStatus('Gagal mendeteksi bola: ' + error.message, 'error');
            } finally {
                loading.style.display = 'none';
            }
        };
        function dataURLtoBlob(dataurl) {
            var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1], bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
            while (n--) {
                u8arr[n] = bstr.charCodeAt(n);
            }
            return new Blob([u8arr], { type: mime });
        }

        let selectedFile = null;

        // Check system status
        async function checkSystemStatus() {
            try {
                const response = await fetch('/api/status');
                const data = await response.json();
                systemStatus.textContent = data.status;
                systemStatus.style.color = data.status === 'online' ? '#28a745' : '#dc3545';
            } catch (error) {
                systemStatus.textContent = 'offline';
                systemStatus.style.color = '#dc3545';
            }
        }

        // Show status message
        function showStatus(message, type = 'success') {
            statusMessage.textContent = message;
            statusMessage.className = `status ${type} show`;
            setTimeout(() => {
                statusMessage.classList.remove('show');
            }, 3000);
        }

        // File upload handling
        uploadArea.addEventListener('click', () => fileInput.click());

        uploadArea.addEventListener('dragover', (e) => {
            e.preventDefault();
            uploadArea.classList.add('dragover');
        });

        uploadArea.addEventListener('dragleave', () => {
            uploadArea.classList.remove('dragover');
        });

        uploadArea.addEventListener('drop', (e) => {
            e.preventDefault();
            uploadArea.classList.remove('dragover');
            const files = e.dataTransfer.files;
            if (files.length > 0) {
                handleFileSelect(files[0]);
            }
        });

        fileInput.addEventListener('change', (e) => {
            if (e.target.files.length > 0) {
                handleFileSelect(e.target.files[0]);
            }
        });

        function handleFileSelect(file) {
            if (!file.type.startsWith('image/')) {
                showStatus('Pilih file gambar yang valid!', 'error');
                return;
            }

            selectedFile = file;
            detectBtn.disabled = false;

            const reader = new FileReader();
            reader.onload = (e) => {
                previewImage.src = e.target.result;
                previewContainer.style.display = 'block';
            };
            reader.readAsDataURL(file);
        }

        // Detect ball from file
        detectBtn.addEventListener('click', async () => {
            if (!selectedFile) return;

            const formData = new FormData();
            formData.append('image', selectedFile);

            loading.style.display = 'block';
            results.style.display = 'none';

            try {
                const response = await fetch('/api/detect-ball', {
                    method: 'POST',
                    body: formData
                });

                const data = await response.json();

                if (data.success) {
                    displayResults(data);
                    showStatus('Deteksi berhasil!', 'success');
                } else {
                    throw new Error(data.error);
                }
            } catch (error) {
                showStatus('Gagal mendeteksi bola: ' + error.message, 'error');
            } finally {
                loading.style.display = 'none';
            }
        });

        // Display results
        function displayResults(data) {
            results.style.display = 'block';

            // Tampilkan gambar hasil (dari upload atau url preview)
            let imgSrc = '';
            if (previewImage && previewContainer.style.display !== 'none') {
                imgSrc = previewImage.src;
            } else if (webcamPreviewImage && webcamPreviewContainer.style.display !== 'none') {
                imgSrc = webcamPreviewImage.src;
            }
            const resultImage = document.getElementById('resultImage');
            const resultCanvas = document.getElementById('resultCanvas');
            const resultImageContainer = document.getElementById('resultImageContainer');
            if (imgSrc) {
                resultImage.src = imgSrc;
                resultImageContainer.style.display = 'block';
                resultImage.onload = function () {
                    // Set canvas size
                    resultCanvas.width = resultImage.naturalWidth;
                    resultCanvas.height = resultImage.naturalHeight;
                    resultCanvas.style.width = resultImage.width + 'px';
                    resultCanvas.style.height = resultImage.height + 'px';
                    // Draw bounding boxes
                    drawBoundingBoxes(resultCanvas, data.predictions, resultImage.naturalWidth, resultImage.naturalHeight);
                };
            } else {
                resultImageContainer.style.display = 'none';
            }

            // Card hasil deteksi
            let html = `
                <div style="margin-bottom: 20px;">
                    <strong>Waktu Deteksi:</strong> ${data.time}ms<br>
                    <strong>Ukuran Gambar:</strong> ${data.image.width} x ${data.image.height}px
                </div>
            `;

            if (data.predictions && data.predictions.length > 0) {
                html += '<div style="display:grid;gap:16px;">';
                data.predictions.forEach((prediction, index) => {
                    const confidence = (prediction.confidence * 100).toFixed(1);
                    html += `
                        <div style="background:linear-gradient(90deg,#667eea11,#764ba211);border-radius:12px;padding:18px 20px;box-shadow:0 2px 8px #0001;display:flex;align-items:center;gap:18px;">
                            <div style="font-size:2.2rem;color:#667eea;"><i class='fas fa-futbol'></i></div>
                            <div style="flex:1;">
                                <div style="font-size:1.2rem;font-weight:700;color:#333;">${prediction.class || 'Bola'} <span style="background:#667eea;color:#fff;border-radius:8px;padding:2px 10px;font-size:0.95rem;margin-left:8px;">${confidence}%</span></div>
                                <div style="margin-top:6px;font-size:0.98rem;">
                                    <span style="color:#764ba2;font-weight:600;">Posisi:</span> X: ${prediction.x.toFixed(1)}, Y: ${prediction.y.toFixed(1)}<br>
                                    <span style="color:#764ba2;font-weight:600;">Ukuran:</span> Lebar: ${prediction.width.toFixed(1)}, Tinggi: ${prediction.height.toFixed(1)}
                                </div>
                            </div>
                        </div>
                    `;
                });
                html += '</div>';
            } else {
                html += '<p style="color: #dc3545; font-weight: bold;">Tidak ada bola yang terdeteksi dalam gambar.</p>';
            }

            resultsContent.innerHTML = html;
        }

        // Fungsi untuk menggambar bounding box di canvas
        function drawBoundingBoxes(canvas, predictions, imgW, imgH) {
            const ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            if (!predictions || predictions.length === 0) return;
            predictions.forEach(pred => {
                ctx.save();
                ctx.strokeStyle = '#764ba2';
                ctx.lineWidth = Math.max(2, imgW / 200);
                ctx.globalAlpha = 0.85;
                ctx.beginPath();
                ctx.rect(
                    pred.x - pred.width / 2,
                    pred.y - pred.height / 2,
                    pred.width,
                    pred.height
                );
                ctx.stroke();
                ctx.globalAlpha = 1;
                // Label
                ctx.font = `bold ${Math.max(16, imgW / 25)}px Segoe UI,Arial`;
                ctx.fillStyle = '#764ba2';
                const label = `${pred.class || 'Bola'} ${((pred.confidence || 0) * 100).toFixed(0)}%`;
                const textW = ctx.measureText(label).width;
                ctx.fillRect(pred.x - pred.width / 2, pred.y - pred.height / 2 - 28, textW + 18, 28);
                ctx.fillStyle = '#fff';
                ctx.fillText(label, pred.x - pred.width / 2 + 9, pred.y - pred.height / 2 - 8);
                ctx.restore();
            });
        }

        // Initialize
        checkSystemStatus();
        setInterval(checkSystemStatus, 30000); // Check every 30 seconds
    </script>
</body>

</html>
