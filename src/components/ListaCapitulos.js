import React from 'react';

function ListaCapitulos({ mangas, selecionarCapitulo }) {
    return (
        <div>
            <img className='logo' src='./img/luffy-logo.jpg'  alt='img-logo' />
            <img className='capa' src='./img/onepiece-logo.jpg' alt='img-capa' />

            <h2>Capitulo 1108 em diante ... </h2>
            <ul>
                {mangas.map((manga, index) => (
                    <li key={manga.id}>
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
