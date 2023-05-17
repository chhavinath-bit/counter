let current_element= document.getElementById("counterValue");

function onDecrease(){
let previValue= current_element.textContent;
let newvalue= parseInt(previValue)-1;
current_element.textContent= newvalue;
if(newvalue<0){
    document.getElementById("counterValue").style.color="red";
}    
else if(newvalue==0){
    document.getElementById("counterValue").style.color="black";
}   
else if(newvalue>0){
    document.getElementById("counterValue").style.color="green";
}   
}
function reset(){
    let previValue= current_element.textContent;
    let newvalue= 0;
    current_element.textContent= newvalue;
    current_element.style.color="black";
}
function increase(){

    let previValue= current_element.textContent;
    let newvalue= parseInt(previValue)+1;
    current_element.textContent= newvalue;
    if(newvalue<0){
        document.getElementById("counterValue").style.color="red";
    }    
    else if(newvalue==0){
        document.getElementById("counterValue").style.color="black";
    }   
    else if(newvalue>0){
        document.getElementById("counterValue").style.color="green";
    } 
}

    
    
    
