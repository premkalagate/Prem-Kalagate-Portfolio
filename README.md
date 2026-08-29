# 🚀 Prem Kalagate — Personal Portfolio Website

A personal developer portfolio built with **Next.js 15**, **React 19**, **Tailwind CSS**, **Framer Motion**, and **Resend**.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Frontend**: [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Email Service**: [Resend](https://resend.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/)

---

## 🌟 Key Features

- **⚡ High Performance**: Fast server-side rendering and static page optimization with Next.js 15.
- **📱 Fully Responsive**: Tailored layouts for mobile, tablet, and desktop with an adaptive floating dock navbar.
- **📧 Contact Form with Resend**: Serverless API endpoint (`/api/contact`) sending HTML emails with reply-to headers.
- **🎯 Interactive UI**: Micro-interactions, spring animations, and confetti celebrations.
- **🔒 Secure**: Clean environment variable separation and gitignore protection.

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/premkalagate/Prem-Kalagate-Portfolio.git
cd Prem-Kalagate-Portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
Create a `.env.local` file in the root directory:
```env
RESEND_API_KEY=your_resend_api_key
CONTACT_TO_EMAIL=premkalagate52@gmail.com
CONTACT_FROM_EMAIL=onboarding@resend.dev
```

### 4. Run development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Production Build

```bash
npm run build
npm run start
```

---

## 📄 License
This project is open source and available under the [MIT License](LICENSE).