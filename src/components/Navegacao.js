import React from 'react';

function Navegacao({ capituloAtual, totalCapitulos, proximoCapitulo, capituloAnterior }) {
    return (
        <div className="navegacao">
            <button onClick={capituloAnterior} disabled={capituloAtual === totalCapitulos - 1}>
                Capítulo Anterior
            </button>
            <button onClick={proximoCapitulo} disabled={capituloAtual === 0}>
                Próximo Capítulo
            </button>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                Voltar ao topo
            </button>
        </div>
    );
}

export default Navegacao;

