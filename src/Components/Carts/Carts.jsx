import Cooking from '../Cooking/Cooking';
import WantToCook from '../WantToCook/WantToCook';
import WantToCookTable from '../WantToCookTable/WantToCookTable';

const Carts = () => {
  return (
    <div className="w-full p-3 border-2 border-gray-500  bg-gray-200 rounded-3xl mt-5">
      <div>
        <WantToCook></WantToCook>
        <Cooking></Cooking>
      </div>

      <div className="mt-10 font-lexend font-bold text-lg">
        <h3 className="">Total Time = 45 minutes </h3>
        <h3>Total Calories = 1050 calories </h3>
      </div>
    </div>
  );
};

export default Carts;
