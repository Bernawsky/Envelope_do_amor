const fechar = document.getElementById('btn2');
const abrir = document.getElementById('btn1');
const icon1 = document.getElementById('envelope1');
const icon2 = document.getElementById('envelope2');
const coracao = document.getElementById('coracao');
const rotate = document.getElementById('rotate');

abrir.addEventListener('click' , (e) =>{
    if(e.target == abrir){
        icon1.style.display = "none";
        icon2.style.display = "flex";
    }
})

fechar.addEventListener('click', (e) =>{
    if(e.target == fechar){
        icon1.style.display = "flex";
        icon2.style.display = "none";
    }
})

rotate.addEventListener('click', (e) => {
    if(e.target == fechar){
        rotate.style.transform = "rotateZ(60deg)";
    }
})


const sair = document.getElementById('sair');
const modal = document.getElementById('modal');

sair.addEventListener('click', (e) =>{
    if(e.target == sair){
        modal.style.display = 'none';
    }
})