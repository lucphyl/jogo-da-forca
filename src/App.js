import { setSelectionRange } from "@testing-library/user-event/dist/utils"
import React, {useState} from "react"
import forca0 from "./assets/forca0.png"
import forca1 from "./assets/forca1.png"
import forca2 from "./assets/forca2.png"
import forca3 from "./assets/forca3.png"
import forca4 from "./assets/forca4.png"
import forca5 from "./assets/forca5.png"
import forca6 from "./assets/forca6.png"
import Chute from "./components/Chute"
import Jogo from "./components/Jogo"
import Letras from "./components/Letras"
import palavras from "./palavras"

//arrays de letras e de imagens:
const imagens = [forca0, forca1, forca2, forca3, forca4, forca5, forca6]
const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "w", "y", "z"]


function App() {

  // numero de erros do usuario:
  const [error, setError] = useState(0)

  //palavra sorteada para o jogo:
  const [Sorted, setSorted] = useState([])
  const [gameWord, setGameWord] = useState([])

  //input desabilitado:
  const [disableInput, setDisableInput] = useState(true)

  //letras já utilizadas pelo usuario:
  const [letter, setUsedLetter] = useState(alfabeto)
  
  //palpite de palavra:
  const [palpite, setpalpite] = useState("")

  //transformar a palavra em sem acento/cedilha:
  const [accent,setAccent] = useState("")

  //set da cor da palavra:
  const [colorWord, setColorWord] = useState ("preto")



  //exibe resultado do jogo:
  function result (){
    setUsedLetter(alfabeto)
    setDisableInput(true)
    setGameWord(Sorted)
  }



  //começar jogo:
  function startGame(){

    setDisableInput(false)
    randomize()
    setUsedLetter([])
    setError(0)
    setpalpite("")
    setColorWord("preto")

  }

  //sortear palavra:
  function randomize (){

    let p = Math.floor(Math.random() * palavras.length)
    let sorted = palavras[p]
    let arrayP = sorted.split("")
    setSorted(arrayP)

    let underline = []
    arrayP.forEach((letra) => underline.push(" _"))
    setGameWord(underline)

    let word = sorted.replace("ç", "c").replace("á", "a").replace("à","a").replace("ã","a").replace("â","a").replace("é","e").replace("è","e").replace("ẽ","e").replace("ê","e").replace("í","i").replace("î", "i").replace("ó","o").replace("ô","o").replace("ô", "o").replace("ú","u")
    setAccent(word)

  }

  //desabilitar letras clicadas:
  function clickLetter (l){

    setUsedLetter([...letter, l])

    if(accent.includes(l)){
      correct(l)
    } else {
      errorLetter(l)
    }
  }

  // compara as letras:
  function correct(l){
    let newWord = [...gameWord]
    Sorted.forEach((letra, i) =>{
      if (accent[i] === l){
        newWord[i] = letra
      }
    })
    setGameWord(newWord)
    if (!newWord.includes(" _")){
      setColorWord("verde")
      result()
    }

  }

  function errorLetter(l){
    let newError = error + 1
    setError(newError)

    if (newError===6){
      result()
      setColorWord("vermelho")
    }
  
  }

  //chutar palavra:
  function MakeGuess(){
    let sortedString = ""
    Sorted.forEach((letra) => sortedString += letra)
    if (palpite === sortedString){
      setColorWord("verde")
    } else {
      setColorWord("vermelho")
      setError(6)
    }
    result()
  }

 //povoar tela:
  return (
    <div className="container-tela">
      
          <Jogo imagens={imagens} error={error} startGame={startGame} colorWord={colorWord} gameWord={gameWord}/>
      
          <Letras clickLetter={clickLetter} letter={letter} alfabeto={alfabeto}/>

          <Chute disableInput={disableInput} MakeGuess={MakeGuess} setpalpite={setpalpite} palpite={palpite}/>
    </div>
    

  );
}

export default App;




// botão reiniciar chama a função "startgame" e setError(0)