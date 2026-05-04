const roomData = {
    "twin_sea": {
        "folder": "twin_room_with_sea_view",
        "mainImage": "room_66297af8769cf.webp",
        "size": "35 m²", "rooms": "1", "baths": "1", "view": "Sea",
        "gallery": ["room_66297af8769cf.webp", "room_66297af890b4e.webp", "room_66297af8a753c.webp", "room_66297af8bed9e.webp", "room_66297af8d5296.webp", "room_66297af8ef0d4.webp", "room_66297af915ab8.webp", "room_66297af92a4f0.webp"]
    },
    "double_sea": {
        "folder": "double_room_with_sea_view",
        "mainImage": "room_66297beb79a1f.webp",
        "size": "35 m²", "rooms": "1", "baths": "1", "view": "Sea",
        "gallery": ["room_66297beb79a1f.webp", "room_66297beb94387.webp", "room_66297bebb24a6.webp", "room_66297bebea63f.webp", "room_66297bec15604.webp", "room_66297bec331af.webp"]
    },
    "family": {
        "folder": "family_suite",
        "mainImage": "room_66297d07841f1.webp",
        "size": "63 m²", "rooms": "2", "baths": "1", "view": "Sea",
        "gallery": ["room_66297d07841f1.webp", "room_66297d079db51.webp", "room_66297d07b8bc1.webp", "room_66297d07d32c0.webp", "room_66297d07ed23d.webp", "room_66297d0813b1e.webp", "room_66297d0832ea9.webp", "room_66297d084e98d.webp", "room_66297d0864961.webp"]
    },
    "deluxe_double": {
        "folder": "del_dob_see_viuw",
        "mainImage": "room_66297e1735018.webp",
        "size": "55 m²", "rooms": "1", "baths": "1", "view": "Sea",
        "gallery": ["room_66297e1735018.webp", "room_66297e1750b89.webp", "room_66297e176a768.webp", "room_66297e1783d6b.webp", "room_66297e179eeb1.webp", "room_66297e17bf83a.webp", "room_66297e17da0e7.webp", "room_66297e1801842.webp"]
    },
    "deluxe_twin": {
        "folder": "del_del_sea_view",
        "mainImage": "room_66297f273ed32.webp",
        "size": "50 m²", "rooms": "1", "baths": "1", "view": "Sea",
        "gallery": ["room_66297f273ed32.webp", "room_66297f275b5f9.webp", "room_66297f2775132.webp", "room_66297f2786e4c.webp", "room_66297f27a2a87.webp", "room_66297f27c2768.webp", "room_66297f27eb390.webp", "room_66297f2818e42.webp", "room_66297f28393b0.webp"]
    },
    "deluxe_king": {
        "folder": "del_kin_size",
        "mainImage": "room_662980517baae.webp",
        "size": "88 m²", "rooms": "1", "baths": "1", "view": "Sea & City",
        "gallery": ["room_662980517baae.webp", "room_6629805199cf7.webp", "room_66298051bb9bb.webp", "room_66298051d5626.webp", "room_66298051ef3e4.webp", "room_6629805215b96.webp", "room_66298052305ea.webp", "room_662980524a929.webp", "room_6629805261140.webp", "room_6629805271596.webp", "room_66298052937b4.webp"]
    },
    "double_city": {
        "folder": "dob_cit_viu",
        "mainImage": "room_66298235ba7f9.webp",
        "size": "35 m²", "rooms": "1", "baths": "1", "view": "City",
        "gallery": ["room_66298235ba7f9.webp", "room_66298235dc166.webp", "room_662982362a418.webp"]
    },
    "twin_city": {
        "folder": "twin_room_with_city_view",
        "mainImage": "room_6629831883d7e.webp",
        "size": "35 m²", "rooms": "1", "baths": "1", "view": "City",
        "gallery": ["room_6629831883d7e.webp", "room_662983189f239.webp", "room_66298318bf79e.webp"]
    },
    "presidential": {
        "folder": "pre_suite",
        "mainImage": "room_662983f68a41f.webp",
        "size": "150 m²", "rooms": "3", "baths": "2", "view": "Panoramic Sea",
        "gallery": ["room_662983f68a41f.webp", "room_662983f6a0dd9.webp", "room_662983f6b4706.webp", "room_662983f6d9e76.webp", "room_662983f705c22.webp", "room_662983f7290c7.webp", "room_662983f74255d.webp", "room_662983f760df9.webp", "room_662983f779a00.webp", "room_662983f789976.webp", "room_662983f799719.webp", "room_662983f7a8b7a.webp", "room_662983f7ba1db.webp", "room_662983f7c7f0b.webp", "room_662983f7d66fb.webp", "room_662983f7e7223.webp", "room_662983f80123f.webp", "room_662983f8104b8.webp", "room_662983f82f54f.webp"]
    },
    "standard_twin": {
        "folder": "standart_twin_room",
        "mainImage": "room_6629844c4bf79.webp",
        "size": "35 m²", "rooms": "1", "baths": "1", "view": "City",
        "gallery": ["room_6629844c4bf79.webp", "room_6629844c8e64a.webp", "room_6629844cbf2e4.webp", "room_6629844d062c9.webp", "room_6629844d308d3.webp"]
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Language Management
    const langBtn = document.querySelector('.lang-btn');
    const langDropdown = document.querySelector('.lang-dropdown');

    if (langBtn && langDropdown) {
        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langDropdown.classList.toggle('show');
        });

        document.addEventListener('click', (e) => {
            if (!langBtn.contains(e.target) && !langDropdown.contains(e.target)) {
                langDropdown.classList.remove('show');
            }
        });
    }

    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            navMenu.classList.toggle('show');
            const icon = mobileToggle.querySelector('i');
            if (navMenu.classList.contains('show')) {
                icon.classList.replace('fa-bars', 'fa-times');
            } else {
                icon.classList.replace('fa-times', 'fa-bars');
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
                navMenu.classList.remove('show');
                const icon = mobileToggle.querySelector('i');
                if (icon) icon.classList.replace('fa-times', 'fa-bars');
            }
        });
    }

    // Modern Smart Header & Scroll Reveal
    const header = document.getElementById('main-header');
    let lastScroll = 0;
    let ticking = false;

    function updateHeader() {
        const currentScroll = window.pageYOffset;

        // Sticky state
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Smart Hide/Show
        if (currentScroll > lastScroll && currentScroll > 400) {
            header.classList.add('header-hidden');
        } else {
            header.classList.remove('header-hidden');
        }
        lastScroll = currentScroll;
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(updateHeader);
            ticking = true;
        }
    });

    // Intersection Observer for Modern Reveal Animations
    const revealOptions = {
        threshold: 0.05,
        rootMargin: "0px 0px 100px 0px" // Trigger 100px BEFORE entering viewport
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, revealOptions);

    // Apply reveal to sections and cards
    document.querySelectorAll('.section, .room-card, .grid-item, .hero-content, .footer-grid > div').forEach(el => {
        el.classList.add('reveal');
        revealObserver.observe(el);
    });

    // Dynamic Mobile Bottom Nav
    function initBottomNav() {
        if (window.innerWidth <= 768 && !document.querySelector('.bottom-nav')) {
            const lang = document.documentElement.lang || 'tr';
            const nav = document.createElement('div');
            nav.className = 'bottom-nav';

            const path = window.location.pathname;
            const isHome = path.endsWith('index.html') || path.endsWith('/') || (!path.includes('.html') && path.length > 5);
            const isRooms = path.includes('odalar.html');
            const isGuide = path.includes('batum.html');

            nav.innerHTML = `
                <a href="index.html" class="bottom-nav-item ${isHome ? 'active' : ''}">
                    <i class="fas fa-home"></i>
                    <span>${translations[lang]['nav_home']}</span>
                </a>
                <a href="odalar.html" class="bottom-nav-item ${isRooms ? 'active' : ''}">
                    <i class="fas fa-bed"></i>
                    <span>${translations[lang]['nav_rooms']}</span>
                </a>
                <a href="batum.html" class="bottom-nav-item ${isGuide ? 'active' : ''}">
                    <i class="fas fa-map-marked-alt"></i>
                    <span>${translations[lang]['nav_guide'].split(' ')[0]}</span>
                </a>
                <a href="tel:${translations[lang]['phone_number'].replace(/\s/g, '')}" class="bottom-nav-item">
                    <i class="fas fa-phone-alt"></i>
                    <span>${translations[lang]['btn_call_now'].split(' ')[0]}</span>
                </a>
            `;
            document.body.appendChild(nav);
        }
    }
    initBottomNav();

    // FAQ Accordion Logic
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentElement;
            item.classList.toggle('active');
            
            // Optional: Close other items
            document.querySelectorAll('.faq-item').forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
        });
    });

    const langOptions = document.querySelectorAll('.lang-option');
    const currentLang = document.documentElement.lang || 'tr';

    langOptions.forEach(opt => {
        opt.addEventListener('click', () => {
            const targetLang = opt.getAttribute('data-lang');
            if (targetLang === currentLang) return;

            // Save user's explicit choice to prevent IP-based redirection loops on the root page
            localStorage.setItem('preferredLang', targetLang);

            let currentPath = window.location.pathname;
            const langs = ['/tr/', '/en/', '/ru/', '/ka/'];
            let replaced = false;
            let newPath = currentPath;

            for (let lang of langs) {
                if (currentPath.includes(lang)) {
                    newPath = currentPath.replace(lang, `/${targetLang}/`);
                    replaced = true;
                    break;
                }
            }

            if (!replaced) {
                const langsNoSlash = ['/tr', '/en', '/ru', '/ka'];
                for (let lang of langsNoSlash) {
                    if (currentPath.endsWith(lang)) {
                        newPath = currentPath.substring(0, currentPath.length - lang.length) + `/${targetLang}/index.html`;
                        replaced = true;
                        break;
                    }
                }
            }

            if (replaced) {
                window.location.href = newPath;
            } else {
                let pathParts = currentPath.split('/');
                let currentPage = pathParts.pop() || 'index.html';
                if (!currentPage.endsWith('.html')) {
                    currentPage = 'index.html';
                }
                pathParts.push(targetLang);
                pathParts.push(currentPage);
                window.location.href = pathParts.join('/');
            }
        });
    });

    // Update translations for any remaining data-i18n elements
    function updateContent(lang) {
        if (!translations[lang]) return;
        
        const data = translations[lang];

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (data[key]) {
                if (el.tagName === 'IMG') {
                    el.alt = data[key];
                } else if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = data[key];
                } else {
                    el.textContent = data[key];
                }
            }
        });

        // Dynamic Contact Updates (Links and Text)
        const phone = data.phone_number;
        const email = data.email;
        const whatsapp = data.whatsapp_number;

        if (phone) {
            document.querySelectorAll('.dynamic-phone').forEach(el => {
                if (el.tagName === 'A') {
                    el.href = `tel:${phone.replace(/\s+/g, '')}`;
                }
                el.textContent = phone;
            });
        }

        if (email) {
            document.querySelectorAll('.dynamic-email, [href^="mailto:"]').forEach(el => {
                if (el.tagName === 'A') {
                    el.href = `mailto:${email}`;
                }
                // Only update text if it looks like an email or has the class
                if (el.classList.contains('dynamic-email') || el.textContent.includes('@')) {
                    el.textContent = email;
                }
            });
        }

        if (whatsapp) {
            document.querySelectorAll('.dynamic-whatsapp, [href*="wa.me"]').forEach(el => {
                const cleanWa = whatsapp.replace(/\D/g, '');
                if (el.tagName === 'A') {
                    el.href = `https://wa.me/${cleanWa}`;
                }
                if (el.classList.contains('dynamic-whatsapp') || el.textContent.includes('+')) {
                    el.textContent = whatsapp;
                }
            });
        }
    }

    updateContent(currentLang);

    // Modal Management
    const modal = document.getElementById('roomModal');
    const modalBody = document.getElementById('modal-body');
    const closeBtn = document.querySelector('.close-modal');

    let currentGallery = [];
    let currentGalleryIndex = 0;
    let currentPathPrefix = '';
    let currentRoomFolder = '';

    if (modal && modalBody) {
        document.querySelectorAll('.btn-details').forEach(btn => {
            btn.addEventListener('click', () => {
                const roomId = btn.getAttribute('data-room');
                const room = roomData[roomId];
                if (room) {
                    currentGallery = room.gallery || [];
                    currentGalleryIndex = 0;
                    currentRoomFolder = room.folder;
                    renderModal(room, roomId);
                    modal.style.display = 'block';
                    document.body.style.overflow = 'hidden';
                }
            });
        });

        // Security Feature: HTML Sanitizer
        function escapeHTML(str) {
            if (!str) return '';
            return String(str).replace(/[&<>'"]/g, 
                tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
            );
        }

        function renderModal(room, roomId) {
            const lang = document.documentElement.lang || 'tr';
            const isSubfolder = window.location.pathname.includes('/tr/') || 
                              window.location.pathname.includes('/en/') || 
                              window.location.pathname.includes('/ka/') || 
                              window.location.pathname.includes('/ru/');
            
            currentPathPrefix = isSubfolder ? '../' : '';
            const mainImgPath = `${currentPathPrefix}assets/${escapeHTML(room.folder)}/${escapeHTML(room.mainImage)}`;
            
            const titleKey = `room_${roomId}`;
            const title = translations[lang][titleKey] || room.folder;
            const descKey = `room_${roomId}_desc`;
            const desc = translations[lang][descKey] || '';

            modalBody.innerHTML = `
                <div class="modal-header-img">
                    <img src="${mainImgPath}" id="modal-main-img" alt="${escapeHTML(title)}">
                    ${room.gallery && room.gallery.length > 1 ? `
                        <button class="modal-nav modal-prev" aria-label="Previous image"><i class="fas fa-chevron-left"></i></button>
                        <button class="modal-nav modal-next" aria-label="Next image"><i class="fas fa-chevron-right"></i></button>
                    ` : ''}
                </div>
                <div class="modal-info">
                    <h2>${escapeHTML(title)}</h2>
                    <div class="room-tech-details">
                        <div class="tech-item"><strong>${escapeHTML(translations[lang]['label_size'] || 'Size')}:</strong> ${escapeHTML(room.size)}</div>
                        <div class="tech-item"><strong>${escapeHTML(translations[lang]['label_rooms'] || 'Rooms')}:</strong> ${escapeHTML(room.rooms)}</div>
                        <div class="tech-item"><strong>${escapeHTML(translations[lang]['label_baths'] || 'Bathrooms')}:</strong> ${escapeHTML(room.baths)}</div>
                        <div class="tech-item"><strong>${escapeHTML(translations[lang]['label_view'] || 'View')}:</strong> ${escapeHTML(translations[lang][`view_${room.view.toLowerCase().replace(/ /g, '_').replace(/&/g, '')}`.replace(/__/g, '_')] || room.view)}</div>
                    </div>
                    <p class="modal-desc">${escapeHTML(desc)}</p>
                    <div class="modal-amenities-section">
                        <h3 data-i18n="room_features">${translations[lang]['room_features']}</h3>
                        <div class="modal-amenities">
                            <div class="amenity-item"><i class="fas fa-wifi"></i> Free Wi-Fi</div>
                            <div class="amenity-item"><i class="fas fa-tv"></i> Smart TV</div>
                            <div class="amenity-item"><i class="fas fa-snowflake"></i> Air Conditioning</div>
                            <div class="amenity-item"><i class="fas fa-concierge-bell"></i> 24/7 Room Service</div>
                            <div class="amenity-item"><i class="fas fa-safe"></i> Safe Box</div>
                            <div class="amenity-item"><i class="fas fa-coffee"></i> Coffee Machine</div>
                        </div>
                    </div>
                    <div class="modal-actions">
                        <a href="tel:08500000000" class="btn btn-gold dynamic-phone">${translations[lang]['btn_call_now']}</a>
                    </div>
                </div>
            `;

            const nextBtn = modalBody.querySelector('.modal-next');
            const prevBtn = modalBody.querySelector('.modal-prev');
            if (nextBtn) nextBtn.onclick = () => navigateGallery(1);
            if (prevBtn) prevBtn.onclick = () => navigateGallery(-1);
        }

        function navigateGallery(direction) {
            currentGalleryIndex += direction;
            if (currentGalleryIndex >= currentGallery.length) currentGalleryIndex = 0;
            if (currentGalleryIndex < 0) currentGalleryIndex = currentGallery.length - 1;
            const mainImg = document.getElementById('modal-main-img');
            if (mainImg) {
                mainImg.src = `${currentPathPrefix}assets/${currentRoomFolder}/${currentGallery[currentGalleryIndex]}`;
            }
        }

        window.updateMainImage = function(src) {
            const mainImg = document.getElementById('modal-main-img');
            if (mainImg) mainImg.src = src;
        };

        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            });
        }

        window.onclick = (event) => {
            if (event.target == modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        };
    }

    // Room Slider Logic
    const roomSlider = document.querySelector('.room-slider');
    const roomPrevBtn = document.querySelector('.room-prev');
    const roomNextBtn = document.querySelector('.room-next');

    if (roomSlider && roomPrevBtn && roomNextBtn) {
        roomNextBtn.addEventListener('click', () => {
            const card = roomSlider.querySelector('.room-card');
            const scrollAmount = card ? card.offsetWidth + 30 : 380;
            const maxScroll = roomSlider.scrollWidth - roomSlider.clientWidth;
            
            if (roomSlider.scrollLeft >= maxScroll - 10) {
                roomSlider.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                roomSlider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        });
        
        roomPrevBtn.addEventListener('click', () => {
            const card = roomSlider.querySelector('.room-card');
            const scrollAmount = card ? card.offsetWidth + 30 : 380;
            const maxScroll = roomSlider.scrollWidth - roomSlider.clientWidth;

            if (roomSlider.scrollLeft <= 10) {
                roomSlider.scrollTo({ left: maxScroll, behavior: 'smooth' });
            } else {
                roomSlider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            }
        });
    }

    // Generic Slider Function
    function initSlider(selector, interval = 5000) {
        const sliders = document.querySelectorAll(selector);
        sliders.forEach(slider => {
            const slides = slider.querySelectorAll('.slide');
            if (slides.length > 1) {
                let currentSlide = 0;
                setInterval(() => {
                    slides[currentSlide].classList.remove('active');
                    currentSlide = (currentSlide + 1) % slides.length;
                    slides[currentSlide].classList.add('active');
                }, interval);
            }
        });
    }

    // Initialize Sliders
    initSlider('.hero-slider', 10000); // 10s for hero
    initSlider('.welcome-slider', 5000);  // 5s for welcome section
});
