document.addEventListener("DOMContentLoaded", function () {

    // === Typing Text Effect ===
    const texts = ["Full Stack Developer", "Web Developer", "UI/UX Designer"];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingElement = document.querySelector(".typing-text");
  
    if (typingElement) {
      typingElement.style.display = "inline";
      typingElement.style.alignItems = "center";
      typingElement.style.whiteSpace = "nowrap";
    }
  
    function type() {
      if (!typingElement) return;
  
      const currentText = texts[textIndex];
  
      if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
      }
  
      let typingSpeed = isDeleting ? 60 : 120;
  
      if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        typingSpeed = 1500;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typingSpeed = 500;
      }
  
      setTimeout(type, typingSpeed);
    }
  
    setTimeout(type, 1000);
  
    // === Smooth Scrolling for Internal Links ===
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        if (targetId === "#") return;
  
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: "smooth",
          });
        }
      });
    });
  
  // Select elements
  const menuIcon = document.querySelector('.menu-icon');
  const navMenu = document.querySelector('.navbar ul');
  const navLinks = document.querySelectorAll('.navbar ul li a');
  
  // Toggle menu on menu-icon click
  menuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('active'); // Show or hide the menu
    menuIcon.classList.toggle('active'); // (Optional) Add animation to menu icon
  });
  
  // Close menu when any nav link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      menuIcon.classList.remove('active');
    });
  });
  
  // Optional: Close the menu if user clicks outside the navbar (mobile)
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.navbar') && !event.target.closest('.menu-icon')) {
      navMenu.classList.remove('active');
      menuIcon.classList.remove('active');
    }
  });
  
  // Add this script tag in your HTML <head> or before the closing </body> tag:
  // <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
  
  // Initialize EmailJS with your Public Key
  // Replace 'YOUR_PUBLIC_KEY' with your actual EmailJS Public Key
  (function() {
      emailjs.init('whPnjoO1IAixXmFpA');
  })();
  
  // Get the form element
  const form = document.getElementById('contact-form');
  
  form.addEventListener('submit', function(event) {
      event.preventDefault(); // Stop the default form submission
  
      // Use the EmailJS SDK to send the form
      // Replace the placeholders with your actual Service ID, Template ID, and Form ID
      emailjs.sendForm('service_5lnpm57', 'template_jjyceco', this)
          .then(function() {
              alert('SUCCESS! Your message has been sent.');
              form.reset(); // Clear the form fields on success
          }, function(error) {
              console.log('FAILED...', error);
              alert('FAILED to send message. Please try again later.');
          });
  });
  });
  