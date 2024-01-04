import './App.css'
import {useState} from "react";

let h4Value = "";
let tries = 0;
let answer = Math.floor(Math.random() * 100) + 1;
function App() {

    const [inputValue, setInputValue ] = useState('');
    const [h4Value, setH4Value] = useState('');


    function play() {
        let guess = Number(inputValue)
        console.log("FUNC PLAY", answer, guess)

        if (
            isNaN(Number(inputValue))) {
            setH4Value(`Insira um número válido`);
        }
        else if (guess <= 0 || guess > 100) {
            setH4Value("Insira um número entre 1 e 100");
        } else {
            tries++;
            if (guess < answer) {
                setH4Value("Errou, a resposta correta é um numero maior!");
            } else if ( guess > answer) {
                setH4Value("Errou, a resposta correta é um numero menor!");
            }
            else {
                setH4Value(`Parabéns! Você acertou na sua ${tries}ª tentativa. O número correto é ${answer}. `)
            }

        }
    }

    return (
        <>
            <div>
                <h1>Jogo da Adivinhação</h1>
                <h2>Tente encontrar o número correto entre 1 a 100</h2>
                <h3> Tentativas: {tries}</h3>
                <h4>{h4Value}</h4>
                <label>
                    <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                </label>
                <br/>
                <button type="submit" onClick={()=>play()}> Jogar!
                </button>
            </div>

        </>
    )
}

export default App
