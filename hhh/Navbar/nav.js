let links = document.querySelectorAll('.header .navbar a');
links.forEach(target => {

    target.onclick = function(e){

        e.preventDefault();
        let href = target.getAttribute('href');
        let offetTop = document.querySelector(href).offsetTop;

        scroll({
            top : offetTop,
            behavior : "smooth"
        });
    };
})



