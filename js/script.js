function convertNum(id){
    return parseFloat(document.getElementById(id).innerText);
}
function convertNumInput(id){
    return parseFloat(document.getElementById(id).value);
}

// add eventlistener for calculate card-1

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

// history of donation
    const historyItem =document.createElement("div");
historyItem.className ="bg-white p-5 rounded-md border-l-2 ";

historyItem.innerHTML =`
                   <p class="text-xl text-black-500"> ${donatenoakhali.toFixed(2)} Taka is donated for Flood Relief at Noakhali, Bangladesh.</P>
                 <br>
                   <p class="text-xl text-gray-500"> Date: ${new Date().toString()}</p>
   
   
`;
const historyContainer = document.getElementById("history-list");
historyContainer.insertBefore(historyItem,historyContainer.firstChild);
});

// add eventlistener for card-2
const calculateButtonf = document.getElementById("calculate-feni");
calculateButtonf.addEventListener("click",function(){
    const mainbalance = convertNum("balance");
    const donatefeni = convertNumInput("donate-feni")
    const collectionfeni =convertNum("feni-collected");
    // console.log( mainbalance);
  
    // console.log(collectionnoakhali);

    const  remainingbalance =mainbalance-donatefeni;
     const newcollectionfeni =collectionfeni+donatefeni;
     console.log(remainingbalance);
     console.log(newcollectionfeni);
    const c= document.getElementById("feni-collected");
    c.innerText= newcollectionfeni.toFixed(0);

    const d =document.getElementById("balance");
    d.innerText = remainingbalance.toFixed(0);

    // history of donation
    const historyItem =document.createElement("div");
historyItem.className ="bg-white  rounded-md border-l-2 text-center";

historyItem.innerHTML =`
                   <p class="text-xl text-black-500"> ${donatefeni.toFixed(2)} Taka is donated for Flood Relief at Feni, Bangladesh.</P>
                   
                   <br>
                   <p class="text-xl text-gray-500"> Date: ${new Date().toString()}</p>
   
   
`;
const historyContainer = document.getElementById("history-list");
historyContainer.insertBefore(historyItem,historyContainer.firstChild);
});

// add Eventlistener for card 3

const calculateButtonq = document.getElementById("calculate-quota");
calculateButtonq.addEventListener("click",function(){
    const mainbalance = convertNum("balance");
    const donatequota = convertNumInput("donate-quota")
    const collectionquota =convertNum("quota-collected");
    // console.log( mainbalance);
    
    // console.log(collectionnoakhali);

    const  remainingbalance =mainbalance-donatequota;
     const newcollectionquota =collectionquota+donatequota;
     console.log(remainingbalance);
     console.log(newcollectionquota);
    const c= document.getElementById("quota-collected");
    c.innerText= newcollectionquota.toFixed(0);

    const d =document.getElementById("balance");
    d.innerText = remainingbalance.toFixed(0);
   
    // history of donation
    const historyItem =document.createElement("div");
historyItem.className ="bg-white   justify-center px-10 rounded-md border-l-2 gap-3 ";

historyItem.innerHTML =`
                   <p class="text-xl text-black-500"> ${donatequota.toFixed(2)} Taka is donated for Flood Relief at Noakhali, Bangladesh.</P>
                   <br>
                   <p class="text-xl text-gray-500"> Date: ${new Date().toString()}</p>
   
   
`;
const historyContainer = document.getElementById("history-list");
historyContainer.insertBefore(historyItem,historyContainer.firstChild);
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

// history section
// const historyItem =document.createElement(div);
// historyItem.className ="bg-white p-3 rounded-md border-l-2 ";

// historyItem.innerHtml =`
//                    <p class="text-xs text-black-500 > ${donate-noakhali} Taka is donated for Flood Relief at Noakhali, Bangladesh;
//                    <p class=text-xs text-gray-500> ${(newDate).toLacateDateString()}</p>
   
   
// `;
// const historyContainer = document.getElementById("history-list");
// historyContainer.insertBefore(historyItem,historyContainer.firstChild);


// Get the modal and close button elements
const modal = document.getElementById("donation-modal");
const closeModal = document.getElementById("close-modal");

// Function to show the modal
function showModal() {
  modal.classList.remove("hidden");
}

// Function to hide the modal
   closeModal.addEventListener("click", function () {
     modal.classList.add("hidden");
});

// Add event listeners to "Donate Now" buttons to show the modal
const donateButtons = document.querySelectorAll(".donation-form button");

donateButtons.forEach(button => {
  button.addEventListener("click", function() {
    showModal();
  });
});