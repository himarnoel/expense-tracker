import { FC } from "react";
import { Listfile } from "../Service/interfaces";



const List = () => {
  const obj: Array<Listfile> = [
    {
      name: "savings",
      color: "#f9c74f",
    },
    {
      name: "Investment",
      color: "#ff6384",
    },
    {
      name: "Expense",
      color: "#36a2eb",
    },
  ];
  return (
    <div className="flex flex-col py-6 gap-3">
      <h1 className="py-4 text-md text-xl">History</h1>

      {obj.map((v, i) => (
        <Transaction key={i} category={v.name} />
      ))}
    </div>
  );
};
interface Transactionprops {
  category: string;
}

const Transaction: FC<Transactionprops> = ({ category }) => {
  if (!category) return null;
  return (
    <div className="flex justify-center items-center bg-gray-50 py-3 rounded-r">
      <span className="block w-full">{category ?? ""}</span>
    </div>
  );
};
export default List;
