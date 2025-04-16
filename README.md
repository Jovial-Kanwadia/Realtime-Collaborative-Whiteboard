# Digiboard - Real-time Collaborative Whiteboard

<div align="center">
  <img src="public/vercel.svg" alt="Digiboard Logo" width="200"/>
  <p><strong>A powerful, real-time collaborative whiteboard application built with Next.js and Socket.IO</strong></p>
</div>

## ✨ Features

- **Real-time Collaboration**
  - Multiple users can draw simultaneously
  - Live cursor tracking
  - Real-time chat functionality
  - User presence indicators

- **Rich Drawing Tools**
  - Multiple shapes (line, circle, rectangle)
  - Image support (paste or upload)
  - Custom color picker
  - Adjustable line width
  - Eraser tool
  - Selection tool

- **Advanced Canvas Features**
  - Infinite canvas with pan and zoom
  - Minimap navigation
  - Undo/Redo functionality
  - Background grid options

- **Modern UI/UX**
  - Responsive design
  - Dark mode support
  - Intuitive toolbar
  - Toast notifications
  - Modal system

## 🚀 Tech Stack

- **Frontend**
  - [Next.js](https://nextjs.org/) - React framework
  - [Recoil](https://recoiljs.org/) - State management
  - [Framer Motion](https://www.framer.com/motion/) - Animations
  - [TailwindCSS](https://tailwindcss.com/) - Styling

- **Backend**
  - [Express](https://expressjs.com/) - Node.js web framework
  - [Socket.IO](https://socket.io/) - Real-time communication
  - [TypeScript](https://www.typescriptlang.org/) - Type safety

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Jovial-Kanwadia/digiboard.git
   cd digiboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000) in your browser**

## 🏗️ Project Structure

```
digiboard/
├── app/                    # Next.js app directory
│   ├── [roomId]/          # Dynamic room routes
│   ├── contexts/          # React contexts
│   └── layout.tsx         # Root layout
├── common/                # Shared utilities
│   ├── components/        # Reusable components
│   ├── constants/         # Global constants
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   └── types/            # TypeScript types
├── modules/               # Feature modules
│   ├── home/             # Home page module
│   └── room/             # Whiteboard room module
├── public/               # Static assets
└── server/               # Backend server code
```

## 🔧 Configuration

The project can be configured through various configuration files:

- `next.config.ts` - Next.js configuration
- `tsconfig.json` - TypeScript configuration
- `postcss.config.mjs` - PostCSS configuration
- `eslint.config.mjs` - ESLint configuration

## 🚥 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

