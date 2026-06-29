const io=new IntersectionObserver((es)=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.15,rootMargin:'0px 0px -8% 0px'});
document.querySelectorAll('[data-rv]').forEach(el=>io.observe(el));
document.querySelectorAll('.vidwrap .povr').forEach(ov=>{
  ov.addEventListener('click',()=>{const v=ov.parentElement.querySelector('video');v.controls=true;v.play();ov.style.display='none';});
});
