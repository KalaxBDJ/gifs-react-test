import React from "react";

const GIF_API_KEY = "091zVqBEGzQwuRI2Iksa37zCF0Rd1V6j";

const useGif = (word) => {
  const [gif, setGif] = React.useState("");

  React.useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${GIF_API_KEY}&q=${word}&limit=1&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
    )
      .then((res) => res.json())
      .then((resp) => {
        let gif = resp.data[0];
        if (gif) {
          setGif(gif.images.original.url);
        } else {
            setGif('');
        }
      });
  }, [word]);

  return [gif];
};

export { useGif };
