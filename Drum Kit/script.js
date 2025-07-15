

function playSound(event){
    const key = document.querySelector(`.key[data-key="${event.key}"`);
    const sound = document.querySelector(`audio[data-key=${event.key}]`);
    if (!sound){return;};
    sound.currentTime=0;
    sound.play();
    key.classList.add('playing');


  
    
}
const keys = document.querySelectorAll('.key');
    keys.forEach((keyitem)=>{
        keyitem.addEventListener('transitionend', removeTransition);

    })
function removeTransition(event){

    if(event.type !== 'transitionend') return;
    this.classList.remove('playing');
    }



window.addEventListener('keydown', playSound);