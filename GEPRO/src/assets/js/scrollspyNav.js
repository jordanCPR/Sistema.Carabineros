function getContainerMargin() { 
  var p = document.querySelector(".main-content > .container");
  if (!p) return;

  var sidenav = document.querySelector('.sidenav');
  if (!sidenav) return;

  var style = p.currentStyle || window.getComputedStyle(p);

  sidenav.style.right = style.marginRight;
  sidenav.style.display = 'block';

}
window.addEventListener('load',getContainerMargin,false);
window.addEventListener("resize", getContainerMargin);