function convertNum(id){
    return parseFloat(document.getElementById(id).innerText);
}
function convertNumInput(id){
    return parseFloat(document.getElementById(id).value);
}
function showError(id){
    document.getElementById(id).classList.remove("hidden");
    return;
   
}

// add eventlistener for calculate card-1

const calculateButton = document.getElementById("calculate-noakhali");
calculateButton.addEventListener("click",function(){
    const mainbalance = convertNum("balance");
    const donatenoakhali = convertNumInput("donate-noakhali")
    const collectionnoakhali =convertNum("noakhali-collected");
    // console.log( mainbalance);
    // console.log(donatenoakhali);
    // console.log(collectionnoakhali);
    if (isNaN(donatenoakhali) ){
        // document.getElementById("income-error").classList.remove("hidden");
         
        // return ;
        showError("income-error");
        return;
     }
   

    if(donatenoakhali <=0 ||  donatenoakhali>mainbalance){
        // document.getElementById("income-error").classList.remove("hidden");
        // return;
        showError("income-error");
      return;
     }

    const  remainingbalance =mainbalance-donatenoakhali;
     const newcollectionnoakhali =collectionnoakhali+donatenoakhali;
    //  console.log(remainingbalance);
    //  console.log(newcollectionnoakhali);
    const a= document.getElementById("noakhali-collected");
    a.innerText= newcollectionnoakhali.toFixed(0);
    
    const b =document.getElementById("balance");
    b.innerText = remainingbalance.toFixed(0);
  

// history of donation
    const historyItem =document.createElement("div");
historyItem.className ="bg-white p-5 rounded-md border-l-2 text-center ";

historyItem.innerHTML =`
                   <p class="text-xl text-black-500"> ${donatenoakhali.toFixed(2)} Taka is donated for Flood Relief at Noakhali, Bangladesh.</P>
                   <p class="text-xl text-gray-500"> Date: ${new Date().toString()}</p>
   
   
`;
const historyContainer = document.getElementById("history-list");
historyContainer.insertBefore(historyItem,historyContainer.firstChild);
const m =document.getElementById("my_modal").showModal();
});

// add eventlistener for card-2
const calculateButtonf = document.getElementById("calculate-feni");
calculateButtonf.addEventListener("click",function(){
    const mainbalance = convertNum("balance");
    const donatefeni = convertNumInput("donate-feni")
    const collectionfeni =convertNum("feni-collected");
    if (isNaN(donatefeni) ){
        // document.getElementById("income-error-2").classList.remove("hidden");
        showError("income-error-2"); 
        return ;
     }
   
    if(donatefeni <=0 ||  donatefeni>mainbalance){
        // document.getElementById("income-error-2").classList.remove("hidden");
        showError("income-error-2");
        return;
      
     }

    const  remainingbalance =mainbalance-donatefeni;
     const newcollectionfeni =collectionfeni+donatefeni;
    //  console.log(remainingbalance);
    //  console.log(newcollectionfeni);
    const c= document.getElementById("feni-collected");
    c.innerText= newcollectionfeni.toFixed(0);

    const d =document.getElementById("balance");
    d.innerText = remainingbalance.toFixed(0);
    

    // history of donation
    const historyItem =document.createElement("div");
historyItem.className ="bg-white  rounded-md border-l-2 text-center p-5 mt-3";

historyItem.innerHTML =`
                 
                <p class="text-xl text-black-500"> ${(donatefeni).toFixed(2)} Taka is donated for Flood Relief at Feni, Bangladesh.</P>
                   <p class="text-xl text-gray-500"> Date: ${new Date().toString()}</p>
   
   
`;
const historyContainer = document.getElementById("history-list");
historyContainer.insertBefore(historyItem,historyContainer.firstChild);
document.getElementById("my_modal").showModal();
});

// add Eventlistener for card-3

const calculateButtonq = document.getElementById("calculate-quota");
calculateButtonq.addEventListener("click",function(){
    const mainbalance = convertNum("balance");
    const donatequota = convertNumInput("donate-quota")
    const collectionquota =convertNum("quota-collected");
    // console.log( mainbalance);
    
    // console.log(collectionnoakhali);
    if (isNaN(donatequota) ){
        document.getElementById("income-error-3").classList.remove("hidden");
         
        return ;
     }
   
   

    const  remainingbalance =mainbalance-donatequota;
     const newcollectionquota =collectionquota+donatequota;
     if(donatequota <=0 || donatequota>mainbalance){
        document.getElementById("income-error-3").classList.remove("hidden");
        return;
      
     };
     
    const c= document.getElementById("quota-collected");
    c.innerText= newcollectionquota.toFixed(0);

    const d =document.getElementById("balance");
    d.innerText = remainingbalance.toFixed(0);
   
    // history of donation
    const historyItem =document.createElement("div");
historyItem.className ="bg-white   text-center p-5 rounded-md border-l-2 gap-3 ";

historyItem.innerHTML =`
                   <p class="text-xl text-black-500"> ${(donatequota.toFixed(2))} Taka is donated for Aid for Injured in Quota Movement.</P>
                   
                   <p class="text-xl text-gray-500"> Date: ${new Date().toString()}</p>
   
   
`;
const historyContainer = document.getElementById("history-list");
historyContainer.insertBefore(historyItem,historyContainer.firstChild);
document.getElementById("my_modal").showModal();


});

// history Tab Functionality

const  historyTab = document.getElementById("history-tab"); 
const assistantTab = document.getElementById("assistant-tab");
historyTab.addEventListener("click",function(){
  historyTab.classList.add(
    "text-white",
    "bg-[#B4F461]"
  );

   historyTab.classList.remove("text-gray-600");
   assistantTab.classList.remove(
    "text-white",
    "bg-[#B4F461]"
   );

   assistantTab.classList.add("text-gray-600");
   const donationForms = document.getElementsByClassName("donation-form");
   for (let i = 0; i < donationForms.length; i++) {
    donationForms[i].classList.add("hidden");
  }

//    const result = document.getElementById("results");
//    result.classList.remove("hidden");

   document.getElementById("history-section").classList.remove("hidden");

   
});


// donation TAb functionality

assistantTab.addEventListener("click",function(){
    assistantTab.classList.add(
      "text-white",
      "bg-[#B4F461]"
    );

    historyTab.classList.remove(
      "text-white",
      "bg-[#B4F461]"
    );
    historyTab.classList.add("text-gray-600");
   
    const donationForms = document.getElementsByClassName("donation-form");
    for (let i = 0; i < donationForms.length; i++) {
     donationForms[i].classList.remove("hidden");
   }
  
   
  //  const result = document.getElementById("results");
  //  result.classList.remove("hidden"); 
  document.getElementById("history-section").classList.add("hidden");
});

