import WantToCookTable from '../WantToCookTable/WantToCookTable';

const WantToCook = () => {
  return (
    <div className="mt-5">
      <h3 className="text-2xl text-center font-bold font-lexend">
        Want to cook: 01
      </h3>
      <div className="divider px-5"></div>
      <div>
        <WantToCookTable></WantToCookTable>
      </div>
    </div>
  );
};

export default WantToCook;
