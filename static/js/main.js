// static/js/main.js
// GSAP animations + interactivity

function initTailwind() {
    return {
        config(userConfig = {}) {
            return {
                content: [],
                theme: {
                    extend: {
                        colors: {
                            cyan: { 400: '#22d3ee' }
                        }
                    }
                },
                plugins: [],
                ...userConfig,
            }
        },
        theme(userTheme = {}) {
            return {
                ...this.defaultTheme(),
                ...userTheme,
            }
        },
        defaultTheme() {
            return {
                extend: {},
            }
        },
    }
}

function initializeGSAP() {
    // Hero animation
    gsap.to('.hero-text', {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        stagger: 0.15
    })

    // Section fade-ins on scroll
    const sections = document.querySelectorAll('section')
    sections.forEach((section, i) => {
        gsap.from(section, {
            opacity: 0,
            y: 60,
            duration: 0.9,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: section,
                start: 'top 75%',
                toggleActions: 'play none none reverse'
            }
        })
    })
}

function smoothScrollTo(id) {
    const element = document.getElementById(id)
    if (element) {
        const navOffset = 80
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.scrollY - navOffset

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        })
    }
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu')
    const icon = document.getElementById('mobile-menu-btn').querySelector('i')
    
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden')
        icon.classList.replace('fa-bars', 'fa-xmark')
    } else {
        menu.classList.add('hidden')
        icon.classList.replace('fa-xmark', 'fa-bars')
    }
}

function handleSubmit(e) {
    e.preventDefault()
    
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const message = document.getElementById('message').value
    
    if (!name || !email) {
        alert("Please fill in your name and email 😊")
        return
    }
    
    // Simulate sending (in real app this would POST to backend)
    const btn = e.target.querySelector('button')
    const originalText = btn.innerHTML
    
    btn.innerHTML = `
        <span class="animate-pulse">Sending to Riya...</span>
    `
    setTimeout(() => {
        alert(`✅ Message sent successfully!\n\nThank you, ${name}. Riya will get back to you shortly.`)
        e.target.reset()
        btn.innerHTML = originalText
    }, 1400)
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Init Tailwind
    const config = initTailwind().config()
    const theme = initTailwind().theme(config)
    // Tailwind script is already loaded via CDN
    
    // GSAP
    initializeGSAP()
    
    // Mobile menu
    document.getElementById('mobile-menu-btn').addEventListener('click', toggleMobileMenu)
    
    console.log('%c✅ Riya Thasli K Data Analyst Portfolio loaded successfully!', 'color:#22d3ee; font-family:monospace; font-size:13px')
})