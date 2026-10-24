# Contributing to Successor Web3 Support

Thank you for your interest in contributing to **Successor Web3 Support**! This project is designed as a beginner-friendly, open-source portfolio project that welcomes first-time open-source contributors and seasoned Web3 developers alike.

## Code of Conduct

All contributors must adhere to our [Code of Conduct](./CODE_OF_CONDUCT.md). Please treat fellow community members with respect and kindness.

---

## How Can I Contribute?

### 1. Good First Issues
Check out our curated list of beginner-friendly tasks:
- **Add more Web3 FAQs:** Expand `src/data/knowledgeBase.ts` with new questions (e.g. Layer 2 rollups, Account Abstraction ERC-4337, EigenLayer restaking).
- **Add more support categories:** Expand `IssueCategory` in `src/types/chat.ts`.
- **Improve mobile responsiveness:** Refine drawer transitions and touch padding.
- **Add dark/light mode toggle:** Extend the Tailwind theme with light mode styles.
- **Improve chatbot heuristic scoring:** Fine-tune the keyword weightings in `src/services/aiEngine.ts`.
- **Add multilingual support:** Introduce i18n support (Spanish, Chinese, French).
- **Improve dashboard analytics:** Add chart visualizations for hourly conversation volume.

### 2. Reporting Bugs & Asking Questions
- Open a GitHub Issue detailing the steps to reproduce, browser version, and expected behavior.
- Clearly describe if the bug is related to UI rendering, knowledge base matching, or state persistence.

---

## Local Development Workflow

### Prerequisites
- [Node.js](https://nodejs.org/) v18+ (LTS recommended)
- `npm` or `pnpm`

### Step 1: Clone & Install
```bash
git clone https://github.com/your-username/successor-web3-support.git
cd successor-web3-support
npm install
```

### Step 2: Environment Configuration
Copy the sample environment file:
```bash
cp .env.example .env
```
*(By default, `VITE_AI_PROVIDER=none`, enabling the built-in offline knowledge engine with zero API keys required.)*

### Step 3: Run the Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### Step 4: Run Type Checking & Build Verification
Before submitting a pull request, ensure the project builds with zero errors:
```bash
npm run build
```

---

## Git Workflow & Pull Requests

1. **Fork the repository** on GitHub.
2. **Create a topic branch** from `main`:
   ```bash
   git checkout -b feat/add-l2-faqs
   ```
3. **Commit your changes** with a clear commit message:
   ```bash
   git commit -m "feat(faq): add Arbitrum and Optimism deposit guides"
   ```
4. **Push to your fork**:
   ```bash
   git push origin feat/add-l2-faqs
   ```
5. **Open a Pull Request** against the `main` branch. Provide a brief description of what was added or resolved and screenshots if relevant.

---

## Project Structure Quick Reference

- `src/types/` – TypeScript interfaces (`chat.ts`, `knowledgeBase.ts`, `ticket.ts`).
- `src/data/` – Extensible knowledge articles (`knowledgeBase.ts`), mock tickets, and analytics.
- `src/services/` – Chatbot AI engine (`aiEngine.ts`), local storage, and support ticket management.
- `src/components/` – Modular React components (`chat/`, `faq/`, `contact/`, `dashboard/`, `common/`).
- `src/pages/` – 6 core application views (`LandingPage`, `ChatPage`, `FaqPage`, `ContactPage`, `DashboardPage`, `AboutPage`).

Thank you for building with **Successor**!
