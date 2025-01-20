 function calculateTotal() {
            const quantity = parseInt(document.getElementById('quantity').value)||0;
            const price = parseFloat(document.getElementById('price').value)||0;
            

            let total = quantity * price;


           
            document.getElementById('summary-total').textContent = total.toFixed(2);
        updateSummary();}

function editOrder(){
    alert("Redirecting to edit order page");

}
function completePurchase(){
    const paymentNumber = document.getElementById('payment-number').value;
    if (!paymentNumber) {
        alert("Please enter your payment number.");
    } else {
        alert("Purchase completed successfully!");
    }

}

 document.getElementById('ticket').addEventListener('change', updateSummary);
 document.getElementById('quantity').addEventListener('input', updateSummary);
 function updateSummary() {
            const title = document.getElementById('title').value;
            const ticketSelect = document.getElementById('ticket');
            const ticketType = ticketSelect.options[ticketSelect.selectedIndex].text;
            const quantity = parseInt(document.getElementById('quantity').value) || 0;

            document.getElementById('summary-title').textContent = title;
            document.getElementById('summary-tickets').textContent = `${quantity} x ${ticketType}`;
           
 }
document.getElementById('ticket').addEventListener('change', calculateTotal);
document.getElementById('quantity').addEventListener('input', calculateTotal);
document.getElementById('price').addEventListener('input', calculateTotal);


function togglePaymentDetails() {
    const mpesaDetails = document.getElementById('mpesa-details');
    const paypalDetails = document.getElementById('paypal-details');
    const mpesaRadio = document.getElementById('mpesa');
    const paypalRadio = document.getElementById('paypal');

    if (mpesaRadio.checked) {
        mpesaDetails.style.display = 'block';
        paypalDetails.style.display = 'none';
    } else if (paypalRadio.checked) {
        mpesaDetails.style.display = 'none';
        paypalDetails.style.display = 'block';
    }
}

// Attach event listeners to payment method radio buttons
document.getElementById('mpesa').addEventListener('change', togglePaymentDetails);
document.getElementById('paypal').addEventListener('change', togglePaymentDetails);

// Initialize the payment method display
togglePaymentDetails();