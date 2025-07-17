# Master Bartending Championship - Official Rules

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen)](https://trapadl.github.io/mbc_rules)
[![Jekyll](https://img.shields.io/badge/Jekyll-4.x-red)](https://jekyllrb.com/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

Official rules and regulations repository for the Master Bartending Championship (MBC) competitions, built with Jekyll and hosted on GitHub Pages.

## 🏆 About MBC

The Master Bartending Championship hosts competitive bartending events across multiple disciplines:

- **Speed Cocktail Bartending** - Precision and timing competitions
- **Traditional Cocktail Bartending** - Creative cocktail design and presentation
- **Membership Guidelines** - Registration and entry procedures

## 🌟 Features

- **📋 Comprehensive Rules** - All 125+ competition rules organized by discipline
- **🔄 Change Tracking** - Complete version history with detailed diffs
- **🔍 Deep Linking** - Direct links to specific rules (e.g., `#rule-6`)
- **📱 Responsive Design** - Optimized for all devices and iframe embedding
- **⚡ Real-time Updates** - Instant distribution via GitHub Pages
- **🤖 Interactive Elements** - Rule history tooltips and change feeds
- **📊 Transparency** - All changes tracked via Git with full audit trail

## 🚀 Quick Start

### Prerequisites

- Ruby 2.7+ 
- Bundler gem
- Git

### Local Development

```bash
# Clone the repository
git clone https://github.com/trapadl/mbc_rules.git
cd mbc_rules

# Install dependencies
bundle install

# Serve locally
bundle exec jekyll serve

# Visit http://localhost:4000
```

### Making Rule Changes

1. Create a feature branch:
   ```bash
   git checkout -b rule-update-description
   ```

2. Edit rule files in `/rules/` directory

3. Update rule history in `/_data/rule-history.yml`

4. Validate changes:
   ```bash
   node scripts/validate-numbering.js
   ```

5. Commit and create pull request:
   ```bash
   git commit -m "Update Rule X: description of change"
   git push origin rule-update-description
   ```

## 📁 Repository Structure

```
├── rules/                          # Rule documents by discipline
│   ├── speed-cocktail-bartending.md
│   ├── traditional-bartending.md
│   └── membership.md
├── recipes/                        # Standardized cocktail specifications
├── equipment/                      # Official equipment requirements
├── _data/                         # Rule history and change tracking
├── _layouts/                      # Jekyll templates
├── _includes/                     # Reusable components
├── assets/                        # CSS, JS, and static files
├── .github/workflows/             # CI/CD automation
└── scripts/                       # Validation and utility scripts
```

## 🔧 Development Commands

```bash
# Serve with live reload
bundle exec jekyll serve --incremental

# Build for production
bundle exec jekyll build

# Validate rule numbering
node scripts/validate-numbering.js

# Update change history
node scripts/update-rule-history.js

# Generate recent changes feed
node scripts/generate-changes-feed.js
```

## 🎯 Architecture

### Rule Organization

- **Speed Cocktail Bartending**: Rules 1-72
- **Traditional Cocktail Bartending**: Rules 73-116  
- **Membership Guidelines**: Rules 117-125

### Change Tracking System

The repository uses a sophisticated change tracking system:

- `_data/rule-history.yml` - Complete rule change metadata
- `_data/recent-changes.yml` - Last 3 months of changes with diffs
- Interactive tooltips show rule modification history
- Homepage displays detailed change feed with actual rule text

### Iframe Optimization

Special layouts in `_layouts/iframe.html` optimize the site for embedding:

- Minimal navigation suitable for constrained spaces
- Responsive design that works in various iframe sizes
- Direct deep linking to specific rules maintained

## 🛠️ Automation Features

### Current
- Rule numbering validation
- Change history tracking
- Responsive design testing

### Planned (GitHub Actions)
- Automated PDF generation on releases
- Change notifications via email/Slack
- Rule format validation on pull requests
- Automatic changelog updates

## 📊 Contributing

1. **Fork** the repository
2. **Create** a feature branch for your changes
3. **Follow** the rule numbering and formatting conventions
4. **Update** rule history metadata for any changes
5. **Test** locally before submitting
6. **Submit** a pull request with clear description

### Rule Modification Guidelines

- Always document the reason for rule changes
- Include before/after text in commit messages
- Update `_data/rule-history.yml` with change metadata
- Use semantic versioning for major rule updates
- Test iframe embedding functionality

## 📈 Analytics & Monitoring

- GitHub Pages analytics available via repository insights
- Rule access patterns tracked through Git history
- Change frequency monitoring via commit history

## 🔗 Integration

### Embedding in External Sites

```html
<!-- Full site embed -->
<iframe src="https://trapadl.github.io/mbc_rules" width="100%" height="600px"></iframe>

<!-- Specific rule embed -->
<iframe src="https://trapadl.github.io/mbc_rules/rules/speed-cocktail-bartending/#rule-6" width="100%" height="400px"></iframe>
```

### API Access

Rules are available in multiple formats:
- **Web**: https://trapadl.github.io/mbc_rules
- **Git**: Direct access to Markdown files
- **JSON**: Planned export via GitHub Actions

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Support

- **Issues**: [GitHub Issues](https://github.com/trapadl/mbc_rules/issues)
- **Discussions**: [GitHub Discussions](https://github.com/trapadl/mbc_rules/discussions)  
- **Email**: Contact the MBC organization directly

## 🏗️ Built With

- [Jekyll](https://jekyllrb.com/) - Static site generator
- [GitHub Pages](https://pages.github.com/) - Hosting
- [GitHub Actions](https://github.com/features/actions) - CI/CD (planned)
- Custom CSS & JavaScript - Interactive features

---

**Version**: 2025.1 | **Last Updated**: July 2025 | **Total Rules**: 125