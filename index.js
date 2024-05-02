document.addEventListener("DOMContentLoaded", function () {
  const prevButton = document.querySelector(".buttons-prev-next-icon .prev");
  const nextButton = document.querySelector(".buttons-prev-next-icon .next");
  const slides = document.querySelector(".banner");
  let currentSlide = 0;
  let intervalId;

  function showSlide(index) {
    currentSlide = index;
    const offset = -index * 100;
    slides.style.transform = `translateX(${offset}%)`;
  }

  function startAutoScroll() {
    intervalId = setInterval(() => {
      currentSlide = (currentSlide + 1) % 3;
      showSlide(currentSlide);
    }, 3000); // Change the interval time (in milliseconds) as needed
  }

  function stopAutoScroll() {
    clearInterval(intervalId);
  }

  prevButton.addEventListener("click", function () {
    stopAutoScroll();
    currentSlide = (currentSlide - 1 + 3) % 3;
    showSlide(currentSlide);
    startAutoScroll();
  });

  nextButton.addEventListener("click", function () {
    stopAutoScroll();
    currentSlide = (currentSlide + 1) % 3;
    showSlide(currentSlide);
    startAutoScroll();
  });

  // Start autoscroll initially
  startAutoScroll();

  // Stop autoscroll when user interacts with the slideshow
  slides.addEventListener("mouseover", stopAutoScroll);
  slides.addEventListener("mouseleave", startAutoScroll);
});

submitButton = document.querySelector(".submit");
submitButton.addEventListener(function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "username",
    Mobilenumber: "mobilenumber",
    Password: "password",
    To: "them@website.com",
    From: "you@isp.com",
    Subject: "This is the subject",
    Body: "And this is the body",
  }).then((message) => alert(message));
});
