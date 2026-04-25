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
        tags: ["Python", "Pandas", "Time-Series", "Matplotlib"],
        image: "static\files\Walmart-Case-Study-StartupTalky.jpg",
        repo: " https://riyathaslik.github.io/Walmart-Sales-Analysis/",
        description: `
            <p>I analyzed weekly sales data from 45 Walmart stores to identify key economic drivers. This project involved extensive feature engineering to account for seasonality and holidays.</p>
            <p><strong>Impact:</strong> Successfully quantified the correlation between sales and economic indicators like CPI and unemployment. I used Python's visualization libraries to create clear trend reports for stakeholders.</p>
        `
    },
    'amazon': {
        title: "Amazon Sales Dashboard 2024",
        tags: ["Excel", "Power Query", "Pivot Tables", "Business Intelligence"],
        image: "static\files\620184_95e8.jpg",
        repo: " https://riyathaslik.github.io/Amazon-Sales/",
        description: `
            <p>Transformed raw transactional data into a fully interactive Business Intelligence tool. I used Power Query for ETL (Extract, Transform, Load) to clean over 10,000+ rows of data.</p>
            <p><strong>Features:</strong> The dashboard visualizes monthly revenue growth, identifies top-selling products, and tracks customer demographics for better inventory management.</p>
        `
    },
    'chatbot': {
        title: "Voice-Activated AI Chatbot",
        tags: ["Python", "Speech Recognition", "Wikipedia API", "AI"],
        image: "static\files\Voice-Activated-AI-Chatbots-compressed.png",
        repo: "https://riyathaslik.github.io/Voice-Activated-AI-Chatbot/",
        description: `
            <p>Developed a voice-driven AI assistant using <code>speech_recognition</code> and <code>pyttsx3</code>. It performs system commands, web searches, and answers general queries through Wikipedia integration.</p>
            <p><strong>Accuracy:</strong> Achieved a 90%+ recognition rate in diverse acoustic environments. It showcases my ability to bridge the gap between AI models and real-world utility.</p>
        `
    },
    'pizza': {
        title: "Pizza Sales Report Dashboard",
        tags: ["Power BI", "DAX", "SQL", "Data Modeling"],
        image: "static\files\1716196277228.png",
        repo: "https://riyathaslik.github.io/Pizza-Sales-Report-End-to-End-Dashboard/",
        description: `
            <p>A flagship Business Intelligence project. I built an end-to-end data pipeline from a SQL database into Power BI. I leveraged advanced DAX measures to calculate Year-over-Year (YoY) growth and average order values.</p>
            <p><strong>Interactive Elements:</strong> The dashboard includes dynamic slicers and drill-through features that allow users to explore data at a granular store level.</p>
        `
    },
    'crop-ai': {
    title: "AI Diagnosis & Treatment Recommendation System for Crops",
    tags: ["TensorFlow", "Keras", "IoT", "CNN", "OpenCV"],
    image: "static\files\1_CUjbLtX-FeWfT6D06ebziA.jpg", // Ensure this matches the HTML img src
    repo: " https://riyathaslik.github.io/Agri-Iot/",
    description: `
        <p>I developed an AI-powered system designed to identify crop diseases with high precision. By utilizing <strong>CNN architectures like ResNet/MobileNet</strong>, the model achieved over <strong>90% prediction accuracy</strong> on complex plant leaf datasets.</p>
        
        <p><strong>Smart Farming Integration:</strong> Beyond simple diagnosis, I integrated IoT sensors to track soil moisture, temperature, and humidity. Combined with real-time weather APIs, the system provides personalized treatment recommendations, significantly improving decision-making efficiency for farmers.</p>
        
        <p>This project showcases my ability to combine <strong>Computer Vision</strong> with real-world sensor data for actionable Business Intelligence.</p>
    `
}
};

// MODAL CONTROLS
function openProject(id) {
    const data = projectData[id];
    if (!data) return;

    // Update Modal Content
    document.getElementById('modal-title').innerText = data.title;
    document.getElementById('modal-image').src = data.image;
    document.getElementById('modal-description').innerHTML = data.description;
    document.getElementById('modal-link').href = data.repo;
    
    // Inject Tags
    const tagsContainer = document.getElementById('modal-tags');
    tagsContainer.innerHTML = data.tags.map(tag => 
        `<span class="px-4 py-2 bg-white/5 border border-white/10 text-white text-xs rounded-xl">${tag}</span>`
    ).join('');

    // GSAP Entry Animation
    const modal = document.getElementById('project-modal');
    modal.classList.remove('hidden');
    
    gsap.to('#modal-content', {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "back.out(1.2)"
    });
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