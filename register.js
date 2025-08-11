// Registration form functionality

document.addEventListener('DOMContentLoaded', function() {
    setupRegistrationForm();
});

function setupRegistrationForm() {
    const registerForm = document.getElementById('registerForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const termsCheckbox = document.getElementById('terms');
    
    if (!registerForm) return;
    
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;
        const termsAccepted = termsCheckbox.checked;
        
        // Validation
        if (!name || !email || !password || !confirmPassword) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        if (password.length < 8) {
            showNotification('Password must be at least 8 characters long', 'error');
            return;
        }
        
        if (password !== confirmPassword) {
            showNotification('Passwords do not match', 'error');
            return;
        }
        
        if (!termsAccepted) {
            showNotification('Please accept the terms and conditions', 'error');
            return;
        }
        
        // Simulate registration process
        handleRegistration({ name, email, password });
    });
    
    // Real-time validation
    confirmPasswordInput.addEventListener('blur', function() {
        const password = passwordInput.value;
        const confirmPassword = this.value;
        
        if (confirmPassword && password !== confirmPassword) {
            this.classList.add('border-red-500');
            showFieldError(this, 'Passwords do not match');
        } else {
            this.classList.remove('border-red-500');
            hideFieldError(this);
        }
    });
    
    passwordInput.addEventListener('input', function() {
        const password = this.value;
        
        if (password.length > 0 && password.length < 8) {
            this.classList.add('border-red-500');
            showFieldError(this, 'Password must be at least 8 characters');
        } else {
            this.classList.remove('border-red-500');
            hideFieldError(this);
        }
    });
    
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
    [nameInput, emailInput, passwordInput, confirmPasswordInput].forEach(input => {
        input.addEventListener('focus', function() {
            this.classList.remove('border-red-500');
            hideFieldError(this);
        });
    });
}

function handleRegistration(userData) {
    const submitButton = document.querySelector('button[type="submit"]');
    
    // Show loading state
    submitButton.classList.add('loading');
    submitButton.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        // Reset button state
        submitButton.classList.remove('loading');
        submitButton.disabled = false;
        
        console.log('Registration attempted with:', userData);
        showNotification('Account created successfully! Redirecting to login...', 'success');
        
        // Simulate redirect to login page
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 2000);
        
    }, 2000);
}

// Utility functions (reused from main script)
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
