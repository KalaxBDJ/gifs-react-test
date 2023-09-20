import React, { useEffect } from "react";
import { useWord } from "./hooks/useWord";
import { useGif } from "./hooks/useGif";
import './Gifs.css';

function Gifs() {

    const {word, fetchNewWord} = useWord();
    const [gif] = useGif(word);

    const reloadGif = () => {
        fetchNewWord();
    };

    return (
        <div className="container">
            {word && <p>La palabra es: <span>{word}</span></p>}
            {gif && (
                <img src={gif} alt="gif"></img>
            )}
            <button onClick={reloadGif}>
                Cambiar palabra
            </button>

        </div>
    );
}

export { Gifs };