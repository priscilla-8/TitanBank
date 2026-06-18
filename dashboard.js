document.addEventListener("DOMContentLoaded", () => {

    // DROPDOWN
    const profileBtn = document.getElementById("profileBtn");
    const dropdown = document.getElementById("dropdown");

    profileBtn.addEventListener("click", () => {
        dropdown.classList.toggle("hidden");
    });


    // TRANSFER MODAL
    const transferBtn = document.getElementById("transferBtn");
    const transferModal = document.getElementById("transferModal");
    const closeModal = document.getElementById("closeModal");


    transferBtn.addEventListener("click", () => {
        transferModal.classList.remove("hidden");
    });


    closeModal.addEventListener("click", () => {
        transferModal.classList.add("hidden");
    });


    // Close modal when clicking outside
    window.addEventListener("click", (e) => {

        if(e.target === transferModal){
            transferModal.classList.add("hidden");
        }

    });


    // BALANCE TOGGLE
    const toggleBalance =
    document.getElementById("toggleBalance");

    const balance =
    document.getElementById("balance");


    let visible = true;


    toggleBalance.addEventListener("click", () => {

        if(visible){

            balance.textContent = "******";
            toggleBalance.textContent = "Show Balance";

            visible = false;

        }else{

            balance.textContent = "₦150,000.00";
            toggleBalance.textContent = "Hide Balance";

            visible = true;
        }

    });


    // TRANSFER VALIDATION
    const sendBtn =
    document.getElementById("sendBtn");


    sendBtn.addEventListener("click",()=>{

        const account =
        document.getElementById("accountNumber").value;

        const bank =
        document.getElementById("bank").value;

        const amount =
        document.getElementById("amount").value;


        if(account.length !== 10){

            alert("Account number must be 10 digits");
            return;

        }


        if(bank === ""){

            alert("Select bank");
            return;

        }


        if(amount <= 0){

            alert("Enter valid amount");
            return;

        }

const successMessage =
document.getElementById("successMessage");


successMessage.classList.remove("hidden");


setTimeout(()=>{

    successMessage.classList.add("hidden");

    transferModal.classList.add("hidden");

}, 2000);

    });

});