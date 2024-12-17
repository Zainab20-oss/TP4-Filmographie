
import Head from './Components/head';
import React,{useState} from 'react';
import ListeFilm from './Components/MovieList';
import Rechercher from './Components/SearchBar';
import Trie from './Components/SortButtons';
import Pagina from './Components/pagination';
import MovieDetails from './Components/MovieDetails';
import FavoritesPopup from './Components/FavoritesPopup';
import Footer from './Components/foot';
import ShowFav from './Components/bouttonAfficheFav';
import AddFilmForm from './Components/AddFilmForm';
import ShowForm from './Components/ButtonFormulaire';






const Film=[ {
  "title": "Inception", "director": "Christopher Nolan", "releaseYear": 2010,
  "genre": "Science Fiction", "rating": 8.8
  }, {
  "title": "The Godfather", "director": "Francis Ford Coppola", "releaseYear": 1972,
  "genre": "Crime",
  "rating": 9.2
  }, {
  "title": "The Dark Knight", "director": "Christopher Nolan", "releaseYear": 2008,
  "genre": "Action",
    "rating": 9.0
  },
  {
  "title": "Pulp Fiction", "director": "Quentin Tarantino", "releaseYear": 1994,
  "genre": "Crime",
  "rating": 8.9
  },
  {
  "title": "Schindler's List", "director": "Steven Spielberg", "releaseYear": 1993,
  "genre": "Historical Drama", "rating": 9.0
  }, {
  "title": "The Shawshank Redemption",
  "director": "Frank Darabont", "releaseYear": 1994, "genre": "Drama",
"rating": 9.3
}, {
"title": "Forrest Gump", "director": "Robert Zemeckis", "releaseYear": 1994,
"genre": "Comedy-Drama", "rating": 8.8
}, {
"title": "The Matrix",
"director": "Lana Wachowski, Lilly Wachowski", "releaseYear": 1999,
"genre": "Science Fiction",
"rating": 8.7
}, {
"title": "Fight Club", "director": "David Fincher", "releaseYear": 1999, "genre": "Drama",
  "rating": 8.8
},
{
"title": "The Lord of the Rings: The Return of the King", "director": "Peter Jackson",
"releaseYear": 2003,
"genre": "Fantasy",
"rating": 9.0
  }
]
function App() {
  const [film, setFilm] = useState(Film); // Liste complète des films
  const [filteredFilms, setFilteredFilms] = useState(Film); // Films filtrés affichés
  const [currentPage, setCurrentPage] = useState(1);
  const [nombreEltPage, setNombreEltPage] = useState(5);
  const [favorites, setFavorites] = useState([]);
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [showFavoritesPopup, setShowFavoritesPopup] = useState(false);
  const [showAddFilmFormPopup, setShowAddFilmFormPopup] = useState(false);

  // Tri par année
  const handleTrieA = () => {
    const sortedYear = [...filteredFilms].sort((a, b) => a.releaseYear - b.releaseYear);
    setFilteredFilms(sortedYear);
  };

  // Tri par note
  const handleTrieN = () => {
    const sortedNotes = [...filteredFilms].sort((a, b) => b.rating - a.rating);
    setFilteredFilms(sortedNotes);
  };

  // Recherche par titre
  const handleSearch = (query) => {
    const searchedFilms = film.filter((elt) => elt.title.toLowerCase().includes(query.toLowerCase()));
    setFilteredFilms(searchedFilms);
  };

  // Ajouter un film aux favoris
  const handleAddFavorite = (film) => {
    if (!favorites.includes(film)) {
      setFavorites([...favorites, film]);
    }
  };

  // Gestion des pop-ups
  const handleClosePopupDeta = () => {
    setSelectedFilm(null);
  };

  const handleClosePopup = () => {
    setShowFavoritesPopup(false);
  };

  const handleClosePopupForm = () => {
    setShowAddFilmFormPopup(false);
  };

  const handleShowFavoritesPopup = () => {
    setShowFavoritesPopup(true);
  };

  // Ajouter un nouveau film
  const handleAddFilm = (newFilm) => {
    const updatedFilms = [...film, newFilm];
    setFilm(updatedFilms);
    setFilteredFilms(updatedFilms); // Ajoute également le film à la liste affichée
  };

  const handleShowAddFilmFormPopup = () => {
    setShowAddFilmFormPopup(true);
  };

  // Pagination
  const lastPostindex = currentPage * nombreEltPage;
  const firstPostIndex = lastPostindex - nombreEltPage;
  const currentPosts = filteredFilms.slice(firstPostIndex, lastPostindex);

  return (
    <div>
      <Head />
      <Rechercher onSearch={handleSearch} />
      <Trie onClickA={handleTrieA} onClickN={handleTrieN} />
      <ShowFav onClick={handleShowFavoritesPopup} />
      <ListeFilm films={currentPosts} onSelectFilm={setSelectedFilm} />
      {selectedFilm && (
        <MovieDetails
          film={selectedFilm}
          onAddFavorite={handleAddFavorite}
          onClose={handleClosePopupDeta}
        />
      )}
      {showFavoritesPopup && <FavoritesPopup favorites={favorites} onClose={handleClosePopup} />}
      <Pagina
        totalPosts={filteredFilms.length}
        nombreEltPage={nombreEltPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      <ShowForm onClick={handleShowAddFilmFormPopup} />
      {showAddFilmFormPopup && <AddFilmForm onAddFilm={handleAddFilm} onClose={handleClosePopupForm} />}
      <Footer />
    </div>
  );
}

export default App;
