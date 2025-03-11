import React, { useState, useEffect } from 'react';


function Capitulo({ manga }) {
    // Estado para armazenar a imagem que está em zoom
    const [zoomedImage, setZoomedImage] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0); // Rola a página para o topo sempre que um novo capítulo for renderizado
    }, [manga]);
    

    const handleImageClick = (index) => {
        // Se a imagem clicada já estiver em zoom, desfaz o zoom
        setZoomedImage(zoomedImage === index ? null : index);
    };

    

    return (
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
    );
}

export default Capitulo;
