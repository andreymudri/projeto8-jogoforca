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
  let [Palavra, setPalavra] = useState("")
  let [Pause, setPause] = useState()
  let [ListaLetras, setListaLetras] = ([])
  function chooseWord() {
    setPause(false);
    setPalavra(palavras[Math.floor(Math.random() * palavras.length)]);
    setErros(0);
  }
  function chooseLetter(letra) {
    if (Pause || alfabeto.includes(letra)) return;
    setListaLetras(ListaLetras => [...ListaLetras, letra]);
    if (!Palavra.includes(letra)) {
      setErros(Erros + 1)
      setImagem(imagens[{Erros}])
    }
  }
  

  return (
    
    <>
      <div className="jogo">
        <Jogo
          image={Imagem}
          palavra={Palavra}
          chooseWord={chooseWord}
          chooseLetter={chooseLetter}
        />
      </div>   
          
      <div className="letras">
        <Letras
          alfabeto={alfabeto}
          chooseLetter={(l) => chooseLetter(l)}
          ListaLetras={ListaLetras}
        />
      </div>
    </>

  );
}

export default App;
