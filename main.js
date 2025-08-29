 // Typed.js for hero
    const typed = new Typed('#typed', { strings: ["Frontend Web Developer", " Backend Learner"], typeSpeed: 60, backSpeed: 40, loop: true });

    // Mobile menu toggle
    const menuBtn = document.getElementById('menu-btn');
    const menu = document.getElementById('menu');
    menuBtn.addEventListener('click', () => { menu.classList.toggle('hidden'); });

    // Back to top button
    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
      if(window.scrollY > 300) backToTop.style.display = 'block';
      else backToTop.style.display = 'none';
    });
    backToTop.addEventListener('click', () => window.scrollTo({ top:0, behavior:'smooth' }));

    // Reveal on scroll
    const reveals = document.querySelectorAll('.reveal');
    window.addEventListener('scroll', () => {
      for(const r of reveals){
        const top = r.getBoundingClientRect().top;
        if(top < window.innerHeight - 50) r.classList.add('revealed');
      }
    });
