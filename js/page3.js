let imagesArr = [
    "https://images.pexels.com/photos/215652/pexels-photo-215652.jpeg?auto=compress&cs=tinysrgb&h=350",
    "https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&h=350",
    "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&h=350",
    "https://images.pexels.com/photos/2001102/pexels-photo-2001102.jpeg?cs=srgb&dl=care-close-up-flower-2001102.jpg&fm=jpg",
    "https://images.pexels.com/photos/886404/pexels-photo-886404.jpeg?auto=compress&cs=tinysrgb&h=350",
    "https://images.pexels.com/photos/206434/pexels-photo-206434.jpeg?auto=compress&cs=tinysrgb&h=350"
];


let i = 0;
let intervalTimer = setInterval(change,2000);
let divArr = document.getElementById("circles-holder").children


function change(){
    
    i = (i+1) % imagesArr.length;
        document.image.src = imagesArr[i];
        divArr[i].classList.add("highlight");
        if(i){
            divArr[i-1].classList.remove("highlight");
        }
        if(!i){
            divArr[(imagesArr.length) - 1].classList.remove("highlight");
        }  
}

function imageChange(num){
    document.image.src = imagesArr[num-1];
    clearInterval(intervalTimer); 
    for(let j=0;j<divArr.length;j++){
        divArr[j].classList.remove("highlight");
    }
    divArr[num-1].classList.add("highlight");

}


