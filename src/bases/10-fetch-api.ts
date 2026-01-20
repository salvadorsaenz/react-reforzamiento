import type { GiphyRandomResponse } from "../data/giphy.response";

const API_KEY = '0WZvmZ3Hm5OoH8vuh7nqWFTUgs9KUl0G';

const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);

const createImageInsideDOM = (url: string) => {
    const imgElement = document.createElement('img');
    imgElement.src = url;

    document.body.append(imgElement);
}

myRequest
    // .then( (response) => {
    //     response.json().then((data) => {
    //         console.log(data);
            
    //     })
    // } )
    .then((response) => response.json())
    .then(({data}: GiphyRandomResponse) => {

        const imageUrl = data.images.original.url;

        createImageInsideDOM(imageUrl);
        
        
    })
    .catch((error) => {
        console.error(error);
        
    })
    ;