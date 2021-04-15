const filters = document.querySelector('.js-filter');
const img = document.querySelector('.js-img');

console.log(filters);

function handleUpdate(e) {
	console.log(e.target.value, e.target.dataset.sizing);

	const input = e.target;
	const parentEl = input.parentElement;
	const output = parentEl.querySelector('output');
	const value = input.value;
	const name = input.name;
	const suffix = input.dataset.sizing || '';

	output.textContent = value;
	img.style.setProperty(`--${name}`, `${value}${suffix}`);
}

filters.addEventListener('input', handleUpdate);
