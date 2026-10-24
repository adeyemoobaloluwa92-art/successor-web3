# 🛡️ Successor Web3 Support

> **“Your Web3 questions, answered.”**  
> *A modern, professional AI-powered customer support platform and open-source portfolio project for decentralized applications, crypto wallets, DeFi protocols, and Web3 security.*

[![License: MIT](https://img.shields.io/badge/License-MIT-cyan.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7+-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.0-61dafb.svg)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-v4.0-38bdf8.svg)](https://tailwindcss.com/)
[![Built by Successor](https://img.shields.io/badge/Built%20by-Successor-violet.svg)](#brand)

---

## 🌟 Overview

Navigating the Web3 landscape is notoriously difficult for newcomers and experienced traders alike. Mismatched blockchain networks, stuck mempool withdrawals, volatile slippage, and ruthless drainer phishing scams lead to millions in preventable losses every month.

**Successor Web3 Support** is an open-source, production-ready customer support platform designed to feel like a real startup product. It combines:
1. **Interactive AI Customer Support Chat** with zero-trust security guardrails.
2. **Instant Scam Defense Heuristics** that immediately intervene if a user is prompted for their 12/24-word recovery phrase.
3. **Structured Web3 Knowledge Base** covering 15+ core blockchain domains.
4. **Human Support Escalation Desk** generating trackable tickets stored in local telemetry.
5. **Admin Support Operations Dashboard** showing resolution SLAs, user satisfaction %, and top queried FAQs.

---

## 🚀 Key Features

### 1. 🤖 AI Customer Support Chat
- **Instant Verified Guidance:** Answers core Web3 questions including:
  - *What is DeFi?*
  - *What is Web3?*
  - *How do I connect my wallet?*
  - *How do I deposit USDT?*
  - *Why is my withdrawal pending?*
  - *What is a blockchain?*
  - *What is a crypto wallet?*
  - *What is an NFT?*
  - *What is an RWA?*
  - *How do I keep my wallet safe?*
- **Strict Security Guardrails:** The AI **NEVER** requests seed phrases, private keys, passwords, or OTPs.
- **No Hallucinated Data:** The AI will never invent false transaction IDs, fake wallet balances, or unauthorized on-chain transactions.
- **Interactive Prompts & Follow-Ups:** Dynamic suggested prompt chips and auto-generated follow-up questions tailored to the response category.
- **Export & Clear:** One-click transcript export as `.txt` for documentation.

### 2. 🚨 Scam Awareness & Heuristic Intervention
- Built-in heuristic pattern matching identifies malicious drainers.
- **Example Scenario:**
  > **User:** *“My wallet is asking for my seed phrase to receive SOL. What should I do?”*  
  > **Bot:** *“Do not share your seed phrase. A legitimate support agent should never need your seed phrase or private key. Stop the transaction and verify that you are using the official wallet application or website.”*

### 3. 📚 Structured Knowledge Base & FAQ Section
- Searchable, category-filtered FAQ explorer:
  - `Getting Started`
  - `Wallets`
  - `DeFi`
  - `Trading`
  - `Deposits & Withdrawals`
  - `Security`
  - `Account Issues`
- Expandable accordion items with helpfulness votes and direct **"Ask AI"** interactive links.

### 4. 👨‍💻 Human Support Escalation
- Triggers when the AI detects uncertainty or sensitive account queries:  
  *“I’m not confident I can safely resolve this issue. Would you like to contact a human support agent?”*
- **Escalation Support Form:**
  - Name
  - Email Address
  - Issue Category
  - Priority Selector (`Low`, `Medium`, `High`, `Urgent`)
  - Description
  - Auto-generated tracking ticket ID (e.g. `#SWR-8492`).

### 5. 📊 Admin Support Dashboard
- **Total Conversations** handled.
- **Open vs Resolved Requests** tracking with status toggling (`Open`, `In Progress`, `Resolved`).
- **User Satisfaction Score (%)** with breakdown of 👍 Helpful vs 👎 Not helpful votes.
- **Frequently Asked Questions Telemetry** with trend indicators.
- **Recent Support Tickets Table** with instant search, priority filtering, and ticket detail drawer.

### 6. 👍 User Feedback System
- Every AI response features helpful/unhelpful rating buttons.
- Optional feedback comment modal that directly recalculates real-time satisfaction telemetry in the dashboard.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **React 19** | Component-driven user interface |
| **TypeScript** | Strict compile-time type safety with zero `any` shortcuts |
| **Tailwind CSS v4** | Modern dark Web3 aesthetic, frosted glassmorphism, responsive grids |
| **Vite 6** | Lightning-fast development server and optimized rollup bundling |
| **Lucide React** | Consistent, modern iconography |
| **LocalStorage Engine** | Resilient client-side persistence for chat history, feedback, and tickets |

---

## 📂 Architecture & Folder Structure

```
successor-web3-support/
├── public/
│   └── favicon.svg              # Custom Web3 cryptographic shield logo
├── src/
│   ├── types/
│   │   ├── chat.ts              # ChatMessage, Feedback, IssueCategory types
│   │   ├── knowledgeBase.ts     # KnowledgeArticle, FaqItem, FaqCategory types
│   │   └── ticket.ts            # SupportTicket, Priority, Status, DashboardStats
│   ├── data/
│   │   ├── knowledgeBase.ts     # Extensible Web3, DeFi, Wallet, and Security articles
│   │   ├── mockTickets.ts       # Initial realistic support tickets
│   │   └── mockAnalytics.ts     # Top queried FAQs and category distributions
│   ├── services/
│   │   ├── aiEngine.ts          # Hybrid NLP intent classifier, scam guardrails, & LLM adapter
│   │   ├── ticketService.ts     # Support ticket CRUD & status transitions
│   │   └── storageService.ts    # LocalStorage abstraction with telemetry aggregation
│   ├── components/
│   │   ├── common/
│   │   │   ├── Navbar.tsx       # Responsive Web3 navbar with status badge & mobile drawer
│   │   │   ├── Footer.tsx       # "Built by Successor" footer & security pledge
│   │   │   ├── Badge.tsx        # Reusable color-coded chips
│   │   │   └── SecurityBanner.tsx # Top dismissible security alert
│   │   ├── chat/
│   │   │   ├── ChatInterface.tsx # Conversational window with export and auto-scroll
│   │   │   ├── ChatMessage.tsx  # Message bubble, markdown formatter, and copy buttons
│   │   │   ├── FeedbackWidget.tsx # 👍 / 👎 buttons with comment modal
│   │   │   └── QuickPrompts.tsx # 8 interactive prompt chips (including scam simulation)
│   │   ├── faq/
│   │   │   └── FaqAccordion.tsx # Searchable accordion cards with helpful counters
│   │   ├── contact/
│   │   │   └── SupportForm.tsx  # Support ticket submission form with validation
│   │   └── dashboard/
│   │       ├── MetricsGrid.tsx  # KPI cards with live conversion stats
│   │       ├── TicketList.tsx   # Filterable recent tickets table with status actions
│   │       └── FaqAnalytics.tsx # Query volume & category distribution bars
│   ├── pages/
│   │   ├── LandingPage.tsx      # Hero, 4 feature cards, scam simulation CTA
│   │   ├── ChatPage.tsx         # Dedicated AI support chat view
│   │   ├── FaqPage.tsx          # Filterable FAQ knowledge base
│   │   ├── ContactPage.tsx      # Human escalation desk
│   │   ├── DashboardPage.tsx    # Admin telemetry and operations
│   │   └── AboutPage.tsx        # Mission, security manifesto, and architecture
│   ├── App.tsx                  # Main router & state coordinator
│   ├── index.css                # Tailwind imports & custom glassmorphism utilities
│   └── main.tsx                 # React DOM mount point
├── .env.example                 # Environment variables specification
├── CONTRIBUTING.md              # Contributor guidelines
├── CODE_OF_CONDUCT.md           # Contributor Covenant
├── LICENSE                      # MIT License
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## ⚡ Quick Start & Local Setup

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) (v18 or v20+ LTS) installed:
```bash
node -v
npm -v
```

### 2. Clone the Repository
```bash
git clone https://github.com/your-username/successor-web3-support.git
cd successor-web3-support
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Configure Environment Variables
Copy the sample environment file:
```bash
cp .env.example .env
```
*(The application works **100% out of the box** in offline mode without requiring any external API keys!)*

### 5. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 6. Production Build & Preview
```bash
npm run build
npm run preview
```

---

## 🔌 Connecting a Real AI API (Optional)

The application features a pluggable AI adapter in `src/services/aiEngine.ts`. To connect Google Gemini or OpenAI:

1. Open your `.env` file:
   ```env
   # Choose provider: 'gemini' | 'openai' | 'none'
   VITE_AI_PROVIDER=gemini
   
   # Provide your API key:
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   ```
2. Restart your development server (`npm run dev`).
3. If no key is provided or if a network error occurs, the engine **automatically falls back** to the offline knowledge base so your users always receive verified answers!

---

## 🤝 Open-Source Contribution Guide

We actively welcome contributions from the community! Check out our [CONTRIBUTING.md](./CONTRIBUTING.md) for full instructions.

### 🎯 Beginner-Friendly Issues to Claim:
1. **[#1] Add More Web3 FAQs:** Add guides on Layer 2 rollups (Arbitrum, Base), Account Abstraction (ERC-4337), or liquid restaking in `src/data/knowledgeBase.ts`.
2. **[#2] Improve Mobile Responsiveness:** Polish mobile animations and touch drawer gestures.
3. **[#3] Add Dark/Light Mode Toggle:** Implement a theme switch button in the navbar.
4. **[#4] Add More Support Categories:** Introduce categories like *Tax & Compliance* or *Developer APIs*.
5. **[#5] Add Multilingual Support:** Implement i18n support for Spanish, Chinese, and French.
6. **[#6] Improve Dashboard Analytics:** Add chart visualizers for hourly ticket volume and resolution time trends.

---

## 🛡️ Security Disclaimer

Successor Web3 Support is an educational customer support platform. It **never** requests private keys, recovery seed phrases, passwords, or OTPs. Always verify critical transactions and smart contract addresses through official platform documentation and block explorers.

---

## 📜 License

This project is licensed under the [MIT License](./LICENSE).

**Built with pride by Successor.**
