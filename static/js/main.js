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
// PROJECT DATABASE
const projectData = {
    'walmart': {
        title: "Walmart Sales Analysis",
        tags: ["Python", "Time-Series", "Pandas", "Matplotlib"],
        image: "static/files/Walmart-Case-Study-StartupTalky.jpg",
        repo: "https://github.com/riyathaslik/Walmart-Sales-Analysis",
        description: `
            <p>I engineered a time-series analysis of weekly sales data from 45 Walmart stores to identify macro-economic revenue drivers.</p>
            <p><strong>Impact:</strong> I quantified the correlation between sales and indicators like CPI and unemployment, using Python to generate strategic trend reports for stakeholders.</p>
        `
    },
    'amazon': {
        title: "Amazon Sales Analysis 2024",
        tags: ["Excel", "Power Query", "Pivot Tables", "BI"],
        image: "static/files/620184_95e8.jpg",
        repo: "https://github.com/riyathaslik/Amazon-Sales",
        description: `
            <p>I transformed raw transactional data into an interactive BI tool using Power Query and Pivot Tables.</p>
            <p><strong>Features:</strong> The dashboard visualizes monthly revenue growth and identifies top-selling products to optimize inventory management.</p>
        `
    },
    'chatbot': {
        title: "Voice-Activated AI Assistant",
        tags: ["Python", "NLP", "Speech Recognition", "AI"],
        image: "static/files/Voice-Activated-AI-Chatbots-compressed.png",
        repo: "https://github.com/riyathaslik/Voice-Activated-AI-Chatbot",
        description: `
            <p>Developed a Python-based AI assistant using <code>speech_recognition</code> and <code>pyttsx3</code> that achieves 90%+ accuracy.</p>
            <p><strong>Capabilities:</strong> It executes system commands and real-time Wikipedia searches through voice-driven Natural Language Processing.</p>
        `
    },
    'pizza': {
        title: "Pizza Sales Intelligence Dashboard",
        tags: ["Power BI", "DAX", "SQL", "Data Modeling"],
        image: "static/files/1694736293921.png",
        repo: "https://github.com/riyathaslik/Pizza-Sales-Report-End-to-End-Dashboard",
        description: `
            <p>Built an end-to-end Power BI pipeline leveraging advanced DAX measures to track real-time sales KPIs.</p>
            <p><strong>Interactive Elements:</strong> Includes dynamic slicers for Year-over-Year (YoY) growth and average order value tracking.</p>
        `
    },
    'crop-ai': {
        title: "Smart-Agri: AI Crop Detection, Diagnosis & IoT System",
        tags: ["TensorFlow", "CNN", "IoT", "Computer Vision"],
        image: "static/files/1_CUjbLtX-FeWfT6D06ebziA.jpg",
        repo: "https://github.com/riyathaslik/Agri-Iot",
        description: `
            <p>I developed a deep learning system using CNN architectures like ResNet to detect and diagnose crop diseases with 90%+ accuracy.</p>
            <p><strong>IoT Integration:</strong> The system combines real-time sensor data (soil moisture, humidity) with weather APIs to provide personalized treatment recommendations.</p>
        `
    }
};

// MODAL CONTROLS
function openProject(projectId) {
    const project = projectData[projectId];
    if (!project) return;

    // 1. Set the Title and Description
    document.getElementById('modal-title').innerText = project.title;
    document.getElementById('modal-description').innerHTML = project.description;

    // 2. Set the Image (CRITICAL: ensure path uses / not \)
    const modalImg = document.getElementById('modal-image');
    modalImg.src = project.image.replace(/\\/g, '/'); // This auto-fixes backslashes!

    // 3. Set the Repository Link (CRITICAL: .trim() removes leading spaces)
    const modalLink = document.getElementById('modal-link');
    modalLink.href = project.repo.trim(); 

    // 4. Handle Tags
    const tagsContainer = document.getElementById('modal-tags');
    tagsContainer.innerHTML = project.tags.map(tag => 
        `<span class="px-4 py-1 bg-white/10 text-white text-xs font-bold rounded-full uppercase">${tag}</span>`
    ).join('');

    // 5. Show the modal (GSAP Animation)
    const modal = document.getElementById('project-modal');
    modal.classList.remove('hidden');
    gsap.to('#modal-content', { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" });
}

function closeProject() {
    gsap.to('#modal-content', {
        opacity: 0,
        y: 60,
        duration: 0.5,
        ease: "power3.in",
        onComplete: () => {
            document.getElementById('project-modal').classList.add('hidden');
        }
    });
}

function openProject(id) {
    const data = projectData[id];
    if (!data) return;

    // Fill Modal
    document.getElementById('modal-title').innerText = data.title;
    document.getElementById('modal-image').src = data.image;
    document.getElementById('modal-description').innerHTML = data.description;
    
    const tagsContainer = document.getElementById('modal-tags');
    tagsContainer.innerHTML = data.tags.map(t => `<span class="px-3 py-1 bg-cyan-400/10 text-cyan-400 text-xs rounded-lg border border-cyan-400/20">${t}</span>`).join('');

    // GSAP Animation
    const modal = document.getElementById('project-modal');
    modal.classList.remove('hidden');
    
    gsap.to('#modal-content', {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "back.out(1.7)"
    });
}

function closeProject() {
    gsap.to('#modal-content', {
        opacity: 0,
        y: 50,
        duration: 0.4,
        ease: "power2.in",
        onComplete: () => {
            document.getElementById('project-modal').classList.add('hidden');
        }
    });
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