import { useEffect, useState } from 'react';
import Carts from '../Carts/Carts';
import Items from '../Items/Items';

const Main = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('Recipes.json')
      .then(res => res.json())
      .then(data => setRecipes(data));
  }, []);

  console.log(recipes);

  return (
    <div className="container mx-auto">
      <div className="text-center mt-5 lg:mt-10">
        <h1 className="text-5xl mb-5 font-lexend font-bold">Our Recipes</h1>
        <p className="font-lexend">
          Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
          vulputate netus pharetra rhoncus. Eget urna volutpat curabitur
          elementum mauris aenean neque.
        </p>
      </div>

      <div className="container mx-auto flex justify-between flex-col md:flex-row lg:flex-row gap-5">
        <div className="w-full md:w-[45%] lg:w-[60%]">
          <Items></Items>
        </div>
        <div className="w-full md:w-[50%] lg:w-[35%]">
          <Carts></Carts>
        </div>
      </div>
    </div>
  );
};

export default Main;
