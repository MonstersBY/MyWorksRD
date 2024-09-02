import '../utils/switcher';
import '../utils/fancybox';

import '../pages/contacts';
import '../pages/project-detail';
import '../pages/subcategory';
import '../pages/audio';

import "animate.css";
import WOW from "wow.js";

const wow = new WOW({
	boxClass: "wow",
	animateClass: "animate__animated",
	offset: 100,
	mobile: true,
	live: true,
});
wow.init();