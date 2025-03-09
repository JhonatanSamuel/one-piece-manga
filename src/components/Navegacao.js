import React from 'react';

function Navegacao({ capituloAtual, totalCapitulos, proximoCapitulo, capituloAnterior }) {
    return (
        <div className="navegacao">
            <button onClick={capituloAnterior} disabled={capituloAtual === 0}>
                Capítulo Anterior
            </button>
            <button onClick={proximoCapitulo} disabled={capituloAtual === totalCapitulos - 1}>
                Próximo Capítulo
            </button>
        </div>
    );
}

export default Navegacao;
