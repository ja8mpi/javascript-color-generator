// navigator.clipboard.writeText("<empty clipboard>").then(function() {
//     /* clipboard successfully set */
//   }, function() {
//     /* clipboard write failed */
// });

const rndClrBtn = document.querySelector("#randomcolor");
const clrInput = document.querySelector("#color-code");
const clrCpy = document.querySelector("#copycolor");


let CLR;

const generateColor = () =>{
    const colorCode = [];
    for (let i = 0; i < 6; i++) {
        let rnd = Math.floor(Math.random() * 16);
        if(rnd >= 10)
            rnd = String.fromCharCode(97 + (rnd-10))
        colorCode.push(rnd);    
    }
    return "#".concat(colorCode.join(""));
}

rndClrBtn.addEventListener("click", ()=>{
    CLR = generateColor();
    clrInput.value = CLR;
    clrInput.style.backgroundColor = CLR;
    
})

clrCpy.addEventListener("click", ()=>{
    if(typeof CLR !== "undefined"){
        navigator.clipboard.writeText(CLR).then(function() {
            /* clipboard successfully set */
            console.log(`${CLR} copied to ClipBoard`);
          }, function() {
            /* clipboard write failed */
            console.log(`unable to copy to ClipBoard`);
          });
    }
})



// console.log(String.fromCharCode(97 + 5));