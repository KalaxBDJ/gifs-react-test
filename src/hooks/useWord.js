import React from "react";

const useWord = () => {
    const [word, setWord] = React.useState("");
  
    const fetchNewWord = () => {
      fetch("https://random-word-api.herokuapp.com/word")
        .then((res) => res.json())
        .then((data) => {
          setWord(data[0]);
        });
    };
  
    React.useEffect(() => {
      fetchNewWord();
    }, []);
  
    return { word, fetchNewWord };
  };
  

export { useWord };
