import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import response from "./js/response";
import * as responses from "./js/response";

const form = document.querySelector('.form');
const btn = document.querySelector('.search-btn');
const gallery = document.querySelector(".gallery");


form.addEventListener("submit", (event) => {
    event.preventDefault()
    const searchRequest = event.target.elements.searchRequest.value.trim();
    if (searchRequest === '') {
        iziToast.show({
            class: 'toast-message',
            message: `Fill search field please`,
            messageColor: '#fff',
            backgroundColor: '#59A10D',
            border: '2px solid #B5EA7C',
            position: 'topRight',
        })
        return
    }
    gallery.innerHTML = '<span class="loader">Loading</span>';
    console.log(searchRequest)
        
    fetchImages(searchRequest)
        .then((images) => renderImages(images))
        .catch((error) => console.log(error));
});

function fetchImages(searchRequest) {
    // return getResponse()
    return fetch(buildRequestURL(searchRequest)).then(
        (response) => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        console.log(response)
        return response.json().hits;
        }
    );
}

function getResponse() {
    return Promise.resolve(responses.empty.hits)
}

function buildRequestURL(q) {
    const host = 'https://pixabay.com/api/'
    const key = '46357253-cea0b9d68f62a9d404cc68056';
    let image_type = 'photo';
    let orientation = 'horizontal';
    let safesearch = true;
    const searchParams = new URLSearchParams({
        key,
        q,
        image_type,
        orientation,
        safesearch
    })
    return `${host}?${searchParams}`

}

function renderImages(images) {
    console.log(images)
    if (images.length === 0) {
        iziToast.show({
            class: 'toast-message',
            message: 'Sorry, there are no images matching your search query. Please try again!',
            messageColor: '#fff',
            iconUrl: 'img/error-icon.svg',
            iconColor: '#fff',
            backgroundColor: '#EF4040',
            border: '2px solid #FFBEBE',
            position: 'topRight',
        })
        return
    }
    const markup = images.reduce((string, image) =>  {
        return `${string}
        <li class="gallery-item">
            <a class="gallery-link" href="${image.largeImageURL}">
                <img 
                class="gallery-image"
                src="${image.webformatURL}"
                alt="${image.tags}"
                />
            </a>
        </li>`
    }, '');
    
    gallery.innerHTML = markup;

    new SimpleLightbox('.gallery-link', {captionsData: 'alt', overlayOpacity: 0.5});
}

// const markup = images.map((image) => {
//     return `<li>
//         <p><b>Name</b>: ${image.name}</p>
//         <p><b>Email</b>: ${image.email}</p>
//         <p><b>Company</b>: ${image.company.name}</p>
//         </li>`;
//     })
//     .join("");

// gallery.innerHTML = markup;
