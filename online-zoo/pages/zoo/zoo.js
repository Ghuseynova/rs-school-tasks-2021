(function () {
  const cams = document.querySelectorAll('.cams__item');
  const mainCam = document.querySelector('.main-cam__iframe');

  cams.forEach((cam) => {
    cam.addEventListener('click', function () {
      const otherCam = this.querySelector('.cams__iframe');
      const otherCamSrc = otherCam.getAttribute('src');
      const mainCamSrc = mainCam.getAttribute('src');

      otherCam.setAttribute('src', mainCamSrc);
      mainCam.setAttribute('src', otherCamSrc);
    });
  });
})();
