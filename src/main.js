import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import fetchImages from "./js/pixabay-api";
import renderImages from "./js/render-functions";
import {showMessage} from "./js/render-functions";

const form = document.querySelector('.form');
// const btn = document.querySelector('.search-btn');
const galleryNode = document.querySelector(".gallery");


form.addEventListener("submit", (event) => {
    event.preventDefault()
    const searchRequest = event.target.elements.searchRequest.value.trim();
    if (searchRequest === '') {
        showMessage('Fill search field please')
        return
    }
    galleryNode.innerHTML = '<span class="loader">Loading</span>';
        
    fetchImages(searchRequest)
        .then((images) => renderImages(images.hits))
        .catch((error) => showMessage(error, "error"));
});
