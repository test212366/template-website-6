(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header__active');
        } else {
            header.classList.remove('header__active');
        }
    };
}());
document.addEventListener('DOMContentLoaded', () => {
    const body = document.body
    function parser(element) {
        const Anodes = element.childNodes
        Anodes.forEach(item => {
            if (item.nodeName.match(/^H\d/)) {
                console.log(item)
                return parser(item)
            }
            parser(item)
        })
    }
    parser(body)
})
// можно фильтровать список фильтрации NODENAME исп