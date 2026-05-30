/* ==========================================================================
   Verixis AI Solutions - Interactive UI Pipeline Engine
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Dynamic Scroll Tracker for Glassmorphism Navbar Changes
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 40) {
                navbar.style.background = 'rgba(7, 11, 25, 0.95)';
                navbar.style.borderBottom = '1px solid rgba(118, 215, 205, 0.2)';
            } else {
                navbar.style.background = 'rgba(7, 11, 25, 0.85)';
                navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.05)';
            }
        });
    }

    const form = document.querySelector('form');
    if (form) {
        const submitBtn = form.querySelector('.btn-submit');
        const originalText = submitBtn ? submitBtn.textContent : '';

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const nameData = document.getElementById('name').value;
            const emailData = document.getElementById('email').value;
            const timelineData = document.getElementById('timeline').value;

            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.textContent = 'Launching Secure Mail Protocol...';
            }

            const targetInbox = 'reachus@verixisai.com';
            const subjectLine = encodeURIComponent(`Verixis Consultation Intake - ${nameData}`);
            const emailBody = encodeURIComponent(
                `VERIXIS AI SOLUTIONS - STRATEGIC INTAKE TELEMETRY\n` +
                `==================================================\n\n` +
                `Client Full Name: ${nameData}\n` +
                `Corporate Contact: ${emailData}\n` +
                `Target Sprint Timeline Parameters: ${timelineData}\n\n` +
                `==================================================\n` +
                `Secure initialization complete. Dispatching to delivery architecture loop.`
            );

            window.location.href = `mailto:${targetInbox}?subject=${subjectLine}&body=${emailBody}`;

            setTimeout(() => {
                if (submitBtn) {
                    submitBtn.textContent = 'Protocol Dispatched ✓';
                    submitBtn.style.background = '#76D7CD';
                    submitBtn.style.color = '#000';
                }
                form.reset();
            }, 1000);

            setTimeout(() => {
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalText;
                    submitBtn.style.background = '';
                    submitBtn.style.color = '';
                }
            }, 2500);
        });
    }
});