import{i,S as n}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();function d(t){return fetch(f(t)).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})}function f(t){const s="https://pixabay.com/api/",l="46357253-cea0b9d68f62a9d404cc68056";let c="photo",e="horizontal",r=!0;const a=new URLSearchParams({key:l,q:t,image_type:c,orientation:e,safesearch:r});return`${s}?${a}`}const g="data:image/svg+xml,%3c!--%20Generated%20by%20IcoMoon.io%20--%3e%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%3e%3cpath%20fill='%23fafafb'%20d='M9.080%200.292c0.187-0.187%200.441-0.292%200.706-0.292h12.428c0.265%200%200.519%200.105%200.706%200.292l8.788%208.788c0.187%200.187%200.292%200.441%200.292%200.706v12.428c0%200.265-0.105%200.519-0.292%200.706l-8.788%208.788c-0.187%200.187-0.441%200.292-0.706%200.292h-12.428c-0.265%200-0.519-0.105-0.706-0.292l-8.788-8.788c-0.187-0.187-0.292-0.441-0.292-0.706v-12.428c0-0.265%200.105-0.519%200.292-0.706l8.788-8.788zM10.2%202l-8.2%208.2v11.6l8.2%208.2h11.6l8.2-8.2v-11.6l-8.2-8.2h-11.6z'%3e%3c/path%3e%3cpath%20fill='%23fafafb'%20d='M9.292%209.292c0.093-0.093%200.203-0.167%200.325-0.217s0.252-0.076%200.383-0.076c0.132%200%200.262%200.026%200.383%200.076s0.232%200.124%200.325%200.217l5.292%205.294%205.292-5.294c0.093-0.093%200.203-0.167%200.325-0.217s0.252-0.076%200.383-0.076c0.131%200%200.262%200.026%200.383%200.076s0.232%200.124%200.325%200.217c0.093%200.093%200.167%200.203%200.217%200.325s0.076%200.252%200.076%200.383-0.026%200.262-0.076%200.383c-0.050%200.121-0.124%200.232-0.217%200.325l-5.294%205.292%205.294%205.292c0.093%200.093%200.167%200.203%200.217%200.325s0.076%200.252%200.076%200.383-0.026%200.262-0.076%200.383c-0.050%200.121-0.124%200.232-0.217%200.325s-0.203%200.167-0.325%200.217c-0.121%200.050-0.252%200.076-0.383%200.076s-0.262-0.026-0.383-0.076c-0.121-0.050-0.232-0.124-0.325-0.217l-5.292-5.294-5.292%205.294c-0.093%200.093-0.203%200.167-0.325%200.217s-0.252%200.076-0.383%200.076-0.262-0.026-0.383-0.076c-0.121-0.050-0.232-0.124-0.325-0.217s-0.167-0.203-0.217-0.325c-0.050-0.121-0.076-0.252-0.076-0.383s0.026-0.262%200.076-0.383c0.050-0.121%200.124-0.232%200.217-0.325l5.294-5.292-5.294-5.292c-0.093-0.093-0.167-0.203-0.217-0.325s-0.076-0.252-0.076-0.383c0-0.132%200.026-0.262%200.076-0.383s0.124-0.232%200.217-0.325z'%3e%3c/path%3e%3c/svg%3e",o=document.querySelector(".gallery");function u(t){if(t.length===0){i.show({class:"toast-message",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fff",iconUrl:g,iconColor:"#fff",backgroundColor:"#EF4040",border:"2px solid #FFBEBE",position:"topRight"}),o.innerHTML="";return}const s=t.reduce((c,e)=>`${c}
        <li class="gallery-item">
            <a class="gallery-link" href="${e.largeImageURL}">
                <img 
                class="gallery-image"
                src="${e.webformatURL}"
                alt="${e.tags}"
                />
            </a>
            <div class="gallery-descr">
                <div class="gallery-descr-itm">
                    <p class="gallery-descr-header">Likes</p>
                    <p class="gallery-descr-text">${e.likes}</p>
                </div>
                <div class="gallery-descr-itm">
                    <p class="gallery-descr-header">Views</p>
                    <p class="gallery-descr-text">${e.views}</p>
                </div>
                <div class="gallery-descr-itm">
                    <p class="gallery-descr-header">Comments</p>
                    <p class="gallery-descr-text">${e.comments}</p>
                </div>
                <div class="gallery-descr-itm">
                    <p class="gallery-descr-header">Downloads</p>
                    <p class="gallery-descr-text">${e.downloads}</p>
                </div>
            </div>
        </li>`,"");o.innerHTML=s,new n(".gallery-link",{captionsData:"alt",overlayOpacity:.5}).refresh()}const p=document.querySelector(".form"),h=document.querySelector(".gallery");p.addEventListener("submit",t=>{t.preventDefault();const s=t.target.elements.searchRequest.value.trim();if(s===""){i.show({class:"toast-message",message:"Fill search field please",messageColor:"#fff",backgroundColor:"#59A10D",border:"2px solid #B5EA7C",position:"topRight"});return}h.innerHTML='<span class="loader">Loading</span>',d(s).then(l=>u(l.hits)).catch(l=>console.log(l))});
//# sourceMappingURL=index.js.map
