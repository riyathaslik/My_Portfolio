"""
generate_site.py
-----------------
Builds a fully static, framework-free index.html from data.py.

Why static? Because a static site (plain HTML/CSS/JS) can be hosted for
FREE, forever, with no server and no paid tier — e.g. GitHub Pages,
Netlify, Vercel, or Cloudflare Pages all offer free static hosting.

Usage:
    python generate_site.py

This writes index.html into this same folder. Open it directly in a
browser, or push the whole folder to GitHub Pages / Netlify / Vercel.
"""

import os
from data import (
    PROFILE, EXECUTIVE_SUMMARY, BUSINESS_PROBLEM, METHODOLOGY, SKILLS,
    EXPERIENCE, PROJECTS, RESULTS, RECOMMENDATION, NEXT_STEPS,
    EDUCATION, CERTIFICATIONS, LANGUAGES,
)

OUT_FILE = "index.html"


def hero_photo_html():
    """Use an <img> with a JS onerror fallback so this works whether or
    not the user has added their photo yet — no regeneration needed."""
    path = PROFILE["photo_path"]
    return f"""
    <img class="hero-photo" src="{path}" alt="{PROFILE['name']}"
         onerror="this.style.display='none'; document.getElementById('photoPh').style.display='flex';">
    <div class="hero-photo-placeholder" id="photoPh" style="display:none;">
        ADD PHOTO<br>{path}
    </div>
    """


def kpi_html(results):
    cards = "".join(
        f"""<div class="kpi-card"><div class="kpi-value">{k['value']}</div>
            <div class="kpi-label">{k['label']}</div></div>"""
        for k in results
    )
    return f'<div class="kpi-strip">{cards}</div>'


def methodology_html(steps):
    cards = "".join(
        f"""<div class="card reveal"><div class="eyebrow">STEP {i+1}</div>
            <h4>{step}</h4><div class="muted">{desc}</div></div>"""
        for i, (step, desc) in enumerate(steps)
    )
    return f'<div class="grid-3">{cards}</div>'


def skills_html(skills):
    cards = "".join(
        f"""<div class="card reveal"><h4>{group}</h4>
            {''.join(f'<span class="tag">{it}</span>' for it in items)}</div>"""
        for group, items in skills.items()
    )
    return f'<div class="grid-2">{cards}</div>'


def experience_html(experience):
    items = "".join(
        f"""<div class="timeline-item reveal">
            <h4>{e['role']} — {e['org']}</h4>
            <div class="period">{e['period']}</div>
            <ul>{''.join(f'<li>{p}</li>' for p in e['points'])}</ul>
        </div>"""
        for e in experience
    )
    return items


def projects_html(projects):
    cards = "".join(
        f"""<div class="card reveal">
            <h4>{p['title']}</h4>
            <div class="muted" style="margin-bottom:0.6rem;">{p['subtitle']}</div>
            <div style="margin-bottom:0.4rem;"><b>Problem:</b> {p['problem']}</div>
            <div style="margin-bottom:0.4rem;"><b>Approach:</b> {p['approach']}</div>
            <div style="margin-bottom:0.6rem;"><b>Result:</b> {p['result']}</div>
            {''.join(f'<span class="pill">{s}</span>' for s in p['stack'])}
        </div>"""
        for p in projects
    )
    return cards


def results_table_html(results):
    rows = "".join(
        f"<tr><td>{r['label']}</td><td style='font-family:\"JetBrains Mono\",monospace; color:var(--teal); font-weight:700;'>{r['value']}</td></tr>"
        for r in results
    )
    return f"""<table style="width:100%; border-collapse:collapse;">
        <tbody>{rows}</tbody></table>"""


def edu_cert_html(education, certifications):
    edu = "".join(f"<li><b>{e['degree']}</b> — {e['org']}<br><span class='muted'>{e['period']}</span></li>" for e in education)
    cert = "".join(f"<li><b>{c['name']}</b> — {c['org']}<br><span class='muted'>{c['period']}</span></li>" for c in certifications)
    return f"""<div class="grid-2">
        <div class="card reveal"><h4>Education</h4><ul>{edu}</ul></div>
        <div class="card reveal"><h4>Certifications</h4><ul>{cert}</ul></div>
    </div>"""


def build_html():
    contact_bits = [
        f"<a href='mailto:{PROFILE['email']}'>{PROFILE['email']}</a>",
        f"<span>{PROFILE['phone']}</span>",
        f"<a href='{PROFILE['linkedin']}' target='_blank' rel='noopener'>LinkedIn</a>",
        f"<a href='{PROFILE['github']}' target='_blank' rel='noopener'>GitHub</a>",
    ]
    if PROFILE.get("portfolio_site") and PROFILE["portfolio_site"] != "#":
        contact_bits.append(f"<a href='{PROFILE['portfolio_site']}' target='_blank' rel='noopener'>Live site</a>")

    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{PROFILE['name']} · Data Analytics Portfolio</title>
<meta name="description" content="{PROFILE['tagline']}">
<link rel="stylesheet" href="style.css">
</head>
<body>

<section class="hero">
    <canvas id="diveCanvas"></canvas>
    <div class="hero-content container">
        {hero_photo_html()}
        <div class="eyebrow">Data Analytics Portfolio</div>
        <h1>{PROFILE['name']}</h1>
        <div class="role">{PROFILE['title']}</div>
        <div class="tagline">{PROFILE['tagline']}</div>
        <div class="hero-contact">{''.join(contact_bits)}</div>
    </div>
    <div class="scroll-cue">Scroll to dive in ↓</div>
</section>

<div class="container">
    {kpi_html(RESULTS)}
</div>

<div class="container">

    <section class="section reveal">
        <div class="section-head"><div class="eyebrow">01 · Overview</div><h2>Executive Summary</h2></div>
        <div class="card">{EXECUTIVE_SUMMARY}</div>
    </section>
    <hr class="line">

    <section class="section reveal">
        <div class="section-head"><div class="eyebrow">02 · Context</div><h2>Business Problem</h2></div>
        <div class="card">{BUSINESS_PROBLEM}</div>
    </section>
    <hr class="line">

    <section class="section">
        <div class="section-head reveal"><div class="eyebrow">03 · Approach</div><h2>Methodology</h2></div>
        {methodology_html(METHODOLOGY)}
    </section>
    <hr class="line">

    <section class="section">
        <div class="section-head reveal"><div class="eyebrow">04 · Capabilities</div><h2>Skills</h2></div>
        {skills_html(SKILLS)}
    </section>
    <hr class="line">

    <section class="section">
        <div class="section-head reveal"><div class="eyebrow">05 · Track Record</div><h2>Professional Experience</h2></div>
        {experience_html(EXPERIENCE)}
    </section>
    <hr class="line">

    <section class="section">
        <div class="section-head reveal"><div class="eyebrow">06 · Case Studies</div><h2>Project Portfolio</h2></div>
        {projects_html(PROJECTS)}
    </section>
    <hr class="line">

    <section class="section reveal">
        <div class="section-head"><div class="eyebrow">07 · Impact</div><h2>Results at a Glance</h2></div>
        <div class="card">{results_table_html(RESULTS)}</div>
    </section>
    <hr class="line">

    <section class="section">
        <div class="section-head reveal"><div class="eyebrow">08 · Foundation</div><h2>Education &amp; Certifications</h2></div>
        {edu_cert_html(EDUCATION, CERTIFICATIONS)}
        <div class="card reveal"><b>Languages:</b> {', '.join(LANGUAGES)}</div>
    </section>
    <hr class="line">

    <section class="section">
        <div class="section-head reveal"><div class="eyebrow">09 · So What</div><h2>Business Recommendation &amp; Next Steps</h2></div>
        <div class="grid-2">
            <div class="card reveal"><h4>Recommendation</h4>{RECOMMENDATION}</div>
            <div class="card reveal"><h4>Next Steps</h4><ul>{''.join(f'<li>{s}</li>' for s in NEXT_STEPS)}</ul></div>
        </div>
    </section>

</div>

<footer>© {PROFILE['name']} · Built with Python — free & static, hosted for $0</footer>

<script src="script.js"></script>
</body>
</html>
"""
    return html


if __name__ == "__main__":
    html = build_html()
    with open(OUT_FILE, "w", encoding="utf-8") as f:
        f.write(html)
    size_kb = os.path.getsize(OUT_FILE) / 1024
    print(f"✅ Generated {OUT_FILE} ({size_kb:.1f} KB). Open it in a browser, or deploy the folder for free.")
