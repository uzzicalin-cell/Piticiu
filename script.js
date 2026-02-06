// script.js

// Muzică permanentă pe site
const music = document.getElementById('bgMusic');
music.src = 'media/muzica1.mp3'; // melodia ta din folderul media
music.volume = 0.6;
music.loop = true;

window.onload = () => {
  music.play().catch(() => {
    console.log('Autoplay blocat de browser (pe mobil), va porni la primul click');
  });
};

// Functii butoane
function yes(){
  document.getElementById('main').classList.add('hidden');
  document.getElementById('love').classList.remove('hidden');
  setTimeout(()=>{
    document.getElementById('giftAnim').classList.add('show');
  },300);
}

function nope(){
  document.getElementById('main').classList.add('hidden');
  document.getElementById('noPage').classList.remove('hidden');
}

function goBack(){
  document.getElementById('love').classList.add('hidden');
  document.getElementById('noPage').classList.add('hidden');
  document.getElementById('main').classList.remove('hidden');
}

// Inimioare animate pe fundal
for(let i=0;i<25;i++){
  let heart=document.createElement('div');
  heart.className='heart-fall';
  heart.innerHTML='❤️';
  heart.style.left=Math.random()*100+'vw';
  heart.style.animationDuration=3+Math.random()*5+'s';
  document.body.appendChild(heart);
}
