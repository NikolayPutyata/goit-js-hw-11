import{i as c,S as l}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function u(i){const o=`https://pixabay.com/api/?${new URLSearchParams(i).toString()}`;return fetch(o).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>t.hits.length===0?(c.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!"}),null):t).catch(t=>{throw t})}function p(i){const s=document.querySelector(".gallery");s.innerHTML="";const o=i.map(e=>`<li class="item-ul">
  <a href="${e.largeImageURL}"><img src="${e.webformatURL}" alt="${e.tags}" /></a>
  <div class="about-img-div">
    <p class="description-img">Likes</p>
    <p class="description-img">Views</p>
    <p class="description-img">Comments</p>
    <p class="description-img">Downloads</p>
    <span class="description-value">${e.likes}</span
    ><span class="description-value">${e.views}</span
    ><span class="description-value">${e.comments}</span
    ><span class="description-value">${e.downloads}</span>
  </div>
</li>`).join("");s.insertAdjacentHTML("beforeend",o),new l(".gallery li a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh()}const a=document.querySelector(".form");a.addEventListener("submit",m);function m(i){if(i.preventDefault(),a.elements[0].value.trim()==="")c.error({title:"",message:"Enter some text!"});else{const o={key:"45056360-0d73312e4ecad0bc63c18ca30",q:a.elements[0].value.trim(),image_type:"photo",orientation:"horizontal",safesearch:!0};u(o).then(t=>{t&&p(t.hits)}).catch(t=>{console.error("Error fetching images:",t)})}}
//# sourceMappingURL=commonHelpers.js.map
