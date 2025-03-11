import React, { useEffect, useState } from 'react';
import './App.css';
import Capitulo from './components/Capitulo';
import Navegacao from './components/Navegacao';
import ListaCapitulos from './components/ListaCapitulos';



function App() {
    const [mangas, setMangas] = useState([]);
    const [capituloAtual, setCapituloAtual] = useState(0);
    const [mostrarLeitor, setMostrarLeitor] = useState(false); // Estado para controlar qual tela mostrar

    const apiUrl = "https://manga-api-production-6596.up.railway.app/api/mangas";

    useEffect(() => {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => setMangas(data))
            .catch(err => console.error('Erro ao buscar mangás:', err));
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [capituloAtual]);

    if (mangas.length === 0) {
        return <div className="app-container">Carregando capítulos...</div>;
    }

    const selecionarCapitulo = (index) => {
        setCapituloAtual(index);
        setMostrarLeitor(true); // Mostra o leitor quando o capítulo for selecionado
    };

    const proximoCapitulo = () => {
        if (capituloAtual < mangas.length - 1) {
            setCapituloAtual(capituloAtual + 1);
        }
    };

    const capituloAnterior = () => {
        if (capituloAtual > 0) {
            setCapituloAtual(capituloAtual - 1);
        }
    };

    return (
        <div className="app-container">
            <h1>One Piece</h1>

            {mostrarLeitor ? (
                <>
                    <Capitulo manga={mangas[capituloAtual]} />

                    <img className='capa' src='./img/onepiece-logo.jpg' alt='img-capa' />
                    
                    <button className='voltarParaLista' onClick={() => setMostrarLeitor(false)}>
                        Voltar para lista de capítulos
                    </button>

                    <Navegacao
                        capituloAtual={capituloAtual}
                        totalCapitulos={mangas.length}
                        
                        
                        capituloAnterior={proximoCapitulo} 
                        proximoCapitulo={capituloAnterior}
                    />
                </>
            ) : (
                <ListaCapitulos mangas={mangas} selecionarCapitulo={selecionarCapitulo} />
            )}
            
            <div className="espaco-final"></div>
        </div>
    );
}

export default App;
