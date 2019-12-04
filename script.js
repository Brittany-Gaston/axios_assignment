import Axios from "axios"

document.addEventListener("DOMContentLoaded", () => {
const drawCards = async () => {
    try {
        let draw = await Axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=5`);
        let deck_id = response.data.deck_id;
    } finally {
    }   
}
})
    const displayCards = (data) => {
        let image = document.querySelector("img");
        if(image) {
            image.parentNode.removeChild(image);
        }
        let image = document.createElement("img")
        image.src = data.message
        document.body.appendChild("image") 
    }