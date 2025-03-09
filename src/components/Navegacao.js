import React from 'react';

function Navegacao({ capituloAtual, totalCapitulos, proximoCapitulo, capituloAnterior }) {
    return (
        <div className="navegacao">
           if(<button  onClick={capituloAnterior} disabled={capituloAtual === totalCapitulos - 1} >
                Capítulo Anterior  
            </button>) {
                <alert> Primeiro Capítulo </alert>
            } if(<button onClick={proximoCapitulo} disabled={capituloAtual === 0}>
                Próximo Capítulo  <alert> Último Capítulo </alert>
            </button>) {
                <alert> Último Capítulo </alert>
            }
            
            
        </div>
    );
}

export default Navegacao;

