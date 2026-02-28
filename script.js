// Navigation toggle for mobile
const navToggle = document.querySelector(".psp-nav-toggle");
const nav = document.querySelector(".psp-nav");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// Video modal interactions
const videoModal = document.getElementById("videoModal");
const openVideoModal = document.getElementById("openVideoModal");
const closeVideoModal = document.getElementById("closeVideoModal");
const pspVideo = document.getElementById("pspVideo");
const watchReelBtn = document.getElementById("watchReelBtn");

function openModal() {
  videoModal.classList.add("active");
  videoModal.setAttribute("aria-hidden", "false");
  pspVideo.currentTime = 0;
  pspVideo.play();
}

function closeModal() {
  videoModal.classList.remove("active");
  videoModal.setAttribute("aria-hidden", "true");
  pspVideo.pause();
}

openVideoModal.addEventListener("click", openModal);
watchReelBtn.addEventListener("click", openModal);
closeVideoModal.addEventListener("click", closeModal);
videoModal.addEventListener("click", (e) => {
  if (e.target.classList.contains("psp-video-backdrop")) {
    closeModal();
  }
});

// GSAP scroll animations
window.addEventListener("load", () => {
  if (window.gsap) {
    gsap.registerPlugin(ScrollTrigger);

    // Hero entrance
    gsap.from(".psp-title", {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });
    gsap.from(".psp-subtitle", {
      y: 30,
      opacity: 0,
      duration: 1,
      delay: 0.15,
      ease: "power3.out"
    });
    gsap.from(".psp-hero-cta", {
      y: 20,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      ease: "power3.out"
    });
    gsap.from("#videoHolder", {
      x: 40,
      opacity: 0,
      duration: 1.1,
      delay: 0.25,
      ease: "power3.out"
    });

    // About cards stagger
    gsap.from(".psp-card", {
      scrollTrigger: {
        trigger: ".psp-about",
        start: "top 75%"
      },
      y: 40,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: "power2.out"
    });

    // Work items
    gsap.from(".psp-work-item", {
      scrollTrigger: {
        trigger: ".psp-work",
        start: "top 70%"
      },
      y: 40,
      opacity: 0,
      stagger: 0.12,
      duration: 0.8,
      ease: "power2.out"
    });

    // Contact section
    gsap.from(".psp-form", {
      scrollTrigger: {
        trigger: ".psp-contact",
        start: "top 75%"
      },
      y: 40,
      opacity: 0,
      duration: 0.9,
      ease: "power2.out"
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const videoModal = document.getElementById('videoModal');
  const openBtn = document.getElementById('openVideoModal');
  const watchReelBtn = document.getElementById('watchReelBtn');
  const closeBtn = document.getElementById('closeVideoModal');
  const iframe = videoModal.querySelector('iframe');
  const videoSrc = iframe.src;

  // Function to open modal
  const openModal = () => {
    videoModal.style.display = 'flex';
    videoModal.setAttribute('aria-hidden', 'false');
    // Autoplay trick: append autoplay to the URL when opened
    iframe.src = videoSrc + "?autoplay=1";
  };

  // Function to close modal
  const closeModal = () => {
    videoModal.style.display = 'none';
    videoModal.setAttribute('aria-hidden', 'true');
    // Reset src to stop the video from playing in the background
    iframe.src = "";
    iframe.src = videoSrc;
  };

  // Event Listeners
  openBtn.addEventListener('click', openModal);
  watchReelBtn.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);

  // Close if clicking outside the video dialog
  videoModal.addEventListener('click', (e) => {
    if (e.target.classList.contains('psp-video-backdrop')) {
      closeModal();
    }
  });
});
