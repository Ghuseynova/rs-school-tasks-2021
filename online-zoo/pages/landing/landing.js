(function () {
  const fSlider = document.querySelector('.f-slider');
  const fSliderContainer = document.querySelector('.f-slider__row');
  const fSlides = document.querySelectorAll('.f-slider__col');
  const prevBtn = document.querySelector('.js-fslider-prev');
  const nextBtn = document.querySelector('.js-fslider-next');

  prevBtn.addEventListener('click', function () {
    const fSlides = document.querySelectorAll('.f-slider__col');
    const cln = fSlides[fSlides.length - 1].cloneNode(true);

    fSlides[fSlides.length - 1].remove();
    fSliderContainer.prepend(cln);

    fSlides.forEach((fSlide) => {
      fSlide.classList.remove('fade');

      setTimeout(() => {
        fSlide.classList.add('fade');
      }, 1);
    });
  });

  nextBtn.addEventListener('click', function () {
    const fSlides = document.querySelectorAll('.f-slider__col');
    const cln = fSlides[0].cloneNode(true);

    fSlides[0].remove();
    fSliderContainer.append(cln);

    fSlides.forEach((fSlide) => {
      fSlide.classList.remove('fade');

      setTimeout(() => {
        fSlide.classList.add('fade');
      }, 1);
    });
  });
})();
