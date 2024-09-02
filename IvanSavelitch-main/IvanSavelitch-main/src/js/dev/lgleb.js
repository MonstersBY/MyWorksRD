import Swiper from 'swiper';
import { gsap, ScrollTrigger } from 'gsap/all';

window.addEventListener('DOMContentLoaded', () => {
  Swipers();

  gsap.registerPlugin(ScrollTrigger);

  document.querySelector('.item-banner__weights') && weightTabs();

  // document.querySelector('.catalog-block') && catalogBannerAnimation();

  // document.querySelector('.love') && loveAnimation();

  // if (document.querySelector('.development')) {
  //   developmentText();
  //   developmentAnimation();
  // }

  if (document.querySelector('.solutions')) {
    solutionsAnimation();
    afterSolutionsAnimation();
  }
});

const weightTabs = () => {
  const tabsContainer = document.querySelector('.item-banner__weights'),
    tabs = tabsContainer.querySelectorAll('.item-banner__weight');

  tabsContainer.addEventListener('click', (e) => {
    const target = e.target;

    if (target.classList.contains('item-banner__weight')) {
      tabs.forEach((tab) => {
        tab.classList.remove('active');
      });

      target.classList.add('active');
    }
  });
};

// const catalogBannerAnimation = () => {
//   const block = document.querySelector('.catalog-block'),
//     title = block.querySelector('.catalog-block__title'),
//     tagsContainer = block.querySelector('.catalog-block__tags'),
//     tags = tagsContainer.querySelectorAll('.catalog-block__tag'),
//     slides = block.querySelectorAll('.catalog-block__slide'),
//     duration = 3,
//     ease = 'power2.in';

//   const timeline = gsap.timeline({
//     scrollTrigger: {
//       trigger: block,
//       start: 'top center'
//     }
//   });

//   timeline
//     .from(title, {
//       duration,
//       ease,
//       x: -500,
//       keyframes: {
//         '0%': { x: -500, opacity: 0 },
//         '40%': { x: 25, opacity: 1 },
//         '100%': { x: 0 }
//       }
//     })
//     .from(
//       slides[0],
//       {
//         duration,
//         ease,
//         y: 500,
//         keyframes: {
//           '0%': { y: 500, opacity: 0 },
//           '40%': { y: -25, opacity: 1 },
//           '100%': { y: 0 }
//         }
//       },
//       0
//     )
//     .from(
//       slides[1],
//       {
//         duration,
//         ease,
//         y: 500,
//         keyframes: {
//           '0%': { y: 500, opacity: 0 },
//           '40%': { y: -30, opacity: 1 },
//           '100%': { y: 0 }
//         }
//       },
//       '<'
//     )
//     .from(
//       slides[2],
//       {
//         duration,
//         ease,
//         y: 500,
//         keyframes: {
//           '0%': { y: 500, opacity: 0 },
//           '40%': { y: -35, opacity: 1 },
//           '100%': { y: 0 }
//         }
//       },
//       '<'
//     )
//     .from(
//       slides[3],
//       {
//         duration,
//         ease,
//         y: 500,
//         keyframes: {
//           '0%': { y: 500, opacity: 0 },
//           '40%': { y: -40, opacity: 1 },
//           '100%': { y: 0 }
//         }
//       },
//       '<'
//     )
//     .from(
//       tags[0],
//       {
//         duration,
//         ease,
//         x: -200,
//         y: -500,
//         opacity: 0,
//         rotateZ: 0,
//         keyframes: {
//           '0%': { x: -200, y: -500, opacity: 0, rotateZ: 0 },
//           '40%': { x: 10, y: 15, rotateZ: window.screen.width > 768 ? -9 : -10, opacity: 1 },
//           '100%': { x: 0, y: 0, rotateZ: window.screen.width > 768 ? -9 : -10, opacity: 1 }
//         }
//       },
//       0
//     )
//     .from(
//       tags[1],
//       {
//         duration,
//         ease,
//         x: -200,
//         y: -500,
//         opacity: 0,
//         rotateZ: 0,
//         keyframes: {
//           '0%': { x: -100, y: -500, opacity: 0, rotateZ: 0 },
//           '40%': { x: 5, y: 15, rotateZ: window.screen.width > 768 ? 6 : 9, opacity: 1 },
//           '100%': { x: 0, y: 0, rotateZ: window.screen.width > 768 ? 6 : 9, opacity: 1 }
//         }
//       },
//       '<'
//     )
//     .from(
//       tags[2],
//       {
//         duration,
//         ease,
//         y: -500,
//         opacity: 0,
//         rotateZ: 0,
//         keyframes: {
//           '0%': { y: -500, opacity: 0, rotateZ: 0 },
//           '40%': { y: 10, rotateZ: window.screen.width > 768 ? 7 : 11, opacity: 1 },
//           '100%': { y: 0, rotateZ: window.screen.width > 768 ? 7 : 11, opacity: 1 }
//         }
//       },
//       '<'
//     )
//     .from(
//       tags[3],
//       {
//         duration,
//         ease,
//         y: -200,
//         x: -400,
//         opacity: 0,
//         rotateZ: 0,
//         keyframes: {
//           '0%': { x: -400, y: -200, opacity: 0, rotateZ: 0 },
//           '40%': { x: 15, y: 5, rotateZ: window.screen.width > 768 ? 9 : 13, opacity: 1 },
//           '100%': { x: 0, y: 0, rotateZ: window.screen.width > 768 ? 9 : 13, opacity: 1 }
//         }
//       },
//       '<'
//     )
//     .from(
//       tags[4],
//       {
//         duration,
//         ease,
//         y: -400,
//         x: -200,
//         opacity: 0,
//         rotateZ: 0,
//         keyframes: {
//           '0%': { x: -200, y: -400, opacity: 0, rotateZ: 0 },
//           '40%': { x: 10, y: 5, rotateZ: window.screen.width > 768 ? 8 : -8, opacity: 1 },
//           '100%': { x: 0, y: 0, rotateZ: window.screen.width > 768 ? 8 : -8, opacity: 1 }
//         }
//       },
//       '<'
//     )
//     .from(
//       tags[5],
//       {
//         duration,
//         ease,
//         y: -400,
//         x: -100,
//         opacity: 0,
//         rotateZ: 0,
//         keyframes: {
//           '0%': { x: -100, y: -400, opacity: 0, rotateZ: 0 },
//           '40%': { x: 0, y: 10, rotateZ: window.screen.width > 768 ? -7 : 4, opacity: 1 },
//           '100%': { x: 0, y: 0, rotateZ: window.screen.width > 768 ? -7 : 4, opacity: 1 }
//         }
//       },
//       '<'
//     );
// };

// const loveAnimation = () => {
//   const block = document.querySelector('.love'),
//     titleLeft = block.querySelector('.love__title-left'),
//     titleRight = block.querySelector('.love__title-right'),
//     heart = block.querySelector('.love__heart'),
//     mainSlide = block.querySelector('.love__swiper-slide:first-child'),
//     slideBackground = block.querySelector('.love__swiper-background'),
//     sliderNavigation = block.querySelector('.love__swiper-navigation'),
//     tags = block.querySelectorAll('.love__tag'),
//     bottomLeft = block.querySelector('.love__bottom-text:first-child'),
//     bottomMiddle = block.querySelector('.love__bottom-swiper'),
//     bottomRight = block.querySelector('.love__bottom-text:last-child'),
//     duration = 3;

//   const timeline = gsap.timeline({
//     scrollTrigger: {
//       trigger: block,
//       start: 'top center'
//     }
//   });

//   timeline
//     .from(titleLeft, {
//       x: -1700,
//       duration,
//       keyframes: {
//         '0%': { x: -700 },
//         '40%': { x: 25 },
//         '100%': { x: 0 }
//       }
//     })
//     .from(
//       titleRight,
//       {
//         x: 1000,
//         duration,
//         keyframes: {
//           '0%': { x: 1000 },
//           '40%': { x: -25 },
//           '100%': { x: 0 }
//         }
//       },
//       0
//     )
//     .from(
//       heart,
//       {
//         y: -300,
//         opacity: 0,
//         scale: 2,
//         duration,
//         keyframes: {
//           '0%': { y: -300, opacity: 0, scale: 2.5 },
//           '40%': { y: 25, opacity: 1, scale: 1 },
//           '100%': { y: 0, opacity: 1, scale: 1 }
//         }
//       },
//       0
//     )
//     .from(
//       mainSlide,
//       {
//         y: 100,
//         duration,
//         keyframes: {
//           0: { y: 100 },
//           '40%': { y: -15, scale: 1.1 },
//           '100%': { y: 0, scale: 1 }
//         }
//       },
//       0
//     )
//     .from(
//       slideBackground,
//       {
//         y: 100,
//         scale: 0.5,
//         duration,
//         keyframes: {
//           '0%': { y: 100, scale: 0.5 },
//           '40%': { y: -15, scale: 1 },
//           '100%': { y: 0, scale: 1 }
//         }
//       },
//       0
//     )
//     .from(
//       sliderNavigation,
//       {
//         x: -500,
//         duration,
//         keyframes: {
//           '0%': { x: 500 },
//           '40%': { x: -25 },
//           '100%': { x: 0 }
//         }
//       },
//       0
//     )
//     .from(
//       tags[0],
//       {
//         y: -500,
//         opacity: 0,
//         rotateZ: -31,
//         duration,
//         keyframes: {
//           '0%': { y: -500, opacity: 0, rotateZ: -31 },
//           '40%': { y: 10, opacity: 1, rotateZ: 1 },
//           '100%': { y: 0, opacity: 1, rotateZ: -1 }
//         }
//       },
//       0
//     )
//     .from(
//       tags[1],
//       {
//         y: -470,
//         opacity: 0,
//         rotateZ: -31,
//         duration,
//         keyframes: {
//           '0%': { y: -470, opacity: 0, rotateZ: -31 },
//           '40%': { y: 10, opacity: 1, rotateZ: 12 },
//           '100%': { y: 0, opacity: 1, rotateZ: 9 }
//         }
//       },
//       0
//     )
//     .from(
//       tags[2],
//       {
//         y: -440,
//         opacity: 0,
//         rotateZ: -31,
//         duration,
//         keyframes: {
//           '0%': { y: -440, opacity: 0, rotateZ: -31 },
//           '40%': { y: 10, opacity: 1, rotateZ: -8 },
//           '100%': { y: 0, opacity: 1, rotateZ: -8 }
//         }
//       },
//       0
//     )
//     .from(
//       bottomLeft,
//       {
//         y: 100,
//         x: -50,
//         opacity: 0,
//         duration,
//         keyframes: {
//           '0%': { y: 100, x: -50, opacity: 0 },
//           '40%': { y: -10, x: 15, opacity: 1 },
//           '100%': { y: 0, x: 0, opacity: 1 }
//         }
//       },
//       0
//     )
//     .from(
//       bottomMiddle,
//       {
//         y: 100,
//         opacity: 0,
//         duration,
//         keyframes: {
//           '0%': { y: 100, opacity: 0 },
//           '40%': { y: -10, opacity: 1 },
//           '100%': { y: 0, opacity: 1 }
//         }
//       },
//       0
//     )
//     .from(
//       bottomRight,
//       {
//         y: 100,
//         x: 50,
//         opacity: 0,
//         duration,
//         keyframes: {
//           '0%': { y: 100, x: 50, opacity: 0 },
//           '40%': { y: -10, x: -15, opacity: 1 },
//           '100%': { y: 0, x: 0, opacity: 1 }
//         }
//       },
//       0
//     );
// };

// const developmentText = () => {
//   const title = document.querySelector('.development__title'),
//     bottomWords = document.querySelectorAll('.development__bottom-word');

//   const getLetters = (wordContainer) => {
//     return wordContainer.textContent
//       .split('')
//       .map((letter) => `<span>${letter}</span>`)
//       .join('');
//   };

//   title.innerHTML = getLetters(title);

//   bottomWords.forEach((word) => {
//     word.innerHTML = getLetters(word);
//   });
// };

// const developmentAnimation = () => {
//   const block = document.querySelector('.development'),
//     title = block.querySelector('.development__title'),
//     titleLetters = title.querySelectorAll('span'),
//     bottom = block.querySelector('.development__bottom'),
//     bottomChildrens = bottom.children,
//     image = block.querySelector('.development__image'),
//     left = block.querySelector('.development__left'),
//     right = block.querySelector('.development__right'),
//     duration = 3;

//   const bottomWords = [...bottomChildrens]
//     .filter((elem) => elem.classList.contains('development__bottom-word'))
//     .map((word) => [...word.children]);

//   const timeline = gsap.timeline({
//     scrollTrigger: {
//       trigger: block,
//       start: 'top center'
//     }
//   });

//   console.log(bottomWords[0][0]);

//   timeline
//     .from([...titleLetters].slice(0, 10), {
//       x: '-=400',
//       duration: duration - 2
//     })
//     .from(
//       [...titleLetters].slice(10),
//       {
//         x: '+=400',
//         duration: duration - 2
//       },
//       0
//     )
//     .from(
//       [...bottomChildrens].slice(0, 7),
//       {
//         x: '-=400',
//         duration: duration - 2
//       },
//       0
//     )
//     .from(
//       [...bottomChildrens][8],
//       {
//         x: '+=400',
//         duration: duration - 2
//       },
//       0
//     )
//     .from(
//       [...bottomChildrens][7],
//       {
//         y: '+=100',
//         duration: duration - 2
//       },
//       0
//     )
//     .to(image, {
//       scale: window.screen.width > 768 ? 3 : 1.4,
//       y: window.screen.width > 768 ? '+=230' : '+=30',
//       duration: duration - 1
//     })
//     .to(
//       titleLetters[0],
//       {
//         x: window.screen.width > 768 ? '21rem' : '-1rem',
//         y: window.screen.width > 768 ? '47rem' : '43.5rem',
//         rotateZ: -86,
//         duration: duration - 1
//       },
//       '<'
//     )
//     .to(
//       titleLetters[1],
//       {
//         x: window.screen.width > 768 ? '15rem' : '-4.5rem',
//         y: window.screen.width > 768 ? '40rem' : '39rem',
//         rotateZ: -78,
//         duration: duration - 1
//       },
//       '<'
//     )
//     .to(
//       titleLetters[2],
//       {
//         x: window.screen.width > 768 ? '10.5rem' : '-7rem',
//         y: window.screen.width > 768 ? '33.5rem' : '34.5rem',
//         rotateZ: -70,
//         duration: duration - 1
//       },
//       '<'
//     )
//     .to(
//       titleLetters[3],
//       {
//         x: window.screen.width > 768 ? '7rem' : '-9rem',
//         y: window.screen.width > 768 ? '27.5rem' : '31rem',
//         rotateZ: -63,
//         duration: duration - 1
//       },
//       '<'
//     )
//     .to(
//       titleLetters[4],
//       {
//         x: window.screen.width > 768 ? '3.5rem' : '-10.5rem',
//         y: window.screen.width > 768 ? '21.5rem' : '27rem',
//         rotateZ: -55,
//         duration: duration - 1
//       },
//       '<'
//     )
//     .to(
//       titleLetters[5],
//       {
//         x: window.screen.width > 768 ? '1rem' : '-11.75rem',
//         y: window.screen.width > 768 ? '16rem' : '23.5rem',
//         rotateZ: -47,
//         duration: duration - 1
//       },
//       '<'
//     )
//     .to(
//       titleLetters[6],
//       {
//         x: window.screen.width > 768 ? '-0.5rem' : '-12.5rem',
//         y: window.screen.width > 768 ? '11.5rem' : '20.5rem',
//         rotateZ: -39,
//         duration: duration - 1
//       },
//       '<'
//     )
//     .to(
//       titleLetters[7],
//       {
//         x: window.screen.width > 768 ? '-1.5rem' : '-12.75rem',
//         y: window.screen.width > 768 ? '8rem' : '18rem',
//         rotateZ: -32,
//         duration: duration - 1
//       },
//       '<'
//     )
//     .to(
//       titleLetters[8],
//       {
//         x: window.screen.width > 768 ? '-2.5rem' : '-12.5rem',
//         y: window.screen.width > 768 ? '4.5rem' : '16rem',
//         rotateZ: -24,
//         duration: duration - 1
//       },
//       '<'
//     )
//     .to(
//       titleLetters[9],
//       {
//         x: window.screen.width > 768 ? '-2rem' : '-12rem',
//         y: window.screen.width > 768 ? '2rem' : '14.5rem',
//         rotateZ: -16,
//         duration: duration - 1
//       },
//       '<'
//     )
//     .to(
//       titleLetters[11],
//       {
//         x: window.screen.width > 768 ? '0rem' : '-11rem',
//         y: window.screen.width > 768 ? '0rem' : '13.5rem',
//         rotateZ: -2,
//         duration: duration - 1
//       },
//       '<'
//     )
//     .to(
//       titleLetters[12],
//       {
//         x: window.screen.width > 768 ? '0.5rem' : '-10rem',
//         y: window.screen.width > 768 ? '1rem' : '14rem',
//         rotateZ: 8,
//         duration: duration - 1
//       },
//       '<'
//     )
//     .to(
//       titleLetters[13],
//       {
//         x: window.screen.width > 768 ? '0.5rem' : '-10rem',
//         y: window.screen.width > 768 ? '3rem' : '15.25rem',
//         rotateZ: 17,
//         duration: duration - 1
//       },
//       '<'
//     )
//     .to(
//       titleLetters[14],
//       {
//         x: window.screen.width > 768 ? '0rem' : '-9.75rem',
//         y: window.screen.width > 768 ? '5rem' : '16.75rem',
//         rotateZ: 25,
//         duration: duration - 1
//       },
//       '<'
//     )
//     .to(
//       titleLetters[15],
//       {
//         x: window.screen.width > 768 ? '-0.5rem' : '-10rem',
//         y: window.screen.width > 768 ? '8.5rem' : '18.75rem',
//         rotateZ: 32,
//         duration: duration - 1
//       },
//       '<'
//     )
//     .to(
//       titleLetters[16],
//       {
//         x: window.screen.width > 768 ? '-2rem' : '-10rem',
//         y: window.screen.width > 768 ? '12rem' : '21.25rem',
//         rotateZ: 39,
//         duration: duration - 1
//       },
//       '<'
//     )
//     .to(
//       titleLetters[18],
//       {
//         x: window.screen.width > 768 ? '-3rem' : '33rem',
//         y: window.screen.width > 768 ? '21rem' : '16rem',
//         rotateZ: 53,
//         duration: duration - 1
//       },
//       '<'
//     )
//     .to(
//       titleLetters[19],
//       {
//         x: window.screen.width > 768 ? '-6rem' : '31.5rem',
//         y: window.screen.width > 768 ? '27rem' : '20rem',
//         rotateZ: 61,
//         duration: duration - 1
//       },
//       '<'
//     )
//     .to(
//       titleLetters[20],
//       {
//         x: window.screen.width > 768 ? '-10rem' : '29.25rem',
//         y: window.screen.width > 768 ? '34rem' : '24.25rem',
//         rotateZ: 69,
//         duration: duration - 1
//       },
//       '<'
//     )
//     .to(
//       titleLetters[21],
//       {
//         x: window.screen.width > 768 ? '-15rem' : '26.5rem',
//         y: window.screen.width > 768 ? '40.5rem' : '28.5rem',
//         rotateZ: 77,
//         duration: duration - 1
//       },
//       '<'
//     )
//     .to(
//       titleLetters[22],
//       {
//         x: window.screen.width > 768 ? '-21rem' : '23rem',
//         y: window.screen.width > 768 ? '47rem' : '33rem',
//         rotateZ: 85,
//         duration: duration - 1
//       },
//       '<'
//     )
//     .to(
//       bottomWords[0][0],
//       {
//         x: window.screen.width > 768 ? '-3.5rem' : '0.75rem',
//         y: window.screen.width > 768 ? '25.25rem' : '-5rem',
//         rotateZ: 58,
//         duration: duration - 1
//       },
//       '<'
//     )
//     .to(
//       bottomWords[0][1],
//       {
//         x: window.screen.width > 768 ? '-3.6rem' : '0.1rem',
//         y: window.screen.width > 768 ? '26.35rem' : '-3.85rem',
//         rotateZ: 56,
//         duration: duration - 1
//       },
//       '<'
//     )
//     .to(
//       bottomWords[0][2],
//       {
//         x: window.screen.width > 768 ? '-3.75rem' : '-0.2rem',
//         y: window.screen.width > 768 ? '27.5rem' : '-3rem',
//         rotateZ: 55,
//         duration: duration - 1
//       },
//       '<'
//     )
//     .to(
//       bottomWords[0][3],
//       {
//         x: window.screen.width > 768 ? '-3.9rem' : '-0.6rem',
//         y: window.screen.width > 768 ? '28.75rem' : '-1.75rem',
//         rotateZ: 52,
//         duration: duration - 1
//       },
//       '<'
//     )
//     .to(
//       bottomWords[0][4],
//       {
//         x: window.screen.width > 768 ? '-4rem' : '-1.25rem',
//         y: window.screen.width > 768 ? '30.25rem' : '-0.5rem',
//         rotateZ: 50,
//         duration: duration - 1
//       },
//       '<'
//     )
//     .to(
//       bottomWords[1][0],
//       {
//         x: window.screen.width > 768 ? '-5.5rem' : '-1.75rem',
//         y: window.screen.width > 768 ? '37rem' : '5.6rem',
//         rotateZ: 36,
//         duration: duration - 1
//       },
//       '<'
//     )
//     .to(
//       bottomWords[1][1],
//       {
//         x: window.screen.width > 768 ? '-5.25rem' : '-1.9rem',
//         y: window.screen.width > 768 ? '38rem' : '6.5rem',
//         rotateZ: 34,
//         duration: duration - 1
//       },
//       '<'
//     )
//     .to(
//       bottomWords[1][2],
//       {
//         x: window.screen.width > 768 ? '-5rem' : '-2rem',
//         y: window.screen.width > 768 ? '39rem' : '7.25rem',
//         rotateZ: 32,
//         duration: duration - 1
//       },
//       '<'
//     )
//     .to(
//       bottomWords[1][3],
//       {
//         x: window.screen.width > 768 ? '-5rem' : '-2rem',
//         y: window.screen.width > 768 ? '39.75rem' : '8rem',
//         rotateZ: 30,
//         duration: duration - 1
//       },
//       '<'
//     )
//     .to(
//       bottomWords[1][4],
//       {
//         x: window.screen.width > 768 ? '-4.75rem' : '-2rem',
//         y: window.screen.width > 768 ? '40.4rem' : '8.6rem',
//         rotateZ: 28,
//         duration: duration - 1
//       },
//       '<'
//     )
//     .to(
//       bottomWords[1][5],
//       {
//         x: window.screen.width > 768 ? '-4.5rem' : '-2rem',
//         y: window.screen.width > 768 ? '41rem' : '9.25rem',
//         rotateZ: 26,
//         duration: duration - 1
//       },
//       '<'
//     )
//     .to(
//       bottomWords[2][0],
//       {
//         x: window.screen.width > 768 ? '-3.5rem' : '-0.8rem',
//         y: window.screen.width > 768 ? '44.4rem' : '11.9rem',
//         rotateZ: 12,
//         duration: duration - 1
//       },
//       '<'
//     )
//     .to(
//       bottomWords[2][1],
//       {
//         x: window.screen.width > 768 ? '-3rem' : '-0.75rem',
//         y: window.screen.width > 768 ? '44.75rem' : '12.2rem',
//         rotateZ: 10,
//         duration: duration - 1
//       },
//       '<'
//     )
//     .to(
//       bottomWords[2][2],
//       {
//         x: window.screen.width > 768 ? '-2.75rem' : '-0.6rem',
//         y: window.screen.width > 768 ? '45rem' : '12.5rem',
//         rotateZ: 8,
//         duration: duration - 1
//       },
//       '<'
//     )
//     .to(
//       bottomWords[2][3],
//       {
//         x: window.screen.width > 768 ? '-2.25rem' : '-0.5rem',
//         y: window.screen.width > 768 ? '45.25rem' : '12.75rem',
//         rotateZ: 7,
//         duration: duration - 1
//       },
//       '<'
//     )
//     .to(
//       bottomWords[2][4],
//       {
//         x: window.screen.width > 768 ? '-1.75rem' : '-0.5rem',
//         y: window.screen.width > 768 ? '45.4rem' : '12.9rem',
//         rotateZ: 4.8,
//         duration: duration - 1
//       },
//       '<'
//     )
//     .to(
//       bottomWords[3][0],
//       {
//         x: window.screen.width > 768 ? '-0.75rem' : '1.25rem',
//         y: window.screen.width > 768 ? '45.25rem' : '12.5rem',
//         rotateZ: -8,
//         duration: duration - 1
//       },
//       '<'
//     )
//     .to(
//       bottomWords[3][1],
//       {
//         x: window.screen.width > 768 ? '-0.1rem' : '1.5rem',
//         y: window.screen.width > 768 ? '45rem' : '12.25rem',
//         rotateZ: -10,
//         duration: duration - 1
//       },
//       '<'
//     )
//     .to(
//       bottomWords[3][2],
//       {
//         x: window.screen.width > 768 ? '0.5rem' : '1.5rem',
//         y: window.screen.width > 768 ? '44.75rem' : '12rem',
//         rotateZ: -12,
//         duration: duration - 1
//       },
//       '<'
//     )
//     .to(
//       bottomWords[3][3],
//       {
//         x: window.screen.width > 768 ? '0.75rem' : '1.75rem',
//         y: window.screen.width > 768 ? '44.4rem' : '11.7rem',
//         rotateZ: -14,
//         duration: duration - 1
//       },
//       '<'
//     )
//     .to(
//       bottomWords[3][4],
//       {
//         x: window.screen.width > 768 ? '1.25rem' : '1.75rem',
//         y: window.screen.width > 768 ? '44rem' : '11.4rem',
//         rotateZ: -16,
//         duration: duration - 1
//       },
//       '<'
//     )
//     .to(
//       bottomWords[3][5],
//       {
//         x: window.screen.width > 768 ? '1.5rem' : '1.75rem',
//         y: window.screen.width > 768 ? '43.75rem' : '11rem',
//         rotateZ: -18,
//         duration: duration - 1
//       },
//       '<'
//     )
//     .to(
//       bottomWords[3][6],
//       {
//         x: window.screen.width > 768 ? '2rem' : '1.75rem',
//         y: window.screen.width > 768 ? '43.25rem' : '10.5rem',
//         rotateZ: -20,
//         duration: duration - 1
//       },
//       '<'
//     )
//     .to(
//       bottomWords[3][7],
//       {
//         x: window.screen.width > 768 ? '2.25rem' : '1.75rem',
//         y: window.screen.width > 768 ? '42.75rem' : '10rem',
//         rotateZ: -22,
//         duration: duration - 1
//       },
//       '<'
//     )
//     .to(
//       bottomWords[4][0],
//       {
//         x: window.screen.width > 768 ? '3.25rem' : '2.1rem',
//         y: window.screen.width > 768 ? '35rem' : '3.5rem',
//         rotateZ: -42,
//         duration: duration - 1
//       },
//       '<'
//     )
//     .to(
//       bottomWords[4][1],
//       {
//         x: window.screen.width > 768 ? '3.25rem' : '1.9rem',
//         y: window.screen.width > 768 ? '34.25rem' : '2.5rem',
//         rotateZ: -43,
//         duration: duration - 1
//       },
//       '<'
//     )
//     .to(
//       bottomWords[4][2],
//       {
//         x: window.screen.width > 768 ? '3.25rem' : '1.75rem',
//         y: window.screen.width > 768 ? '33.25rem' : '1.5rem',
//         rotateZ: -46,
//         duration: duration - 1
//       },
//       '<'
//     )
//     .to(
//       bottomWords[4][3],
//       {
//         x: window.screen.width > 768 ? '3.25rem' : '1rem',
//         y: window.screen.width > 768 ? '31.75rem' : '0.4rem',
//         rotateZ: -48,
//         duration: duration - 1
//       },
//       '<'
//     )
//     .to(
//       bottomWords[4][4],
//       {
//         x: window.screen.width > 768 ? '3.25rem' : '0.75rem',
//         y: window.screen.width > 768 ? '30.5rem' : '-0.75rem',
//         rotateZ: -50,
//         duration: duration - 1
//       },
//       '<'
//     )
//     .to(
//       bottomWords[4][6],
//       {
//         x: window.screen.width > 768 ? '4rem' : '0.75rem',
//         y: window.screen.width > 768 ? '28.25rem' : '-2.5rem',
//         rotateZ: -54,
//         duration: duration - 1
//       },
//       '<'
//     )
//     .to(
//       bottomWords[4][7],
//       {
//         x: window.screen.width > 768 ? '3.5rem' : '0.3rem',
//         y: window.screen.width > 768 ? '27.2rem' : '-3.5rem',
//         rotateZ: -56,
//         duration: duration - 1
//       },
//       '<'
//     )
//     .to(
//       bottomWords[4][8],
//       {
//         x: window.screen.width > 768 ? '3.25rem' : '-0.25rem',
//         y: window.screen.width > 768 ? '25.75rem' : '-4.75rem',
//         rotateZ: -58,
//         duration: duration - 1
//       },
//       '<'
//     )
//     .to(
//       bottomWords[4][9],
//       {
//         x: window.screen.width > 768 ? '3rem' : '-0.75rem',
//         y: window.screen.width > 768 ? '25.5rem' : '-6rem',
//         rotateZ: -60,
//         duration: duration - 1
//       },
//       '<'
//     )
//     .to(
//       bottomChildrens[1],
//       {
//         x: window.screen.width > 768 ? '-5.25rem' : '-2rem',
//         y: window.screen.width > 768 ? '34rem' : '2.5rem',
//         rotateZ: 45,
//         duration: duration - 1
//       },
//       '<'
//     )
//     .to(
//       bottomChildrens[3],
//       {
//         x: window.screen.width > 768 ? '-3.75rem' : '-1.25rem',
//         y: window.screen.width > 768 ? '43.5rem' : '10.75rem',
//         rotateZ: 15,
//         duration: duration - 1
//       },
//       '<'
//     )
//     .to(
//       bottomChildrens[5],
//       {
//         x: window.screen.width > 768 ? '-1rem' : '0.25rem',
//         y: window.screen.width > 768 ? '45.75rem' : '12.75rem',
//         rotateZ: 3,
//         duration: duration - 1
//       },
//       '<'
//     )
//     .to(
//       bottomChildrens[7],
//       {
//         x: window.screen.width > 768 ? '6.5rem' : '3rem',
//         y: window.screen.width > 768 ? '37.25rem' : '6.75rem',
//         rotateZ: -2,
//         duration: duration - 1
//       },
//       '<'
//     )
//     .from(
//       left,
//       {
//         scale: 0.5,
//         x: -500,
//         y: 500,
//         duration: duration - 1
//       },
//       '<'
//     )
//     .from(
//       right,
//       {
//         scale: 0.5,
//         x: 500,
//         y: 500,
//         duration: duration - 1
//       },
//       '<'
//     );
// };

const solutionsAnimation = () => {
  const block = document.querySelector('.solutions'),
    subtitle = block.querySelector('.solutions__subtitle-wrapper'),
    circles = block.querySelectorAll('.solutions__circle-icon'),
    bottomBtn = block.querySelector('.solutions__row-button'),
    bottomTexts = block.querySelectorAll('.solutions__row-text'),
    title = block.querySelector('.solutions__title-wrapper'),
    // background = block.querySelector('.solutions__background'),
    duration = 3;

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: block,
      start: 'top center'
    }
  });

  timeline
    .from(subtitle, {
      y: '-=100',
      duration: duration - 2
    })
    .from(
      circles[1],
      {
        y: '-=400',
        duration: duration - 2
      },
      '<'
    )
    .from(
      circles[2],
      {
        x: '+=500',
        duration: duration - 2
      },
      '<'
    )
    .from(
      circles[0],
      {
        y: '-=500',
        duration: duration - 2
      },
      '>-1'
    )
    .from(
      bottomBtn,
      {
        y: '+=200',
        duration: duration - 2
      },
      0
    )
    .from(
      bottomTexts,
      {
        height: 0,
        y: '-=5.4rem',
        duration: duration - 2
      },
      '<'
    )
    .from(
      title,
      {
        rotate: -15,
        y: '+=100',
        height: 0,
        duration: duration - 2
      },
      '<'
    );
  // .from(
  //   background,
  //   {
  //     y: '+=200',
  //     duration: duration - 2
  //   },
  //   '<'
  // );
};

const afterSolutionsAnimation = () => {
  const block = document.querySelector('.solutions'),
    btn = document.querySelector('.solutions__row-button'),
    icon = document.querySelector('.solutions__circle-icon:nth-child(3)'),
    swiperIcon = document.querySelector('.advantages__icons-swiper--icon'),
    duration = 1.5;

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: block,
      start: 'bottom center'
    }
  });

  timeline
    .to(btn, {
      x: window.screen.width > 768 ? '52rem' : '0rem',
      y: window.screen.width > 768 ? '61rem' : '147rem',
      duration
    })
    .to(
      icon,
      {
        x: window.screen.width > 768 ? '-8.95rem' : '-2.4rem',
        y: window.screen.width > 768 ? '95.7rem' : '299.7rem',
        onComplete: () => {
          icon.style.visibility = 'hidden';
          swiperIcon.style.visibility = 'visible';
        },
        duration
      },
      '<'
    );
};

const Swipers = () => {
  const catalogBlockSwiper = new Swiper('.catalog-block__swiper', {
    slidesPerView: 1.2,
    spaceBetween: 20,
    allowTouchMove: true,

    breakpoints: {
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
        allowTouchMove: false
      }
    },

    navigation: {
      prevEl: '.catalog-block__swiper-btn--prev',
      nextEl: '.catalog-block__swiper-btn--next'
    }
  });

  const mainSwiper = new Swiper('.love__swiper', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    speed: 1000,
    effect: 'creative',

    creativeEffect: {
      prev: {
        translate: [-1000, 0, 0],
        scale: 0.1,
        opacity: 0
      },

      next: {
        translate: [1000, 0, 0],
        scale: 0.1,
        opacity: 0
      }
    },

    navigation: {
      nextEl: '.love__swiper-btn--next',
      prevEl: '.love__swiper-btn--prev'
    }
  });

  const tagsSwiper = new Swiper('.love__tags-swiper', {
    direction: 'vertical',
    slidesPerView: 1,
    slidesPerGroup: 1,
    speed: 1000,
    effect: 'creative',

    creativeEffect: {
      prev: {
        translate: [-500, 0, 0],
        opacity: 0
      },

      next: {
        translate: window.screen.width > 768 ? [0, '-150%', 0] : [500, 0, 0],
        opacity: 0
      }
    },

    navigation: {
      nextEl: '.love__swiper-btn--next',
      prevEl: '.love__swiper-btn--prev'
    }
  });

  const textSwiper = new Swiper('.love__bottom-swiper', {
    direction: 'horizontal',
    slidesPerView: 1,
    slidesPerGroup: 1,
    speed: 1000,
    autoHeight: true,
    effect: 'creative',

    breakpoints: {
      768: {
        direction: 'vertical',
        autoHeight: false
      }
    },

    creativeEffect: {
      prev: {
        translate: window.screen.width > 768 ? [0, '-150%', 0] : [-500, 0, 0]
      },

      next: {
        translate: window.screen.width > 768 ? [0, '100%', 0] : [500, 0, 0],
        opacity: window.screen.width > 768 ? 0 : 1
      }
    },

    navigation: {
      nextEl: '.love__swiper-btn--next',
      prevEl: '.love__swiper-btn--prev'
    }
  });

  const advantagesIconsSwiper = new Swiper('.advantages__icons-swiper', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    speed: 1000,
    effect: 'fade',
    allowTouchMove: false
  });

  const advantagesTextSwiper = new Swiper('.advantages__text-swiper', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    speed: 1000,
    autoHeight: true,
    allowTouchMove: false,
    spaceBetween: 10
  });

  const advantagesTagsSwiper = new Swiper('.advantages__tags-swiper', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    speed: 1000,
    allowTouchMove: false,
    effect: 'creative',

    creativeEffect: {
      next: {
        translate: [0, '150%', 0],
        opacity: 0
      },

      prev: {
        translate: ['100rem', 0, 0],
        opacity: 0
      }
    }
  });

  const advantagesTitlesSwiper = new Swiper('.advantages__titles-swiper', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    speed: 1000,
    mousewheel: true,
    autoHeight: true,
    effect: 'creative',

    controller: {
      control: [advantagesTagsSwiper, advantagesTextSwiper, advantagesIconsSwiper]
    },

    creativeEffect: {
      next: {
        translate: window.screen.width > 768 ? [0, '110%', 0] : [0, '200%', 0]
      },

      prev: {
        translate: [0, '-110%', 0]
      }
    },

    on: {
      slideChange: (swiper) => {
        const activeSlide = swiper.activeIndex;

        document.querySelector('.advantages__number').textContent =
          activeSlide + 1 < 10 ? `0${activeSlide + 1}` : activeSlide + 1;
      }
    },

    breakpoints: {
      768: {
        autoHeight: false
      }
    }
  });
};
