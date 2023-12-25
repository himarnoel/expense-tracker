import { FC } from "react";
import { categoriesInterface } from "../Service/interfaces";

interface LabelComponentsProps {
  data: categoriesInterface;
}

const LabelComponents: FC<LabelComponentsProps> = ({ data }) => {
  if (!data) return <div></div>;
  return (
    <div className="labels flex justify-between mt-2">
      <div className="flex gap-2">
        <div
          style={{ backgroundColor: data.color }}
          className={`w-2 h-3 rounded py-3 `}
        ></div>
        <h3>{data.type ?? ""}</h3>
      </div>
      <h3 className="font-bold">{data.percent ?? 0}%</h3>
    </div>
  );
};

export default LabelComponents;
