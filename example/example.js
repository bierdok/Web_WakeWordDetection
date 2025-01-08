// example/example.js
import { KeywordDetector } from 'web-wake-word';

document.addEventListener('DOMContentLoaded', async () => {
 //const licenseManager = new window.main.LicenseManager();
  const licenseKey =
    "MTczOTU3MDQwMDAwMA==-+2/cH2HBQz3/SsDidS6qvIgc8KxGH5cbvSVM/6qmk3Q=";

  // Initialize Keyword Detector
  const threshold = 0.9999;
  const bufferCount = 2;

  const statusElement = document.getElementById('status');

  const onKeywordDetected = (detected) => {
      if (detected) {
        keywordDetector.stopListening();
        console.log('Keyword detected!');
        alert("Keyword detected!");
        keywordDetector.startListening();
      }
    };
    const modelsFolderPath = "./models"
    const modelToUse = "need_help_now.onnx";
    statusElement.textContent = 'Loading models...' + modelToUse.replace(/\.onnx$/, '').replace(/_/g, ' ');

    const keywordDetector = new KeywordDetector(
      modelsFolderPath,
      modelToUse,
      threshold,
      bufferCount,
      onKeywordDetected
    );
    const isLicensed = await keywordDetector.setLicense(licenseKey);
    if (!isLicensed) {
      alert('Invalid or expired license key.');
      return;
    }
   
  try {
    await keywordDetector.init();
    statusElement.textContent = 'Models loaded. Listening for keywords...' + modelToUse.replace(/\.onnx$/, '').replace(/_/g, ' ');

    // Start listening for keywords
    keywordDetector.startListening();
  } catch (error) {
    console.error('Initialization error:', error);
    statusElement.textContent = 'Error initializing keyword detector.';
  }
});
