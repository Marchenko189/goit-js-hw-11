import{i as n,S as u}from"./assets/vendor-B07T6_gy.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const f=r=>fetch(`https://pixabay.com/api/?q=${r}&key=48268337-f168b7768f25a86360e21e8ce&image_type=photo&orientation=horizontal&safesearch=true`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()}),m=r=>`
    <li class="gallery-card">
    <div class="container-gallery">
     <a class="gallery-link" href="${r.largeImageURL}">
      <img
      class="gallery-img"
      src="${r.webformatURL}" 
      alt="${r.tags}" 
      />
      </a>
      <div class="gallery-info">
  <p class="gallery-stats">
    Likes: <span class="gallery-num">${r.likes}</span>
    Views: <span class="gallery-num">${r.views}</span>
    Comments: <span class="gallery-num">${r.comments}</span>
    Downloads: <span class="gallery-num">${r.downloads}</span>
  </p>
    </div>
    </div>
    </li>
  `,i=document.querySelector(".js-search-form"),c=document.querySelector(".js-gallery"),p=r=>{r.preventDefault();const s=r.currentTarget.elements.user_query.value.trim();if(s===""){n.warning({title:"Caution",titleColor:"#fff",message:"The field must be filled!",messageColor:"#fff",position:"topRight",color:"#ffa000"});return}f(s).then(o=>{if(o.hits.length===0){n.error({title:"Error",titleColor:"#fff",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fff",position:"topRight",color:"#ef4040"}),c.innerHTML="",i.reset();return}const a=o.hits.map(t=>m(t)).join("");c.innerHTML=a,new u(".js-gallery a",{captionsData:"alt",captionDelay:250}).refresh()}).catch(o=>{console.log(o)}),i.reset()};i.addEventListener("submit",p);
//# sourceMappingURL=index.js.map
