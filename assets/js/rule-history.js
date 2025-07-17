// Rule History Interactive Features

class RuleHistory {
    constructor() {
        this.initRuleHistoryIcons();
        this.initModal();
    }

    initRuleHistoryIcons() {
        // Add history icons to all rule headings
        const ruleHeadings = document.querySelectorAll('h3[id^="rule-"]');
        
        ruleHeadings.forEach(heading => {
            const ruleNumber = heading.id.replace('rule-', '');
            const historyIcon = this.createHistoryIcon(ruleNumber);
            heading.appendChild(historyIcon);
            
            // Check if rule was recently changed
            this.markRecentChanges(heading, ruleNumber);
        });
    }

    createHistoryIcon(ruleNumber) {
        const icon = document.createElement('span');
        icon.className = 'rule-history-icon';
        icon.innerHTML = 'ℹ️';
        icon.title = `View history for Rule ${ruleNumber}`;
        
        icon.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.showRuleHistory(ruleNumber, e.target);
        });
        
        return icon;
    }

    markRecentChanges(heading, ruleNumber) {
        // Check if rule was changed in last 30 days
        const recentlyChanged = this.isRecentlyChanged(ruleNumber);
        if (recentlyChanged) {
            heading.classList.add('rule-recently-changed');
        }
    }

    isRecentlyChanged(ruleNumber) {
        // This would check against actual data - for now, simulate
        const recentRules = ['6', '39', '44', '90']; // From our sample data
        return recentRules.includes(ruleNumber);
    }

    showRuleHistory(ruleNumber, triggerElement) {
        // Get rule history data (in a real implementation, this would fetch from _data)
        const historyData = this.getRuleHistoryData(ruleNumber);
        
        if (historyData) {
            this.showHistoryModal(ruleNumber, historyData);
        } else {
            this.showQuickTooltip(ruleNumber, triggerElement);
        }
    }

    getRuleHistoryData(ruleNumber) {
        // Sample data - in real implementation, this would come from Jekyll data
        const sampleHistory = {
            '6': {
                title: 'Water Usage Policy',
                history: [
                    {
                        date: '2025-07-15',
                        type: 'modified',
                        description: 'Clarified water dilution policy to prevent competition manipulation',
                        author: 'Lachlan Gunner'
                    },
                    {
                        date: '2024-03-08',
                        type: 'inducted',
                        description: 'Initial rule creation',
                        author: 'Lachlan Gunner'
                    }
                ]
            },
            '39': {
                title: 'Glass Weight Definition',
                history: [
                    {
                        date: '2025-07-10',
                        type: 'modified',
                        description: 'Added specification for finished drink weight measurement',
                        author: 'Lachlan Gunner'
                    },
                    {
                        date: '2024-03-08',
                        type: 'inducted',
                        description: 'Initial rule creation',
                        author: 'Lachlan Gunner'
                    }
                ]
            }
        };
        
        return sampleHistory[ruleNumber] || null;
    }

    showQuickTooltip(ruleNumber, triggerElement) {
        // Remove any existing tooltips
        this.removeExistingTooltips();
        
        const tooltip = document.createElement('div');
        tooltip.className = 'rule-history-tooltip';
        tooltip.innerHTML = `
            <div class="tooltip-header">
                <span class="rule-number">Rule ${ruleNumber}</span>
                <button class="close-btn" onclick="this.parentElement.parentElement.remove()">&times;</button>
            </div>
            <div class="rule-history-item">
                <div class="rule-history-date">No history data available</div>
                <div class="rule-history-description">
                    This rule appears to be stable with no recent changes tracked.
                </div>
            </div>
        `;
        
        // Position tooltip
        const rect = triggerElement.getBoundingClientRect();
        tooltip.style.position = 'fixed';
        tooltip.style.top = `${rect.bottom + 10}px`;
        tooltip.style.left = `${rect.left}px`;
        tooltip.style.zIndex = '1001';
        
        document.body.appendChild(tooltip);
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (tooltip.parentElement) {
                tooltip.remove();
            }
        }, 5000);
    }

    showHistoryModal(ruleNumber, historyData) {
        // Remove any existing modal
        this.removeExistingModal();
        
        const modal = document.createElement('div');
        modal.className = 'rule-history-modal';
        modal.innerHTML = `
            <div class="rule-history-modal-content">
                <div class="rule-history-modal-header">
                    <h3 class="rule-history-modal-title">Rule ${ruleNumber}: ${historyData.title}</h3>
                    <button class="rule-history-modal-close">&times;</button>
                </div>
                <div class="rule-history-timeline">
                    ${historyData.history.map(item => `
                        <div class="rule-history-timeline-item ${item.type}">
                            <div class="rule-history-date">${this.formatDate(item.date)}</div>
                            <div class="rule-history-type ${item.type}">${item.type}</div>
                            <div class="rule-history-description">${item.description}</div>
                            <div class="rule-history-author">by ${item.author}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Show modal with animation
        setTimeout(() => modal.classList.add('active'), 10);
        
        // Add event listeners
        modal.querySelector('.rule-history-modal-close').addEventListener('click', () => {
            this.closeModal(modal);
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.closeModal(modal);
            }
        });
        
        // ESC key to close
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeModal(modal);
            }
        });
    }

    closeModal(modal) {
        modal.classList.remove('active');
        setTimeout(() => {
            if (modal.parentElement) {
                modal.remove();
            }
        }, 300);
    }

    removeExistingTooltips() {
        const tooltips = document.querySelectorAll('.rule-history-tooltip');
        tooltips.forEach(tooltip => tooltip.remove());
    }

    removeExistingModal() {
        const modal = document.querySelector('.rule-history-modal');
        if (modal) {
            modal.remove();
        }
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    initModal() {
        // Initialize modal functionality
        this.setupKeyboardNavigation();
    }

    setupKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            // ESC to close any open tooltips or modals
            if (e.key === 'Escape') {
                this.removeExistingTooltips();
                const modal = document.querySelector('.rule-history-modal.active');
                if (modal) {
                    this.closeModal(modal);
                }
            }
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new RuleHistory();
});

// Export for potential use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = RuleHistory;
}