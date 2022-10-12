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
	const advantagesSwiper = new Swiper(".advantages-swiper", {
		// configure Swiper to use modules
		modules: [Navigation, Pagination],
		pagination: {
			el: ".advantages-pagination",
			type: "bullets",
			clickable: true,
		},
		navigation: {
			nextEl: ".advantages-button-next",
			prevEl: ".advantages-button-prev",
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
				slidesPerView: "auto",
			},
		},
	});
	const infographicsSwiper = new Swiper(".infographics-swiper", {
		// configure Swiper to use modules
		modules: [Navigation, Pagination],
		pagination: {
			el: ".infographics-pagination",
			type: "bullets",
			clickable: true,
		},
		navigation: {
			nextEl: ".infographics-button-next",
			prevEl: ".infographics-button-prev",
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
				spaceBetween: 0,
				slidesPerView: "auto",
			},
		},
	});
}
