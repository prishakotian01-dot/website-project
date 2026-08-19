function toggleMenu() {

    const menu =
        document.querySelector(".nav-links");

    const btn = document.querySelector('.menu-btn');

    const isShown = menu.classList.toggle("show");

    if (btn) {
        btn.setAttribute('aria-expanded', isShown ? 'true' : 'false');
    }

}


/* CONTACT FORM */

const form = document.getElementById('contactForm') || document.querySelector('.contact-form form');

if (form) {

    form.addEventListener('submit', async function(event) {

        event.preventDefault();

        const endpoint = form.getAttribute('data-endpoint') || '';

        const payload = {
            name: form.name?.value || '',
            email: form.email?.value || '',
            subject: form.subject?.value || '',
            message: form.message?.value || ''
        };

        if (endpoint) {
            try {
                await fetch(endpoint, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });

                alert('Thank you for contacting Ecopoly Biotech!');
                form.reset();
            } catch (err) {
                console.error(err);
                alert('Submission failed — please try again later.');
            }

        } else {
            // No backend configured — keep client-side fallback
            alert('Thank you for contacting Ecopoly Biotech! (demo)');
            form.reset();
        }

    });

}

// Close menu with Escape key for accessibility
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const menu = document.querySelector('.nav-links');
        const btn = document.querySelector('.menu-btn');
        if (menu && menu.classList.contains('show')) {
            menu.classList.remove('show');
            if (btn) btn.setAttribute('aria-expanded', 'false');
        }
    }
});