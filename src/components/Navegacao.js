import React from 'react';

function Navegacao({ capituloAtual, totalCapitulos, proximoCapitulo, capituloAnterior }) {
    
    const handleProximo = () => {
        if (capituloAtual < totalCapitulos - 1) {
            proximoCapitulo();
        } else {
            alert("🚨 Último capítulo disponível!");
        }
    };

    const handleAnterior = () => {
        if (capituloAtual > 0) {
            capituloAnterior();
        } else {
            alert("🚨 Primeiro capítulo!");
        }
    };
    
    return (
        <div className="navegacao">
            <button onClick={handleProximo} disabled={capituloAtual === totalCapitulos - 1}>
                Capítulo Anterior 
            </button>
            <button onClick={handleAnterior } disabled={capituloAtual === 0}>
                Próximo Capítulo
            </button>
        </div>
    );
}

export default Navegacao;

