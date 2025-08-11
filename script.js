// Main application JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the application
    initializeApp();
});

function initializeApp() {
    // Set up form handling
    setupLoginForm();
    
    // Add smooth scrolling to login section
    setupSmoothScrolling();
    
    // Add entrance animations
    addEntranceAnimations();
    
    // Set up keyboard navigation
    setupKeyboardNavigation();
}

function setupLoginForm() {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    
    if (!loginForm) return;
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = emailInput.value.trim();
        const password = passwordInput.value;
        
        // Basic validation
        if (!email || !password) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        // Simulate login process
        handleLogin(email, password);
    });
    
    // Real-time validation feedback
    emailInput.addEventListener('blur', function() {
        const email = this.value.trim();
        if (email && !isValidEmail(email)) {
            this.classList.add('border-red-500');
            showFieldError(this, 'Please enter a valid email address');
        } else {
            this.classList.remove('border-red-500');
            hideFieldError(this);
        }
    });
    
    // Clear error states on focus
    [emailInput, passwordInput].forEach(input => {
        input.addEventListener('focus', function() {
            this.classList.remove('border-red-500');
            hideFieldError(this);
        });
    });
}

function handleLogin(email, password) {
    const submitButton = document.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    // Show loading state
    submitButton.classList.add('loading');
    submitButton.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        // Reset button state
        submitButton.classList.remove('loading');
        submitButton.disabled = false;
        
        // Simulate successful login
        console.log('Login attempted with:', { email, password });
        showNotification('Login successful! Redirecting...', 'success');
        
        // Simulate redirect after successful login
        setTimeout(() => {
            showNotification('This is a demo. In a real app, you would be redirected to the dashboard.', 'info');
        }, 1500);
        
    }, 2000);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showFieldError(field, message) {
    hideFieldError(field);
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error text-xs text-red-500 mt-1';
    errorDiv.textContent = message;
    
    field.parentNode.appendChild(errorDiv);
}

function hideFieldError(field) {
    const errorDiv = field.parentNode.querySelector('.field-error');
    if (errorDiv) {
        errorDiv.remove();
    }
}

function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 fade-in ${getNotificationClasses(type)}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.classList.add('opacity-0');
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

function getNotificationClasses(type) {
    const classes = {
        success: 'bg-green-500 text-white',
        error: 'bg-red-500 text-white',
        info: 'bg-blue-500 text-white',
        warning: 'bg-yellow-500 text-black'
    };
    return classes[type] || classes.info;
}

function setupSmoothScrolling() {
    // Add smooth scroll to login form when hero section is clicked
    const heroSection = document.querySelector('section:first-child');
    const loginSection = document.querySelector('section:last-child');
    
    if (heroSection && loginSection) {
        heroSection.addEventListener('click', function() {
            loginSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
}

function addEntranceAnimations() {
    // Add fade-in animation to elements as they come into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe form elements
    const formElements = document.querySelectorAll('.card, h1, h2');
    formElements.forEach(element => {
        observer.observe(element);
    });
}

function setupKeyboardNavigation() {
    // Enhanced keyboard navigation
    document.addEventListener('keydown', function(e) {
        // Escape key to clear forms
        if (e.key === 'Escape') {
            const activeElement = document.activeElement;
            if (activeElement && activeElement.tagName === 'INPUT') {
                activeElement.blur();
            }
        }
        
        // Enter key to submit form when in input fields
        if (e.key === 'Enter' && e.target.tagName === 'INPUT') {
            const form = e.target.closest('form');
            if (form) {
                const submitButton = form.querySelector('button[type="submit"]');
                if (submitButton && !submitButton.disabled) {
                    submitButton.click();
                }
            }
        }
    });
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Export functions for potential module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        isValidEmail,
        showNotification,
        setupLoginForm
    };
}
