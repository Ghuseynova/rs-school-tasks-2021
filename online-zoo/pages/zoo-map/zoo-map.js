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
  const markers = document.querySelectorAll('.js-map-marker');

  function setPet(pet) {
    const petCom = `<div class="pet pet--map zoo-map__pet">
    <div class="pet__img"><img class="pet__img-file" src="../../assets/images/${
      pet.image
    }" alt="eagle"></div>
    <div class="pet__content">
      <h3 class="h3 h3--theme-dark pet__title">${pet.name}</h3>
      <p class="text text--theme-dark pet__desc">${
        pet.desc
      }</p><a class="link link--theme-dark link--with-arrow pet__link" href="../zoo/${pet.name.toLowerCase()}.html">Watch now<svg class="link__icon">
          <use href="../../assets/icons/sprite.svg#arrow-right"></use>
        </svg></a>
    </div>
  </div>`;

    document.querySelector('.zoo-map__pet').remove();

    document.querySelector('.zoo-map').insertAdjacentHTML('beforeend', petCom);
  }

  document.querySelector('.page--map').addEventListener('click', handleMap);

  function handleMap(e) {
    const el = e.target;

    if (el.closest('.markers__item')) {
      const _this = el.closest('.markers__item');
      const animal = animals.filter(
        (animal) => animal.name.toLowerCase() === _this.dataset.animal
      )[0];

      if (!_this.classList.contains('markers__item--active')) {
        markers.forEach((el) => el.classList.remove('markers__item--active'));
        _this.classList.add('markers__item--active');
      }

      setPet(animal);
    } else {
      document.querySelector('.zoo-map__pet').style.display = 'none';
      markers.forEach((el) => el.classList.remove('markers__item--active'));
    }
  }
})();
