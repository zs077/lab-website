# Research Laboratory Website

This is a research laboratory website built with Next.js.

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build production version
npm run build

# Run production version
npm run start

# Clean build cache
npm run clean
```

## Technology Stack

- Next.js 14
- React 18
- TailwindCSS
- Framer Motion

## Deployment Notes

### Resolving npm Warnings

The project has been configured to handle the following common warnings:

1. **`.next` Directory Warnings**:
   - The `.next` directory has been added to `.gitignore` to ensure it's not uploaded to the repository
   - On deployment platforms, the project will be built automatically, eliminating the need to upload the `.next` directory

2. **Deprecated Package Warnings**:
   - Using `overrides` in package.json to force newer versions of `glob` and `rimraf`
   - Updated ESLint and its related packages to the latest versions
   - Using `fs-extra` instead of `rimraf` for directory cleaning

### Server-Side Rendering (SSR) and Client Interactions

To address the "Event handlers cannot be passed to Client Component props" error:

1. Removed the `output: 'export'` configuration from `next.config.js`
2. Created a `ClientWrapper` component as a boundary between client and server components
3. Using `ClientWrapper` to wrap all components with interactions
4. Enabled server rendering for page components to improve initial load performance

### Image Optimization

Configured image optimization settings:
- Using Next.js built-in image optimization instead of the `unoptimized` option
- Configured remote mode to support images from all sources

## License

Private project - All rights reserved 