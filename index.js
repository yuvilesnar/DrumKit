var len = document.querySelectorAll('.drum').length;

for(var i = 0;i<len;i++){
    //detecting the button which is pressed
    document.querySelectorAll('.drum')[i].addEventListener('click',function(){
    var key= this.innerHTML;
    musicplayer(key);
    buttonAnimator(key);
        
});
}
//detecting the key which is pressed
//keypress is the event
//event takes the details of the keypress
// entire document looks for the keypress;
document.addEventListener('keypress',function(event){
    musicplayer(event.key);
    buttonAnimator(event.key);
})

function musicplayer(key){
    switch(key){
        case "w":
            var aud =new Audio('sounds/tom-1.mp3');
            aud.play();
            break;
        case "a":
            var aud =new Audio('sounds/tom-2.mp3');
            aud.play();
            break;
        case "s":
            var aud =new Audio('sounds/tom-4.mp3');
            aud.play();

            break;
        case "d":
            var aud =new Audio('sounds/tom-3.mp3');
            aud.play();
            break;
        case "j":
            var aud =new Audio('sounds/snare.mp3');
            aud.play();
            break;
        case "k":
            var aud =new Audio('sounds/crash.mp3');
            aud.play();
            break;
        case "l":
            var aud =new Audio('sounds/kick-bass.mp3');
            aud.play();
            break;
        default:
            console.log(key);
            break;

    }
}

//for the purpose of animation

function buttonAnimator(key){
    
    var currentbutton = document.querySelector('.'+key);
    currentbutton.classList.add('pressed');
    setTimeout(function(){
        currentbutton.classList.remove('pressed');
    },100);
    
}

