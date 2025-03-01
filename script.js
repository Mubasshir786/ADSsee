
    // Project Data (JSON format)
    const projectsData = [
        {
            id: 1,
            title: "Tech Brand Identity",
            description: "Complete motion graphics package for a tech startup including animated logo, UI transitions, and social media assets.",
            category: "motion",
            duration: "0:45",
            image: "https://images.unsplash.com/photo-1600132806608-231446b2e7af?q=80&w=1374&auto=format&fit=crop",
            tags: ["Motion Graphics", "Branding"]
        },
        {
            id: 2,
            title: "Finance App Explainer",
            description: "Animated explainer video breaking down complex financial features into simple, engaging concepts.",
            category: "explainer",
            duration: "1:30",
            image: "https://images.unsplash.com/photo-1616469829941-c7200edec809?q=80&w=1470&auto=format&fit=crop",
            tags: ["Explainer", "2D Animation"]
        },
        {
            id: 3,
            title: "Product Showcase",
            description: "Photorealistic 3D animation showcasing a premium headphone design with detailed feature highlights.",
            category: "animation",
            duration: "0:55",
            image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=1470&auto=format&fit=crop",
            tags: ["3D Animation", "Product"]
        },
        {
            id: 4,
            title: "Fitness App Commercial",
            description: "Dynamic 30-second commercial featuring motion graphics overlays with live-action footage.",
            category: "motion",
            duration: "0:30",
            image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1374&auto=format&fit=crop",
            tags: ["Commercial", "Motion Graphics"]
        },
        {
            id: 5,
            title: "Social Media Campaign",
            description: "Series of short, eye-catching animations designed for Instagram and TikTok for a clothing collection.",
            category: "motion",
            duration: "1:15",
            image: "https://images.unsplash.com/photo-1561089489-f13d5e730d72?q=80&w=1374&auto=format&fit=crop",
            tags: ["Social Media", "Animation"]
        },
        {
            id: 6,
            title: "Luxury Real Estate Showcase",
            description: "Photorealistic 3D walkthrough animation for a luxury real estate development.",
            category: "animation",
            duration: "2:00",
            image: "https://images.unsplash.com/photo-1601944179066-29786cb9d32a?q=80&w=1470&auto=format&fit=crop",
            tags: ["3D Animation", "Architectural"]
        }
    ];

    // Testimonials Data (JSON format)
    const testimonialsData = [
        {
            id: 1,
            text: "Working with Zeta Visuals transformed our brand's visual identity. Their ability to understand our vision and translate it into stunning motion graphics exceeded our expectations. The animated logo and social media assets have significantly increased our engagement rates.",
            name: "Michael Johnson",
            role: "Marketing Director, TechNova",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop"
        },
        {
            id: 2,
            text: "The explainer video created for our app launch was exactly what we needed. Complex features were presented in a clear, engaging way that resonated with our target audience. The professionalism and creativity throughout the process made it a pleasure to collaborate.",
            name: "Sarah Williams",
            role: "Product Manager, FinanceApp",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop"
        },
        {
            id: 3,
            text: "I've worked with many motion designers over the years, but Zeta Visuals stands out for their exceptional creativity and technical skills. Their 3D product animations helped us showcase our new product line in a way that static images simply couldn't achieve. Our sales increased by 40% following the campaign launch.",
            name: "David Chen",
            role: "CEO, Spectrum Audio",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1374&auto=format&fit=crop"
        }
    ];

    document.addEventListener('DOMContentLoaded', function() {
        // Initialize Swiper for Projects
        const projectsSwiper = new Swiper('.projects-carousel .swiper-container', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            centeredSlides: true,
            speed: 800,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.project-pagination',
                clickable: true,
            },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3,
                },
            },
            navigation: {
                nextEl: '.carousel-next',
                prevEl: '.carousel-prev',
            },
            on: {
                init: function() {
                    setTimeout(() => {
                        this.slideTo(1);
                    }, 100);
                },
            },
        });

        // Initialize Swiper for Testimonials
        const testimonialSwiper = new Swiper('.testimonial-swiper', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            speed: 800,
            autoplay: {
                delay: 6000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.testimonial-pagination',
                clickable: true,
            },
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
        });

        // Header scroll effect
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            header.classList.toggle('scrolled', window.scrollY > 50);
        });

        // Mobile menu toggle
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li');

        burger.addEventListener('click', () => {
            // Toggle nav
            nav.classList.toggle('open');
            burger.classList.toggle('active');

            // Animate links
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });
        });

        // Project filtering
        const filterBtns = document.querySelectorAll('.project-filter');
        
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                filterBtns.forEach(filterBtn => {
                    filterBtn.classList.remove('active');
                });
                
                // Add active class to clicked button
                btn.classList.add('active');
                
                const filterValue = btn.getAttribute('data-filter');
                
                // In a real implementation, this would filter the projects
                console.log(`Filter selected: ${filterValue}`);
                
                // You could filter projectsData here and rebuild the carousel
                // Currently just shows an example of accessing the data
                if (filterValue !== 'all') {
                    const filteredProjects = projectsData.filter(project => project.category === filterValue);
                    console.log('Filtered projects:', filteredProjects);
                } else {
                    console.log('All projects:', projectsData);
                }
            });
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                if (nav.classList.contains('open')) {
                    nav.classList.remove('open');
                    burger.classList.remove('active');
                    navLinks.forEach(link => {
                        link.style.animation = '';
                    });
                }
            });
        });

        // Reveal animations on scroll
        const revealElements = document.querySelectorAll('.reveal');
        
        function revealOnScroll() {
            for (let i = 0; i < revealElements.length; i++) {
                const windowHeight = window.innerHeight;
                const elementTop = revealElements[i].getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < windowHeight - elementVisible) {
                    revealElements[i].classList.add('active');
                }
            }
        }
        
        window.addEventListener('scroll', revealOnScroll);
        revealOnScroll(); // Run once on page load

        // Contact form submission
        const contactForm = document.getElementById('contactForm');
        
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Get form values
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const subject = document.getElementById('subject').value;
                const message = document.getElementById('message').value;
                
                // In a real implementation, you would submit this data to a server
                console.log('Form submitted:', { name, email, subject, message });
                
                // Show success message (in a real implementation)
                alert('Thank you for your message! I will get back to you soon.');
                
                // Reset form
                contactForm.reset();
            });
        }
    });