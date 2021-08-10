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

(function () {
  const accerdion = document.querySelector('.js-vacancy-accerdion');

  if (accerdion)
    accerdion.addEventListener('click', (e) => {
      const accHead = e.target.closest('.i-accerdion-item__head');

      if (!accHead) return;

      const accParent = accHead.parentElement;
      const accBody = accParent.querySelector('.i-accerdion-item__body');

      if (accParent.classList.contains('i-accerdion-item--is-open')) {
        accParent.classList.remove('i-accerdion-item--is-open');
        accBody.style.maxHeight = '0px';
      } else {
        document.querySelectorAll('.i-accerdion-item').forEach((vcard) => {
          vcard.classList.remove('i-accerdion-item--is-open');
          vcard.querySelector('.i-accerdion-item__body').style.maxHeight =
            '0px';
        });

        accParent.classList.add('i-accerdion-item--is-open');
        accBody.style.maxHeight = accBody.scrollHeight + 'px';
      }
    });
})();
