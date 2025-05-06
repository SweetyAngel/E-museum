document.addEventListener('DOMContentLoaded', function() {

    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        this.querySelector('i').classList.toggle('fa-times');
    });


    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            navLinks.classList.remove('active');
            navToggle.querySelector('i').classList.remove('fa-times');

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });


    document.querySelector('.scroll-down').addEventListener('click', function() {
        document.querySelector('#history').scrollIntoView({
            behavior: 'smooth'
        });
    });


    const eParticles = document.getElementById('eParticles');
    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'e-particle';
        particle.textContent = 'E';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDuration = `${5 + Math.random() * 10}s`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particle.style.fontSize = `${0.5 + Math.random() * 1.5}rem`;
        particle.style.opacity = Math.random() * 0.5 + 0.3;
        eParticles.appendChild(particle);
    }


    const giantE = document.querySelector('.giant-e');

    document.addEventListener('mousemove', function(e) {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        giantE.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });


    giantE.addEventListener('mouseenter', function() {
        this.style.transition = 'none';
    });

    giantE.addEventListener('mouseleave', function() {
        this.style.transition = 'all 0.5s ease';
        this.style.transform = 'rotateY(0deg) rotateX(0deg)';
    });


    const fontFamily = document.getElementById('fontFamily');
    const fontWeight = document.getElementById('fontWeight');
    const weightValue = document.getElementById('weightValue');
    const fontColor = document.getElementById('fontColor');
    const customTypoE = document.getElementById('customTypoE');

    fontFamily.addEventListener('change', function() {
        customTypoE.style.fontFamily = this.value;
    });

    fontWeight.addEventListener('input', function() {
        customTypoE.style.fontWeight = this.value;
        weightValue.textContent = this.value;
    });

    fontColor.addEventListener('input', function() {
        customTypoE.style.color = this.value;
    });


    const animType = document.getElementById('animType');
    const animSpeed = document.getElementById('animSpeed');
    const animSize = document.getElementById('animSize');
    const animColor = document.getElementById('animColor');
    const startAnim = document.getElementById('startAnim');
    const stopAnim = document.getElementById('stopAnim');
    const randomAnim = document.getElementById('randomAnim');
    const animatedE = document.getElementById('animatedE');
    const presets = document.querySelectorAll('.preset');

    let currentAnimation = null;

    function applyAnimation() {

        animatedE.className = 'animated-e';
        animatedE.style.animation = 'none';
        animatedE.style.textShadow = 'none';
        animatedE.style.borderRadius = '0';


        document.querySelectorAll('.particles-container').forEach(container => {
            container.remove();
        });

        void animatedE.offsetWidth;


        animatedE.style.fontSize = `${animSize.value}px`;
        animatedE.style.color = animColor.value;


        switch (animType.value) {
            case 'pulse':
                animatedE.style.animation = `pulse ${1 / (animSpeed.value / 5)}s infinite`;
                break;

            case 'rotate':
                animatedE.style.animation = `rotate ${1 / (animSpeed.value / 5)}s linear infinite`;
                break;

            case 'shake':
                animatedE.style.animation = `shake ${1 / (animSpeed.value / 5)}s ease infinite`;
                break;

            case 'bounce':
                animatedE.style.animation = `bounce ${1 / (animSpeed.value / 5)}s ease infinite`;
                break;

            case 'rainbow':
                animatedE.style.animation = `rainbow ${1 / (animSpeed.value / 5)}s linear infinite`;
                break;

            case 'morph':
                animatedE.style.animation = `morph ${1 / (animSpeed.value / 5)}s ease-in-out infinite`;
                break;

            case 'particles':
                createParticles();
                break;
        }

        currentAnimation = animType.value;
    }

    function createParticles() {

        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'particles-container';
        animatedE.parentElement.appendChild(particlesContainer);


        const eRect = animatedE.getBoundingClientRect();
        const containerRect = animatedE.parentElement.getBoundingClientRect();
        const eCenterX = eRect.left - containerRect.left + eRect.width / 2;
        const eCenterY = eRect.top - containerRect.top + eRect.height / 2;


        const particleCount = 50;
        const colors = ['#e74c3c', '#3498db', '#2ecc71', '#f1c40f', '#9b59b6'];

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'e-particle-anim';


            const size = Math.random() * 8 + 3;
            const color = colors[Math.floor(Math.random() * colors.length)];
            const duration = Math.random() * 2 + 1;
            const delay = Math.random() * 0.5;


            particle.style.left = `${eCenterX}px`;
            particle.style.top = `${eCenterY}px`;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.backgroundColor = color;


            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * 100 + 50;
            const moveX = Math.cos(angle) * distance;
            const moveY = Math.sin(angle) * distance;

            particle.style.setProperty('--move-x', `${moveX}px`);
            particle.style.setProperty('--move-y', `${moveY}px`);


            particle.style.animation = `
                particleAppear 0.3s ${delay}s forwards,
                particleMove ${duration}s ${delay}s ease-out forwards
            `;

            particlesContainer.appendChild(particle);
        }
    }

    startAnim.addEventListener('click', applyAnimation);

    stopAnim.addEventListener('click', function() {
        animatedE.className = 'animated-e';
        animatedE.style.animation = 'none';
        animatedE.style.textShadow = 'none';
        animatedE.style.borderRadius = '0';


        document.querySelectorAll('.particles-container').forEach(container => {
            container.remove();
        });

        currentAnimation = null;
    });

    randomAnim.addEventListener('click', function() {
        const animations = ['pulse', 'rotate', 'shake', 'bounce', 'rainbow', 'morph', 'particles'];
        const randomAnimType = animations[Math.floor(Math.random() * animations.length)];

        animType.value = randomAnimType;
        animSpeed.value = Math.floor(Math.random() * 9) + 2;
        animSize.value = Math.floor(Math.random() * 151) + 50;
        animColor.value = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;

        applyAnimation();
    });


    presets.forEach(preset => {
        preset.addEventListener('click', function() {
            const anim = this.dataset.anim;
            const speed = this.dataset.speed;
            const color = this.dataset.color;

            animType.value = anim;
            animSpeed.value = speed;
            animColor.value = color;

            applyAnimation();
        });
    });


    const sections = document.querySelectorAll('.section');

    function checkScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight * 0.75) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    }


    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'all 0.6s ease';
    });

    window.addEventListener('scroll', checkScroll);
    checkScroll();


    window.addEventListener('scroll', function() {
        const nav = document.querySelector('.museum-nav');
        if (window.scrollY > 50) {
            nav.style.padding = '1rem 5%';
            nav.style.background = 'rgba(255, 255, 255, 0.95)';
        } else {
            nav.style.padding = '1.5rem 5%';
            nav.style.background = 'white';
        }
    });



    const sectionsForNav = document.querySelectorAll('.section');

    function setActiveLink() {
        const navLinks = document.querySelectorAll('.nav-links a');
        const sectionsForNav = document.querySelectorAll('.section');
        let currentSectionId = '';
        sectionsForNav.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop - sectionHeight / 3 && window.scrollY < sectionTop + sectionHeight - sectionHeight / 3) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === currentSectionId) {
                link.classList.add('active');
            }
        });

        if (window.scrollY < sectionsForNav[0].offsetHeight / 2 && navLinks.length > 0) {
            navLinks[0].classList.add('active');
        }
    }

    window.addEventListener('scroll', setActiveLink);
    setActiveLink();
});
