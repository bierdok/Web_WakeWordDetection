// example/example.js
import { KeywordDetector } from 'web-wake-word';
import path from 'path-browserify';

path.join("./", "./");
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

        console.log('Keyword detected \nprediction: ' + detected.prediction);
        console.log('cntBuf: ' + detected.cntBuf);
        console.log('Model: ' + detected.model);
        alert("Keyword detected: " + detected.model);
        keywordDetector.startListening();
      }
    };
    const modelsFolderPath = "./models"
    const modelToUse = "need_help_now.onnx";
    statusElement.textContent = 'Loading models...' + modelToUse.replace(/\.onnx$/, '').replace(/_/g, ' ');
// DO PATH JOIN INSTEAD OF STRING

// const keywordDetector = new KeywordDetector("path/to/models", "model1.onnx", 0.5, 10, (keyword) => console.log("Detected:", keyword));
/* new API: 
const modelParamsArr = [
  { modelToUse: "model1.onnx", threshold: 0.5, bufferCount: 10, onKeywordDetected: (keyword) => console.log("Detected in Model 1:", keyword) },
  { modelToUse: "model2.onnx", threshold: 0.7, bufferCount: 20, onKeywordDetected: (keyword) => console.log("Detected in Model 2:", keyword) },
];

const keywordDetector = new KeywordDetector("path/to/models", modelParamsArr, "./dist/", "./dist/");

*/

/* Works Single : 
    const keywordDetector = new KeywordDetector(
      modelsFolderPath,
      modelToUse,
      threshold,
      bufferCount,
      onKeywordDetected,
      "./dist/"
    );

    */
     /* New */
     
    const modelParamsArr = [
      { modelToUse: "need_help_now.onnx", threshold: threshold, bufferCount: bufferCount, onKeywordDetected: onKeywordDetected },
      { modelToUse: "salut_mia_model_28_20012025.onnx", threshold: threshold, bufferCount: bufferCount, onKeywordDetected: onKeywordDetected },
    ];
    
    const keywordDetector = new KeywordDetector(modelsFolderPath, modelParamsArr, "./dist/", "./dist/");
    
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
