# 🏛️ Lakeview Africa Gospel Church

<div align="center">

![Gatsby](https://img.shields.io/badge/Gatsby-5.13-663399?style=for-the-badge&logo=gatsby&logoColor=white)
![React](https://img.shields.io/badge/React-18.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![License](https://img.shields.io/badge/License-0BSD-green?style=for-the-badge)

**A modern, responsive church website built with Gatsby.js**

[🌐 Live Site](https://lakeviewagc.net) • [📦 Netlify](https://lakeview.netlify.com) • [💻 Source Code](https://github.com/kipyegonline/lakeview-gatsby)

</div>

---

## 📖 About

Lakeview AGC (Africa Gospel Church) is located in Section 58, Nakuru, Kenya. This website serves as the digital presence for the church community, providing information about services, events, ministries, and the Lakeview Academy school.

The site was refactored from vanilla React to **Gatsby.js** to leverage:

- ⚡ **Server-Side Rendering (SSR)** for faster initial loads
- 🔍 **SEO optimization** out of the box
- 📦 **Automatic code splitting** and bundle optimization
- 🖼️ **Intelligent image handling** with gatsby-image

---

## 🏗️ Architecture

```
lakeview-gatsby/
├── 📁 src/
│   ├── 📁 components/          # Reusable UI components
│   │   ├── 📁 about/           # About page sections
│   │   ├── 📁 academy/         # School/Academy components
│   │   ├── 📁 contact/         # Contact forms
│   │   ├── 📁 departments/     # Church ministries
│   │   ├── 📁 fellowship/      # Fellowship components
│   │   ├── 📁 give/            # Giving/Donations
│   │   ├── 📁 Home/            # Homepage sections
│   │   │   ├── 📁 carousel/    # Hero carousel
│   │   │   ├── 📁 events/      # Events display
│   │   │   └── 📁 intro/       # Introduction section
│   │   ├── 📁 MultiCarousel/   # Multi-item carousel
│   │   ├── 📁 sermons/         # Online services & sermons
│   │   ├── 📁 ui/              # UI primitives
│   │   │   ├── 📁 footer/      # Site footer
│   │   │   ├── 📁 Modal/       # Modal dialogs
│   │   │   ├── 📁 Nav/         # Navigation
│   │   │   └── 📁 NotFound/    # 404 page
│   │   ├── header.jsx          # Site header
│   │   ├── layout.jsx          # Main layout wrapper
│   │   └── seo.jsx             # SEO component
│   │
│   ├── 📁 pages/               # Route pages (auto-generated routes)
│   │   ├── index.jsx           # Homepage
│   │   ├── about-lakeview-agc.jsx
│   │   ├── church-ministries.jsx
│   │   ├── events.jsx
│   │   ├── get-in-touch.jsx
│   │   ├── home-fellowship-and-bible-study.jsx
│   │   ├── lakeview-academy.jsx
│   │   ├── prayer-and-fasting.jsx
│   │   ├── services.jsx
│   │   ├── 404.jsx
│   │   └── 📁 admin/           # Admin dashboard
│   │
│   ├── 📁 styles/              # Global styles
│   │   ├── design-system.css   # CSS custom properties & tokens
│   │   ├── layout.css
│   │   ├── header.css
│   │   └── footer.css
│   │
│   ├── 📁 css/                 # Additional stylesheets
│   ├── 📁 scss/                # SASS stylesheets
│   ├── 📁 images/              # Static images
│   └── 📁 data/                # Static data files
│
├── 📁 public/                  # Built static files
├── gatsby-config.js            # Gatsby configuration
├── gatsby-node.js              # Node APIs
├── gatsby-browser.js           # Browser APIs
├── gatsby-ssr.js               # SSR APIs
├── tailwind.config.js          # Tailwind CSS config
└── postcss.config.js           # PostCSS config
```

---

## 🎨 Design System

The site uses a custom design system with CSS custom properties defined in `src/styles/design-system.css`:

### Brand Colors

| Color          | Value     | Usage                             |
| -------------- | --------- | --------------------------------- |
| Primary        | `#7c3aed` | Vibrant Purple - main brand color |
| Primary Dark   | `#5b21b6` | Deep Purple - hover states        |
| Secondary      | `#ec4899` | Rose Pink - accents               |
| Secondary Dark | `#be185d` | Deep Rose - hover states          |

### Features

- 📐 **Spacing scale** (4px base unit)
- 🔤 **Typography tokens** (Inter font family)
- 🌈 **Gradient presets** for backgrounds
- 🎭 **Animation keyframes** (fadeIn, slideIn, float, pulse)
- 📱 **Responsive breakpoints**

---

## 📄 Pages

| Route                              | Description                                |
| ---------------------------------- | ------------------------------------------ |
| `/`                                | Homepage with hero, events, and intro      |
| `/about-lakeview-agc`              | Church history, staff, and vision          |
| `/services`                        | Worship service times and online streaming |
| `/church-ministries`               | Ministry departments                       |
| `/lakeview-academy`                | School information, fees, and enrollment   |
| `/events`                          | Upcoming church events                     |
| `/get-in-touch`                    | Contact form and location                  |
| `/home-fellowship-and-bible-study` | Fellowship groups                          |
| `/prayer-and-fasting`              | Prayer programs                            |
| `/admin/*`                         | Admin dashboard for content management     |

---

## 🛠️ Tech Stack

| Technology               | Purpose                        |
| ------------------------ | ------------------------------ |
| **Gatsby 5**             | Static site generator with SSR |
| **React 18**             | UI component library           |
| **Tailwind CSS 3**       | Utility-first CSS framework    |
| **MUI 5**                | Material Design components     |
| **Bootstrap 5**          | Additional UI components       |
| **SASS**                 | CSS preprocessing              |
| **FontAwesome**          | Icon library                   |
| **react-multi-carousel** | Carousels and sliders          |
| **Axios**                | HTTP client                    |
| **Moment.js**            | Date formatting                |

---

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/kipyegonline/lakeview-gatsby.git

# Navigate to project directory
cd lakeview-gatsby

# Install dependencies
npm install

# Start development server
npm run develop
# or
gatsby develop
```

The site will be available at `http://localhost:8000`

### Build for Production

```bash
# Create production build
gatsby build

# Serve production build locally
gatsby serve
```

### Environment Setup

If you encounter OpenSSL issues with Node.js 17+:

```bash
export NODE_OPTIONS=--openssl-legacy-provider
```

---

## 📦 Deployment

The site is deployed on **Netlify** with automatic deployments from the main branch.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/kipyegonline/lakeview-gatsby)

### Live URLs

- 🌐 **Production**: [lakeviewagc.net](https://lakeviewagc.net)
- 🔗 **Netlify**: [lakeview.netlify.com](https://lakeview.netlify.com)

---

## 📁 Key Components

### `OnlineServices.jsx`

Modern streaming section with YouTube and Facebook platform cards featuring glassmorphism design and hover animations.

### `Academy.jsx`

Comprehensive school section with:

- Hero carousel with gallery strip
- Vision & Mission cards
- Interactive class listings
- Tabbed fee structure
- Parent testimonials
- Contact information

### `Home.jsx`

Homepage with hero carousel, upcoming events, and church introduction.

### Design System (`design-system.css`)

CSS custom properties for consistent theming:

- Color tokens
- Typography scale
- Spacing system
- Animation presets
- Shadow utilities

---

## 👤 Author

**Vince Kipyegon**

- GitHub: [@kipyegonline](https://github.com/kipyegonline)
- Twitter: [@kipyegonline](https://twitter.com/kipyegonline)
- Email: vince.kipyegon11@gmail.com

---

## 📄 License

This project is licensed under the **0BSD License** - see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**Built with ❤️ for Lakeview Africa Gospel Church**

_"To impart spiritual virtues, offer quality education, and develop a God-fearing generation."_

</div>
