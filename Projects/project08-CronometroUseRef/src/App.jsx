import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState("");
  const [timeLeft, setTimeLeft] = useState(10);
  const [isFinished, setIsFinished] = useState(false);

  const inputRef = useRef(null);

  const timerRef = useRef(null);

  const hasStarted = useRef(null);

  const focusInput = () => {
    inputRef.current.focus()
  };

  useEffect(() => {
    focusInput();
  });

  function handleInputChange(e) {
    const inputValue = e.target.value;
    setText(inputValue);

    if (!hasStarted.current && inputValue.length > 0) {
      hasStarted.current = true;
      startTimer();
    }
  }

  function startTimer() {
    timerRef.current = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timerRef.current);
          setIsFinished(true);
          return 0;
        }
        return prevTime - 1
      });
    }, 1000)
  }

  function handleReset() {
    clearInterval(timerRef.current);
    timerRef.current = null;
    hasStarted.current = false;
    setText("");
    setTimeLeft(10);
    setIsFinished(false);
  }

  return(
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Typing Test (10 seg)</h1>
      <h2 style={{ color: timeLeft < 4 ? "red" : "black" }}>
        Tiempo restante: {timeLeft}s
      </h2>

      <textarea
        ref={inputRef}
        value={text}
        onChange={handleInputChange}
        disabled={isFinished}
        placeholder="¡Empieza a escribir para activar el cronómetro!"
        rows="5"
        style={{ width: "100%", fontSize: "1.2rem" }}
      />

      {isFinished && (
        <div style={{ marginTop: "20px" }}>
          <h3>¡Tiempo agotado!</h3>
          <p>
            Has escrito <strong>{text.length}</strong> caracteres.
          </p>
          <p>
            Velocidad:{" "}
            <strong>{(text.length / 5 / (10 / 60)).toFixed(0)}</strong> PPM
            (Palabras por minuto aprox.)
          </p>
        </div>
      )}

      <div style={{ marginTop: "20px" }}>
        <button onClick={handleReset}>Reiniciar Juego</button>
      </div>
    </div>
  );
}

export default App
