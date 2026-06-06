document.querySelectorAll('.menu a').forEach(link => {

    link.addEventListener('click', e => {

        e.preventDefault();

        const target =
            document.querySelector(
                link.getAttribute('href')
            );

        if (target) {

            target.scrollIntoView({
                behavior: 'smooth'
            });

        }

    });

});
