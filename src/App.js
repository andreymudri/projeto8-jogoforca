import palavras from './palavras';
import Jogo from './components/Jogo'
import Letras from './components/Letras'
import { useState } from 'react';
import './styles/reset.css'
import './styles/style.css'
import imagens from './components/imagens';
function App() {
  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  let [Imagem, setImagem] = useState(imagens[0])
  let [Erros, setErros] = useState(0)
  let [palavra, setPalavra] = useState("")
  let [Pause, setPause] = useState(true)
  let [ListaLetras, setListaLetras] = useState([])
  let [GameResult, setGameResult] = useState("");


  function ChooseWord() {
    setPause(false);
    setPalavra(palavras[Math.floor(Math.random() * palavras.length)]);
    setListaLetras([]);
    setErros(0);
    setImagem(imagens[0]);
    setGameResult("")
  }
  function chooseLetter(letra) {
    if (Pause || ListaLetras.includes(letra)) return;
    setListaLetras(ListaLetras => [...ListaLetras, letra]);
    setTimeout(checkGameWin(),100)
    if (!palavra.includes(letra)) {
      let numErros = Erros + 1;
      setErros(numErros)
      setImagem(imagens[numErros])
      checkGameOver(numErros);
    }
  }
  function checkGameOver() {
    if (Erros === 6) {
      setPause(true);
      setImagem(imagens[6])
      setGameResult("lost");
    }
  }
  
  function checkGameWin() {
    const letrasPalavra = palavra.split("");
    const letrasCertas = letrasPalavra.filter(letra => ListaLetras.includes(letra));
    if (letrasCertas.length === letrasPalavra.length) {
      setPause(true);
      setGameResult("won");
    }
  }

  return (
    
    <>
      <div className="jogo">
        <Jogo
          GameResult={GameResult}
          image={Imagem}
          palavra={palavra}
          ChooseWord={ChooseWord}
          chooseLetter={chooseLetter}
          ListaLetras={ListaLetras}
        />
      </div>   
          
      <div className="letras">
        <Letras
          alfabeto={alfabeto}
          chooseLetter={(letra) => chooseLetter(letra)}
          ListaLetras={ListaLetras}
        />
      </div>
    </>

  );
}

export default App;
