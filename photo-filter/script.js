const filters = document.querySelector('.js-filter');
const imgEl = document.querySelector('.js-img');
const btnReset = document.querySelector('.btn-reset');
const btnNext = document.querySelector('.btn-next');
const btnLoad = document.querySelector('#btnInput');
const btnSave = document.querySelector('.btn-save');
let imgNum = 1;

function setRootProperty(element, property, value) {
  element.style.setProperty(property, value);
}

function getTimeOfDay() {
  const date = new Date();
  const hour = date.getHours();
  const min = date.getMinutes();
  const minutes = hour * 60 + min;

  if (minutes >= 6 * 60 && minutes <= 11 * 60 + 59) {
    return 'morning';
  } else if (minutes >= 12 * 60 && minutes <= 17 * 60 + 59) {
    return 'day';
  } else if (minutes >= 18 * 60 && minutes <= 23 * 60 + 59) {
    return 'evening';
  } else {
    return 'night';
  }
}

function viewBgImage(src) {
  const img = new Image();
  img.src = src;
  img.onload = () => {
    imgEl.src = src;
  };
}

function handleUpdate(e) {
  const input = e.target;
  const parentEl = input.parentElement;
  const output = parentEl.querySelector('output');
  const value = input.value;
  const name = input.name;
  const suffix = input.dataset.sizing || '';

  output.textContent = value;

  setRootProperty(document.documentElement, `--${name}`, `${value}${suffix}`);
}

function handleReset(e) {
  e.stopPropagation();

  setRootProperty(document.documentElement, '--blur', '0px');
  setRootProperty(document.documentElement, '--invert', '0%');
  setRootProperty(document.documentElement, '--sepia', '0%');
  setRootProperty(document.documentElement, '--saturate', '100%');
  setRootProperty(document.documentElement, '--hue', '0deg');

  filters.querySelectorAll('input').forEach((input) => {
    const parentEl = input.parentElement;
    const output = parentEl.querySelector('output');

    if (input.name === 'saturate') {
      input.value = 100;
      output.textContent = 100;
    } else {
      input.value = 0;
      output.textContent = 0;
    }
  });
}

function handleNext(e) {
  const _this = this;
  const imgSrc = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${getTimeOfDay()}/${
    imgNum < 10 ? `0${imgNum}` : imgNum
  }.jpg`;

  viewBgImage(imgSrc);

  if (imgNum === 20) {
    imgNum = 1;
    return;
  }
  imgNum++;

  _this.disabled = true;
  setTimeout(function () {
    _this.disabled = false;
  }, 1000);
}

filters.addEventListener('input', handleUpdate);
btnReset.addEventListener('click', handleReset);
btnNext.addEventListener('click', handleNext);
btnLoad.addEventListener('click', function (e) {
  console.log(e);
});
