
# Cloudber

Cloudber is a modern cloud security platform that automates IAM, PAM, and GRC with AI. Built with React, Vite, and Tailwind CSS, Cloudber helps organizations secure every identity, session, and model with cloud-native controls and intelligent automation.

## Features

- **VaultScan**: Scan and reveal risky IAM policies.
- **Auto Audit**: Parse and flag privileged session paths.
- **PolicyBuilder AI**: Prompt-based policy generation, including wildcards.
- **AlphaStack**: Automate the full access intelligence loop.
- **Modern UI**: Responsive, accessible, and beautiful interface.
- **Trusted by Security Teams**: Used by DevSecOps, GRC, and engineering leaders.

## Tech Stack

- **Frontend**: React 19, React Router, Tailwind CSS, Flowbite, AOS
- **Charts**: Chart.js, react-chartjs-2, react-minimal-pie-chart
- **Build Tool**: Vite
- **Linting**: ESLint

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Project Structure

```
src/
	assets/         # Images and static assets
	components/     # Reusable UI components
	layouts/        # Layout components (Main, Dashboard)
	pages/          # Landing, Pricing, Products, Auth pages
	Users/          # User dashboard and features
	App.jsx         # Main app routes
	index.css       # Tailwind and global styles
	main.jsx        # App entry point
public/           # Static files
```

## Configuration

- **Tailwind**: See `tailwind.config.js`
- **Vite**: See `vite.config.js`
- **ESLint**: See `eslint.config.js`

## Deployment

Cloudber is ready for deployment on Vercel or any static hosting provider. See `vercel.json` for Vercel configuration.

## License

[MIT](LICENSE) © 2025 Olufemzy
