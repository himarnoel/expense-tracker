import { FC } from "react";
import { Listfile } from "../Service/interfaces";
import { MdDelete } from "react-icons/md";
import { default as api } from "../store/apiSlice";
const List = () => {
  const info = api.useGetLabelsQuery("");

  let Transactions;
  if (info.isFetching) {
    Transactions = <div>....Fetching</div>;
  } else if (info.isSuccess) {
    Transactions = info.data.map((v: any, i: any) => (
      <Transaction key={i} color={v.color} name={v.name} />
    ));
  } else if (info.isError) {
    Transactions = <div>An error occurred</div>;
  }
  return (
    <div className="flex flex-col py-6 gap-3">
      <h1 className="py-4 text-md text-xl">History</h1>
      {Transactions}
    </div>
  );
};

const Transaction: FC<Listfile> = (category) => {
  if (!category) return null;
  return (
    <div
      className="flex justify-center items-center bg-gray-100 py-3 rounded-r"
      style={{ borderRight: `8px solid ${category.color}` }}
    >
      <button className="px-3 text-2xl" style={{ color: `${category.color}` }}>
        <MdDelete />
      </button>
      <span className="block w-full">{category.name ?? ""}</span>
    </div>
  );
};
export default List;
