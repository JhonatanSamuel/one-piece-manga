import React from 'react';

function Navegacao({ capituloAtual, totalCapitulos, proximoCapitulo, capituloAnterior }) {
    return (
        <div className="navegacao">
            <button 
                onClick={() => { capituloAnterior(); window.scrollTo(0, 0); }}  
                disabled={capituloAtual === totalCapitulos - 1 } 
            >
                Capítulo Anterior
            </button>

            <button 
                onClick={() => { proximoCapitulo(); window.scrollTo(0, 0); }}  
                disabled={capituloAtual === 0} 
            >
                Próximo Capítulo
            </button>
        </div>
    );
}

export default Navegacao;