import { FC } from "react";
import { objects } from "../Service/interfaces";

interface LabelComponentsProps {
  data: objects;
}

const LabelComponents: FC<LabelComponentsProps> = ({ data }) => {
  return (
    <div className="label flex justify-between">
      <div className="flex gap-2">
        <div className={`"w-2 h-3 rounded py-3 ${"bg-[#f9c74f]"}"`}></div>
        <h3>Savings</h3>
      </div>
      <h3 className="font-bold">45%</h3>
    </div>
  );
};

export default LabelComponents;
