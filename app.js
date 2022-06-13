
(() => {
  const modelViewer = document.querySelector('#exposure-demo');
  const time = performance.now();

  const animate = (now) => {
    modelViewer.exposure = oscillate(10, 27, 4000, now - time);
    requestAnimationFrame(animate);
  };

  animate();
})();