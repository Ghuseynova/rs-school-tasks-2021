(function () {
	const piano = document.querySelector('.js-piano');
	const pianoKeys = document.querySelectorAll('.js-piano-key');

	function playAudio(event) {
		const el = event.target;

		if (!el.classList.contains('piano-key')) return;

		const curKey = el;
		const curKeyNote = el.dataset.note;

		if (!curKey.classList.contains('piano-key-active')) {
			curKey.classList.add('piano-key-active');
		}

		const audio = new Audio();
		const audioSrc = `assets/audio/${curKeyNote}.mp3`;
		audio.src = audioSrc;
		audio.currentTime = 0;
		audio.play();
	}

	piano.addEventListener('click', playAudio);

	pianoKeys.forEach((pianoKey) =>
		pianoKey.addEventListener('transitionend', function (event) {
			if (event.propertyName === 'transform') {
				this.classList.remove('piano-key-active');
			}
		})
	);
})();
