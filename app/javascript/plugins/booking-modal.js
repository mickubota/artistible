const showModal = (event, modalId) => {
  event.preventDefault();
  $(modalId).modal('show');
};

const hideModal = (event, modalId) => {
  event.preventDefault();
  $(modalId).modal('hide');
};

const initBookingModal = () => {
  const makeBooking = document.querySelectorAll('.new-booking');
  const modifyBooking = document.querySelectorAll('.modify-booking');
  const cancelButton = document.querySelectorAll(".cancel-button");

  if (makeBooking) {
    makeBooking.forEach((button) => {
      button.addEventListener('click', (event) => showModal(event, `#new-booking-${button.dataset.serviceid}`));
    });
    cancelButton.forEach((button) => {
      button.addEventListener('click', (event) => hideModal(event, `#new-booking-${button.dataset.serviceid}`));
    });
  };

  if (modifyBooking) {
    modifyBooking.forEach((button) => {
      button.addEventListener('click', (event) => showModal(event, `#booking-${button.dataset.bookingid}`));
    });
    cancelButton.forEach((button) => {
      button.addEventListener('click', (event) => hideModal(event, `#booking-${button.dataset.bookingid}`));
    });
  };
};


export { initBookingModal };
