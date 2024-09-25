function convertNum(id){
    return parseFloat(document.getElementById(id).innerText);
}
function convertNumInput(id){
    return parseFloat(document.getElementById(id).value);
}

// add eventlistener for calculate function

const calculateButton = document.getElementById("calculate-noakhali");
calculateButton.addEventListener("click",function(){
    const mainbalance = convertNum("balance");
    const donatenoakhali = convertNumInput("donate-noakhali")
    const collectionnoakhali =convertNum("noakhali-collected");
    // console.log( mainbalance);
    console.log(donatenoakhali);
    // console.log(collectionnoakhali);

    const  remainingbalance =mainbalance-donatenoakhali;
     const newcollectionnoakhali =collectionnoakhali+donatenoakhali;
     console.log(remainingbalance);
     console.log(newcollectionnoakhali);
    const a= document.getElementById("noakhali-collected");
    a.innerText= newcollectionnoakhali.toFixed(0);

    const b =document.getElementById("balance");
    b.innerText = remainingbalance.toFixed(0);
});

// add eventlistener for card-2
