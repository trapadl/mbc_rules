# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the Master Bartending Championship (MBC) rules repository. It's a Jekyll-based GitHub Pages site that hosts official competition rules with version control, change tracking, and iframe embedding capabilities.

**Live Site**: https://trapadl.github.io/mbc_rules  
**Purpose**: Git-based rule management with transparency, collaboration, and automation

## Repository Structure

- `rules/` - Main rule documents split by discipline
- `recipes/` - Standardized cocktail specifications  
- `equipment/` - Official equipment requirements
- `_data/` - Rule history and change tracking metadata
- `_layouts/` - Jekyll templates (including iframe-optimized layouts)
- `_includes/` - Reusable components for rule display and history
- `assets/` - CSS/JS for interactive features and styling

## Common Development Commands

### Jekyll Development
```bash
# Install dependencies
bundle install

# Serve locally for development
bundle exec jekyll serve

# Build for production
bundle exec jekyll build

# Serve with incremental builds
bundle exec jekyll serve --incremental
```

### Rule Management
```bash
# Validate rule numbering and format
node scripts/validate-numbering.js

# Update rule history metadata
node scripts/update-rule-history.js

# Generate recent changes feed
node scripts/generate-changes-feed.js
```

### Git Workflow for Rule Changes
```bash
# Create feature branch for rule changes
git checkout -b rule-update-[description]

# After making changes, validate
node scripts/validate-numbering.js

# Commit with descriptive message
git commit -m "Update Rule X: [description of change]"

# Push and create PR for review
git push origin rule-update-[description]
```

## Architecture & Key Components

### Rule Display System
- Each rule has automatic anchor generation (#rule-X-Y format)
- Interactive history tooltips show change dates and authors
- Diff display shows before/after text for recent changes
- Visual indicators mark recently modified rules

### Change Tracking
- `_data/rule-history.yml` - Complete rule change metadata
- `_data/recent-changes.yml` - Last 3 months of changes with full diffs
- Automated Git integration extracts change information
- Homepage displays detailed change feed with actual rule text changes

### Iframe Optimization
- Special layouts in `_layouts/iframe.html` for embedding
- Responsive design that works in constrained iframe spaces
- Minimal navigation for embedded views
- Direct deep linking to specific rules

### Interactive Features
- Hover tooltips on rule numbers show change history
- Click modals for detailed rule history and versions
- Search functionality for finding specific rules
- Recent changes feed with expandable diff sections

## Rule Content Structure

### Disciplines
1. **Speed Cocktail Bartending** (Rules 1-125)
2. **Traditional Cocktail Bartending** (Rules 126-186)  
3. **Membership Guidelines** (Rules 187-204)

### Rule Format
Each rule should follow this structure:
```markdown
## Rule X: [Title] {#rule-X}

[Rule content with clear, numbered clauses]

*Last modified: [Date] by [Author]*
```

### Recipe Format
```markdown
# [Cocktail Name]

## Ingredients
- [Amount] [Ingredient]

## Method
[Preparation instructions]

## Specifications
- Glass: [Type]
- Garnish: [Details]
- Dilution: [Amount]
```

## Development Guidelines

### Rule Modifications
1. Always create a feature branch for rule changes
2. Update `_data/rule-history.yml` when modifying rules
3. Run validation scripts before committing
4. Include clear commit messages describing the change
5. Use PRs for review process on significant changes

### Change Documentation
- Document the reason for each rule change
- Include before/after text in commit messages
- Update recent changes feed data
- Tag releases for major rule updates

### Testing
- Validate Jekyll builds locally before pushing
- Check iframe embedding functionality
- Test rule anchoring and deep links
- Verify search functionality works correctly

## Automation Features

### GitHub Actions (when implemented)
- Automatic rule validation on PRs
- Change history updates on commits
- PDF generation on releases
- Change notifications to stakeholders

### Scripts
- Rule numbering validation
- Automatic anchor generation
- Change diff extraction from Git
- Recent changes feed generation