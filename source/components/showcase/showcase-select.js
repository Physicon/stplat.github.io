import serialize from '../_modules/serialize';
import xhr from '../_modules/xhr';

document.addEventListener('DOMContentLoaded', () => {
	const selects = document.querySelectorAll('.showcase-select');
	const form = document.querySelector('#filterform');	

	if (selects.length) {
		[... selects].forEach((select) => {
			select.addEventListener('change', (e) => {
				const param = serialize(form);
				xhr(param);				
			});
		})
	}



});