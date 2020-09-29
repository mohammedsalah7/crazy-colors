// Here you can access the colors variable
// have fun
// function sss(){
//     const randomColor = colors[Math.floor(Math.random()*colors.length)];

//     document.getElementById("pallete").style.color = randomColor;
//     console.log(randomColor)

// }



document.getElementById("btn").addEventListener("click", function(){
    const randomColor = colors[Math.floor(Math.random()*colors.length)];
    const textColor = colors[Math.floor(Math.random()*colors.length)];
    if(randomColor !== textColor){
        document.getElementById("pallete").style.background = randomColor;
   
        document.getElementById("pallete").style.color = textColor;
       
        document.getElementById('color').value = textColor
    }
   
   

})






function inputColor(){

    const inputs = document.getElementById('color');
    if (inputs.value !== '' ) {
    document.getElementById('pallete').style.background = inputs.value;
    }
    
}