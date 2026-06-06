document.addEventListener('DOMContentLoaded', () => {

    const topBtn = document.querySelector('.scroll-top');

    if(topBtn){

        window.addEventListener('scroll', () => {

            if(window.scrollY > 300){
                topBtn.style.display = 'block';
            }else{
                topBtn.style.display = 'none';
            }

        });

        topBtn.addEventListener('click', (e) => {
            e.preventDefault();

            window.scrollTo({
                top:0,
                behavior:'smooth'
            });
        });

    }

});
