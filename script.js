document.getElementById('year').textContent=new Date().getFullYear();
const gallery=document.getElementById('gallery');
if(gallery){
  const images=[
    'Screenshot 2025-09-15 162155','Screenshot 2025-09-15 162231.png',
    'Screenshot 2025-09-15 162258.png','Screenshot 2025-09-15 162352.png',
    'Screenshot 2025-09-15 162428.png','Screenshot 2025-09-15 162446.png',
    'Screenshot 2025-09-15 162532.png','Screenshot 2025-09-15 162930.png',
    'Screenshot 2025-09-15 162956.png','Screenshot 2025-09-15 163938 - Copy.png',
    'Screenshot 2025-09-15 163955.png','Screenshot 2025-09-15 164016.png',
    'Screenshot 2025-09-15 164110.png','Screenshot 2025-09-15 164143.png',
    'Screenshot 2025-09-15 164211.png'
  ];
  images.forEach(img=>{
    const el=document.createElement('img');
    el.src='assets/designs/'+img;
    el.alt=img;
    gallery.appendChild(el);
    el.addEventListener('click',()=>{showLightbox(el.src);});
  });
}
function showLightbox(src){
  const lightbox=document.getElementById('lightbox');
  lightbox.innerHTML='<img src="'+src+'">';
  lightbox.classList.add('active');
  lightbox.onclick=()=>lightbox.classList.remove('active');
}
