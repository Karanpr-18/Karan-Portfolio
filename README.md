# Karan Bhoriya | AI Engineer Portfolio

A premium, interactive, and high-fidelity 3D portfolio website showcasing the work, skills, and projects of an AI Engineer. This web application is built using a modern React + TypeScript + Vite + Tailwind stack combined with Three.js (Spline) for stunning 3D interaction.

---

## 🚀 Immersive Features

### 🤖 1. Interactive 3D Robot Mascot
- **Global Cursor Tracking**: The 3D robot tracks your cursor anywhere on the screen, following mouse movements dynamically over the entire viewport.
- **Smooth entry animations**: Smooth, elegant loading states and fade-in transitions prevent any sudden pop-ins or rendering glitches.
- **Pulsing Neon Underglow**: Set against a glowing ambient radial gradient that brings depth to the 3D viewport.

### ⚡ 2. Custom Stack Showcase
- **Category Lists**: An interactive vertical navigation listing Languages, AI & ML, Agentic Frameworks, Libraries, and Tools.
- **Dynamic Category Preview**: Hovering over each category updates a grid of high-fidelity brand-colored developer logo cards.
- **Dark Mode Contrast**: Tuned contrast settings and automatic SVG inversion for dark-colored brand logos (like Next.js and Flask).

### 🎴 3. Card-Stacking Spotlight Projects
- **Interactive Card Stacking**: Projects slide in and stack on top of each other using physics-based Framer Motion scrolling values.
- **Custom Spotlights**: Interactive mouse-spotlight glowing filters follow the cursor on each card.
- **Dynamic Action Badges**: Highlighting Live Demos (with Globe icons), GitHub repositories (with GitHub logos), and neon pulsing **Open Source** badges for public repositories.

---

## 🛠️ Technology Stack

- **Framework**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS (for layout utilities) and Vanilla CSS (for custom variables/mesh gradients)
- **Animations**: Framer Motion
- **3D Graphics**: Spline Runtime (`@splinetool/react-spline` & `@splinetool/runtime`)
- **Icons**: Lucide React & Simple Icons

---

## 💻 Highlighted Projects

1. **Career-Orbit** `[Open Source]`
   - *Tech*: Next.js, Python, SurrealDB, Playwright, Docker, Crawl4AI, AgentScope
   - *Desc*: Autonomous multi-agent swarm and Graph RAG job hunter command center. Autonomously crawls job portals, evaluates fit via semantic scoring, and auto-fills application forms.
   
2. **TechHubAI** `[Open Source]`
   - *Tech*: Next.js, TypeScript, FastAPI, AgentScope, Crawl4AI
   - *Desc*: Multi-agent swarm debate engine to orchestrate and observe complex AI debates between independent LLM agents in a real-time claymorphic environment.

3. **Talent AI**
   - *Tech*: Python, Flask, Gemini API, Pandas, Pydantic
   - *Desc*: AI-powered hiring platform with Gemini-based resume parsing, intelligent candidate scoring, and automated recruitment workflows.

4. **CV Job Matcher**
   - *Tech*: SpaCy, Scikit-Learn, Streamlit, NLP
   - *Desc*: NLP-based CV–job matching tool that scores resume relevance against job descriptions for fast recruitment filtering.

5. **Used Car Project**
   - *Tech*: HTML/CSS/JS, Power-BI, PostgreSQL
   - *Desc*: End-to-end used car price analysis with EDA, SQL-based cleaning, and interactive client-side price predictions.

6. **AI News Analyser**
   - *Tech*: NLP, Scikit-Learn, Streamlit, Python
   - *Desc*: News Intelligence Toolkit featuring three NLP models: Fake News Detection, Hate Speech Detection, and News Category Classification.

---

## ⚙️ Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm (v9 or higher)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Karanpr-18/Karan-Portfolio.git
   ```
2. Navigate to the project root:
   ```bash
   cd Karan-Portfolio
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Development
Start the local development server with Hot Module Replacement (HMR):
```bash
npm run dev
```

### Production Build
Compile and optimize the application for production deployment:
```bash
npm run build
```
The output bundle will be generated in the `dist` directory.

---

## ☁️ Deployment

This project is fully structured at the root of the repository to support automated deployments. Any push to `main` will trigger automated builds on hosting providers:
- **Vercel / Netlify**: Automatically detects Vite configuration and builds the project using `npm run build` with `dist` as the output directory.
- **GitHub Pages**: Can be set up using a GitHub actions workflow to deploy the compiled `dist` directory.
