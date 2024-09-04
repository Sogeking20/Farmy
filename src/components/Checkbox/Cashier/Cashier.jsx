import { plus, deleteIcon } from "../../assets";

const Cashier = () => {
  return (
    <div className="container">
      <div className="checkout">
        <h1 className="title text-center mt-6">Choose delivery method</h1>

        <p className="text-center mt-6 mb-4">
          <small className="uppercase">Delivery method</small> <br />
          We deliver the order to you
        </p>
        <hr />
        <h1 className="title text-center mt-6 mb-3">Shipping details</h1>
        <hr className="bg-green-800 h-[4px] w-[20%] mx-auto" />
        <h1 className="text-center text-[20px] font-bold uppercase text-[#585858] mt-5">
          Shipping Address:
        </h1>
        <div className="flex gap-4 items-center justify-center">
          <select className="border-2 w-[35%] px-4">
            <option value="">Jean Hotz Straße 4, 8606 Nänikon </option>
          </select>
          <div className="flex gap-4">
            <div className="p-2 rounded-full bg-[#bbb]">
              <img width={20} height={20} src={plus} alt="" />
            </div>

            <div className="p-2 rounded-full bg-[#bbb]">
              <img width={20} height={20} src={deleteIcon} alt="" />
            </div>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-center">Alex Kim</p>
          <p className="text-center">8606 Nänikon, Jean Hotz Straße 4</p>
          <div className="text-center mt-4">
            <button className="py-2 px-6 border rounded-lg">Edit</button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-6">
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            <span className="font-bold">
              Billing address is the same as the delivery address.
            </span>
          </label>
          <label className="flex items-center gap-2 ">
            <input type="checkbox" />
            <span className="font-bold">I want to pay as a company</span>
          </label>
        </div>
        <div className="flex justify-center items-center mt-8">
          <div className="shadow-2xl w-[40%] p-4 flex flex-col">
            <textarea
              name=""
              id=""
              placeholder="Building entrance, dog warnings, etc..."
              className="h-[100px] border-b-2"
            ></textarea>
            <span className="text-[11px] uppercase font-semibold text-[#333] mt-2">
              Delivery comments, text for a greeting card (we write them for
              you), etc.
            </span>
          </div>
        </div>
        <div className="flex justify-center mt-16 mb-6">
          <button className="text-[23px] font-bold px-6 py-4 rounded-lg bg-[#F4991A] text-[#fff]">
            Continue
          </button>
        </div>
        <hr />
        <h1 className="sec-title mb-12 text-center mt-2">Delivery time</h1>
        <hr />
        <h1 className="sec-title text-center p-3">Vouchers</h1>
        <hr />
        <div className="flex justify-between mt-10 mb-20">
          <div className="w-1/2">
            <p className="italic text-[#bbb]">Alex Kim</p>
            <p>
              <b className="text-[#aaa]">R325664002</b>
            </p>
          </div>
          <div className="w-1/2">
            <p className="text-center text-[#aaa] font-bold mb-2">Total</p>
            <hr />
            <div className="flex justify-between">
              <p className="text-[#aaa]">(tax incl.)</p>
              <h1 className="text-[20px] font-bold text-[#aaa]">
                CHF 104<sup>70</sup>
              </h1>
            </div>
            <p className="text-center text-[#aaa] font-bold mb-2 mt-3">
              Adjustments
            </p>
            <hr />
            <div className="flex justify-between border-b-2 py-3">
              <p className="text-[#aaa] text-[14px] font-bold">
                Value of goods
              </p>
              <p className="text-[#aaa] text-[14px] font-bold">
                CHF 88<sup>90</sup>
              </p>
            </div>
            <div className="flex justify-between border-b-2 py-3">
              <p className="text-[#aaa] text-[14px] font-bold">
                Small order surcharge
              </p>
              <p className="text-[#aaa] text-[14px] font-bold">
                CHF 7<sup>90</sup>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cashier;
