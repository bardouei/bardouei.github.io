document.addEventListener('DOMContentLoaded', () => {
    const roles = ["iOS Developer", "Python Developer", "Software Engineer", "Swift Engineer", "Software architect"];
    const targetElement = document.getElementById('role-typewriter');
    
    if (!targetElement) return;

    let roleIndex = 0;
    let charIndex = 0;
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const delayBetweenRoles = 2000;

    function type() {
        const currentRole = roles[roleIndex];
        
        if (charIndex < currentRole.length) {
            targetElement.textContent += currentRole.charAt(charIndex);
            charIndex++;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(erase, delayBetweenRoles);
        }
    }

    function erase() {
        const currentRole = roles[roleIndex];
        
        if (charIndex > 0) {
            targetElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, deletingSpeed);
        } else {
            roleIndex++;
            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }
            setTimeout(type, 500);
        }
    }
    type();
});