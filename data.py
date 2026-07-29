"""
data.py
-------
All portfolio content lives here, separated from presentation (app.py).
Edit this file to update your profile — no need to touch the UI code.
"""

# ----------------------------------------------------------------------
# PROFILE
# ----------------------------------------------------------------------
PROFILE = {
    "name": "Riya Thasli K",
    "title": "Data Analyst | AI-Assisted Analytics | Web Developer",
    "location": "Kerala, India",
    "email": "riyathasli6954@gmail.com",
    "phone": "+91 8330070481",
    "linkedin": "https://www.linkedin.com/in/riya-thasli-k",      # <-- paste your LinkedIn URL
    "github": "https://github.com/riyathaslik",        # <-- paste your GitHub URL
    "portfolio_site": "#",  # <-- paste your live portfolio URL if hosted
    # Put your photo file inside the assets/ folder and reference it here.
    # Example: "assets/profile_photo.jpg"
    "photo_path": "assets/profile.jpeg",
    "tagline": (
        "Computer Science Engineering student and data analyst who turns "
        "messy, real-world data into decisions leadership can act on."
    ),
}

# ----------------------------------------------------------------------
# EXECUTIVE SUMMARY (used on both the app hero section and README)
# ----------------------------------------------------------------------
EXECUTIVE_SUMMARY = (
    "Data Analyst with hands-on experience across enterprise analytics, computer "
    "vision, business intelligence, and full-stack data engineering, gained through "
    "internships at Tata Industries and InLighnX Global, plus freelance web "
    "development for a national youth organization in Saudi Arabia. Comfortable "
    "operating end-to-end: cleaning and modeling raw data, building governed data "
    "pipelines, designing dashboards in Power BI and Excel, and translating findings "
    "into recommendations for non-technical stakeholders. Currently completing a "
    "B.Tech in Computer Science Engineering."
)

# ----------------------------------------------------------------------
# BUSINESS PROBLEM (framing used in README / case-study style)
# ----------------------------------------------------------------------
BUSINESS_PROBLEM = (
    "Organizations sit on large volumes of operational, transactional, and behavioral "
    "data that stay under-used because it is scattered, inconsistent, or too raw for "
    "decision-makers to act on directly — from industrial quality metrics and PPE "
    "compliance footage to e-commerce transactions and web analytics events. The "
    "recurring business question across every engagement in this portfolio was the "
    "same: how do we convert raw, fragmented data into governed, trustworthy, "
    "decision-ready insight — quickly, accurately, and in a way stakeholders can act on."
)

# ----------------------------------------------------------------------
# METHODOLOGY
# ----------------------------------------------------------------------
METHODOLOGY = [
    ("Define & scope", "Clarify the business question and success metric with stakeholders before touching data."),
    ("Collect & engineer", "Build ingestion and transformation pipelines (Python/Pandas, SQL, Excel) to clean and structure raw data."),
    ("Model & analyze", "Apply statistical models, correlation analysis, and ML/CV models where relevant to surface patterns."),
    ("Visualize & report", "Turn analysis into Power BI / Excel dashboards and reports designed for a non-technical audience."),
    ("Govern & validate", "Check data quality, access control, and reliability before results reach decision-makers."),
    ("Recommend & iterate", "Close the loop with clear business recommendations and a plan for the next iteration."),
]

# ----------------------------------------------------------------------
# SKILLS — grouped with MNC / enterprise-recognizable keywords
# ----------------------------------------------------------------------
SKILLS = {
    "Data Analysis & Modeling": [
        "Data Analysis & Statistical Modeling", "Correlation & Trend Analysis",
        "Time-Series Feature Engineering", "Python (Pandas, NumPy)", "SQL",
        "Predictive Modeling (TensorFlow, Keras)",
    ],
    "Data Visualization & Reporting": [
        "Power BI (DAX, Power Query)", "Excel (Pivot Tables, Slicers, Conditional Formatting)",
        "Matplotlib & Seaborn", "Executive Dashboarding", "Storytelling with Data",
    ],
    "Data Engineering & Transformation": [
        "ETL / Data Pipeline Design", "Data Cleaning & Ingestion (10,000+ record datasets)",
        "Relational Database Design (Supabase, MySQL, PostgreSQL/pgAdmin4)",
        "Flask & API Integration", "Version Control (GitHub)",
    ],
    "Data Quality & Governance": [
        "Role-Based Access Control (RBAC)", "Data Security & Privacy",
        "Data Validation & Accuracy Auditing", "Compliance & Standards Alignment",
    ],
    "AI Prompting & Applied ML": [
        "AI Prompting & LLM-assisted Workflows", "Computer Vision (OpenCV, Ultralytics, LabelImg)",
        "CNN Architectures (ResNet, MobileNet)", "Voice/NLP Automation (SpeechRecognition, PyTTSx3)",
    ],
    "Web Development": [
        "JavaScript, HTML, CSS", "Vercel Deployment", "Google Analytics 4 & Tag Manager",
    ],
    "Stakeholder & Change Management": [
        "Stakeholder Management", "Cross-functional Collaboration", "Process Improvement",
        "Change Management", "Requirements Gathering", "Documentation & Knowledge Transfer",
    ],
    "Tools": [
        "Jupyter Notebook", "VS Code", "GIMP", "MySQL Workbench", "Render", "Git/GitHub",
    ],
}

# ----------------------------------------------------------------------
# EXPERIENCE
# ----------------------------------------------------------------------
EXPERIENCE = [
    {
        "role": "Freelance Web Developer",
        "org": "Self-employed — UAE",
        "period": "Present",
        "points": [
            "Architected and deployed a centralized web portal for a Saudi Arabian national youth organization, securely managing high-volume member data using JavaScript, HTML, and CSS.",
            "Engineered a Role-Based Access Control system with Supabase Auth to segment data visibility across admins, managers, and standard users.",
            "Designed and optimized the relational database architecture on Supabase for efficient retrieval, real-time sync, and structured reporting.",
        ],
    },
    {
        "role": "Data Analyst Intern",
        "org": "Tata Insights and Quants, Tata Industries Pvt. Ltd. — Bangalore",
        "period": "Oct 2025 – Apr 2026",
        "points": [
            "Engineered high-fidelity image datasets (LabelImg, GIMP) to train and validate deep learning models for automated PPE detection, strengthening safety-compliance frameworks.",
            "Built data collection and behavioral tracking pipelines with Google Analytics 4 and Tag Manager, performing end-to-end cleaning and visualization for strategic decisions.",
            "Audited industrial measurement and compliance metrics for the Titan Dimension Marking project to ensure manufacturing quality and dimensional accuracy.",
            "Ran hardware-software integration and on-site operational testing for biomedical health-monitoring systems, validating reliability and compliance.",
        ],
    },
    {
        "role": "Data Analyst Intern",
        "org": "InLighnX Global Pvt. Ltd. — Remote",
        "period": "Jun 2025 – Jul 2025",
        "points": [
            "Built Python (Pandas) and Excel pipelines to clean and process 10,000+ transactional records, improving data processing accuracy by 80%.",
            "Quantified business impact of macroeconomic indicators (CPI, unemployment, fuel prices) via statistical correlation models.",
            "Developed interactive dashboards (Pivot Tables, Slicers, Conditional Formatting) monitoring ₹10.22M+ in revenue across 23 cities.",
            "Engineered a hands-free Python voice assistant (SpeechRecognition, PyTTSx3) reaching 90%+ recognition accuracy.",
        ],
    },
]

# ----------------------------------------------------------------------
# PROJECTS — each one is a mini case study
# ----------------------------------------------------------------------
PROJECTS = [
    {
        "title": "Retail Data Analytics & Modeling",
        "subtitle": "Walmart Sales Data Analysis",
        "problem": "Store-level weekly sales fluctuate with macroeconomic conditions, making planning difficult.",
        "approach": "Analyzed weekly sales across 45 stores; engineered time-series features in Python; correlated sales with CPI and unemployment.",
        "result": "Quantified the relationship between economic indicators and store performance, supporting sales planning.",
        "stack": ["Python", "Pandas", "Statistics"],
    },
    {
        "title": "National Youth Data Management Web Portal",
        "subtitle": "Full-stack platform for a national organization",
        "problem": "A national youth organization needed a secure, centralized system to manage member records.",
        "approach": "Built and deployed a portal on Supabase and Vercel with a centralized schema and role-based access control.",
        "result": "Supports 500+ user records with optimized backend performance and reduced unauthorized access.",
        "stack": ["Supabase", "Vercel", "JavaScript", "RBAC"],
    },
    {
        "title": "E-Commerce Business Intelligence Platform",
        "subtitle": "Amazon Sales Dashboard",
        "problem": "Raw transactional exports gave no visibility into monthly revenue or product performance.",
        "approach": "Transformed raw data into an interactive Excel dashboard using pivot tables.",
        "result": "Clear visibility into monthly revenue trends and top-selling products for decision-makers.",
        "stack": ["Excel", "Pivot Tables"],
    },
    {
        "title": "Business Intelligence & Sales Optimization Dashboard",
        "subtitle": "Pizza Sales Report",
        "problem": "Sales performance metrics were not consolidated for quick, data-driven decisions.",
        "approach": "Built an interactive Power BI dashboard using DAX measures and Power Query.",
        "result": "Consolidated view of revenue and top-selling products to support sales strategy.",
        "stack": ["Power BI", "DAX", "Power Query"],
    },
    {
        "title": "AI-Driven IoT Smart Farming System",
        "subtitle": "Disease Diagnosis & Treatment Recommendations",
        "problem": "Farmers lack fast, accurate ways to detect crop disease and get treatment guidance.",
        "approach": "Built a CNN-based (ResNet/MobileNet) diagnosis system with TensorFlow/Keras; integrated IoT soil/temperature/humidity sensors and weather APIs.",
        "result": "Achieved 90%+ prediction accuracy on plant leaf datasets with near real-time monitoring and personalized treatment recommendations.",
        "stack": ["TensorFlow", "Keras", "CNN", "IoT"],
    },
]

# ----------------------------------------------------------------------
# RESULTS / IMPACT METRICS (shown as KPI cards)
# ----------------------------------------------------------------------
RESULTS = [
    {"label": "Data processing accuracy improvement", "value": "80%"},
    {"label": "Revenue monitored across dashboards", "value": "₹10.22M+"},
    {"label": "CV model prediction accuracy", "value": "90%+"},
    {"label": "User records secured via RBAC portal", "value": "500+"},
    {"label": "Records cleaned in a single pipeline", "value": "10,000+"},
    {"label": "Cities covered in BI reporting", "value": "23"},
]

# ----------------------------------------------------------------------
# BUSINESS RECOMMENDATION & NEXT STEPS
# ----------------------------------------------------------------------
RECOMMENDATION = (
    "Teams evaluating this profile for an analyst, BI, or data-engineering-adjacent "
    "role should expect someone who can own a problem end-to-end: scope it with "
    "stakeholders, build the pipeline, model the data, ship the dashboard, and defend "
    "the recommendation in the room. The strongest fit is in roles that blend analytics "
    "with data quality/governance and cross-functional stakeholder work rather than "
    "pure back-end engineering."
)

NEXT_STEPS = [
    "Deepen cloud data-warehousing exposure (BigQuery / Snowflake / Redshift).",
    "Formalize A/B testing and experimentation design skills.",
    "Expand MLOps exposure to take CV/ML models from notebook to production.",
    "Pursue an industry certification in data governance (e.g., DAMA / CDMP track).",
]

# ----------------------------------------------------------------------
# EDUCATION & CERTIFICATIONS
# ----------------------------------------------------------------------
EDUCATION = [
    {"degree": "B.Tech, Computer Science and Engineering", "org": "KMCT IETM, Calicut, Kerala", "period": "Oct 2022 – Present"},
    {"degree": "Class XII, Kerala Board of Higher Secondary Examination", "org": "P P M H S S Kottukkara, Malappuram, Kerala", "period": "2022 · 91.58%"},
]

CERTIFICATIONS = [
    {"name": "Certificate in Programming in Python", "org": "SWAYAM", "period": "May 2025 · Elite Score 87%"},
    {"name": "Data Visualisation: Empowering Business with Effective Insights", "org": "Forage | TATA", "period": "Jun 2026"},
]

LANGUAGES = ["English", "Malayalam", "Tamil"]
