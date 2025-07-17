---
layout: default
title: "Master Bartending Championship - Official Rules"
description: "Official rules and regulations for Master Bartending Championship competitions"
---

# Master Bartending Championship
## Official Rules & Regulations

Welcome to the official rules repository for the Master Bartending Championship (MBC). This site provides comprehensive, version-controlled access to all competition rules with full change tracking and transparency.

---

## Competition Disciplines

<div class="discipline-grid">
  <div class="discipline-card">
    <h3><a href="/rules/speed-cocktail-bartending/">🏃‍♂️ Speed Cocktail Bartending</a></h3>
    <p>Test your speed creating cocktails to exacting quality standards. Precision, timing, and technique combined.</p>
    <small>Rules 1-72 • Updated July 2025</small>
  </div>

  <div class="discipline-card">
    <h3><a href="/rules/traditional-bartending/">🎨 Traditional Cocktail Bartending</a></h3>
    <p>Showcase creativity and skill through original cocktail design, presentation, and execution.</p>
    <small>Rules 73-116 • Updated March 2024</small>
  </div>

  <div class="discipline-card">
    <h3><a href="/rules/membership/">👥 Membership Guidelines</a></h3>
    <p>Registration requirements, competition entry procedures, and organizational guidelines.</p>
    <small>Rules 117-125 • Updated March 2024</small>
  </div>
</div>

---

## Recent Changes (Last 3 Months)

*This feed shows the actual rule changes, not just titles, providing complete transparency into rule evolution.*

{% for change in site.data.recent-changes.changes limit:5 %}
<div class="change-entry change-impact-{{ change.impact }}">
  <div class="change-header">
    <span class="change-date">📅 {{ change.date | date: "%B %d, %Y" }}</span>
    <span class="change-discipline">{{ change.discipline }}</span>
  </div>
  
  <h3 class="change-title">
    <a href="/rules/{{ change.discipline | downcase | replace: ' ', '-' | replace: 'cocktail-bartending', 'bartending' }}/#rule-{{ change.rule_number }}">
      Rule {{ change.rule_number }}: {{ change.rule_title }}
    </a>
  </h3>
  
  <p class="change-description">{{ change.description }}</p>
  
  <div class="change-diff">
    {% if change.old_text and change.old_text != "" %}
    <div class="diff-removed">
      <strong>CHANGED:</strong><br>
      <del>{{ change.old_text }}</del>
    </div>
    {% endif %}
    
    <div class="diff-added">
      <strong>TO:</strong><br>
      {{ change.new_text }}
    </div>
  </div>
  
  <div class="change-meta">
    <small>Modified by {{ change.author }} • <a href="/rules/{{ change.discipline | downcase | replace: ' ', '-' | replace: 'cocktail-bartending', 'bartending' }}/#rule-{{ change.rule_number }}">View rule →</a></small>
  </div>
</div>
{% endfor %}

<p class="view-all-changes"><a href="/changelog/">View complete change history →</a></p>

---

## Quick Navigation

### 📋 Rules by Category
- **[Speed Competition Rules](/rules/speed-cocktail-bartending/)** - Timing, measurement, and procedure standards
- **[Traditional Competition Rules](/rules/traditional-bartending/)** - Creativity, presentation, and judging criteria  
- **[Membership Guidelines](/rules/membership/)** - Registration and entry requirements

### 🍸 Standard Recipes
- **[The Gimlet](/recipes/gimlet/)** - Speed competition standard
- **[Espresso Martini](/recipes/espresso-martini/)** - Speed competition standard
- **[View all recipes →](/recipes/)**

### ⚙️ Equipment Standards
- **[Official Equipment Specifications](/equipment/standardized-equipment/)** - Required tools and measurements
- **[Competition Setup Guidelines](/equipment/)** - Venue and equipment preparation

---

## About This Repository

This rules system provides:

- **🔗 Version Certainty** - Immutable Git tags and permalinks to specific rule versions
- **📊 Change Transparency** - Visual diffs and automatic change notifications  
- **👥 Collaboration** - Pull request reviews and inline rule comments
- **⚡ Instant Distribution** - Real-time updates via GitHub Pages
- **🔍 Deep Linking** - Direct links to specific rules (e.g., `#rule-6`)
- **🤖 Automation** - Automated PDF exports and change notifications
- **📱 Offline Access** - Complete Git repository for offline reference

### Current Version
**Version:** {{ site.mbc.current_version }}  
**Last Updated:** {{ site.mbc.last_updated | date: "%B %d, %Y" }}  
**Total Rules:** 125

---

<div class="footer-links">
  <p><strong>Questions or feedback?</strong> Contact {{ site.mbc.contact_email }} or <a href="{{ site.github.repository_url }}/issues">open an issue</a> on GitHub.</p>
  
  <p><small>This site is optimized for embedding in iframes and provides responsive access across all devices.</small></p>
</div>