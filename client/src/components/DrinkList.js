import DrinkListItem from "./DrinkListItem";

function DrinkList({ list, favoriteList, addFavorite, removeFavorite }) {
  return (
    <div id="drink-list flex-column">
      {list.map((item) => {
        let isFavorite = favoriteList.includes(item.idDrink);
        return (
          <DrinkListItem
            addFavorite={addFavorite}
            removeFavorite={removeFavorite}
            key={item.idDrink}
            drink={item}
            isFavorite={isFavorite}
          />
        );
      })}
    </div>
  );
}

export default DrinkList;
