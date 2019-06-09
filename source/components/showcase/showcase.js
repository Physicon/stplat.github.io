import xhr from '../_modules/xhr';
import serialize from '../_modules/serialize';

document.addEventListener('DOMContentLoaded', () => {
	const itemList = document.querySelector('.showcase__list');	
	const form = document.querySelector('#filterform');	
	const param = serialize(form);
	
	if (itemList) {
		xhr(param);		
	}

});