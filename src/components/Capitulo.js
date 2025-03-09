import React, { useState } from 'react';

function Capitulo({ manga, proximoCapitulo, capituloAnterior }) {
    // Estado para armazenar a imagem que está em zoom
    const [zoomedImage, setZoomedImage] = useState(null);

    const handleImageClick = (index) => {
        // Se a imagem clicada já estiver em zoom, desfaz o zoom
        setZoomedImage(zoomedImage === index ? null : index);
    };

    return (
       <div className="capitulo-container">
            <div className="capitulo-imagens">
                {manga.imagens.map((imagem, index) => (
                    <img
                        key={index}
                        src={imagem}
                        alt={`Capítulo ${manga.id} - Imagem ${index + 1}`}
                        className={zoomedImage === index ? 'zoom' : ''}
                        onClick={() => handleImageClick(index)} // Evento de clique para aplicar o zoom
                    />
                ))}
            </div>

            <div className="navegacao">
                <button onClick={capituloAnterior} disabled={!capituloAnterior}>
                    Capítulo anterior
                </button>
                <button onClick={proximoCapitulo} disabled={!proximoCapitulo}>
                    Próximo capítulo
                </button>    
            </div>
       </div> 
    );
}

export default Capitulo;
