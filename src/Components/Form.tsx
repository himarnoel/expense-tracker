import { FC } from "react";

interface FormProps {}

const Form: FC<FormProps> = () => {
  return (
    <>
      <div className="form max-w-sm mx-auto w-96">
        <h1 className="font-bold pb-4 text-xl">Transaction</h1>
        <form action="" id="form">
          <div className="grid gap-4">
            <div className="input-group">
              <input
                type="text"
                placeholder="Salary, House Rent, SIP"
                className="form-input"
              />
              <select id="" className="form-input">
                <option value="Investment" defaultValue="Investment">
                  Investment
                </option>
                <option value="Expense">Expense</option>{" "}
                <option value="Savings">Savings</option>
              </select>
              <div className="input-group">
                {" "}
                <input
                  type="text"
                  placeholder="amount"
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
      </div>
    </>
  );
};

export default Form;
