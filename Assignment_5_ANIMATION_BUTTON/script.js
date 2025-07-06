document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('animatedButton');
    
    // Add click event listener
    button.addEventListener('click', function(e) {
        // Add glow effect
        button.classList.add('clicked');
        
        // Create ripple effect
        const ripple = button.querySelector('.btn-ripple');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        
        // Reset ripple animation
        ripple.style.animation = 'none';
        ripple.offsetHeight; // Trigger reflow
        ripple.style.animation = 'ripple 0.6s linear';
        
        // Remove glow effect after animation
        setTimeout(() => {
            button.classList.remove('clicked');
        }, 600);
        
        // Feedback
        console.log('Button clicked with all animations!');
        
        // Optional: Add alert for demonstration
        // alert('Button clicked successfully!');
    });
    
    // Add keyboard accessibility
    button.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            button.click();
        }
    });
    
    let clickCount = 0;
    button.addEventListener('click', function() {
        clickCount++;
        if (clickCount === 5) {
            button.querySelector('.btn-text').textContent = 'Amazing!';
            setTimeout(() => {
                button.querySelector('.btn-text').textContent = 'Click Me!';
                clickCount = 0;
            }, 2000);
        }
    });
});