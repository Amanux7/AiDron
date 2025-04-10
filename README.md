# AiDron

A next-generation intelligent code editor and design platform built with Electron and React, featuring AI-powered assistance for both developers and designers.

## Features

### 🤖 AI-Powered Development
- AI Code Assistant powered by multiple LLMs (OpenAI, Anthropic, Google)
- Intelligent code completion and suggestions
- Code refactoring and optimization recommendations
- Natural language to code conversion
- Bug detection and fixing suggestions
- Documentation generation

### 🎨 Design Features
- Design system integration
- Component visualization
- CSS/SCSS live preview
- Color palette management
- Responsive design preview
- Asset management system
- Design token support

### 💻 Development Features
- 🗂️ Smart file explorer with project organization
- 📝 Advanced Monaco Editor integration
- 🎨 Syntax highlighting for multiple languages
- ⚡ Fast and responsive interface
- 📑 Multi-tab support with split views
- 💾 Automated file saving and version control
- 🌙 Customizable themes
- 🔍 Intelligent search and replace
- 🔄 Hot reload support

### 🤝 Collaboration Features
- Real-time collaboration
- Comment and review system
- Share snippets and components
- Version control integration
- Team workspace support

### 🛠️ Tools and Integration
- Git integration
- Package manager integration
- Terminal integration
- Docker support
- Testing framework integration
- CI/CD pipeline support

## AI Capabilities

### Code Assistant
- Code completion and suggestions
- Refactoring recommendations
- Bug detection and fixes
- Code optimization
- Documentation generation

### Design Assistant
- Design pattern suggestions
- Component recommendations
- Accessibility checks
- Color scheme generation
- Responsive design suggestions

### Models Supported
- OpenAI GPT-4 and GPT-3.5
- Anthropic Claude
- Google PaLM
- Custom model integration support

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)
- Git
- API keys for AI services (optional)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/AiDron.git
cd AiDron
```

2. Install dependencies:
```bash
npm install
```

3. Configure AI services (optional):
Create a `.env` file in the root directory:
```env
OPENAI_API_KEY=your_openai_key
ANTHROPIC_API_KEY=your_anthropic_key
GOOGLE_API_KEY=your_google_key
```

## Development

To run the application in development mode:

```bash
npm run dev
```

This will:
- Start the webpack development server
- Launch the Electron application
- Enable hot reloading for development
- Initialize AI services if configured

## Project Structure

```
AiDron/
├── src/                    # Source files
│   ├── app/               # Application core
│   │   ├── components/    # React components
│   │   ├── hooks/        # Custom React hooks
│   │   ├── services/     # Application services
│   │   └── utils/        # Utility functions
│   ├── ai/               # AI integration
│   │   ├── models/       # AI model integrations
│   │   ├── prompts/      # Prompt templates
│   │   └── utils/        # AI utilities
│   ├── design/           # Design system
│   │   ├── components/   # Design components
│   │   ├── tokens/       # Design tokens
│   │   └── themes/       # Theme configurations
│   └── editor/           # Editor core
│       ├── extensions/   # Editor extensions
│       ├── languages/    # Language support
│       └── themes/       # Editor themes
├── public/               # Static files
├── electron/            # Electron configuration
├── config/             # Configuration files
└── scripts/            # Build and utility scripts
```

## Technologies Used

- Electron - Cross-platform desktop application framework
- React - UI library
- Monaco Editor - Code editing component
- OpenAI API - AI code assistance
- Anthropic Claude API - AI pair programming
- Google PaLM API - Code generation
- WebSocket - Real-time collaboration
- TypeScript - Type safety
- Webpack - Module bundler
- Babel - JavaScript compiler

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Monaco Editor team for the powerful editing capabilities
- Electron team for the desktop application framework
- React team for the UI framework
- OpenAI, Anthropic, and Google for AI capabilities
- Open source community for various tools and libraries
