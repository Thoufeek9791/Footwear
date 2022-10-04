const darkTheme = document.querySelector('.fa-circle-half-stroke')
const bodyEl = document.body.classList;
// console.log(darkTheme);

darkTheme.addEventListener('click', () => {
    const result = document.body.classList.toggle('dark-theme');
    if(result) {
        darkTheme.style.color = '#fff'
        const menuEl = document.querySelectorAll('#menuList li a')
        console.log(menuEl);
        menuEl.forEach((menu) => {
            menu.classList.add('dark-theme-menu')
        })

        document.querySelector('h1').style.color = '#fff';
        document.querySelector('h2').style.color = '#fff'
        document.querySelector('.fa-cart-shopping').style.color = '#fff'
        document.querySelector('.fa-circle-up ').style.color = '#fff'

        const footerEl = document.querySelector('footer');
        footerEl.style.backgroundColor = '#fff'
        const footerText = document.querySelectorAll('.dark');
        footerText.forEach((element) => {
            console.log(element);
            element.style.color = '#000'
        })

    }
    else {

        const menuEl = document.querySelectorAll('#menuList li a')
        console.log(menuEl);
        menuEl.forEach((menu) => {
            menu.classList.remove('dark-theme-menu')
        })

        document.querySelector('h1').style.color = '#000';
        document.querySelector('h2').style.color = '#000'
        document.querySelector('.fa-cart-shopping').style.color = '#000'
        document.querySelector('.fa-circle-up ').style.color = '#000'

        darkTheme.style.color = '#000'
        const footerEl = document.querySelector('footer');
        footerEl.style.backgroundColor = '#000'
        const footerText = document.querySelectorAll('.dark');
        footerText.forEach((element) => {
            console.log(element);
            element.style.color = '#fff'
        })
    }
})