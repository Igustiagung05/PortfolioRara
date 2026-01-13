/**
 * Konfigurasi Typing Effect
 * Nama: Larassanti, S.Si
 */
const phrase = "Hi, I'm Larassanti, S.Si"; 
let index = 0;
let isDeleting = false;

function typeEffect() {
    const textElement = document.getElementById("typing-text");
    if (!textElement) return;

    const currentText = phrase.substring(0, index);
    textElement.textContent = currentText;

    let typeSpeed = isDeleting ? 100 : 150;

    if (!isDeleting && index < phrase.length) {
        index++;
    } else if (isDeleting && index > 0) {
        index--;
    } else {
        isDeleting = !isDeleting;
        typeSpeed = 1500; // Jeda saat teks lengkap
    }

    setTimeout(typeEffect, typeSpeed);
}

/**
 * Logika Bunga Sakura
 */
function createSakura() {
    const container = document.getElementById('sakura-container');
    if (!container) return;

    const petal = document.createElement('div');
    petal.classList.add('sakura');
    
    petal.style.left = Math.random() * 100 + 'vw';
    const duration = Math.random() * 3 + 4; // Durasi jatuh sedikit lebih lambat (elegan)
    petal.style.animationDuration = duration + 's';
    const size = Math.random() * 8 + 6;
    petal.style.width = size + 'px';
    petal.style.height = size + 'px';
    
    container.appendChild(petal);
    setTimeout(() => petal.remove(), duration * 1000);
}

/**
 * Logika Navbar Global (Burger, Overlay, Scroll)
 */
function initNavbar() {
    const burgerBtn = document.getElementById('burger-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const overlay = document.getElementById('menu-overlay'); // Elemen baru dari CSS perbaikan global
    const mainNav = document.getElementById('main-nav');
    const body = document.body;
    
    const lines = [
        document.getElementById('line1'),
        document.getElementById('line2'),
        document.getElementById('line3')
    ];

    // Fungsi tunggal untuk menutup menu
    function closeMobileMenu() {
        mobileMenu.classList.remove('active');
        overlay.classList.remove('active');
        body.style.overflow = 'auto';
        
        // Reset animasi burger
        lines[0].classList.remove('rotate-45', 'translate-y-2');
        lines[1].classList.remove('opacity-0');
        lines[2].classList.remove('-rotate-45', '-translate-y-2');
    }

    if (burgerBtn && mobileMenu && overlay) {
        burgerBtn.addEventListener('click', () => {
            const isOpening = !mobileMenu.classList.contains('active');
            
            if (isOpening) {
                mobileMenu.classList.add('active');
                overlay.classList.add('active');
                body.style.overflow = 'hidden';
            } else {
                closeMobileMenu();
            }

            // Toggle animasi ikon ke X
            lines[0].classList.toggle('rotate-45');
            lines[0].classList.toggle('translate-y-2');
            lines[1].classList.toggle('opacity-0');
            lines[2].classList.toggle('-rotate-45');
            lines[2].classList.toggle('-translate-y-2');
        });

        // Tutup menu jika overlay (area gelap) diklik
        overlay.addEventListener('click', closeMobileMenu);

        // Tutup menu jika link navigasi diklik
        document.querySelectorAll('.mobile-link').forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });
    }

    // Efek Scroll Navbar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            mainNav.classList.add('bg-white/95', 'shadow-md', 'py-2');
            mainNav.classList.remove('bg-white/80', 'py-4');
        } else {
            mainNav.classList.add('bg-white/80', 'py-4');
            mainNav.classList.remove('bg-white/95', 'shadow-md', 'py-2');
        }
    });
}

/**
 * Eksekusi saat dokumen siap
 */
document.addEventListener("DOMContentLoaded", () => {
    typeEffect();
    initNavbar();
    setInterval(createSakura, 400); // Intensitas sakura yang pas
});