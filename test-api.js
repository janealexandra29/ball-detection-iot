const axios = require('axios');
const fs = require('fs');
const FormData = require('form-data');

const BASE_URL = 'http://localhost:3000';

// Test status endpoint
async function testStatus() {
    try {
        console.log('🔍 Testing status endpoint...');
        const response = await axios.get(`${BASE_URL}/api/status`);
        console.log('✅ Status:', response.data);
        return true;
    } catch (error) {
        console.log('❌ Status test failed:', error.message);
        return false;
    }
}

// Test ball detection from URL
async function testUrlDetection() {
    try {
        console.log('🔍 Testing URL detection...');
        const testImageUrl = 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400';

        const response = await axios.post(`${BASE_URL}/api/detect-ball-url`, {
            imageUrl: testImageUrl
        });

        console.log('✅ URL detection result:', {
            success: response.data.success,
            predictionsCount: response.data.predictions?.length || 0,
            time: response.data.time
        });
        return true;
    } catch (error) {
        console.log('❌ URL detection test failed:', error.message);
        return false;
    }
}

// Test ball detection from file (if test image exists)
async function testFileDetection() {
    try {
        console.log('🔍 Testing file detection...');

        // Create a simple test image if it doesn't exist
        const testImagePath = './test-image.jpg';
        if (!fs.existsSync(testImagePath)) {
            console.log('⚠️  Test image not found. Skipping file detection test.');
            return true;
        }

        const formData = new FormData();
        formData.append('image', fs.createReadStream(testImagePath));

        const response = await axios.post(`${BASE_URL}/api/detect-ball`, formData, {
            headers: {
                ...formData.getHeaders()
            }
        });

        console.log('✅ File detection result:', {
            success: response.data.success,
            predictionsCount: response.data.predictions?.length || 0,
            time: response.data.time
        });
        return true;
    } catch (error) {
        console.log('❌ File detection test failed:', error.message);
        return false;
    }
}

// Run all tests
async function runTests() {
    console.log('🚀 Starting API tests...\n');

    const tests = [
        { name: 'Status Check', fn: testStatus },
        { name: 'URL Detection', fn: testUrlDetection },
        { name: 'File Detection', fn: testFileDetection }
    ];

    let passed = 0;
    let total = tests.length;

    for (const test of tests) {
        console.log(`\n📋 Running: ${test.name}`);
        const result = await test.fn();
        if (result) passed++;
        console.log('─'.repeat(50));
    }

    console.log(`\n📊 Test Results: ${passed}/${total} tests passed`);

    if (passed === total) {
        console.log('🎉 All tests passed! API is working correctly.');
    } else {
        console.log('⚠️  Some tests failed. Check the server and try again.');
    }
}

// Check if server is running
async function checkServer() {
    try {
        await axios.get(`${BASE_URL}/api/status`);
        return true;
    } catch (error) {
        return false;
    }
}

// Main execution
async function main() {
    console.log('🏈 IoT Ball Detection API Tester\n');

    const serverRunning = await checkServer();
    if (!serverRunning) {
        console.log('❌ Server tidak berjalan. Jalankan "npm start" terlebih dahulu.');
        console.log('💡 Pastikan server berjalan di http://localhost:3000');
        return;
    }

    console.log('✅ Server terdeteksi. Memulai tests...\n');
    await runTests();
}

// Run if called directly
if (require.main === module) {
    main().catch(console.error);
}

module.exports = { testStatus, testUrlDetection, testFileDetection, runTests }; 