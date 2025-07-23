// ====== PRELOADER ======
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('preloader').style.opacity = 0;
    setTimeout(() => {
      document.getElementById('preloader').style.display = 'none';
    }, 700);
  }, 900);
});

// ====== DARK/LIGHT TOGGLE ======
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  localStorage.setItem('theme', document.body.classList.contains('light') ? 'light' : 'dark');
});
// Persist theme
if (localStorage.getItem('theme') === 'light') document.body.classList.add('light');

// ====== CUSTOM CURSOR ======
const cursor = document.getElementById('custom-cursor');
let mouseX = 0, mouseY = 0, cursorX = 0, cursorY = 0;
const lerp = (a, b, n) => (1 - n) * a + n * b;
function animateCursor() {
  cursorX = lerp(cursorX, mouseX, 0.18);
  cursorY = lerp(cursorY, mouseY, 0.18);
  cursor.style.left = cursorX + 'px';
  cursor.style.top = cursorY + 'px';
  requestAnimationFrame(animateCursor);
}
window.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});
animateCursor();
// Cursor hover effect
const hoverables = 'a, button, .cta-btn, .skill-item, .project-card, .btn-secondary';
document.querySelectorAll(hoverables).forEach(el => {
  el.addEventListener('mouseenter', () => cursor.classList.add('cursor-hover'));
  el.addEventListener('mouseleave', () => cursor.classList.remove('cursor-hover'));
});
// Cursor click effect
window.addEventListener('mousedown', () => cursor.style.transform += ' scale(0.85)');
window.addEventListener('mouseup', () => cursor.classList.remove('cursor-click'));

// ====== NAV TOGGLE FOR MOBILE ======
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
navToggle.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', !expanded);
  navLinks.classList.toggle('open');
});
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ====== SMOOTH SCROLL & ACTIVE NAV ======
const navLinkEls = document.querySelectorAll('.nav-link');
navLinkEls.forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const scrollPos = window.scrollY + 120;
  sections.forEach(sec => {
    if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
      navLinkEls.forEach(link => link.classList.remove('active'));
      const activeLink = document.querySelector('.nav-link[href="#' + sec.id + '"]');
      if (activeLink) activeLink.classList.add('active');
    }
  });
});

// ====== HERO TYPED INTRO ANIMATION ======
const typedText = document.getElementById('typed-text');
const introPhrases = [
  "I build bold, immersive web experiences.",
  "I love creative code & animation.",
  "Let's break the rules of minimalism!"
];
let phraseIdx = 0, charIdx = 0, typing = true;
function typeLoop() {
  if (!typedText) return;
  if (typing) {
    if (charIdx < introPhrases[phraseIdx].length) {
      typedText.textContent += introPhrases[phraseIdx][charIdx++];
      setTimeout(typeLoop, 38 + Math.random() * 60);
    } else {
      typing = false;
      setTimeout(typeLoop, 1200);
    }
  } else {
    if (charIdx > 0) {
      typedText.textContent = introPhrases[phraseIdx].slice(0, --charIdx);
      setTimeout(typeLoop, 18 + Math.random() * 30);
    } else {
      typing = true;
      phraseIdx = (phraseIdx + 1) % introPhrases.length;
      setTimeout(typeLoop, 400);
    }
  }
}
typeLoop();

// ====== HERO PARALLAX ======
const parallaxEls = document.querySelectorAll('.parallax');
window.addEventListener('mousemove', e => {
  parallaxEls.forEach((el, i) => {
    const speed = (i + 1) * 0.04;
    const x = (e.clientX / window.innerWidth - 0.5) * 60 * speed;
    const y = (e.clientY / window.innerHeight - 0.5) * 60 * speed;
    el.style.transform = `translate(${x}px, ${y}px)`;
  });
});

// ====== SCROLL-TRIGGERED ANIMATIONS ======
const animatedEls = document.querySelectorAll('.about-text, .skill-item, .project-card');
function animateOnScroll() {
  animatedEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      el.style.opacity = 1;
      el.style.transform = 'none';
      el.style.transition = 'opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1)';
    }
  });
}
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// ====== FUN FACT BUTTON ======
const funFacts = [
  "I can code for hours with just coffee! ☕",
  "I love solving Rubik's cubes.",
  "My favorite code editor is VS Code.",
  "I once built a website in under 24 hours!",
  "I enjoy hiking and nature photography.",
  "I have a collection of funky socks! 🧦"
];
const funFactBtn = document.getElementById('funFactBtn');
if (funFactBtn) {
  funFactBtn.addEventListener('click', () => {
    const fact = funFacts[Math.floor(Math.random() * funFacts.length)];
    document.getElementById('funFactText').textContent = fact;
  });
}

// ====== SKILLS PROGRESS ANIMATION ======
window.addEventListener('load', () => {
  document.querySelectorAll('.progress').forEach(bar => {
    const width = bar.style.width;
    bar.style.width = '0';
    setTimeout(() => {
      bar.style.transition = 'width 1.2s cubic-bezier(.4,0,.2,1)';
      bar.style.width = width;
    }, 400);
  });
});

// ====== PROJECT MODAL/LIGHTBOX ======
const modal = document.getElementById('projectModal');
const modalImg = document.getElementById('modalImg');
const modalDesc = document.getElementById('modalDesc');
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', e => {
    if (e.target.tagName.toLowerCase() === 'a') return;
    const img = card.querySelector('img');
    const info = card.querySelector('.project-info');
    modalImg.src = img.src;
    modalImg.alt = img.alt;
    modalDesc.innerHTML = info.innerHTML;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    modal.querySelector('.close-modal').focus();
  });
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      card.click();
    }
  });
});
const closeModal = () => {
  modal.style.display = 'none';
  document.body.style.overflow = '';
};
modal.querySelector('.close-modal').onclick = closeModal;
window.addEventListener('keydown', e => {
  if (modal.style.display === 'flex' && (e.key === 'Escape' || e.key === 'Esc')) closeModal();
});
modal.addEventListener('click', e => {
  if (e.target === modal) closeModal();
});

// ====== CONTACT FORM VALIDATION & SUCCESS ======
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();
    let valid = true;
    contactForm.querySelectorAll('input, textarea').forEach(f => f.style.borderColor = '');
    if (!name) {
      contactForm.name.style.borderColor = 'crimson';
      valid = false;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      contactForm.email.style.borderColor = 'crimson';
      valid = false;
    }
    if (!message) {
      contactForm.message.style.borderColor = 'crimson';
      valid = false;
    }
    if (!valid) {
      formSuccess.textContent = 'Please fill in all fields correctly.';
      formSuccess.style.color = 'crimson';
      formSuccess.style.opacity = 1;
      return;
    }
    formSuccess.textContent = 'Message sent! Thank you 😊';
    formSuccess.style.color = 'var(--primary)';
    formSuccess.style.opacity = 1;
    contactForm.reset();
    setTimeout(() => { formSuccess.style.opacity = 0; }, 3500);
  });
}

// ====== SCROLL TO TOP BUTTON ======
const scrollBtn = document.getElementById('scrollToTop');
if (scrollBtn) {
  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
