
document.querySelectorAll('.menu > li').forEach(item=>{
 const sub=item.querySelector('.submenu');
 if(sub){
  item.addEventListener('mouseenter',()=>sub.style.display='block');
  item.addEventListener('mouseleave',()=>sub.style.display='none');
 }
});
