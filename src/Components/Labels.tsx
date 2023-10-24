import { FC } from "react";
import LabelComponents from "./LabelComponents";
import { objects } from "../Service/interfaces";

const Labels: FC = () => {
  const obj: Array<objects> = [
    {
      type: "savings",
      color: "#f9c74f",
      percent: 45,
    },
    {
      type: "Investments",
      color: "#ff6384",
      percent: 20,
    },
    {
      type: "savings",
      color: "#36a2eb",
      percent: 10,
    },
  ];
  return (
    <div className="">
      {obj.map((value, i: number) => (
        <LabelComponents key={i} data={value} />
      ))}
    </div>
  );
};

export default Labels;
