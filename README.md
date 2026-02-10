# 🎬 ReactJS Simple Movie App

A simple and elegant movie management application built with React and Vite. This app allows users to manage their favorite movies, track viewer counts, and organize their movie collection with an intuitive interface.

## ✨ Features

- 📝 **Add Movies**: Easily add new movies with name and viewer count
- ❤️ **Mark Favorites**: Mark your favorite movies with a simple click
- 👍 **Like Movies**: Show appreciation for movies you enjoy
- 👁️ **Viewer Tracking**: Keep track of how many people have watched each movie
- 🗑️ **Delete Movies**: Remove movies from your collection
- 📊 **Statistics**: View total movies and favorite movies count at a glance
- 🔍 **Search Functionality**: Quickly find movies in your collection
- 🎨 **Filter Options**: Filter movies by different criteria

## 🚀 Technologies Used

- **React 19.2.0** - UI library for building user interfaces
- **Vite 7.2.4** - Next generation frontend tooling
- **Bootstrap 5.2.2** - CSS framework for responsive design
- **Font Awesome 7.0.1** - Icon library
- **UUID** - For generating unique identifiers
- **ESLint** - Code linting and quality assurance

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (version 14 or higher)
- npm or yarn package manager

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Asilbek2706/ReactJS-simple-movie.git
   cd ReactJS-simple-movie
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## 🎯 Usage

### Development Mode

Start the development server with hot reload:

```bash
npm run dev
```

The application will open at `http://localhost:5173` (or another port if 5173 is busy)

### Build for Production

Create a production-ready build:

```bash
npm run build
```

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Lint Code

Check code quality with ESLint:

```bash
npm run lint
```

## 📁 Project Structure

```
ReactJS-simple-movie/
├── src/
│   ├── assets/          # Static assets (images, icons)
│   ├── components/      # React components
│   │   ├── app/         # Main App component
│   │   ├── app-info/    # App information display
│   │   ├── appFilter/   # Filter component
│   │   ├── movie-list/  # Movie list container
│   │   ├── movie-list-item/  # Individual movie item
│   │   ├── movies-add-form/  # Form to add movies
│   │   └── searchPanel/ # Search functionality
│   ├── index.css        # Global styles
│   └── main.jsx         # Application entry point
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
└── README.md            # Project documentation
```

## 🎮 How to Use

1. **Adding a Movie**: 
   - Fill in the movie name and viewer count in the form at the bottom
   - Click the "Add" button to add the movie to your collection

2. **Marking Favorites**: 
   - Click the star icon on any movie to mark it as a favorite
   - The favorite count will update automatically

3. **Liking Movies**: 
   - Click the heart/like icon to show you like a movie
   - Movies you like will be highlighted

4. **Deleting Movies**: 
   - Click the trash icon to remove a movie from your collection

5. **Searching**: 
   - Use the search panel to find specific movies

6. **Filtering**: 
   - Use filter options to view movies by specific criteria

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Asilbek**
- GitHub: [@Asilbek2706](https://github.com/Asilbek2706)

## 🙏 Acknowledgments

- React team for the amazing library
- Vite team for the fast build tool
- Bootstrap for the UI components
- Font Awesome for the icons

---

⭐ If you found this project helpful, please give it a star!
