<div align="center">

# 🧠 Smart Resume Analyzer

### AI-Powered Resume Analysis & ATS Scoring — Right in Your Browser

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

<br/>

> **Upload your resume. Get instant ATS scores, skill gap analysis, and actionable career tips — no backend, no server, 100% private.**

<br/>

[🚀 Live Demo](#) &nbsp;|&nbsp; [📖 Features](#-features) &nbsp;|&nbsp; [⚙️ Installation](#️-installation) &nbsp;|&nbsp; [🛠️ Tech Stack](#️-tech-stack)

</div>

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔐 **Authentication** | Secure login & registration using `localStorage` |
| 📄 **PDF Upload** | Drag & drop or click-to-upload PDF resume support |
| 📊 **ATS Score** | Instant Applicant Tracking System compatibility score |
| 🔍 **Skill Gap Analysis** | Identifies missing skills compared to industry standards |
| 💡 **Career Suggestions** | Personalized, actionable improvement recommendations |
| 🎨 **Premium UI** | Glassmorphism design with smooth Framer Motion animations |
| 📱 **Fully Responsive** | Works beautifully on desktop, tablet, and mobile |
| 🔒 **100% Private** | All analysis runs client-side — your data never leaves your browser |

---

## 🖼️ Preview

<div align="center">

| Home Page | Analyzer |
|---|---|
| ![Home](https://via.placeholder.com/500x300/0f0c29/ffffff?text=🏠+Home+Page) | ![Analyzer](https://via.placeholder.com/500x300/302b63/ffffff?text=📊+Analyzer+Page) |

</div>

---

## 🛠️ Tech Stack

```
Frontend:
├── ⚛️  React 19           — UI library
├── 🛣️  React Router DOM 7  — Client-side routing
├── 🎞️  Framer Motion 12   — Animations & transitions
├── 🖼️  Lucide React        — Icon library
├── 📄  PDF.js (pdfjs-dist) — Client-side PDF parsing
├── 📸  html2canvas          — Screenshot/export utility
└── 📑  jsPDF               — PDF report generation

Deployment:
└── 🚀  Vercel              — Hosting & CI/CD
```

---

## ⚙️ Installation

Follow these steps to run the project locally:

### Prerequisites
- [Node.js](https://nodejs.org/) v18+ installed
- [Git](https://git-scm.com/) installed

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/shivani-1508444/smart-resume-analyzer.git

# 2. Navigate to the project folder
cd smart-resume-analyzer

# 3. Install dependencies
npm install

# 4. Start the development server
npm start
```

The app will open at **`http://localhost:3000`** 🎉

---

## 📁 Project Structure

```
smart-resume-analyzer/
│
├── public/                  # Static assets & index.html
│
├── src/
│   ├── components/
│   │   └── Navbar.jsx       # Navigation bar component
│   │
│   ├── pages/
│   │   ├── Home.jsx         # Landing page
│   │   ├── Login.jsx        # Login page
│   │   ├── Register.jsx     # Registration page
│   │   └── Analyzer.jsx     # Core resume analysis page
│   │
│   ├── utils/               # Helper functions & analysis logic
│   ├── App.js               # Root component & routing
│   ├── App.css              # App-level styles
│   └── index.css            # Global styles & design tokens
│
├── package.json
└── README.md
```

---

## 🔐 Authentication Flow

This project uses a **frontend-only authentication** system powered by `localStorage`:

```
Register → Credentials saved to localStorage
    ↓
Login → Credentials verified from localStorage
    ↓
Protected Route → Analyzer page accessible only after login
    ↓
Logout → Session cleared from localStorage
```

> ⚠️ This is a **demo/portfolio project**. For production use, replace `localStorage` auth with a proper backend authentication system.

---

## 📊 How the Analyzer Works

1. **Upload** your resume as a PDF file
2. **PDF.js** extracts the raw text content from the file client-side
3. The **analysis engine** scans for keywords, skills, formatting patterns, and ATS signals
4. Results are displayed with:
   - 🎯 **ATS Compatibility Score** (0–100)
   - 🧩 **Skill Gap Report** — skills found vs. skills missing
   - 📝 **Improvement Suggestions** — targeted career advice
5. Optionally **export** your results as a PDF report

---

## 🚀 Deployment

This project is deployed on **Vercel** with automatic CI/CD from GitHub.

To deploy your own copy:

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

Or connect your GitHub repository directly at [vercel.com](https://vercel.com) for automatic deployments on every push.

---

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a **Pull Request**

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<div align="center">

Made with ❤️ by **Shivani**

⭐ **Star this repo if you found it helpful!** ⭐

</div>
