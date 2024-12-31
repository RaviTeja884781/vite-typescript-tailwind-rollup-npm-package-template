# 🎯 Vite TypeScript Tailwind Rollup NPM Package Template

A modern, production-ready template for building and publishing React component libraries with TypeScript, TailwindCSS, and Rollup.

## ✨ Features

- **TypeScript Support**: Built-in TypeScript configuration for type safety
- **TailwindCSS Integration**: Utility-first CSS framework setup
- **Rollup Configuration**: Optimized bundling for NPM packages
- **Development Tools**: ESLint and Prettier pre-configured
- **Modern Toolchain**: Vite for development, Rollup for production builds
- **Optimized Builds**: Tree-shaking and minimal bundle size

## 🚀 Getting Started

### Installation

Clone this template and install dependencies:

```bash
git clone https://github.com/yourusername/your-template-name.git
cd your-template-name
npm install
```

### Development Scripts

This template includes several pre-configured npm scripts to help you develop, build, and maintain your package:

```bash
# Clean the dist directory
npm run clean

# Build the package for production
npm run build

# Lint TypeScript files
npm run lint

# Fix linting issues automatically
npm run lint:fix

# Format code using Prettier
npm run format

# Type check without emitting files
npm run typecheck
```

### Usage

1. **Development**:
   - Write your components in the `src` directory
   - Use TypeScript for type safety
   - Style with TailwindCSS utility classes

2. **Building**:
   - Run `npm run build` to create a production build
   - Output will be in the `dist` directory
   - Includes both ESM and CJS formats

3. **Publishing**:
   - Update `package.json` with your package details
   - Ensure your `exports` and `main` fields are correctly set
   - Run `npm publish` to publish to NPM

## 📦 Project Structure

```
your-package-name/
├── dist/               # Built package output
├── src/               # Source code
│   ├── components/    # React components
│   ├── utils/        # Utility functions
│   └── index.ts      # Main entry point
├── rollup.config.js   # Rollup configuration
├── tsconfig.json     # TypeScript configuration
├── .eslintrc.js      # ESLint configuration
└── tailwind.config.js # TailwindCSS configuration
```

## ⚙️ Configuration

### TypeScript

The template includes a pre-configured `tsconfig.json` for React and modern JavaScript features. Modify as needed for your use case.

### Rollup

The Rollup configuration supports:
- TypeScript compilation
- TailwindCSS processing
- Multiple output formats (ESM, CJS)
- External dependencies handling
- Source maps generation

### TailwindCSS

TailwindCSS is configured with:
- JIT mode enabled
- Custom theme support
- Optimized production builds
- PurgeCSS integration

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/)
- [Rollup](https://rollupjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)

## 📫 Support

For support, please open an issue in the GitHub repository 