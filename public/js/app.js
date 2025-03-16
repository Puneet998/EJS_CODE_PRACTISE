let btns=document.querySelectorAll("button");
for(let btn of btns){
    btn.addEventListener("click",function(){
        for(let i=0;i<20;i++){
        let num=Math.floor(Math.random()*10)+1;
        if(num%2==0){
        console.log(`${num} is even`);
        }
        else{
            console.log(`${num} is odd`);
        }
        // console.log(num);
        // console.log("you clicked me");
        }

});
}
// javascript main hamne ek variable banaya hai jiska naam hai btns or usme hamne document.querySelectorAll("button") kiya hai.
// document.querySelectorAll("button") ka matlab hota hai ki hamare html main jitne bhi button tags hai unhe select karna.
// ab hamne ek loop chala diya hai jisme hamne btns ki length tak loop chala diya hai.
// aur har loop main hamne ek random number generate kiya hai jiska range 1 se 10 hai.
// aur agar woh number even hai toh hamne console main print kiya hai ki woh number even hai.
// aur agar woh number odd hai toh hamne console main print kiya hai ki woh number odd hai.
// aur agar hamne console.log(num); kiya toh woh number print hota hai.
// aur agar hamne console.log("you clicked me"); kiya toh woh print hota hai ki you clicked me.
// aur jab hamne button par click kiya toh woh console main print hota hai.
// aur agar hamne console.log(num); ko uncomment kiya toh woh number print hota hai.
// aur agar hamne console.log("you clicked me"); ko uncomment kiya toh woh print hota hai ki you clicked me.