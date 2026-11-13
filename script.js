var b=document.getElementById('tema'),r=document.documentElement;
b.addEventListener('click',function(){
  var claro=r.getAttribute('data-theme')==='claro';
  if(claro){r.removeAttribute('data-theme');b.textContent='MODE ON'}
  else{r.setAttribute('data-theme','claro');b.textContent='MODE OFF'}
});
document.getElementById('ano').textContent=new Date().getFullYear();
document.querySelectorAll('.canto').forEach(function(p){
  var t=p.textContent.trim();p.setAttribute('aria-label',t);p.textContent='';
  Array.from(t).forEach(function(c,i){
    if(c===' '){p.appendChild(document.createTextNode(' '));return}
    var s=document.createElement('i');s.textContent=c;s.setAttribute('aria-hidden','true');
    s.className='l'+((i*7+t.length)%5);
    s.style.transform='rotate('+(((i*37)%11)-5)+'deg)';
    s.style.fontSize=(0.9+((i*53)%5)*0.12)+'em';
    p.appendChild(s);
  });
});
