import React from "react";
import { useForm, Resolver } from "react-hook-form";
import List from "./List";

interface FormProps {}

const Form: React.FC<FormProps> = () => {
  type FormValues = {
    expenses: string;
    type: string;
    amout: number;
  };

  const resolver: Resolver<FormValues> = async (values) => {
    return {
      values: values.expenses ? values : {},
      errors: !values.expenses
        ? {
            expenses: {
              type: "required",
              message: "This is required.",
            },
          }
        : {},
    };
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver });
  const onSubmit = handleSubmit((data) => console.log(data));
  return (
    <>
      <div className="form max-w-sm mx-auto w-96">
        <h1 className="font-bold pb-4 text-xl">Transaction</h1>
        <form action="" id="form" onSubmit={onSubmit}>
          <div className="grid gap-4">
            <div className="input-group">
              <input
                type="text"
                placeholder="Salary, House Rent, SIP"
                className="form-input"
                {...register("expenses")}
              />
              <select id="" className="form-input" {...register("type")}>
                <option value="Investment" defaultValue="Investment">
                  Investment
                </option>
                <option value="Expense">Expense</option>{" "}
                <option value="Savings">Savings</option>
              </select>
              <div className="input-group">
                {" "}
                <input
                  type="number"
                  placeholder="amount"
                  {...register("amout")}
                  className="form-input"
                />
              </div>
              <div className="submit-btn">
                <button className="border py-2 text-white bg-indigo-500 w-full">
                  Make Transaction
                </button>
              </div>
            </div>
          </div>
        </form>
        <List />
      </div>
    </>
  );
};

export default Form;
