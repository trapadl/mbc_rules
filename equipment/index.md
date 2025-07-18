---
layout: default
title: "Competition Equipment Standards"
description: "Official equipment specifications for Master Bartending Championship competitions"
---

# Competition Equipment Standards

These are the official equipment specifications used across all Master Bartending Championship competitions. All equipment must meet these exact standards to ensure consistency and fairness.

## Equipment Categories

<div class="equipment-grid">
  {% for equipment in site.equipment %}
  <div class="equipment-card">
    <h3><a href="{{ equipment.url }}">{{ equipment.title }}</a></h3>
    <p class="equipment-category">{{ equipment.category }}</p>
    <p>Complete specifications for all official competition equipment and tools.</p>
    <a href="{{ equipment.url }}" class="btn btn-primary">View Specifications →</a>
  </div>
  {% endfor %}
</div>

## Equipment Requirements

### Competition Standards
- All equipment must match exact specifications listed
- Replacement equipment must meet identical standards
- Competition organizers responsible for equipment consistency
- Equipment inspections conducted before each event

### Maintenance Requirements
- Regular cleaning and sanitization
- Damage inspection before competitions
- Immediate replacement of damaged items
- Standardized maintenance logs

## Related Rules

- [Rule 7: Equipment Standardization](/rules/speed-cocktail-bartending/#rule-7)
- [Rule 31: Organiser Responsibility](/rules/speed-cocktail-bartending/#rule-31)
- [Rule 68-72: Reset Procedures](/rules/speed-cocktail-bartending/#rule-68)

## Equipment Procurement

For official equipment procurement and specifications:
- Contact [cocktails+mbc@trapadl.com](mailto:cocktails+mbc@trapadl.com)
- All equipment must be approved before competition use
- Bulk ordering available for competition organizers

---

*Equipment standards are maintained to ensure fair and consistent competition conditions across all MBC events.*

<style>
.equipment-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin: 2rem 0;
}

.equipment-card {
    background: #f8f9fa;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
    border-left: 4px solid #27ae60;
}

.equipment-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.equipment-card h3 {
    margin-bottom: 0.5rem;
    color: #2c3e50;
}

.equipment-card h3 a {
    text-decoration: none;
    color: inherit;
}

.equipment-category {
    color: #27ae60;
    font-size: 0.875rem;
    font-weight: 500;
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}
</style>