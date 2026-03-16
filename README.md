# My Portfolio

A personal portfolio website built with React and Tailwind CSS.

The site includes:
- A hero section with a CV download button
- About and contact sections
- A scrolling tech stack carousel
- A projects grid powered by a data file
- Smooth section navigation and subtle motion effects

## Tech Stack

- React (Create React App)
- Tailwind CSS
- Framer Motion
- Iconify and Lucide React

## Project Structure

```text
src/
	App.js
	index.css
	components/
		Navbar.jsx
		Hero.jsx
		About.jsx
		TechCarousel.jsx
		Projects.jsx
		ProjectCard.jsx
		Contact.jsx
		Footer.jsx
	data/
		projects.js
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start development server

```bash
npm start
```

Open http://localhost:3000 in your browser.

## Available Scripts

- `npm start`: Run the app in development mode
- `npm run build`: Build a production bundle in `build/`
- `npm test`: Run tests in watch mode
- `npm run eject`: Eject CRA config (one-way operation)

## Customization

### Update project cards

Edit the projects array in `src/data/projects.js`:
- `title`
- `description`
- `tech`
- `github`
- `demo` (optional)

### Update personal details

- Hero content and CV link: `src/components/Hero.jsx`
- About text: `src/components/About.jsx`
- Contact links: `src/components/Contact.jsx`
- Footer social links: `src/components/Footer.jsx`

### Update tech stack carousel

Edit the `techStack` array in `src/components/TechCarousel.jsx`.

## Deployment

Create a production build:

```bash
npm run build
```

Deploy the generated `build/` folder to your hosting provider of choice (for example Netlify, Vercel, or GitHub Pages).

## Notes

- This project uses the default Create React App toolchain.
- Tailwind directives are defined in `src/index.css`.
