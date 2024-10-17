# Local Lnading pages Project

A TypeScript-based web application for locating and selecting stores. This project provides a user-friendly interface for searching and viewing store locations, with features like store filtering, nearby store selection, and detailed store information display.

## Features

- 🔍 Search functionality for finding specific stores
- 📍 "Stores near me" option
- 🏪 Detailed store information display
- 🕒 Store opening hours
- 🎯 Store selection capability
- 💻 Responsive design for all devices

## Technologies Used

- HTML5
- CSS3
- TypeScript
- Node.js
- NPM (Node Package Manager)

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v12.0.0 or higher)
- npm (usually comes with Node.js)

## Project Structure

```
store-locator/
├── src/
│   ├── index.html
│   ├── styles.css
│   ├── script.ts
│   └── favicon.ico
├── dist/          # Generated after build
├── package.json
├── tsconfig.json
└── README.md
```

## Installation

1. Clone the repository:
   ```bash
   git clone [your-repository-url]
   cd store-locator
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Initialize TypeScript configuration:
   ```bash
   npx tsc --init
   ```

## Development Setup

1. Build the project:
   ```bash
   npm run build
   ```

2. Start the development server:
   ```bash
   npx http-server dist
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:8080
   ```

## Scripts

- `npm run build` - Compiles TypeScript and copies static files to dist/
- `npm start` - Starts the development server (if configured)

## Configuration Files

### tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "ES6",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true
  },
  "include": ["src/**/*"]
}
```

### package.json
```json
{
  "scripts": {
    "build": "tsc && cp src/index.html src/styles.css src/favicon.ico dist/"
  }
}
```

## Usage

1. **Search for Stores**
   - Type store name or address in the search bar
   - Click the search button or press Enter

2. **Find Nearby Stores**
   - Click "Select stores near me" button
   - Allow location access if prompted

3. **Select a Store**
   - Click the "Select" button on any store card
   - Selected store will be highlighted

4. **Remove Selection**
   - Click "Remove selected store" to clear your selection

## Customization

### Adding New Stores

Add new stores to the `stores` array in `script.ts`:

```typescript
const stores: Store[] = [
    {
        name: "Store Name",
        address: "Store Address",
        hours: "Store Hours",
        image: "image-url",
        features: ["Feature1", "Feature2"]
    }
    // Add more stores here
];
```

### Styling

Modify `styles.css` to customize the appearance of your store locator.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Troubleshooting

### Common Issues

1. **TypeScript Compilation Errors**
   - Ensure TypeScript is installed globally or locally
   - Check `tsconfig.json` settings
   - Verify file paths in import statements

2. **404 Favicon Error**
   - Add a favicon.ico file to the src directory
   - Ensure the build script copies favicon.ico to dist/

3. **Files Not Found in Dist**
   - Run `npm run build` to regenerate the dist directory
   - Check build script in package.json

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Simon Abouelkhir - Simon.abouelkhir@gmail.com
Project Link: https://github.com/PinMeTo-Project-to-Local-Landing-Page/NewProject1
