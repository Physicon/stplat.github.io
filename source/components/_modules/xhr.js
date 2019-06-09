export default function xhr(param = '') {
	const itemList = document.querySelector('.showcase__list');	
	const query = {'data': ''};
	const xhr = new XMLHttpRequest();

	xhr.open('POST', 'https://krapipl.imumk.ru:8082/api/mobilev1/update', true);
	xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
	xhr.send(JSON.stringify(query));	

	xhr.onreadystatechange = () => {
		if (xhr.readyState === 4 && xhr.status === 200) {
			const response = JSON.parse(xhr.responseText);
			let items = response.items;	

			if (param) {
				if (param.subj) {
					items = items.filter((el) => {						
						return el.subject === param.subj;
						
					});
				}

				if (param.genre) {	
					items = items.filter((el) => {						
						return el.genre === param.genre;						
					});
				}

				if (param.grade) {	
					items = items.filter((el) => {						
						return el.grade === param.grade;						
					});
				}				

				if (param.search) {	
					items = items.filter((el) => {											
						return ~el.title.indexOf(param.search);						
					});
				}

				console.log(param);					
			}			

			itemList.innerHTML = '';

			for (let key in items) {
				const item = document.createElement('div');
				item.className = 'showcase-item';					

				item.innerHTML = `<div class="showcase-item__image"><img src="https://www.imumk.ru/svc/coursecover/${items[key].courseId}" alt=""></div>`;
				item.innerHTML += `<div class="showcase-item__info">
				<p class="showcase-item__title">${items[key].subject}</p>
				<p class="showcase-item__grade">${items[key].grade} класс</p>
				<p class="showcase-item__genre">${items[key].genre}</p>
				<p class="showcase-item__meta">
				<a href="${items[key].shopUrl}">Подробнее</a>
				</p>
				<p class="showcase-item__controls">
				<a href="" class="showcase-btn">${(param.currency === 'Рубли') ? items[key].price : items[key].priceBonus} руб.</a>
				</p>
				</div>`;					

				itemList.appendChild(item);
			}						
		}
	};
}