document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const bodyElement = document.body;

   
    const savedTheme = localStorage.getItem('site-theme');

    
    if (savedTheme === 'dark') {
        bodyElement.classList.add('dark-theme');
        updateToggleIcon('dark');
    } else {
        bodyElement.classList.remove('dark-theme');
        updateToggleIcon('light');
    }

   
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
           
            const isDarkNow = bodyElement.classList.toggle('dark-theme');

            if (isDarkNow) {
                localStorage.setItem('site-theme', 'dark');
                updateToggleIcon('dark');
            } else {
                localStorage.setItem('site-theme', 'light');
                updateToggleIcon('light');
            }
        });
    }

    
    function updateToggleIcon(theme) {
        if (!themeToggleBtn) return;
        themeToggleBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
});