function raf(fn) {
  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      fn();
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');  
  const btn = document.querySelector('.mobile-nav-btn');
  const nav = document.querySelector('.mobile-nav');

  // Навигация (меню)
  btn.addEventListener('click', (e) => {
    if (!btn.classList.contains('is-active')) {
      btn.classList.add('is-active');
      body.style.overflow = 'hidden';
      raf(() => {
        nav.classList.add('is-active');
      });
    } else {
      nav.classList.remove('is-active');
      body.style.overflow = 'visible';
      nav.addEventListener('transitionend', () => {
        btn.classList.remove('is-active');        
      }, {once: true});     
    }
    e.preventDefault();
  });  

  // Обработка Ресайзов документов
  window.addEventListener('resize', () => {
    if (btn.classList.contains('is-active')) {
      nav.classList.remove('is-active');
      body.style.overflow = 'visible';
      nav.addEventListener('transitionend', () => {
        btn.classList.remove('is-active');        
      }, {once: true});
    }    
  });

  // Обработка кликов по документы
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.mobile-nav-btn')) {
      if (btn.classList.contains('is-active')) {
        nav.classList.remove('is-active');
        nav.addEventListener('transitionend', () => {
          btn.classList.remove('is-active');
          body.style.overflow = 'visible';          
        }, {once: true});
      }      
    }
  });


});
