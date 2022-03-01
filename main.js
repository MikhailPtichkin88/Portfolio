
document.addEventListener('DOMContentLoaded', () => {
    
    const menuBtn = document.querySelector('.menu__btn'),
          menuList = document.querySelector('.menu__list'),
          menuLines = document.querySelectorAll('.menu__list-item'),
          scrollLinks = document.querySelectorAll('a[href^="#"]');
         

    menuBtn.addEventListener('click', () =>{
        menuBtn.classList.toggle('menu__btn--active');
        menuList.classList.toggle('menu__list--active');
    });

    menuLines.forEach(line => {
        line.addEventListener('click', () => {
            menuBtn.classList.remove('menu__btn--active');
            menuList.classList.remove('menu__list--active');
        });
    });


    if (document.documentElement.clientWidth < 550 ) {
        
        menuList.insertAdjacentHTML('beforeend', `
        <li class="menu__lang">
            <a class="menu__lang-link" href="index.html">RU
             </a> | <a class="menu__lang-link"  href="indexEng.html"> ENG</a>
        </li>
        `);  
          
       const aboutLang = document.querySelectorAll('.about__language'),
             langLinks = document.querySelectorAll('.menu__lang-link');

        aboutLang.forEach((item, i) => {
            if(item.classList.contains('about__language--active')) {
                langLinks.forEach(item => {
                    item.classList.remove('menu__lang-link--active');
                });
                langLinks[i].classList.add('menu__lang-link--active');
            }
        });
    }
   
    
    scrollLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const id = link.getAttribute('href');

            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
});