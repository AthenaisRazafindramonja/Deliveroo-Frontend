const Menu = ({ data }) => {
  return (
    <div className="meals">
      {data.map((item) => {
        return (
          <div className="meals-details">
            <h4>{item.title}</h4>
            <p>{item.description}</p>
            <span>{item.price} €</span>
            {item.picture && <img className="meal-img" src={item.picture} />}
          </div>
        );
      })}
    </div>
  );
};
export default Menu;
