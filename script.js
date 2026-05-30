/* ==========================================================================
   Verixis AI Solutions - Shiftwave Core UI Automation Mechanics
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initNavigationScroll();
    initSecureMailhandshake();
});

/**
 * 1. Framed Navigation Dynamic Tracker
 * Updates color variables upon passing viewport layout offsets.
 */
function initNavigationScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar.style.background = 'rgba(10, 14, 23, 0.98)';
            navbar.style.padding = '0.75rem 2rem';
        } else {
            navbar.style.background = 'rgba(10, 14, 23, 0.85)';
            navbar.style.padding = '1.2rem 2rem';
        }
    });
}

/**
 * 2. Automated Onboarding Communication Route
 * Maps selection variables directly to an initialized system email sequence.
 */
function initSecureMailhandshake() {
    const form = document.getElementById('crmIntakeForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const clientName = document.getElementById('name').value;
        const clientCompany = document.getElementById('company').value;
        const projectScope = document.getElementById('scope').value;
        const textMessage = document.getElementById('message').value;
        const submitBtn = form.querySelector('.btn-submit');
        
        submitBtn.disabled = true;
        submitBtn.textContent = 'Launching Secure Mail Protocol...';

        // Encoding input strings for safe cross-platform parsing parameters
        const emailTarget = "reachus@verixisai.com";
        const emailSubject = encodeURIComponent(`Verixis Sprint Request - ${clientCompany}`);
        const emailBody = encodeURIComponent(
            `VERIXIS AI SOLUTIONS - ONBOARDING TELEMETRY\n` +
            `=========================================\n\n` +
            `Client Name: ${clientName}\n` +
            `Company: ${clientCompany}\n` +
            `Project Scope: ${projectScope}\n\n` +
            `Project Parameters Brief:\n` +
            `${textMessage}\n\n` +
            `=========================================\n` +
            `Secure transmission initialized via portal.`
        );

        // Forces local device handshake connection execution to launch mail dashboard app
        window.location.href = `mailto:${emailTarget}?subject=${emailSubject}&body=${emailBody}`;

        setTimeout(() => {
            submitBtn.textContent = 'Protocol Dispatched ✓';
            submitBtn.style.background = 'var(--accent-cyan)';
            form.reset();
            
            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Initiate Onboarding Protocol';
                submitBtn.style.background = 'linear-gradient(135deg, var(--accent-cyan), var(--accent-coral))';
                submitBtn.style.color = '#0A0E17';
            }, 3000);
        }, 1500);
    });
}