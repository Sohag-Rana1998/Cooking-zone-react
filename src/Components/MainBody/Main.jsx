import { useEffect, useState } from 'react';
import Carts from '../Carts/Carts';
import Items from '../Items/Items';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main = () => {
  const [recipes, setRecipes] = useState([]);
  const [carts, setCarts] = useState([]);
  const [cookings, setCookings] = useState([]);

  useEffect(() => {
    fetch('Recipes.json')
      .then(res => res.json())
      .then(data => setRecipes(data));
  }, []);

  const handleCooking = cooking => {
    const remainingCard = carts.filter(
      cart => cart.recipe_id !== cooking.recipe_id
    );
    setCarts(remainingCard);

    setCookings([...cookings, cooking]);
  };

  const handleCarts = cart => {
    const isExist = carts.find(item => item.recipe_id == cart.recipe_id);
    if (!isExist) {
      const newCarts = [...carts, cart];
      setCarts(newCarts);
    } else {
      toast('You have already selected this recipe...');
    }
  };

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
          <Items recipes={recipes} handleCarts={handleCarts}></Items>
        </div>
        <div className="w-full md:w-[50%] lg:w-[35%]">
          <Carts
            carts={carts}
            handleCooking={handleCooking}
            cookings={cookings}
          ></Carts>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Main;
