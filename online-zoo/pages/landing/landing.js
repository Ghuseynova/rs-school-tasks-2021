(function () {
  const fSliderContainer = document.querySelector('.f-slider__row');
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

(function () {
  const tSliderContainer = document.querySelector('.t-slider__row');
  const tSlides = document.querySelectorAll('.t-slider__col');
  const prevBtn = document.querySelector('.js-tslider-prev');
  const nextBtn = document.querySelector('.js-tslider-next');
  let timer = 10000;

  function drawSlide(dir) {
    const tSlides = document.querySelectorAll('.t-slider__col');
    const cln =
      dir === 'right'
        ? tSlides[0].cloneNode(true)
        : tSlides[tSlides.length - 1].cloneNode(true);

    dir === 'right'
      ? tSlides[0].remove()
      : tSlides[tSlides.length - 1].remove();

    dir === 'right'
      ? tSliderContainer.append(cln)
      : tSliderContainer.prepend(cln);

    tSlides.forEach((tSlide) => {
      tSlide.classList.remove('fade');

      setTimeout(() => {
        tSlide.classList.add('fade');
      }, 500);
    });
  }

  let interval = setInterval(() => {
    drawSlide('right');
  }, timer);

  prevBtn.addEventListener('click', () => {
    drawSlide('left');

    stopAndReInitSlider();
  });

  nextBtn.addEventListener('click', () => {
    drawSlide('right');

    stopAndReInitSlider();
  });

  function stopAndReInitSlider() {
    clearInterval(interval);

    setTimeout(function () {
      setInterval(() => {
        drawSlide('right');
      }, timer);
    }, 20000);
  }

  tSlides.forEach((tSlide) => {
    tSlide.addEventListener('click', function () {
      stopAndReInitSlider();
    });
  });
})();

(function () {
  const openPopupBtn = document.querySelector('.js-popup');
  const popup = document.querySelector('.popup');
  const popupOverlay = document.querySelector('.popup__overlay');

  openPopupBtn.addEventListener('click', () => {
    popup.classList.add('popup--is-open');
  });

  popupOverlay.addEventListener('click', () => {
    popup.classList.remove('popup--is-open');
  });
})();

(function () {
  const popup = document.querySelector('.popup');
  const form = document.querySelector('.f-form');
  const name = document.querySelector('#name');
  const email = document.querySelector('#email');
  const message = document.querySelector('#message');
  const sendBtn = document.querySelector('.f-form__btn');

  form.addEventListener('input', () => {
    console.log('clicked');

    if (
      name.value.length > 0 &&
      email.value.length > 0 &&
      message.value.length > 0
    ) {
      sendBtn.classList.remove('button--is-disable');
    } else {
      sendBtn.classList.add('button--is-disable');
    }
  });

  sendBtn.addEventListener('click', () => {
    popup.classList.remove('popup--is-open');
    alert('Thank you for your feedback');
  });
})();

(function () {
  const animals = [
    {
      name: 'Eagle',
      desc:
        'The broadcast is from an island near Los Angeles. Watch their real life.',
      image: 'm-eagle.png',
    },
    {
      name: 'Panda',
      desc:
        'The broadcast comes from the mountainous regions of central China: Sichuan and Tibet. See their real life together.',
      image: 'm-panda.png',
    },
    {
      name: 'Gorilla',
      desc:
        'The broadcast comes from the Democratic Republic of the Congo in a forest area. Watch their life and life together',
      image: 'm-gorilla.png',
    },
    {
      name: 'Alligator',
      desc: 'The broadcast is from Florida. See their real life.',
      image: 'm-panda.png',
    },
  ];

  const markers = document.querySelectorAll('.js-zoo-marker');

  markers.forEach((marker) => {
    marker.addEventListener('click', handleMarker);
  });

  function handleMarker() {
    const animal = animals.filter(
      (animal) => animal.name.toLowerCase() === this.dataset.animal
    )[0];

    if (!this.classList.contains('markers__item--active')) {
      markers.forEach((el) => el.classList.remove('markers__item--active'));
      this.classList.add('markers__item--active');
    }

    setPet(animal);
  }

  function setPet(pet) {
    const petCom = `<div class="pet zoogeography__pet">
    <div class="pet__img"><img class="pet__img-file" src="../../assets/images/${pet.image}" alt="eagle"></div>
    <div class="pet__content">
      <h3 class="h3 h3--theme-dark pet__title">${pet.name}</h3>
      <p class="text text--theme-dark pet__desc">${pet.desc}</p><a class="link link--theme-dark link--with-arrow pet__link">Watch now<svg class="link__icon">
          <use href="../../assets/icons/sprite.svg#arrow-right"></use>
        </svg></a>
    </div>
  </div>`;

    document.querySelector('.zoogeography__pet').remove();

    document
      .querySelector('.zoogeography__col--left')
      .insertAdjacentHTML('beforeend', petCom);
  }
})();
