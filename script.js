// 時計の表示
function updateClock() {
  const now = new Date();
  const timeStr = now.toLocaleTimeString();
  document.getElementById("clock").textContent = timeStr;
}
setInterval(updateClock, 1000);
updateClock();

// ギャラリー画像の切り替え
let imageIndex = 1;
function changeImage() {
  imageIndex = (imageIndex % 3) + 1;
  document.getElementById("gallery-image").src = `https://placehold.co/400x200?text=Image+${imageIndex}`;
}
