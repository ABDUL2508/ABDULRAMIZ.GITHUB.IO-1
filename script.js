document.getElementById('year').textContent=new Date().getFullYear();
const gallery=document.getElementById('gallery');
if(gallery){
  const images=[
    '1','2',
    '3','4',
    '5','6',
    '7','8',
    '9','10,
    '11','12',
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
