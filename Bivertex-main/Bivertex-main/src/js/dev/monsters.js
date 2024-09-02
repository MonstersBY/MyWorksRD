import "../components/our_machines.js";
import "../components/benchs.js";
import "../pages/popup-order.js";
import "../pages/configurator.js";

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