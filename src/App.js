import palavras from './palavras';
import Jogo from './components/Jogo'
import Letras from './components/Letras'
import { useState } from 'react';
function App() {
  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let [Imagem, setImagem] = useState("./assets/forca0.png")


  return (
    
    <>
      <div className="jogo">
        <Jogo
          image={Imagem}
        />
      </div>   
          
      <div className="letras">
        <Letras
          alfabeto={alfabeto} />
      </div>
    </>

  );
}

export default App;
