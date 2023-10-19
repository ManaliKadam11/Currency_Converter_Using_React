import { useId } from "react";

function Inputbox({
  amount,
  currencyoptions = [],
  oncurrencychange,
  onamountchange,
  label,
  selectcurrency = "usd",
}) {
  let sameid = useId();
  return (
    <div className="bg-white p-3 rounded-lg text-sm flex">
      <div className=" w-1/2 ">
        <label htmlFor={sameid} className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
          type="number"
          id={sameid}
          className="outline-none w-full bg-transparent py-1.5 px-2"
          placeholder="Amount"
          value={amount}
          onChange={(e) => onamountchange(Number(e.target.value))}
        />
     </div>

      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none "
          value={selectcurrency}
          onChange={(e) => oncurrencychange(e.target.value)}
        >
          {currencyoptions.map((money) => {
            //whn we use map method we need to use key or else we get error
           return <option value="money" key={money}>
              {money}
            </option>;
          })}
        </select>
      </div>
     
    </div>
  );
}
export default Inputbox
