import { FC } from "react";
import { objects } from "../Service/interfaces";

interface LabelComponentsProps {
  data: objects;
}

const LabelComponents: FC<LabelComponentsProps> = ({ data }) => {
  if (!data) return <div></div>;
  return (
    <div className="labels flex justify-between">
      <div className="flex gap-2">
        <div
          className={`w-2 h-3 rounded py-3 ${
            `bg-[${data.color}]` ?? "bg-[#f9c74f]"
          }`}
        ></div>
        <h3>{data.type ?? ""}</h3>
      </div>
      <h3 className="font-bold">{data.percent ?? 0}%</h3>
    </div>
  );
};

export default LabelComponents;
