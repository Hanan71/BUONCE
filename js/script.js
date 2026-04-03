document.addEventListener('DOMContentLoaded', () => {
    const splash = document.getElementById('splash-screen');
    const mainApp = document.getElementById('main-app');

    // 1. منطق شاشة البداية (Splash Screen)
    // نستخدم التوقيت مرة واحدة فقط لضمان السلاسة
    setTimeout(() => {
        // تأثير التلاشي والصعود البسيط
        splash.style.opacity = '0';
        splash.style.transform = 'translate(-50%, -60%) scale(1.1)';
        
        setTimeout(() => {
            splash.style.display = 'none';
            
            // إظهار التطبيق الأساسي
            mainApp.style.display = 'flex';
            mainApp.style.animation = 'fadeInUp 0.8s ease-out forwards';
        }, 800); // وقت الأنيميشن الخاص بالتلاشي
    }, 2500); // مدة بقاء الشعار (ثانيتين ونصف)


    // 2. تفاعل البطاقات (Categories) عند الضغط
    const cards = document.querySelectorAll('.cat-item');
    cards.forEach(card => {
        card.addEventListener('mousedown', () => {
            card.style.transform = "scale(0.95)";
        });
        
        card.addEventListener('mouseup', () => {
            card.style.transform = "scale(1)";
        });
        
        // لضمان العودة للحجم الطبيعي حتى لو سحب المستخدم الفأرة للخارج
        card.addEventListener('mouseleave', () => {
            card.style.transform = "scale(1)";
        });
    });


    // 3. نظام تتبع الطلب (Stepper)
    const steps = document.querySelectorAll('.step');
    let currentStep = 1; // البداية من الخطوة النشطة (Active)

    // دالة تحديث الحالة - يمكنك استدعاؤها من Console المتصفح للتجربة
    window.moveToNextStep = function() {
        if (currentStep < steps.length - 1) {
            steps[currentStep].classList.remove('active');
            steps[currentStep].classList.add('completed');
            currentStep++;
            steps[currentStep].classList.add('active');
            console.log("تم تحديث حالة الطلب إلى الخطوة: " + currentStep);
        } else {
            console.log("الطلب وصل لنهايته!");
        }
    };
});

function showTab(tabName) {
    const activeDiv = document.getElementById('active-orders');
    const completedDiv = document.getElementById('completed-orders');
    const btnActive = document.getElementById('btn-active');
    const btnCompleted = document.getElementById('btn-completed');

    if (tabName === 'active') {
        // إظهار النشطة وإخفاء المكتملة
        activeDiv.style.display = 'block';
        completedDiv.style.display = 'none';
        
        // تغيير شكل الأزرار
        btnActive.style.background = 'white';
        btnActive.style.color = 'var(--pnu-dark)';
        btnActive.style.boxShadow = '0 2px 5px rgba(0,0,0,0.05)';
        
        btnCompleted.style.background = 'transparent';
        btnCompleted.style.color = '#888';
        btnCompleted.style.boxShadow = 'none';
    } else {
        // إظهار المكتملة وإخفاء النشطة
        activeDiv.style.display = 'none';
        completedDiv.style.display = 'block';
        
        // تغيير شكل الأزرار
        btnCompleted.style.background = 'white';
        btnCompleted.style.color = 'var(--pnu-dark)';
        btnCompleted.style.boxShadow = '0 2px 5px rgba(0,0,0,0.05)';
        
        btnActive.style.background = 'transparent';
        btnActive.style.color = '#888';
        btnActive.style.boxShadow = 'none';
    }
}

