Here's the prompt rewritten specifically for an AI code generation agent:

---

## AI Agent Prompt: Portfolio Website Redesign

You are a senior full-stack web developer. Analyze the attached screenshot of [myroslavrepin.com](http://myroslavrepin.com) and generate complete HTML, CSS, and JavaScript code to implement the following redesign requirements.

### Task Overview

Redesign the portfolio website while preserving the current visual aesthetic shown in the screenshot. Implement modern UX improvements, responsive design, and update content.

---

### Step 1: Analyze Current Design

From the screenshot, identify and preserve:

- Color scheme and gradient styles
- Typography (fonts, sizes, weights)
- Button and card styling
- Overall layout structure and spacing
- Visual effects and shadows

### Step 2: Implement Smooth Scrolling

```css
/* Add smooth scroll behavior */
html {
  scroll-behavior: smooth;
}
```

- Create smooth anchor link navigation
- Add CSS scroll-snap for section transitions
- Implement fade-in animations on scroll using Intersection Observer API

### Step 3: Full-Screen Sections

- Make each major section exactly `height: 100vh`
- Use flexbox/grid to center content vertically and horizontally
- Ensure responsive behavior on mobile (adjust height if needed)
- Sections: Hero, Projects showcase, About/Bio, Tech Stack, Contact/Footer

### Step 4: Optimize Layout & Positioning

- Align all buttons, links, and text using CSS Grid/Flexbox
- Ensure proper visual hierarchy
- Optimize spacing with consistent padding/margins
- Make interactive elements minimum 44×44px for mobile

### Step 5: Responsive Burger Menu

**Desktop (width > 768px):**

- Horizontal navigation bar at top
- Keep existing nav style from screenshot

**Mobile (width ≤ 768px):**

- Replace nav with hamburger icon (☰)
- Implement slide-in or overlay menu panel
- Use the same font family from the main site
- Add smooth open/close animation (transform/transition)
- Include all navigation links inside menu

### Step 6: High-Contrast Footer

Add footer section with:

- Background: `#000000` (black)
- Text color: `#FFFFFF` (white)
- Content: Email link, GitHub, social links, copyright
- Full-width, proper padding

### Step 7: Update Tech Stack Section

**Remove:** Django

**Add these items (match existing style):**

- Docker — containerization and deployment
- FastAPI — high-performance web framework for building APIs
- PostgreSQL — relational database
- Async/Asynchronous programming — efficient concurrent code execution

Keep same visual style as other tech stack items from the screenshot.

### Step 8: Code Requirements

- Use semantic HTML5 elements
- Mobile-first CSS approach
- Vanilla JavaScript (or specify if framework preferred)
- Accessible markup (ARIA labels, alt text)
- Clean, commented code
- Optimize for performance

---

### Output Format

Provide complete, production-ready code:

1. **index.html** — Full HTML structure
2. **styles.css** — All CSS styling
3. **script.js** — JavaScript functionality
4. **Instructions** — Any additional setup notes

**Reference:** Analyze attached screenshot for current design aesthetic

---
