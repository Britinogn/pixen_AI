# Pixen AI 🎨

> **Your Limitless Creative Companion** — Generate stunning AI images instantly, powered by Google Gemini.

---

## Overview

Pixen AI is a web application that lets users generate images using Google's Gemini AI models. It features user authentication (via Supabase), a landing page, and a dedicated image generation interface.

---

## Tech Stack

| Layer      | Technology                                                |
| ---------- | --------------------------------------------------------- |
| Framework  | [Vue 3](https://vuejs.org/) + TypeScript                  |
| Build Tool | [Vite](https://vitejs.dev/)                               |
| Styling    | [Tailwind CSS v4](https://tailwindcss.com/)               |
| AI         | [Google Gemini (`@google/genai`)](https://ai.google.dev/) |
| Auth & DB  | [Supabase](https://supabase.com/)                         |
| HTTP       | [Axios](https://axios-http.com/)                          |
| Router     | [Vue Router](https://router.vuejs.org/)                   |

---

## Project Structure

```
Pixen/
├── public/              # Static assets (favicon, images)
├── src/
│   ├── components/
│   │   ├── HomeSection.vue       # Hero landing section
│   │   ├── FeatureSection.vue    # Features showcase
│   │   ├── AboutSection.vue      # About section
│   │   ├── ImageGenerator.vue    # Core AI image generation UI
│   │   └── layouts/              # Shared layout components
│   ├── views/
│   │   ├── Home.vue              # Landing page
│   │   ├── Generator.vue         # Image generation page
│   │   ├── Login.vue             # Login page
│   │   └── Register.vue          # Registration page
│   ├── composables/              # Reusable composition functions
│   ├── lib/                      # Supabase client setup
│   ├── routes/                   # Vue Router configuration
│   ├── types/                    # TypeScript type definitions
│   ├── utils/                    # Utility helpers
│   ├── main.ts                   # App entry point
│   └── style.css                 # Global styles
├── index.html
├── vite.config.ts
└── tsconfig.json
```

---

## Getting Started

### Prerequisites

- Node.js `>=18`
- A Google Gemini API key
- A Supabase project (URL + anon key)

### Installation

```bash
# Clone the repo
git clone <https://github.com/Britinogn/pixen_AI>
cd Pixen

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the root with:

```env
VITE_GEMINI_API_KEY=your_gemini_api_key
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

### Preview Build

```bash
npm run preview
```

---

## Features

- 🖼️ **AI Image Generation** — Generate images from text prompts via Google Gemini
- 🔐 **Authentication** — User registration & login powered by Supabase
- ✨ **Animated UI** — Smooth fade/scale transitions and hover effects
- 📱 **Responsive Design** — Mobile-first layout with Tailwind CSS
- ⚡ **Fast** — Vite-powered dev server with HMR

---

## License

MIT
