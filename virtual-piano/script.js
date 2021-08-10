(function () {
	const piano = document.querySelector('.js-piano');
	const pianoKeys = document.querySelectorAll('.js-piano-key');
	const switches = document.querySelectorAll('.js-btn');
	const fullScreenBtn = document.querySelector('.js-fullscreen');

	let isMouseDown = false;

	function playAudio(event) {
		let el;

		if (event.type === 'keydown') {
			if (event.repeat) return;
			el = document.querySelector(`[data-letter='${event.code.slice(-1)}']`);
		} else {
			el = event.target;
		}

		if (!el || !el.classList.contains('piano-key')) return;

		const curKey = el;
		const curKeyNote = curKey.dataset.note;

		if (!curKey.classList.contains('piano-key-active')) {
			curKey.classList.add('piano-key-active', 'piano-key-active-pseudo');
		}

		const audio = new Audio();
		const audioSrc = `assets/audio/${curKeyNote}.mp3`;
		audio.src = audioSrc;
		audio.currentTime = 0;
		audio.play();
	}

	function stopAudio(event) {
		let el;

		if (event.type === 'keyup') {
			el = document.querySelector(`[data-letter='${event.code.slice(-1)}']`);
		} else {
			el = event.target;
		}

		if (!el || !el.classList.contains('piano-key')) return;

		el.classList.remove('piano-key-active', 'piano-key-active-pseudo');
	}

	function startPlayPiano(event) {
		playAudio(event);
		isMouseDown = true;
		pianoKeys.forEach((pianoKey) => {
			pianoKey.addEventListener('mouseover', playAudio);
			pianoKey.addEventListener('mouseout', stopAudio);
		});
	}

	function stopPlayPiano(event) {
		if (isMouseDown) {
			event.target.classList.remove(
				'piano-key-active',
				'piano-key-active-pseudo'
			);
			isMouseDown = false;
		}

		pianoKeys.forEach((pianoKey) => {
			pianoKey.removeEventListener('mouseover', playAudio);
			pianoKey.removeEventListener('mouseout', stopAudio);
		});
	}

	function handleSwitch(event) {
		const el = event.target;

		switches.forEach((arrEl) => arrEl.classList.remove('btn-active'));
		el.classList.add('btn-active');

		if (el.classList.contains('btn-letters')) {
			pianoKeys.forEach((pianoKey) =>
				pianoKey.classList.add('piano-key-letter')
			);
		} else {
			pianoKeys.forEach((pianoKey) =>
				pianoKey.classList.remove('piano-key-letter')
			);
		}
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

	switches.forEach((switchItem) => {
		switchItem.addEventListener('click', handleSwitch);
	});

	fullScreenBtn.addEventListener('click', toggleFullScreen);

	piano.addEventListener('mousedown', startPlayPiano);
	piano.addEventListener('mouseup', stopPlayPiano);
	piano.addEventListener('mouseleave', stopPlayPiano);

	window.addEventListener('keydown', playAudio);
	window.addEventListener('keyup', stopAudio);
})();
