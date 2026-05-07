// Toggle Mobile Menu
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Tutup menu saat link diklik (untuk mobile)
document.querySelectorAll(".nav-links a").forEach(n => n.addEventListener("click", () => {
    navLinks.classList.remove("active");
}));

// FITUR KEAMANAN: KELUAR CEPAT (QUICK EXIT)
// Fitur ini memungkinkan korban KDRT untuk menutup situs seketika jika pelaku datang.

function quickExit() {
    // Replace state agar tombol "Back" di browser tidak mengembalikan pengguna ke situs ini
    window.location.replace("https://www.google.com");
}

// 1. Eksekusi jika tombol Keluar Cepat diklik
const exitBtn = document.getElementById("quick-exit");
if (exitBtn) {
    exitBtn.addEventListener("click", function(e) {
        e.preventDefault();
        quickExit();
    });
}

// 2. Eksekusi jika tombol "Escape" (Esc) pada keyboard ditekan
document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
        quickExit();
    }
});