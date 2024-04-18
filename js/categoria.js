const iniciarSlide = () => {
    const listaDeImagens = document.querySelector(".carrossel_categorias .categorias");
    const botoesDeSlide = document.querySelectorAll(".carrossel_categorias .botao-slide");
    const barraDeRolagem = document.querySelector(".container_categorias .categoria_barra-slide");
    const cursorBarraDeRolagem = barraDeRolagem.querySelector(".barra-slide_cursor");
    const limiteDeRolagem = listaDeImagens.scrollWidth - listaDeImagens.clientWidth;

    cursorBarraDeRolagem.addEventListener("mousedown", (evento) => {
        const posicaoInicialX = evento.clientX;
        const posicaoDoCursor = cursorBarraDeRolagem.offsetLeft;

        const movimentoSelecaoDoMouse = (evento) => {
            const posicaoX = evento.clientX - posicaoInicialX;
            const novaPosicaoDoCursor = posicaoDoCursor + posicaoX;
            const limiteDoCursor = barraDeRolagem.getBoundingClientRect().width - cursorBarraDeRolagem.offsetWidth;

            const limiteDeRolagemBarra = Math.max(0, Math.min(limiteDoCursor, novaPosicaoDoCursor));
            const posicaoDaBarra = (limiteDeRolagemBarra / limiteDoCursor) * limiteDeRolagem;

            cursorBarraDeRolagem.style.left = `${limiteDeRolagemBarra}px`;
            listaDeImagens.scrollLeft = posicaoDaBarra;
        }

        const movimentoAoSoltarOMouse = () => {
            document.removeEventListener("mousemove", movimentoSelecaoDoMouse);
            document.removeEventListener("mouseup", movimentoAoSoltarOMouse);
        }

        document.addEventListener("mousemove", movimentoSelecaoDoMouse);
        document.addEventListener("mouseup", movimentoAoSoltarOMouse);
    })

    botoesDeSlide.forEach(button => {
        button.addEventListener("click", () => {
            const direcao = button.id === "slide-aterior" ? -1 : 1;
            const rolagem = listaDeImagens.clientWidth * direcao;
            listaDeImagens.scrollBy({ left: rolagem, behavior: "smooth" });
        });
    });

    const visualizacaoDosBotoes = () => {
        botoesDeSlide[0].style.display = listaDeImagens.scrollLeft <= 0 ? "none" : "block"; 
        botoesDeSlide[1].style.display = listaDeImagens.scrollLeft >= limiteDeRolagem ? "none" : "block";
    }

    const movimentoDaBarraDeRolagem = () => {
        const posicaoDaBarraDeRolagem = listaDeImagens.scrollLeft;
        const posicaoDoCursorBarraDeRolalgem = (posicaoDaBarraDeRolagem / limiteDeRolagem) * (barraDeRolagem.clientWidth - cursorBarraDeRolagem.offsetWidth);
        cursorBarraDeRolagem.style.left = `${posicaoDoCursorBarraDeRolalgem}px`;
    }

    listaDeImagens.addEventListener("scroll", () => {
        visualizacaoDosBotoes();
        movimentoDaBarraDeRolagem();
    })
}

window.addEventListener("load", iniciarSlide)