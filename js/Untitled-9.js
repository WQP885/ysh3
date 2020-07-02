window.onload = rotate;
var thisAd = 0;
function rotate() {
var adImages = new Array("期末作品阳思涵/狐蝠1.jpg","期末作品阳思涵/狐蝠2.jpg","期末作品阳思涵/狐蝠3.jpg","期末作品阳思涵/狐蝠4.jpg");
thisAd++;
if (thisAd ===adImages.length) {
thisAd = 0;
}
document.getElementById("adBanner").src = adImages[thisAd];
setTimeout(rotate, 2 * 1000);
}