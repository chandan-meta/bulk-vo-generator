# 🎙️ Metabook VO Generator

A premium, browser-powered web application to generate voiceover files in bulk from a CSV script using the ElevenLabs Text-to-Speech API.

## ✨ Features

- **Client-Side Processing**: Runs completely in the browser. Zero serverless timeout limits. Generate scripts of any size.
- **Drag & Drop CSV Upload**: Effortless script loading. (CSV expects `filename` and `text` columns).
- **Progress Tracking**: Real-time progress bar, request stats, and console-like logs showing the exact status of each item.
- **Audio Previews**: Play generated voiceover files directly in the interface before exporting.
- **ZIP Download**: Package and download all successfully generated `.mp3` files as a single ZIP archive.
- **LocalStorage Saving**: Remembers your ElevenLabs API Key, Selected Voice, and Model locally in your browser.
- **Flask Fallback**: Includes a simple Flask script (`app.py`) to serve the application locally if needed.

---

## 🚀 How to Run Locally

### Option A: Open `index.html` (Recommended & Simplest)
Simply double-click the `index.html` file at the root of the project to open it in your browser. It runs 100% locally with zero setup or dependencies!

### Option B: Flask Server
If you prefer running a local server:
1. Install requirements:
   ```bash
   pip install flask requests
   ```
2. Run the application:
   ```bash
   python app.py
   ```
3. Open `http://127.0.0.1:5000` in your web browser.

---

## 🌐 How to Publish to Vercel

This app is optimized for zero-config deployment on Vercel as a static webpage.

### Option A: Vercel GitHub Integration (Recommended)
1. Push this project folder to a repository on **GitHub**, **GitLab**, or **Bitbucket**.
2. Go to [Vercel](https://vercel.com) and sign in.
3. Click **Add New** > **Project**.
4. Import your repository.
5. Vercel will automatically detect it as a static project. Click **Deploy**.
6. Your webpage will be live in seconds!

### Option B: Vercel CLI
If you have Vercel CLI installed on your machine:
1. Open your terminal in this directory.
2. Run the deployment command:
   ```bash
   vercel
   ```
3. Follow the CLI prompts to deploy.
4. Run `vercel --prod` to deploy to production.
