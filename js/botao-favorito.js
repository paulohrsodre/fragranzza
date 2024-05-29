document.addEventListener('DOMContentLoaded', function () {
    const botoesFavorito = document.querySelectorAll('.destaques-favorito');

    botoesFavorito.forEach(botaoFavorito => {
        const favoritoDesmarcado = botaoFavorito.querySelector('.favorito-desmarcado');
        const favoritoMarcado = botaoFavorito.querySelector('.favorito-marcado');

        let isFavorite = false;

        botaoFavorito.addEventListener('click', () => {
            isFavorite = !isFavorite;
            if (isFavorite) {
                favoritoDesmarcado.style.display = 'none';
                favoritoMarcado.style.display = 'inline';
                botaoFavorito.classList.add('marcado');
            } else {
                favoritoDesmarcado.style.display = 'inline';
                favoritoMarcado.style.display = 'none';
                botaoFavorito.classList.remove('marcado');
            }
        });
    });
})



