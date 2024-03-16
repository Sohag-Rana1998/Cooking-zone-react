import PropTypes from 'prop-types';
const WantToCook = ({ carts, handleCooking }) => {
  return (
    <div className="mt-5">
      <h3 className="text-2xl text-center font-bold font-lexend">
        Want to cook:{carts.length}
      </h3>
      <div className="divider px-5"></div>
      <div>
        <div className="w-full font-fira">
          <div className="w-full">
            <table className=" w-full">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Time</th>
                  <th>Calories</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {carts.map((cart, index) => (
                  <tr key={index} className="bg-base-200">
                    <th>{index + 1}</th>
                    <td>{cart.recipe_name.slice(0, 12)}</td>
                    <td>{cart.preparing_time}</td>
                    <td>{cart.calories}</td>
                    <td>
                      <button
                        onClick={() => handleCooking(cart)}
                        className="btn bg-[#0BE58A]"
                      >
                        Preparing
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

WantToCook.propTypes = {
  carts: PropTypes.array.isRequired,
  handleCooking: PropTypes.func.isRequired,
};
export default WantToCook;
