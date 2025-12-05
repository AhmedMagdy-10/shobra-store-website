# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler
# 🛍️ Shobra Store - React Website

موقع متجر إلكتروني متجاوب مبني بـ React و TypeScript مع دعم كامل للغة العربية وتصميم عصري.

## ✨ المميزات

- 🏠 صفحة رئيسية مع عرض تلقائي للبانر
- 🔍 تصفية المنتجات حسب الفئات
- 🛒 سلة تسوق متقدمة
- 📱 تصميم متجاوب (Mobile, Tablet, Desktop)
- 🌐 دعم RTL للغة العربية
- ⚡ أداء سريع مع Vite
- 🎨 تصميم عصري مع Tailwind CSS

## 🛠️ التقنيات المستخدمة

- **React 18** - مكتبة UI
- **TypeScript** - Type Safety
- **Vite** - Build Tool
- **Tailwind CSS** - Framework للتصميم
- **Lucide React** - مكتبة الأيقونات
- **FakeStore API** - مصدر البيانات
- **Context API** - إدارة الحالة

## 📁 البنية المعمارية 
src/
├── core/
│   ├── theme/         # الألوان والأنماط
│   └── constants/     # الثوابت
├── features/
│   └── products/
│       ├── data/
│       │   ├── models/      # TypeScript Interfaces
│       │   └── services/    # API Calls
│       └── presentation/
│           ├── context/     # State Management
│           ├── pages/       # الصفحات
│           └── components/  # المكونات
├── App.tsx
└── main.tsx

## 🚀 طريقة التشغيل

### المتطلبات الأساسية
- Node.js (v18 أو أحدث)
- npm أو yarn

### خطوات التشغيل

1. **استنساخ المشروع**
```bash
git clone https://github.com/YOUR_USERNAME/shobra-store-react-website.git
cd shobra-store-react-website
```

2. **تثبيت الحزم**
```bash
npm install
```

3. **تشغيل الموقع**
```bash
npm run dev
```

الموقع سيعمل على: `http://localhost:5173`

4. **بناء للإنتاج**
```bash
npm run build
```

5. **معاينة الإنتاج**
```bash
npm run preview
```

## 📱 الصفحات

- **Home**: عرض المنتجات مع بانر وفلتر
- **Product Details Modal**: تفاصيل المنتج في نافذة منبثقة
- **Cart**: سلة التسوق مع إدارة الكميات
- **Orders**: صفحة الطلبات (قريباً)
- **Settings**: صفحة الإعدادات (قريباً)

## 🎨 التصميم

- **Mobile First**: يبدأ من الموبايل ثم يتوسع
- **Responsive**: يعمل على جميع الأحجام
- **RTL Support**: دعم كامل للكتابة من اليمين لليسار
- **Dark Mode Ready**: جاهز لوضع الظلام

## 📦 الحزم المستخدمة
```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "lucide-react": "^0.294.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.43",
    "@types/react-dom": "^18.2.17",
    "@vitejs/plugin-react": "^4.2.1",
    "tailwindcss": "^3.3.6",
    "typescript": "^5.2.2",
    "vite": "^5.0.8"
  }
}
```

## 🌐 النشر

يمكن نشر المشروع على:
- **Vercel** (موصى به)
- **Netlify**
- **GitHub Pages**

### النشر على Vercel:
```bash
npm install -g vercel
vercel
```

## 👨‍💻 حسابات المطور

https://www.linkedin.com/in/ahmed-magdy-873759243/
https://github.com/AhmedMagdy-10
https://www.facebook.com/share/17kceLoQz7/


تم تطوير المشروع كجزء من تكليف Shobra Store

## 📄 الترخيص

## 📞 الدعم

للاستفسارات، يرجى فتح Issue على GitHub
