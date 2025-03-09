import React from 'react';

function ListaCapitulos({ mangas, selecionarCapitulo }) {
    return (
        <div>
            <h2>Capitulo 1108 em diante ... </h2>
            <ul>
                {mangas.map((manga, index) => (
                    <li className='voltarParaLista' key={manga.id}>
                        <button  onClick={() => selecionarCapitulo(index)}>
                            {manga.titulo}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListaCapitulos;
