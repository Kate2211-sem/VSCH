

document.addEventListener('DOMContentLoaded', () => {
    const langBtn = document.querySelector('button[data-tool="lang"]');
    const onlineBtn = document.querySelector('.btn-online');
    
    
    const isMobile = () => window.innerWidth < 768; 
    
    
    const changeLanguage = (targetLang) => {
        
        const elementsToTranslate = document.querySelectorAll('[data-ru][data-en]');
        elementsToTranslate.forEach(element => {
            if (targetLang === 'en') {
                element.textContent = element.dataset.en;
            } else {
                element.textContent = element.dataset.ru;
            }
        });

      
        if (onlineBtn) {
            const isSmallScreen = isMobile();
            if (targetLang === 'en') {
                onlineBtn.textContent = isSmallScreen ? onlineBtn.dataset.enShort : onlineBtn.dataset.enFull;
            } else {
                onlineBtn.textContent = isSmallScreen ? onlineBtn.dataset.ruShort : onlineBtn.dataset.ruFull;
            }
        }

        
        if (langBtn) {
            langBtn.textContent = targetLang.toUpperCase();
        }
        
        
        document.documentElement.setAttribute('lang', targetLang);
    };

    
    if (langBtn) {
        langBtn.addEventListener('click', (e) => {
            e.preventDefault();
            let currentLang = localStorage.getItem('site-lang') || 'ru';
            let newLang = currentLang === 'ru' ? 'en' : 'ru';
            localStorage.setItem('site-lang', newLang);
            changeLanguage(newLang);
        });
    }

  
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            const savedLang = localStorage.getItem('site-lang') || 'ru';
            changeLanguage(savedLang);
        }, 150); 
    });

    
    const savedLang = localStorage.getItem('site-lang') || 'ru';
    changeLanguage(savedLang);
});