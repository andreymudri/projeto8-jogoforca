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

  function ChooseWord() {
    setPause(false);
    setPalavra(palavras[Math.floor(Math.random() * palavras.length)]);
    setListaLetras([]);
    setErros(0);
    setImagem(imagens[0]);
  }
  function chooseLetter(letra) {

    if (Pause || ListaLetras.includes(letra)) return;
    setListaLetras(ListaLetras => [...ListaLetras, letra]);
    checkGameWin();
    checkGameOver();
    if (!palavra.includes(letra)) {
      setErros(Erros + 1)
      setImagem(imagens[Erros])
    }
  }
  function checkGameOver() {
    if (Erros > 6) {
      alert("Você perdeu!")
    setPause(true);
  }
  }
  function checkGameWin() {
    const letrasPalavra = palavra.split("");
    const letrasCertas = letrasPalavra.filter(letra => ListaLetras.includes(letra));
    if (letrasCertas.length === letrasPalavra.length) {
      alert("Você venceu!")
      setPause(true);
    }
  }

  return (
    
    <>
      <div className="jogo">
        <Jogo
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
