const bookingForm = document.getElementById('booking-form');
const bookingMessage = document.getElementById('booking-message');

if (bookingForm) {
  bookingForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const name = bookingForm.customerName.value.trim();
    const email = bookingForm.customerEmail.value.trim();
    const serviceType = bookingForm.serviceType.value;

    if (!name || !email || !serviceType) {
      bookingMessage.textContent = 'Please fill in the required fields before submitting.';
      bookingMessage.style.color = '#f87171';
      return;
    }

    bookingMessage.textContent = `Thanks, ${name}! Your ${serviceType} request has been received. We will contact you shortly.`;
    bookingMessage.style.color = '#34d399';
    bookingForm.reset();
  });
}
