import Menu from "../components/Menu";

const Category = ({ data }) => {
  return (
    <div className="categories-container">
      <div className="basket">
        <p>PANIER</p>
      </div>
      <div className="category">
        {data.map((category, index) => {
          return (
            category.meals.length > 0 && (
              <div key={index}>
                <h2>{category.name}</h2>
                <Menu data={category.meals} />
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};
export default Category;

// Insérer le panier
