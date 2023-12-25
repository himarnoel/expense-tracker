import React from "react";
import { useForm, Resolver } from "react-hook-form";
import List from "./List";
import { default as api } from "../store/apiSlice";
import { createTransaction } from "../Service/interfaces";
interface FormProps {}

const Form: React.FC<FormProps> = () => {


  const resolver: Resolver<createTransaction> = async (values) => {
    return {
      values: values.name ? values : {},
      errors: !values.name
        ? {
            name: {
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
    resetField,
    formState: { errors },
  } = useForm<createTransaction>({ resolver });

  const [addTransaction] = api.useAddNewTransactionMutation();

  const onSubmit = handleSubmit(async (data) => {
    // console.log(data);

    if (!data) return {};
    await addTransaction(data).unwrap();
    resetField("name"), resetField("amout");
  });

  return (
    <>
      <div className="form max-w-sm mx-auto w-96">
        <h1 className="font-bold pb-4 text-2xl">Transaction</h1>
        <form action="" id="form" onSubmit={onSubmit}>
          <div className="grid gap-4">
            <div className="input-group">
              <input
                type="text"
                placeholder="Salary, House Rent, SIP"
                className="form-input"
                {...register("name")}
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
