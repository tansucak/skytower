document.addEventListener('DOMContentLoaded', () => {
    // Language state
    let currentLang = localStorage.getItem('selectedLang') || 'tr';

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('#main-header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Header scroll effect
    const header = document.querySelector('#main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // i18n Functionality
    function updateContent(lang) {
        const t = translations[lang];
        if (!t) return;

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (t[key]) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = t[key];
                } else {
                    el.innerText = t[key];
                }
            }
        });

        // Update Phone Numbers and Links
        document.querySelectorAll('.dynamic-phone').forEach(el => {
            // Only update text if it's not a translated button/text
            if (!el.hasAttribute('data-i18n')) {
                el.innerText = t.phone_number;
            }
            
            if (el.tagName === 'A') {
                el.href = `tel:${t.phone_number.replace(/\s/g, '')}`;
            }
        });

        // Update Language Button Text
        const langBtnText = document.querySelector('.lang-btn-text');
        if (langBtnText) {
            langBtnText.innerText = lang.toUpperCase();
        }

        // Save selection
        localStorage.setItem('selectedLang', lang);
        currentLang = lang;
    }

    // Language Dropdown Logic
    const langBtn = document.querySelector('.lang-btn');
    const langDropdown = document.querySelector('.lang-dropdown');

    if (langBtn && langDropdown) {
        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langDropdown.classList.toggle('show');
        });

        document.querySelectorAll('.lang-option').forEach(option => {
            option.addEventListener('click', () => {
                const lang = option.getAttribute('data-lang');
                updateContent(lang);
                langDropdown.classList.remove('show');
            });
        });

        window.addEventListener('click', () => {
            langDropdown.classList.remove('show');
        });
    }

    // Initial load
    if (typeof translations !== 'undefined') {
        updateContent(currentLang);
    }

    // Room Data for Modal (Updated with key for translation)
    const roomData = {
        standard: {
            titleKey: 'room_standard_title',
            image: 'assets/standard.jpg',
            desc: {
                tr: 'Batum\'un eşsiz deniz manzarasını odanızdan seyredin. Modern tasarımı ve geniş penceresiyle ferah bir konaklama sunar.',
                en: 'Watch Batumi\'s unique sea view from your room. It offers a spacious stay with its modern design and large windows.',
                ka: 'უყურეთ ბათუმის უნიკალურ ზღვის ხედს თქვენი ოთახიდან. იგი გთავაზობთ ფართო დასვენებას თავისი თანამედროვე დიზაინით და დიდი ფანჯრებით.',
                ru: 'Наблюдайте уникальный вид на море Батуми из своего номера. Он предлагает просторный отдых с современным дизайном и большими окнами.'
            },
            price: '₺2.450',
            amenities: ['Wi-Fi', 'Minibar', 'Safe', 'Sea View', 'Smart TV', 'AC']
        },
        suite: {
            titleKey: 'room_suite_title',
            image: 'assets/suite.jpg',
            desc: {
                tr: 'Geniş yaşam alanı, ayrı oturma bölümü ve lüks detaylarla donatılmış bir VIP deneyimi sizi bekliyor.',
                en: 'A VIP experience equipped with a large living area, a separate seating section and luxurious details awaits you.',
                ka: 'გელით VIP გამოცდილება, რომელიც აღჭურვილია დიდი საცხოვრებელი ფართით, ცალკე მოსასვენებელი სექციით და მდიდრული დეტალებით.',
                ru: 'Вас ждет VIP-отдых с большой гостиной зоной, отдельной зоной отдыха и роскошными деталями.'
            },
            price: '₺4.800',
            amenities: ['Wi-Fi', 'Living Area', 'VIP Welcome', '24h Room Service', 'Espresso Machine', 'Jacuzzi']
        },
        presidential: {
            titleKey: 'room_presidential_title',
            image: 'assets/presidential.jpg',
            desc: {
                tr: 'Zirvede lüksün tanımı. Panoramik Karadeniz manzarası, geniş teras ve özel butler hizmeti ile unutulmaz bir tatil.',
                en: 'The definition of luxury at the top. An unforgettable holiday with panoramic Black Sea views, a large terrace and private butler service.',
                ka: 'ფუფუნების განმარტება მწვერვალზე. დაუვიწყარი დასვენება შავი ზღვის პანორამული ხედებით, დიდი ტერასით და პირადი ბატლერის მომსახურებით.',
                ru: 'Определение роскоши на вершине. Незабываемый отдых с панорамным видом на Черное море, большой террасой и услугами личного дворецкого.'
            },
            price: '₺12.500',
            amenities: ['Butler Service', 'Panoramic Terrace', 'Private Jacuzzi', 'Bar & Kitchen', 'Airport Transfer', 'Premium Amenities']
        }
    };

    // Modal Elements
    const modal = document.getElementById('roomModal');
    const modalBody = document.getElementById('modal-body');
    const closeBtn = document.querySelector('.close-modal');

    // Open Modal
    document.querySelectorAll('.btn-details').forEach(btn => {
        btn.addEventListener('click', () => {
            const roomKey = btn.getAttribute('data-room');
            const room = roomData[roomKey];
            const t = translations[currentLang];

            if (room && t) {
                modalBody.innerHTML = `
                    <img src="${room.image}" class="modal-header-img" alt="${t[room.titleKey]}">
                    <div class="modal-details">
                        <h2>${t[room.titleKey]}</h2>
                        <p>${room.desc[currentLang]}</p>
                        <h3>${t.room_features}</h3>
                        <div class="modal-amenities">
                            ${room.amenities.map(item => `
                                <div class="amenity-item">
                                    <i class="fas fa-check"></i>
                                    <span>${item}</span>
                                </div>
                            `).join('')}
                        </div>
                        <div class="modal-footer">
                            <div class="price-tag">${room.price} <span>/ ${t.per_night}</span></div>
                            <a href="tel:${t.phone_number.replace(/\s/g, '')}" class="btn btn-gold dynamic-phone">${t.phone_number}</a>
                        </div>
                    </div>
                `;
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden'; // Prevent scroll
            }
        });
    });

    // Close Modal
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }

    // Close on outside click
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});
