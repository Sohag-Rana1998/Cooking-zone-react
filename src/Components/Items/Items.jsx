import Item from '../Item/Item';

const Items = ({ recipes, handleCarts }) => {
  return (
    <div className="bg-red-100 rounded-3xl grid grid-cols-1  lg:grid-cols-2 mt-5 gap-5 w-full">
      {recipes.map(recipe => (
        <Item
          key={recipe.recipe_id}
          recipe={recipe}
          handleCarts={handleCarts}
        ></Item>
      ))}
    </div>
  );
};

export default Items;
