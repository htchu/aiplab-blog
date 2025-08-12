# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js blog starter template based on the official Next.js Learn tutorial. The project uses a minimal setup with:

- **Next.js**: React framework with file-based routing
- **React 18+**: Latest React with modern features
- **CSS Modules**: Scoped styling with `Home.module.css`
- **Styled JSX**: Component-scoped CSS-in-JS (used in pages/index.js)

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

## Architecture & Structure

### File-Based Routing
- `pages/` directory contains all routes
- `pages/index.js` serves as the homepage at `/`
- Each `.js` file in `pages/` becomes a route automatically

### Styling Architecture
The project uses a hybrid approach:
1. **Global styles**: `styles/global.css` for site-wide styles
2. **CSS Modules**: `styles/Home.module.css` for component-specific styles
3. **Styled JSX**: Inline styles within components for dynamic styling

### Component Structure
- Pages combine CSS Modules (imported as `styles`) with Styled JSX
- CSS Module classes are accessed via `styles.className`
- Styled JSX provides both scoped (`<style jsx>`) and global (`<style jsx global>`) styles

## Key Technical Details

- **Node.js requirement**: >=18 (specified in package.json engines)
- **No TypeScript configuration**: Pure JavaScript project
- **No custom Next.js config**: Uses default Next.js settings
- **Standard Next.js features**: Head component for meta tags, Image optimization available but not used

## Development Notes

When adding new pages:
1. Create `.js` files in `pages/` directory
2. Export a React component as default export
3. Use Next.js `Head` component for page metadata
4. Follow the existing CSS Module + Styled JSX pattern for styling