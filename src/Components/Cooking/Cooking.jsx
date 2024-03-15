import CookingTable from '../CookingTable/CookingTable';

const Cooking = () => {
  return (
    <div className="mt-5">
      <h3 className="text-2xl text-center font-bold font-lexend">
        Currently cooking: 02
      </h3>
      <div className="divider px-5"></div>
      <div>
        <CookingTable></CookingTable>
      </div>
    </div>
  );
};

export default Cooking;
