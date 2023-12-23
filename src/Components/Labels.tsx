import { FC } from "react";
import LabelComponents from "./LabelComponents";
import { objects } from "../Service/interfaces";
import { default as api } from "../store/apiSlice";

const Labels: FC = () => {

  const info = api.useGetCategoriesQuery("");
  console.log(info);
  
  let Transactions;
  if (info.isFetching) {
    Transactions = <div>....Fetching</div>;
  } else if (info.isSuccess) {
    Transactions = info.data.map((value: objects, i: number) => (
      <LabelComponents key={i} data={value} />
    ));
  } else if (info.isError) {
    Transactions = <div>An error occurred</div>;
  }
  return <div className="">{Transactions}</div>;
};

export default Labels;
