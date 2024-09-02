const description = () => {
  // const accordionItemHeaders = document.querySelectorAll('.description__accordion-item-header');

  // accordionItemHeaders.forEach((accordionItemHeader) => {
  // accordionItemHeader.addEventListener('click', () => {
  //     const currentlyActiveAccordionItemHeader = document.querySelector('.description__accordion-item-header.active');
  //     if (currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader !== accordionItemHeader) {
  //         currentlyActiveAccordionItemHeader.classList.toggle('active');
  //         currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
  //     }
  //     accordionItemHeader.classList.toggle('active');
  //     const accordionItemBody = accordionItemHeader.nextElementSibling;
  //     if (accordionItemHeader.classList.contains('active')) {
  //         accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 'px';
  //     } else {
  //         accordionItemBody.style.maxHeight = 0;
  //     }
  // });

  //   const accordionItemHeaders = document.querySelectorAll('.description__accordion-item-header');

  //   accordionItemHeaders.forEach((accordionItemHeader) => {
  //     accordionItemHeader.addEventListener('click', () => {
  //       const currentlyActiveAccordionItemHeader = document.querySelector('.description__accordion-item-header.active');

  //       if (currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader === accordionItemHeader) {
  //         return;
  //       }

  //       if (currentlyActiveAccordionItemHeader) {
  //         currentlyActiveAccordionItemHeader.classList.remove('active');
  //         currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
  //       }

  //       accordionItemHeader.classList.add('active');
  //       const accordionItemBody = accordionItemHeader.nextElementSibling;
  //       accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 'px';
  //     });
  //   });

  //   const firstAccordionItemHeader = accordionItemHeaders[0];
  //   if (firstAccordionItemHeader) {
  //     firstAccordionItemHeader.classList.add('active');
  //     const firstAccordionItemBody = firstAccordionItemHeader.nextElementSibling;
  //     firstAccordionItemBody.style.maxHeight = firstAccordionItemBody.scrollHeight + 'px';
  //   }

  const accordionItemHeaders = document.querySelectorAll('.description__accordion-item-header');

  accordionItemHeaders.forEach((accordionItemHeader) => {
    accordionItemHeader.addEventListener('click', () => {
      const currentlyActiveAccordionItemHeader = document.querySelector(
        '.description__accordion-item-header.active'
      );

      if (currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader === accordionItemHeader) {
        if (currentlyActiveAccordionItemHeader) {
          currentlyActiveAccordionItemHeader.classList.remove('active');
          currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
        }
      } else {
        if (currentlyActiveAccordionItemHeader) {
          currentlyActiveAccordionItemHeader.classList.remove('active');
          currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
        }
        accordionItemHeader.classList.add('active');
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 'px';
      }
    });
  });

  const firstAccordionItemHeader = accordionItemHeaders[0];
  if (firstAccordionItemHeader) {
    firstAccordionItemHeader.classList.add('active');
    const firstAccordionItemBody = firstAccordionItemHeader.nextElementSibling;
    firstAccordionItemBody.style.maxHeight = firstAccordionItemBody.scrollHeight + 'px';
  }

  function setAccordionBodyHeight() {
    const activeAccordionItemHeader = document.querySelector('.description__accordion-item-header.active');
    if (activeAccordionItemHeader) {
      const activeAccordionItemBody = activeAccordionItemHeader.nextElementSibling;
      activeAccordionItemBody.style.maxHeight = activeAccordionItemBody.scrollHeight + 'px';
    }
  }

  window.addEventListener('resize', setAccordionBodyHeight);
};

export default description;
