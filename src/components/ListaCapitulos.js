import React from 'react';

function ListaCapitulos({ mangas, selecionarCapitulo }) {
    return (
        <div>
            <h2>Escolha um capítulo</h2>
            <ul>
                {mangas.map((manga, index) => (
                    <li key={manga.id}>
                        <button onClick={() => selecionarCapitulo(index)}>
                            {manga.titulo}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListaCapitulos;
