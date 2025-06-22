// Debug script pour vérifier le background gaming
console.log("🎮 Gaming Background Debug Script");

// Vérifier la présence des composants
setTimeout(() => {
  const gamerBg = document.querySelector("app-gamer-background");
  const threeCanvas = document.querySelector(".three-canvas");
  const matrixCanvas = document.querySelector(".matrix-canvas");
  const particlesCanvas = document.querySelector(".particles-canvas");

  console.log("🔍 Component Check:");
  console.log("- Gamer Background:", gamerBg ? "✅ Found" : "❌ Missing");
  console.log("- Three.js Canvas:", threeCanvas ? "✅ Found" : "❌ Missing");
  console.log("- Matrix Canvas:", matrixCanvas ? "✅ Found" : "❌ Missing");
  console.log(
    "- Particles Canvas:",
    particlesCanvas ? "✅ Found" : "❌ Missing"
  );

  // Vérifier WebGL
  const testCanvas = document.createElement("canvas");
  const gl =
    testCanvas.getContext("webgl") ||
    testCanvas.getContext("experimental-webgl");
  console.log("🎯 WebGL Support:", gl ? "✅ Available" : "❌ Not Available");

  // Vérifier Three.js
  if (window.THREE) {
    console.log("📦 Three.js:", "✅ Loaded");
  } else {
    console.log("📦 Three.js:", "❌ Not Loaded");
  }

  // Performance info
  console.log("⚡ Device Info:");
  console.log("- Pixel Ratio:", window.devicePixelRatio);
  console.log("- Screen Size:", window.innerWidth + "x" + window.innerHeight);
  console.log(
    "- User Agent:",
    navigator.userAgent.includes("Mobile") ? "Mobile" : "Desktop"
  );
}, 2000);

// Fonction pour activer/désactiver le debugging
window.debugGaming = function () {
  const backgrounds = document.querySelectorAll(
    "app-gamer-background, app-matrix-rain, app-gaming-particles"
  );
  backgrounds.forEach((bg) => {
    bg.style.opacity = bg.style.opacity === "0.1" ? "1" : "0.1";
  });
};
