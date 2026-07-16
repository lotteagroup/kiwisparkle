const BOOKING_RECIPIENT_EMAIL = 'info@kiwisparkle.co.nz';
const CONTACT_RECIPIENT_EMAIL = 'info@kiwisparkle.co.nz';

function buildMailtoLink(recipient, subject, bodyLines) {
  const body = bodyLines.join('\n');
  return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

const bookingForm = document.getElementById('booking-form');
const bookingMessage = document.getElementById('booking-message');

if (bookingForm) {
  bookingForm.addEventListener('submit', function (event) {
    event.preventDefault();

    if (!bookingForm.checkValidity()) {
      bookingForm.reportValidity();
      return;
    }

    const name = bookingForm.customerName.value.trim();
    const email = bookingForm.customerEmail.value.trim();
    const phone = bookingForm.customerPhone.value.trim();
    const serviceType = bookingForm.serviceType.value;
    const serviceDate = bookingForm.serviceDate.value;
    const serviceTime = bookingForm.serviceTime.value;
    const serviceFrequency = bookingForm.serviceFrequency.value;
    const serviceAddress = bookingForm.serviceAddress.value.trim();
    const serviceNotes = bookingForm.serviceNotes.value.trim();

    const mailtoLink = buildMailtoLink(
      BOOKING_RECIPIENT_EMAIL,
      `New Booking Request - ${serviceType} for ${name}`,
      [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Service: ${serviceType}`,
        `Preferred Date: ${serviceDate}`,
        `Preferred Time: ${serviceTime}`,
        `Frequency: ${serviceFrequency}`,
        `Address: ${serviceAddress}`,
        `Notes: ${serviceNotes || 'None'}`,
      ]
    );

    bookingMessage.textContent = `Thanks, ${name}! Your email app should now open with your booking details ready to send. Press "Send" in your email app to complete your request.`;
    bookingMessage.style.color = 'var(--primary)';
    window.location.href = mailtoLink;
    bookingForm.reset();
  });
}

const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');

if (contactForm) {
  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }

    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    const mailtoLink = buildMailtoLink(
      CONTACT_RECIPIENT_EMAIL,
      `Website Contact Form - ${name}`,
      [`Name: ${name}`, `Email: ${email}`, '', 'Message:', message]
    );

    contactMessage.textContent = `Thanks, ${name}! Your email app should now open with your message ready to send. Press "Send" in your email app to complete it.`;
    contactMessage.style.color = 'var(--primary)';
    window.location.href = mailtoLink;
    contactForm.reset();
  });
}
