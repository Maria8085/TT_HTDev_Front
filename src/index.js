import "./index.html";
import "./index.scss";
import Swiper, { Navigation, Pagination } from "swiper";

// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

document.addEventListener("DOMContentLoaded", init);

function init() {
	const buttonAdvantages = document.getElementsByClassName("buttonAdvantages");
	[...buttonAdvantages].map((buttonElement) => {
		buttonElement.addEventListener("click", (element) => {
			console.log(element.target.parentElement);
			element.target.parentElement.classList.toggle("active");
		});
	});
	// init Swiper:
	const swiper = new Swiper(".swiper", {
		// configure Swiper to use modules
		modules: [Navigation, Pagination],
		pagination: {
			el: ".swiper-pagination",
			type: "bullets",
			clickable: true,
		},
		navigation: {
			nextEl: ".button-next",
			prevEl: ".button-prev",
		},
		breakpoints: {
			320: {
				spaceBetween: 35,
				slidesPerView: 1,
			},
			700: {
				enabled: true,
				spaceBetween: 25,
				slidesPerView: 2,
			},
			1020: {
				enabled: false,
			},
		},
	});
}
