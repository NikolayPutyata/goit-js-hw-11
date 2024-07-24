import{S as u,i as c}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();function p(i){const o=`https://pixabay.com/api/?${new URLSearchParams(i).toString()}`;return fetch(o).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>t).catch(t=>{throw t})}function d(i){const r=document.querySelector(".gallery");r.innerHTML="";const o=i.map(e=>`<li class="item-ul">
  <a href="${e.largeImageURL}"><img src="${e.webformatURL}" alt="${e.tags}" /></a>
  <div class="about-img-div">
    <p class="description-img">Likes</p>
    <p class="description-img">Views</p>
    <p class="description-img">Comments</p>
    <p class="description-img">Downloads</p>
    <span class="description-value">${e.likes}</span>
    <span class="description-value">${e.views}</span>
    <span class="description-value">${e.comments}</span>
    <span class="description-value">${e.downloads}</span>
  </div>
</li>`).join("");r.insertAdjacentHTML("beforeend",o),new u(".gallery li a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh()}const n=document.querySelector(".form"),l=document.querySelector(".loader");n.addEventListener("submit",m);function m(i){i.preventDefault();const r=n.elements[0].value.trim();if(r===""||r.length<3)c.error({title:"",message:"The input field is empty or has less than three characters!"});else{l.style.display="block";const o={key:"45056360-0d73312e4ecad0bc63c18ca30",q:n.elements[0].value.trim(),image_type:"photo",orientation:"horizontal",safesearch:!0};p(o).then(t=>{l.style.display="none",t.hits.length===0?(c.error({title:"",message:"No pictures found!"}),n.elements[0].value=""):(d(t.hits),n.elements[0].value="")}).catch(t=>{l.style.display="none",c.error({title:"",message:`Error fetching images:${t}`})})}}
//# sourceMappingURL=commonHelpers.js.map
