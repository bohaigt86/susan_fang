var mainContainer = document.getElementById('main-container'),
    winWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
    winHeight = height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

function initWindow() {
  winWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  winHeight = height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  mainContainer.style.width = winWidth + "px";
  mainContainer.style.height = winHeight + "px";

  console.log(winWidth, winHeight);

}
// window.onload = initWindow;
window.onresize = initWindow;
