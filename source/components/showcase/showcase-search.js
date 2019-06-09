import serialize from '../_modules/serialize';
import xhr from '../_modules/xhr';

document.addEventListener('DOMContentLoaded', () => {
	const search = document.querySelector('.showcase-search input');
	const searchBtn = document.querySelector('.showcase-search button');	
	const form = document.querySelector('#filterform');

	if (form) {
		form.addEventListener('submit', (e) => {
			const param = serialize(form);
			xhr(param);	
			e.preventDefault();
		});
	}



});