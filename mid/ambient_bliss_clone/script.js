document.addEventListener('DOMContentLoaded', () => {
	// Mobile Menu Toggle
	const menuToggle = document.querySelector('.menu-toggle');
	const navLinks = document.querySelector('.nav-links');

	if (menuToggle) {
		menuToggle.addEventListener('click', () => {
			navLinks.classList.toggle('active');
		});
	}

	// Hero Carousel
	const slides = document.querySelectorAll('.slide');
	const nextBtn = document.querySelector('.next');
	const prevBtn = document.querySelector('.prev');
	let currentSlide = 0;
	const slideInterval = 5000; // 5 seconds

	function showSlide(index) {
		// Handle wrapping
		if (index >= slides.length) {
			currentSlide = 0;
		} else if (index < 0) {
			currentSlide = slides.length - 1;
		} else {
			currentSlide = index;
		}

		// Remove active class from all
		slides.forEach(slide => slide.classList.remove('active'));

		// Add active class to current
		slides[currentSlide].classList.add('active');
	}

	function nextSlide() {
		showSlide(currentSlide + 1);
	}

	function prevSlide() {
		showSlide(currentSlide - 1);
	}

	// Event Listeners
	if (nextBtn) nextBtn.addEventListener('click', nextSlide);
	if (prevBtn) prevBtn.addEventListener('click', prevSlide);

	// Autoplay
	setInterval(nextSlide, slideInterval);
});
