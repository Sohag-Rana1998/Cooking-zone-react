import { MdOutlineWatchLater } from 'react-icons/md';
import { FaFire } from 'react-icons/fa';

const Item = () => {
  return (
    <div className="w-full grid grid-cols-1  lg:grid-cols-2 mt-5 gap-5">
      <div className="card card-compact border-2 border-gray-500 w-full bg-base-100 shadow-xl p-3">
        <figure>
          <img
            src="https://i.ibb.co/N2HSzrH/Rectangle-20170-1.png"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-lexend">Spaghetti Bolognese</h2>
          <p className="font-fira">
            Classic Italian pasta dish with savory meat sauce.
          </p>
          <div>
            <p className="font-bold font-lexend">Ingredients: 6</p>
            <ul className="font-fira">
              <li>500g ground beef</li>
              <li>1 onion, chopped</li>
              <li>2 cloves garlic, minced</li>
            </ul>
          </div>
          <div className="flex justify-between ">
            <p className="flex gap-2">
              <MdOutlineWatchLater></MdOutlineWatchLater> Cooking time:
            </p>
            <p className="flex gap-2">
              <FaFire></FaFire> Calories:
            </p>
          </div>

          <div className="card-actions justify-start">
            <button className="btn bg-[#0BE58A]">Want to Cook</button>
          </div>
        </div>
      </div>
      <div className="card card-compact border-2 border-gray-500 w-full bg-base-100 shadow-xl p-3">
        <figure>
          <img
            src="https://i.ibb.co/N2HSzrH/Rectangle-20170-1.png"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-lexend">Spaghetti Bolognese</h2>
          <p className="font-fira">
            Classic Italian pasta dish with savory meat sauce.
          </p>
          <div>
            <p className="font-bold font-lexend">Ingredients: 6</p>
            <ul className="font-fira">
              <li>500g ground beef</li>
              <li>1 onion, chopped</li>
              <li>2 cloves garlic, minced</li>
            </ul>
          </div>
          <div className="flex justify-between ">
            <p className="flex gap-2">
              <MdOutlineWatchLater></MdOutlineWatchLater> Cooking time:
            </p>
            <p className="flex gap-2">
              <FaFire></FaFire> Calories:
            </p>
          </div>

          <div className="card-actions justify-start">
            <button className="btn bg-[#0BE58A]">Want to Cook</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
