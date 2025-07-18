---
layout: default
title: "Competition Cocktail Recipes"
description: "Standardized cocktail recipes for Master Bartending Championship competitions"
---

# Competition Cocktail Recipes

These are the official standardized cocktail recipes used in Master Bartending Championship Speed Cocktail Bartending competitions. All measurements and specifications must be followed precisely according to competition rules.

## Current Competition Cocktails

<div class="recipe-grid">
  {% for recipe in site.recipes %}
  <div class="recipe-card">
    <h3><a href="{{ recipe.url }}">{{ recipe.cocktail_name }}</a></h3>
    <p class="recipe-category">{{ recipe.category }}</p>
    <p>Official recipe with precise measurements and specifications for competition use.</p>
    <a href="{{ recipe.url }}" class="btn btn-primary">View Recipe →</a>
  </div>
  {% endfor %}
</div>

## Recipe Standards

All competition recipes follow these standards:

- **Precise measurements** - All ingredients measured to the gram/milliliter
- **Standardized techniques** - Shake, stir, build methods specified
- **Official glassware** - Competition-approved glass types and weights
- **Garnish specifications** - Exact garnish requirements where applicable
- **Dilution targets** - Expected meltwater dilution amounts

## Related Rules

- [Rule 2: Recipe Standardization](/rules/speed-cocktail-bartending/#rule-2)
- [Rule 4: Recipe Consistency](/rules/speed-cocktail-bartending/#rule-4) 
- [Rule 5: Ingredient Compliance](/rules/speed-cocktail-bartending/#rule-5)
- [Rule 9: Ingredient Standardization](/rules/speed-cocktail-bartending/#rule-9)

---

*For questions about recipe specifications, contact [cocktails+mbc@trapadl.com](mailto:cocktails+mbc@trapadl.com)*

<style>
.recipe-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin: 2rem 0;
}

.recipe-card {
    background: #f8f9fa;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
}

.recipe-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.recipe-card h3 {
    margin-bottom: 0.5rem;
    color: #2c3e50;
}

.recipe-card h3 a {
    text-decoration: none;
    color: inherit;
}

.recipe-category {
    color: #7f8c8d;
    font-size: 0.875rem;
    font-weight: 500;
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}
</style>