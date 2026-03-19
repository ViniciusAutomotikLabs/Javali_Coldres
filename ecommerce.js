// Basic cart interaction demo
document.addEventListener('DOMContentLoaded', () => {
    const cartBtn = document.querySelector('.cart-btn');
    const cartCount = document.querySelector('.cart-count');
    const buyButtons = document.querySelectorAll('.btn-buy');

    // Simulate adding to cart
    buyButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Animating button temporarily
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="ph ph-check"></i> Adicionado';
            btn.style.backgroundColor = '#d4af37';
            btn.style.color = '#000';
            
            // Update cart count
            let currentCount = parseInt(cartCount.textContent || '0');
            cartCount.textContent = currentCount + 1;

            // Optional: Shake cart icon
            cartBtn.style.transform = 'scale(1.1)';
            setTimeout(() => {
                cartBtn.style.transform = 'scale(1)';
                // Reset button
                btn.innerHTML = originalText;
                btn.style.backgroundColor = 'transparent';
                btn.style.color = '#d4af37';
            }, 1000);
        });
    });
});
