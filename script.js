document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================================================
    // 1. LOADING SCREEN EFFECT
    // ==========================================================================
    const loadingScreen = document.getElementById('loading-screen');
    window.addEventListener('load', () => {
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            loadingScreen.style.visibility = 'hidden';
        }, 500); // Penundaan halus premium
    });


    // ==========================================================================
    // 2. DARK / LIGHT THEME SYSTEM (Local Storage)
    // ==========================================================================
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = themeToggleBtn.querySelector('i');
    const body = document.body;

    // Load preferensi tema dari localStorage, default adalah Light Mode
    const savedTheme = localStorage.getItem('theme') || 'light-mode';
    body.className = savedTheme;
    updateThemeIcon(savedTheme);

    themeToggleBtn.addEventListener('click', () => {
        if (body.classList.contains('light-mode')) {
            body.classList.replace('light-mode', 'dark-mode');
            localStorage.setItem('theme', 'dark-mode');
            updateThemeIcon('dark-mode');
        } else {
            body.classList.replace('dark-mode', 'light-mode');
            localStorage.setItem('theme', 'light-mode');
            updateThemeIcon('light-mode');
        }
    });

    function updateThemeIcon(theme) {
        if (theme === 'dark-mode') {
            themeIcon.className = 'fa-solid fa-sun';
        } else {
            themeIcon.className = 'fa-solid fa-moon';
        }
    }


    // ==========================================================================
    // 3. SPA CORE NAVIGATION (Single Page Application Transition)
    // ==========================================================================
    const navButtons = document.querySelectorAll('.nav-item');
    const pageSections = document.querySelectorAll('.page-section');

    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetPageId = btn.getAttribute('data-target');
            
            // Atur status aktif pada tombol navigasi
            navButtons.forEach(b => b.classList.remove('active-nav'));
            btn.classList.add('active-nav');

            // Transisi Halaman Smooth Fade-in
            pageSections.forEach(section => {
                section.classList.add('hidden');
                section.classList.remove('active-page');
            });

            const targetSection = document.getElementById(targetPageId);
            targetSection.classList.remove('hidden');
            // Memicu reflow browser untuk merestart animasi fade-in
            void targetSection.offsetWidth; 
            targetSection.classList.add('active-page');

            // Otomatis scroll mulus ke atas saat beralih halaman
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });


    // ==========================================================================
    // 4. MODAL INTERACTION SYSTEM (Login & Sign Up)
    // ==========================================================================
    const loginModalBtn = document.getElementById('btn-login-modal');
    const signupModalBtn = document.getElementById('btn-signup-modal');
    const modalLogin = document.getElementById('modal-login');
    const modalSignup = document.getElementById('modal-signup');
    const closeBtns = document.querySelectorAll('.close-modal-btn');

    // Buka Modal
    loginModalBtn.addEventListener('click', () => modalLogin.classList.add('open-modal'));
    signupModalBtn.addEventListener('click', () => modalSignup.classList.add('open-modal'));

    // Tutup Modal via Tombol Close
    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            modalLogin.classList.remove('open-modal');
            modalSignup.classList.remove('open-modal');
        });
    });

    // Tutup Modal via Klik Area Luar Box
    window.addEventListener('click', (e) => {
        if (e.target === modalLogin) modalLogin.classList.remove('open-modal');
        if (e.target === modalSignup) modalSignup.classList.remove('open-modal');
    });


    // ==========================================================================
    // 5. LOCAL AUTHENTICATION SYSTEM (JavaScript Validation)
    // ==========================================================================
    const formSignup = document.getElementById('form-signup');
    const formLogin = document.getElementById('form-login');
    const authButtonsDiv = document.getElementById('auth-buttons');
    const userProfileDiv = document.getElementById('user-profile');
    const userDisplayName = document.getElementById('user-display-name');
    const logoutBtn = document.getElementById('btn-logout');

    // Check status session login saat inisialisasi aplikasi
    checkLoginStatus();

    // Event Handler: Registrasi / Sign Up
    formSignup.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('signup-username').value.trim();
        const email = document.getElementById('signup-email').value.trim();
        const password = document.getElementById('signup-password').value;

        if (password.length < 6) {
            alert('Keamanan Password Lemah! Masukkan minimal 6 karakter.');
            return;
        }

        // Ambil list database user lokal atau buat array kosong baru
        let users = JSON.parse(localStorage.getItem('local_users')) || [];
        
        // Validasi ketersediaan Username
        const userExists = users.some(u => u.username.toLowerCase() === username.toLowerCase());
        if (userExists) {
            alert('Gagal! Username telah digunakan oleh akun lain.');
            return;
        }

        // Daftarkan User Baru ke DB Lokal
        users.push({ username, email, password });
        localStorage.setItem('local_users', JSON.stringify(users));

        alert('Registrasi Berhasil! Silakan login menggunakan akun Anda.');
        formSignup.reset();
        modalSignup.classList.remove('open-modal');
        modalLogin.classList.add('open-modal'); // Beralih ke modal login demi UX yang baik
    });

    // Event Handler: Login
    formLogin.addEventListener('submit', (e) => {
        e.preventDefault();
        const usernameInput = document.getElementById('login-username').value.trim();
        const passwordInput = document.getElementById('login-password').value;

        let users = JSON.parse(localStorage.getItem('local_users')) || [];

        // Validasi kecocokan kredensial
        const validUser = users.find(u => u.username.toLowerCase() === usernameInput.toLowerCase() && u.password === passwordInput);

        if (validUser) {
            localStorage.setItem('current_session_user', validUser.username);
            checkLoginStatus();
            formLogin.reset();
            modalLogin.classList.remove('open-modal');
            alert(`Selamat Datang Kembali, ${validUser.username}!`);
        } else {
            alert('Akses Ditolak! Kredensial username atau password salah.');
        }
    });

    // Event Handler: Logout
    logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('current_session_user');
        checkLoginStatus();
        alert('Anda telah keluar dari sesi akun.');
    });

    // Fungsi Validasi & Update Interface Sesi User
    function checkLoginStatus() {
        const currentUser = localStorage.getItem('current_session_user');
        if (currentUser) {
            authButtonsDiv.classList.add('hidden');
            userProfileDiv.classList.remove('hidden');
            userDisplayName.textContent = currentUser;
        } else {
            userProfileDiv.classList.add('hidden');
            authButtonsDiv.classList.remove('hidden');
            userDisplayName.textContent = '';
        }
    }
// =========================================================================
// LOGIN REQUIRED SHOP ACCESS
// =========================================================================

const protectedShopButtons = document.querySelectorAll('.card-action-btn');

protectedShopButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const currentUser = localStorage.getItem('current_session_user');

        if (!currentUser) {
            e.preventDefault();

            modalLogin.classList.add('open-modal');

            return;
        }

        window.location.href = button.getAttribute('href');
    });
});


// TARUH KODE INI DI BAWAHNYA
const goSignupBtn = document.getElementById('go-signup-btn');

goSignupBtn.addEventListener('click', () => {
    modalLogin.classList.remove('open-modal');
    modalSignup.classList.add('open-modal');
   });
});