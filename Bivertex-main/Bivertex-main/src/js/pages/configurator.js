import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger,ScrollToPlugin)

// slider
$(document).ready(function () {
    if (!document.querySelector('.promotions__test')) return;
  
    const sections = gsap.utils.toArray('.promotions__banner-right--item');
    const quant = sections.length;
    const scrollStep = 400;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.promotions__test',
        pin: true,
        start: 'top top',
        end: () => '+=' + quant * scrollStep,
      }
    });
  
    gsap.registerPlugin(ScrollTrigger);
  
    gsap.set('.promotions__banner-right--container', {autoAlpha:1});
  
    var allSections = gsap.utils.toArray(".promotions__banner-right--item");
    gsap.set(allSections[0], {position:'fixed'})
    var allSectionsNotFirst = allSections.slice(1);
    gsap.set(allSectionsNotFirst, {position:'absolute', yPercent:100});
  
    var allPhotos = gsap.utils.toArray(".promotions__banner-left--item");
    gsap.set(allPhotos, {position:'fixed'});
    var allPhotosNotFirst = allPhotos.slice(1);
    gsap.set(allPhotos, {autoAlpha:0});
    gsap.set(allPhotos[0], {autoAlpha:1});
  
    // ================
    var allTrigger = gsap.utils.toArray(".trigger");
  
    gsap.set(allTrigger, {visibility:'hidden'})
  
    // ========================
    allSectionsNotFirst.forEach((section, i) => {
      gsap.timeline({
        scrollTrigger:{
          trigger: allTrigger[i],
          start:"top top",
          toggleActions: "play none none reverse",
        }
      })
      .to(section, {
        yPercent:0, 
        duration:1, //ease:,
        ease: 'power3.inOut',
      })
    });
    allSectionsNotFirst.forEach((section, i) => {
      gsap.timeline({
        scrollTrigger:{
          trigger: allTrigger[i],
          start:"top top",
          toggleActions: "play none none reverse",
        }
      })
      .to(allSections[i], {
        yPercent:-100, 
        duration:1, //ease:,
        ease: 'power3.inOut',
      })
    });
    allSectionsNotFirst.forEach((section, i) => {
      gsap.timeline({
        scrollTrigger:{
          trigger: allTrigger[i],
          start:"top top",
          toggleActions: "play none none reverse",
        }
      })
      .to(allPhotosNotFirst[i], {
        autoAlpha: 1,
        duration: 1,
        ease: 'power3.inOut',
      })
    });
});
