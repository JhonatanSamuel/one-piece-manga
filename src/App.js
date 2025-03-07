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
            <h1>Leitor de Mangás</h1>

            {mostrarLeitor ? (
                <>
                    <Capitulo manga={mangas[capituloAtual]} />
                    <Navegacao
                        capituloAtual={capituloAtual}
                        totalCapitulos={mangas.length}
                        proximoCapitulo={proximoCapitulo}
                        capituloAnterior={capituloAnterior}
                    />
                    <button onClick={() => setMostrarLeitor(false)}>
                        Voltar para lista de capítulos
                    </button>
                </>
            ) : (
                <ListaCapitulos mangas={mangas} selecionarCapitulo={selecionarCapitulo} />
            )}
        </div>
    );
}

export default App;
