const filters = document.querySelector('.js-filter');
const imgEl = document.querySelector('.js-img');
const btns = document.querySelectorAll('.btn');
const btnReset = document.querySelector('.js-reset');
const btnNext = document.querySelector('.js-next');
const btnLoad = document.querySelector('.js-load');
const btnSave = document.querySelector('.js-save');
const fullScreenBtn = document.querySelector('.js-fullscreen');
let imgNum = 1;

function setRootProperty(element, property, value) {
  element.style.setProperty(property, value);
}

function addActiveClass(el) {
  if (!el.classList.contains('btn-active')) {
    btns.forEach((btn) => btn.classList.remove('btn-active'));
    el.classList.add('btn-active');
  }
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

  addActiveClass(e.target);
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
  addActiveClass(e.target);
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

function hadleLoad(e) {
  addActiveClass(e.target);
  const file = this.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    imgEl.src = reader.result;
  };
  reader.readAsDataURL(file);

  e.target.value = null;
}

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

function drawImage(e) {
  addActiveClass(e.target);
  const img = new Image();
  img.setAttribute('crossOrigin', 'anonymous');
  img.src = imgEl.src;

  img.onload = function () {
    const canvas = document.createElement('canvas');
    const ct = Math.round(img.height / imgEl.clientHeight);
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext('2d');
    ctx.filter = `blur(${
      parseInt(window.getComputedStyle(imgEl).getPropertyValue('--blur')) * ct
    }px) invert(${window
      .getComputedStyle(imgEl)
      .getPropertyValue('--invert')}) sepia(${window
      .getComputedStyle(imgEl)
      .getPropertyValue('--sepia')}) saturate(${window
      .getComputedStyle(imgEl)
      .getPropertyValue('--saturate')}) hue-rotate(${window
      .getComputedStyle(imgEl)
      .getPropertyValue('--hue')})`;
    ctx.drawImage(img, 0, 0);

    const downloadLink = document.createElement('a');
    downloadLink.download = 'download';
    downloadLink.setAttribute('href', canvas.toDataURL('image/png'));

    downloadLink.click();
    downloadLink.delete;
  };
}

filters.addEventListener('input', handleUpdate);
btnReset.addEventListener('click', handleReset);
btnNext.addEventListener('click', handleNext);
btnLoad.addEventListener('change', hadleLoad);
btnSave.addEventListener('click', drawImage);
fullScreenBtn.addEventListener('click', toggleFullScreen);
