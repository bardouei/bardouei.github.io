// Ultra Light Matrix Rain
function initMatrixRain() {
    const banner = document.getElementById('banner');
    if (!banner) return;
    
    const existingCanvas = document.getElementById('matrixCanvas');
    if (existingCanvas) existingCanvas.remove();
    
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.id = 'matrixCanvas';
    Object.assign(canvas.style, {
        position: 'absolute',
        top: '0', left: '0',
        width: '100%', height: '100%',
        zIndex: '0', opacity: '0.5',
        pointerEvents: 'none'
    });
    
    banner.insertBefore(canvas, banner.firstChild);
    
    const chars = "01ABCD";
    const fontSize = 20;
    let columns;
    const drops = [];
    let animationId;
    
    function setup() {
        const rect = banner.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
        columns = Math.floor(canvas.width / (fontSize * 2)); // Even fewer columns
        
        drops.length = 0;
        for (let i = 0; i < columns; i++) {
            drops[i] = Math.random() * -canvas.height;
        }
    }
    
    let frameCount = 0;
    function draw() {
        frameCount++;
        
        // Only clear every 3 frames for better performance
        if (frameCount % 3 === 0) {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
        
        ctx.fillStyle = '#0F0';
        ctx.font = `${fontSize}px monospace`;
        
        for (let i = 0; i < drops.length; i++) {
            const char = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(char, i * (fontSize * 2), drops[i]);
            
            drops[i] += 1.5; // Fixed slow speed
            
            if (drops[i] > canvas.height + 100) {
                drops[i] = -50;
            }
        }
        
        animationId = requestAnimationFrame(draw);
    }
    
    setup();
    
    // Simple resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(setup, 200);
    });
    
    animationId = requestAnimationFrame(draw);
}

// Simple initialization
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(initMatrixRain, 1000);
    });
} else {
    setTimeout(initMatrixRain, 1000);
}