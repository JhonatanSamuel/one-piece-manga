import React from 'react';

function Navegacao({ capituloAtual, totalCapitulos, proximoCapitulo, capituloAnterior }) {
    return (
        <div className="navegacao">
            <button onClick={capituloAnterior} disabled={capituloAtual === totalCapitulos - 1}>
                Capítulo Anterior  <alert> Primeiro Capítulo </alert>
            </button>
            <button onClick={proximoCapitulo} disabled={capituloAtual === 0}>
                Próximo Capítulo  <alert> Último Capítulo </alert>
            </button>
        </div>
    );
}

export default Navegacao;

