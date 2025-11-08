AI-Powered Slide Generator 🎨📊:
An AI-powered React application that generates and previews PowerPoint slides from user prompts. Built with React (class components), Gemini AI, and pptxgenjs.
Designed for smooth user experience, modern UI, and instant slide creation.

🚀 Features:
✨ Prompt-based slide generation: Generate slides by typing a simple description.
📝 Live preview: View slides with title, subtitle, bullets, and images instantly.
📥 Download as PPTX: Export generated slides using pptxgenjs.
🎙️ Voice input: Optional microphone input for prompts.
⚡ Loading & error handling: Smooth user experience with spinners and notifications.
📂 Modular structure: Reusable components for easier maintenance and scalability.
🔄 Intuitive flow: Generated results appear above the search bar for easy reference.

📂 Project Structure:
src/
   components/ 
       ChatBox/
          index.js
          index.css
       PPTPreview/ 
          index.js
          index.css
       GeminiAPI.js
       formatSlides.js
    App.js
    App.css 
    index.js

🛠️ Technology Stack:
React (Class Components) – Frontend UI logic.
Gemini AI API – AI-powered text-to-slide generation.
pptxgenjs – Generate PowerPoint (.pptx) files.
CSS / Flexbox / Grid – Styling and layout.
React Icons – Modern icons for buttons and UI elements.

Component Overview:
Header-Search bar with mic + send icon to submit prompts.
SlidePreview-Shows generated slides (title, bullets, images) in real-time.
Loader-Loading spinner displayed during AI processing.
Error-Displays error messages if the AI API fails.

Service & Utilities:
aiService.js: Sends prompts to Gemini AI API and receives slide data.
pptxHelper.js: Converts generated slides into PPTX format and triggers download.

Features In Action:
1. Generating Slides:
Type a prompt in the search bar or use voice input.
AI generates slide content with title, bullets, and optional images.
2. Live Preview:
Preview each slide immediately above the input field.
Modify prompt and regenerate slides dynamically.
3. Download as PPTX:
Click Download PPTX to export all generated slides.
Slides are styled and formatted for immediate presentation use.
