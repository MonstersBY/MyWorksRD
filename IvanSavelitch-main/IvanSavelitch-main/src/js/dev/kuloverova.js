import '../page/main';
import '../page/production';
import '../page/history';

import popup from '../utils/popup';
import form from '../utils/form';

export const modules = {};
document.addEventListener('DOMContentLoaded', () => {
  try {
    popup();
  } catch {}
  try {
    form();
  } catch {}
  try {
    burger();
  } catch {}
});

function burger() {
  const burger = document.querySelector('.burger');
  const headerMob = document.querySelector('.header__mob');
  const closeBtn = document.querySelector('.close-burger');

  burger.addEventListener('click', () => {
    if (!burger.classList.contains('active')) {
      burger.classList.add('active');
      headerMob.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  });
  closeBtn.addEventListener('click', () => {
    if (burger.classList.contains('active')) {
      headerMob.classList.remove('active');
      burger.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      headerMob.classList.remove('active');
      burger.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}
setTimeout(() => {
  document.querySelectorAll('.popup').forEach((item) => (item.style.display = 'block'));
}, 100);

// gsap.utils.toArray('.item').forEach(function (elem) {
//   ScrollTrigger.create({
//     trigger: elem,
//     onEnter: function () {
//       elem.classList.add('active');
//       // slideIn(elem);
//       gsap.to(window, { duration: 2, scrollTo: `#${elem.id}`});
//     },

//     onEnterBack: function () {
//       elem.classList.add('active');
//     },
//     onLeave: function () {
//       elem.classList.remove('active');
//     },
//     onLeaveBack: function () {
//       elem.classList.remove('active');
//     }
//   });

//   // function slideIn(elem) {
//   //   gsap.to(elem, {
//   //     // y: '150%',
//   //     // scrollTo: {offsetY: 50},
//   //     // scale: 1,
//   //     // duration: 1.5,
//   //     // stagger: 1.5,
//   //     // overwrite: 'none',
//   //     // delay: 0
//   //   });
//   // }
// });
