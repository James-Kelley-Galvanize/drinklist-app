function DrinkListItem({ drink, isFavorite, addFavorite, removeFavorite }) {
  let { strDrink, strDrinkThumb, idDrink } = drink;
  return (
    <div
      className="drink-list-item flex-row"
      onClick={(e) => {
        if (isFavorite) {
          removeFavorite(idDrink);
        } else {
          addFavorite(idDrink);
        }
      }}
    >
      <button className="fave-button">{isFavorite ? `🌟` : `★`}</button>
      <h5>{strDrink}</h5>
      <img src={strDrinkThumb} alt={strDrink} />
    </div>
  );
}

export default DrinkListItem;
