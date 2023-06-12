import { FC } from "react";

const Labels: FC = () => {
  interface objects {
    type: string;
    color: string;
    percent: number;
  }
  const obj: Array<objects> = [
    {
      type: "savings",
      color: "#f9c74f",
      percent: 45,
    },
    {
      type: "Investments",
      color: "#f9c74f",
      percent: 20,
    },
    {
      type: "savings",
      color: "#f9c74f",
      percent: 10,
    },
  ];
  return (
    <div className="">
      {obj.map((value, i: number) => (
        <LabelCompents key={i} data={value}/>
      ))}
    </div>
  );
};

export default Labels;

