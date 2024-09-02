import Modal from '../utils/modalClass';

window.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.application-modal')) {
    const applicationModal = new Modal(
      document.querySelectorAll('#openApplicationModal'),
      [
        document.querySelector('.application-modal__close'),
        document.querySelector('.application-modal__button')
      ],
      document.querySelector('.application-modal')
    );
  }

  if (document.querySelector('.banner-modal')) {
    const bannerModal = new Modal(
      [],
      [document.querySelector('.banner-modal__close'), document.querySelector('.banner-modal__button')],
      document.querySelector('.banner-modal')
    );

    const modalElem = bannerModal.getModalElem();

    setTimeout(() => {
      modalElem.classList.add('active');
    }, 60000);
  }
});
