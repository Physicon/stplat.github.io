document.addEventListener('DOMContentLoaded', () => {

	if (document.querySelector('.tab')) {
		const tab = document.querySelector('.tab__nav');
		const screens = document.querySelectorAll('.tab__screen');

		tab.addEventListener('click', (e) => {
			if (e.target.classList.contains('tab__link')) {
				const id = e.target.dataset.for;

				document.querySelector('.tab__link.is-active').classList.remove('is-active');
				
				[...screens].forEach((el) => {
					if (el.dataset.id === id) {
						el.style.display = 'block';
						e.target.classList.add('is-active');
					} else {
						el.style.display = 'none';						
					}					
				});

			}
			e.preventDefault();
		});
	}	
});