const Menu = ({ data }) => {
  return (
    <div className="meals">
      {data.map((item) => {
        return (
          <div className="meals-details">
            <h4 className="meal-title">{item.title}</h4>
            <div className="meal-description">
              <p>{item.description}</p>
              {item.picture && <img className="meal-img" src={item.picture} />}
            </div>

            <span>{item.price} €</span>
          </div>
        );
      })}
    </div>
  );
};
export default Menu;
