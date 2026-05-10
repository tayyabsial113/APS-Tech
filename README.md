# APS Tech — Website

Multi-page website for Automated Process Solutions (APS Tech).

## 📁 Project Structure

```
APS_Tech_Fixed/
├── index.html              ← Homepage
├── server.py               ← Dev server (run from THIS folder)
├── pages/
│   ├── services.html       ← All 9 services with detail pages
│   ├── about.html          ← About, team, values, timeline
│   ├── how.html            ← Process, FAQ
│   └── contact.html        ← Contact form
├── assets/
│   ├── css/
│   │   └── global.css      ← Shared styles (navbar, footer, vars)
│   └── js/
│       └── components.js   ← Shared navbar + footer injector
└── aps-tech/               ← (old subfolder, ignore)
```

## 🚀 Start the Server

```bash
# Make sure you're in the APS_Tech_Fixed folder, then run:
python3 server.py
```

Then open **http://localhost:3000** in your browser.

## ⚠️ Common Mistake — Don't do this:
```bash
# WRONG — server inside aps-tech/ won't find assets/ or pages/
cd aps-tech
python3 server.py
```

## 📄 Pages

| Page | URL |
|------|-----|
| Home | `http://localhost:3000/` |
| Services | `http://localhost:3000/pages/services.html` |
| About | `http://localhost:3000/pages/about.html` |
| How It Works | `http://localhost:3000/pages/how.html` |
| Contact | `http://localhost:3000/pages/contact.html` |

## ✏️ Customization

- **Colors & fonts** → `assets/css/global.css` (CSS variables at top)
- **Navbar & Footer links** → `assets/js/components.js`
- **Content** → Edit the relevant HTML page directly
- **Port** → Change `PORT = 3000` in `server.py`

## 🔧 Requirements

- Python 3 (pre-installed on macOS/Linux/Windows with Python)
- No npm, no Node.js, no build step needed
