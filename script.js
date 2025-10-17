document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.getElementById("nav-toggle");
    const navbar = document.getElementById("navbar");

    // 1. FUNGSI TOGGLE NAVBAR MOBILE
    navToggle.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });

    // 2. FUNGSI STICKY HEADER DENGAN EFEK SCROLL
    window.addEventListener('scroll', () => {
        // Cek apakah posisi scroll sudah melebihi 50px
        if (window.scrollY > 50) {
            // Jika sudah di-scroll, tambahkan class 'scrolled'
            navbar.classList.add('scrolled');
        } else {
            // Jika kembali ke atas, hapus class 'scrolled'
            navbar.classList.remove('scrolled');
        }
    });

    // 3. PENYEMPURNAAN SCROLLREVEAL (Animasi Lebih Halus dan Elegan)
    const sr = ScrollReveal({
        // Konfigurasi default baru
        origin: "top", // Default: Elemen muncul seperti 'turun' dari atas
        distance: "50px",
        duration: 900, // Durasi sedikit diperpanjang agar lebih halus
        delay: 150,    // Delay awal yang lebih elegan
        easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)' // Kurva animasi yang lebih cantik
    });

    // Animasi: Konten utama (Hero & Location) muncul dari bawah
    sr.reveal(".hero-content", { origin: "bottom", delay: 300 }); 
    sr.reveal(".location-container", { origin: "bottom" });

    // Animasi: Judul Section (H2) muncul dari bawah dengan scale halus
    sr.reveal("section h2", { 
        origin: "bottom", 
        distance: "20px",
        duration: 700, 
        delay: 100, 
        scale: 0.95 
    });
    
    // Animasi: Kartu/Item (About, Galeri, Menu) muncul berurutan
    sr.reveal(".about-card", { interval: 150 }); 
    sr.reveal(".galery-container img", { interval: 100 }); 
    sr.reveal(".menu-card", { interval: 100 }); 
});