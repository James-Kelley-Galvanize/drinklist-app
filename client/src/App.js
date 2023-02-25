import "./App.css";
import React from "react";
import SearchBar from "./components/SearchBar";
import DrinkList from "./components/DrinkList";

let url = `http://localhost:3001/`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drinkList: [],
      searchTerm: "",
      favorites: [],
      searchResults: [],
    };

    this.addFavorite = this.addFavorite.bind(this);
    this.removeFavorite = this.removeFavorite.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  componentDidMount() {
    fetch(url)
      .then((res) => res.json())
      .then((drinkData) => {
        this.setState({ drinkList: drinkData.drinks });
      });
  }
  addFavorite(drinkId) {
    let { favorites } = this.state;
    if (!favorites.includes(drinkId)) {
      this.setState({ favorites: [...favorites, drinkId] });
    }
  }
  removeFavorite(drinkId) {
    let { favorites } = this.state;
    let newFavorites = favorites.filter((id) => id !== drinkId);
    this.setState({ favorites: newFavorites });
  }

  handleSearch() {
    let { searchTerm } = this.state;
    if (searchTerm.length > 0) {
      fetch(`${url}search/${searchTerm}`)
        .then((res) => res.json())
        .then((drinkData) => {
          this.setState({ searchResults: drinkData.drinks });
        })
        .catch((err) => {
          this.setState({ searchResults: [] });
        });
    }
  }
  handleSearchChange(term) {
    this.setState({ searchTerm: term });
  }

  render() {
    let { drinkList, favorites, searchResults } = this.state;
    let { addFavorite, removeFavorite, handleSearch, handleSearchChange } =
      this;
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar
            handleSearch={handleSearch}
            handleSearchChange={handleSearchChange}
          />
          <div className="flex-row">
            <div className="list">
              FULL DRINK LIST:
              <DrinkList
                addFavorite={addFavorite}
                removeFavorite={removeFavorite}
                favoriteList={favorites}
                list={drinkList}
              />
            </div>
            <div className="list">
              SEARCH RESULTS:
              <DrinkList
                addFavorite={addFavorite}
                removeFavorite={removeFavorite}
                favoriteList={favorites}
                list={searchResults}
              />
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
