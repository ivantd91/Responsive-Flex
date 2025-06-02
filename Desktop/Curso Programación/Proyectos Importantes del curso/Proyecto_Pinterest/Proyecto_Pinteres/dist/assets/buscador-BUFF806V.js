import{b as i}from"./index-BQAPYpjt.js";const r=document.querySelector(".barraBusqueda"),o=document.querySelector("main");r.addEventListener("keypress",n=>{if(n.key==="Enter"){const e=r.value.trim();if(!e)return;o.innerHTML="",r.value="",i(e).then(t=>{t.length===0?(a(`No hemos encontrado "${e}". Tenemos estas imágenes como sugerencia `),i("gatitos").then(s=>{l(s,o)})):(l(t,o),a(""))}).catch(t=>{console.log("Error en la busqueda de imágenes:",t),a("Error en la búsqueda")})}});function l(n,e){n.forEach(t=>{const s=document.createElement("div");s.classList.add("img-viñeta"),s.innerHTML=`
    
    <img src= "${t.urls.small}" alt= "${t.alt_description}">

    <div class="imagen_usuario">
      <img src= "${t.user.profile_image.medium}"
      alt ="${t.user.name}"
      titulo="${t.user.name}"
      >
      </div>

    `,e.appendChild(s)})}function a(n){let e=document.querySelector("#mensaje");e||(e=document.createElement("div"),e.id="mensaje",e.style.display="none",document.body.insertBefore(e,o)),e.textContent=n,n!==""&&(e.style.display="block",setTimeout(()=>{e.textContent===n&&(e.textContent="",e.style.display="none")},4e3))}
