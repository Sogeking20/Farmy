import { useState } from "react";
// import { FaFacebookF } from "react-icons/fa";
import {
  allergens,
  bonusEggs,
  dietaryPreferences,
} from "../../utils/constants";
import { useUser } from "../../hooks/useUser";

const SettingSection = ({ active }) => {
  const user = useUser();
  
  if (active === "myInfo") {
    return (
      <div className="md:w-[60%] mx-[10px] md:mx-[0] pb-20">
        <h1 className="text-[#107433] text-center text-2xl font-semibold mb-6">
          My Information
        </h1>
        <div className="flex items-center">
          <hr className="w-full" />
          <p className=" w-[35%] my-account font-medium text-inherit">
            My Account
          </p>
          <hr className="w-full" />
        </div>

        <form className="grid grid-cols-2 pt-4 gap-5">
          <input
            type="text"
            className="transition-all outline-none focus:bg-[#F1F1F1] border-b py-1 px-4 border-[#BFBFBF]"
            placeholder="First Name"
          />
          <input
            type="text"
            className="transition-all outline-none focus:bg-[#F1F1F1] border-b py-1 px-4 border-[#BFBFBF]"
            placeholder="Last Name"
          />
          <input
            type="text"
            className="outline-none bg-[#eeeeee] py-1 px-4 cursor-not-allowed border-b border-[#BFBFBF]"
            disabled
            placeholder="Email"
            value={user?.email}
          />
          <input
            type="text"
            className="transition-all w-full outline-none focus:bg-[#F1F1F1] border-b py-1 px-4 border-[#BFBFBF]"
            placeholder="Mobile phone number (+41 xx xxx xx xx)"
          />
          <p className="-translate-y-[90%] text-[#333333] translate-x-[107%] text-[85%] text-end">
            (In order to contact you regarding your order.)
          </p>
        </form>

        <div className="flex items-center">
          <hr className="w-full" />
          <p className=" w-[35%] my-account font-medium text-inherit">
            Communication
          </p>
          <hr className="w-full" />
        </div>

        <form className="flex flex-col items-center gap-4">
          <div className="flex gap-4 items-center">
            <input id="prom-mails" className="w-5 h-5" type="checkbox" />
            <label htmlFor="prom-mails">
              I don’t want to receive any promotional emails from Farmy.
            </label>
          </div>
          <div className="flex gap-4 items-center">
            <input id="print-mail" className="w-5 h-5" type="checkbox" />
            <label htmlFor="print-mail">
              I don’t want to receive any promotional print mailings from Farmy.
            </label>
          </div>
          <div className="flex gap-4 items-center">
            <input id="order-delivery" className="w-5 h-5" type="checkbox" />
            <label htmlFor="order-delivery">
              Please notify me when my order is about to be delivered.
            </label>
          </div>
          <div className="flex gap-4 items-center">
            <input id="survery" className="w-5 h-5" type="checkbox" />
            <label htmlFor="survery">
              Don't send me further post-delivery surveys.
            </label>
          </div>

          <button
            className="py-2.5 mb-5 max-w-[155px] w-full text-lg px-6 rounded bg-[#F4991A] border border-[#F4991A] text-white"
            type="button"
          >
            Update
          </button>
        </form>

        <div className="flex justify-center items-center">
          <hr className="w-1/4" />
          <p className=" my-account font-medium text-inherit">Social</p>
          <hr className="w-1/4" />
        </div>

        <p className="text-center mb-3 mt-10">
          Manage Facebook account connection:
        </p>
        <button
          type="button"
          className="bg-[#3b5998] mx-auto flex py-2.5 px-6 rounded items-center gap-2 text-white"
        >
          {" "}
          Facebook
        </button>
      </div>
    );
  }
  if (active === "familyPeople") {
    return (
      <div className="md:w-[60%] mx-[10px] md:mx-[0] pb-20">
        <img
          src="https://www.farmy.ch/resources/farmy/images/farmy_family/registration/FFamily-registration-header-desktop.jpg"
          alt=""
        />
        <p className="mt-5">
          You have a baby on the way or are already a parent? By registering
          your kids, you will receive exclusive discounts on our{" "}
          <span className="text-[#F4991A]">Farmy Family range</span> , as well
          as extra promotions and raffles. Our general
          <span className="text-[#F4991A]"> terms and conditions</span> remain
          valid.
        </p>
        <div className="flex gap-2 pt-6">
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[green]"></div>
          </label>
          <p className="">Register your kids</p>
        </div>
      </div>
    );
  }

  if (active === "referral") {
    return (
      <div className="md:w-[60%] mx-[10px] md:mx-[0] pb-20">
        <img
          src="https://www.farmy.ch/referrals/2022/friend_referrals_desktop_en.png"
          alt=""
        />
        <p className="rounded text-center p-5 mt-10 bg-[#f5f5f5]">
          You need to have at least two delivered orders to be able to
          participate in the referral program.
        </p>
      </div>
    );
  }

  if (active === "password") {
    return (
      <div className="md:w-[60%] mx-[10px] md:mx-[0] pb-20">
        <h1 className="text-[#107433] text-2xl font-semibold mt-6">Password</h1>

        <form className="pt-5">
          <input
            className="border mb-4 rounded py-1 px-4 outline-none border-[#d1d1d1] w-full"
            type="password"
            placeholder="Old password"
          />
          <input
            className="border rounded py-1 px-4 outline-none border-[#d1d1d1] w-[48%]"
            type="text"
            placeholder="New Password"
          />
          <input
            className="border ml-4 rounded py-1 px-4 outline-none border-[#d1d1d1] w-1/2"
            type="text"
            placeholder="Confirm Password"
          />
          <button
            className="py-2.5 mb-5 mt-4 text-lg px-6 rounded bg-[#F4991A] border border-[#F4991A] text-white"
            type="button"
          >
            Update Password
          </button>
        </form>
      </div>
    );
  }

  if (active === "accountBalance") {
    return (
      <div className="md:w-[60%] mx-[10px] md:mx-[0] pb-20">
        <h1 className="text-[#107433] text-2xl font-semibold mt-6">
          Account balance
        </h1>

        <div className="flex justify-between pt-5">
          <p className="flex-[0.3] text-[#999999]">
            Total:{" "}
            <span className="text-[#468847] text-[120%] font-medium">
              0 CHF
            </span>
          </p>
          <div className="flex w-[65%]">
            <input
              className="border w-full rounded py-0.5 px-4 outline-none border-[#d1d1d1]"
              type="text"
              name=""
              id=""
              placeholder="Coupon Code"
            />
            <button
              className="ml-4 rounded bg-[#F4991A] text-white w-[60%]"
              type="button"
            >
              Activate
            </button>
          </div>
        </div>

        <hr className="mb-7 mt-6 border-t border-[#6f6f6f]" />

        <p className="mb-2.5 text-xl">Your transactions</p>

        <table className="border border-[#ddd] w-full">
          <tr>
            <th className="border text-start p-2 w-[20%] border-[#ddd]">
              Date
            </th>
            <th className="border text-start p-2 border-[#ddd]">Details</th>
            <th className="border p-2 text-right border-[#ddd]">Amount</th>
          </tr>
        </table>

        <p className="text-[#999999] text-[85%] mt-5">
          You have not completed any transactions yet.
        </p>
      </div>
    );
  }

  if (active === "dietaryPref") {
    return (
      <div className="md:w-[60%] mx-[10px] md:mx-[0] pb-20">
        <h1 className="text-[#107433] text-2xl font-semibold mt-6">
          Dietary preferences
        </h1>

        <div className="grid grid-cols-6 pt-5 gap-3">
          {dietaryPreferences.map((pref, index) => (
            <p key={index}>
              <input
                type="checkbox"
                id={pref.name}
                value=""
                className="hidden peer"
                defaultChecked
              />
              <label
                for={pref.name}
                className="inline-flex min-h-[170px] items-center justify-center w-full py-5 bg-white border-2 border-[#ccc] rounded-lg cursor-pointer text-[#585858] peer-checked:text-[#F4991A] peer-checked:border-[#F4991A] hover:text-gray-600 hover:bg-gray-50"
              >
                <div className="flex flex-col items-center">
                  <img
                    width={60}
                    height={60}
                    src={pref.url}
                    alt="Meals Image"
                  />
                  <p className="text-center my-2.5 ">{pref.name}</p>
                </div>
              </label>
            </p>
          ))}
        </div>

        <p className="mb-5 mt-6 text-[#107433] text-lg">Allergens</p>

        <div className="grid grid-cols-6 gap-3 pb-16">
          {allergens.map((pref, index) => (
            <p key={index}>
              <input
                type="checkbox"
                id={pref.name}
                value=""
                className="hidden peer"
              />
              <label
                for={pref.name}
                className="inline-flex min-h-[170px] items-center justify-center w-full py-5 bg-white border-2 border-[#ccc] rounded-lg cursor-pointer text-[#585858] peer-checked:text-[#F4991A] peer-checked:border-[#F4991A] hover:text-gray-600 hover:bg-gray-50"
              >
                <div className="flex flex-col items-center">
                  <img
                    width={60}
                    height={60}
                    src={pref.url}
                    alt="Meals Image"
                  />
                  <p className="text-center my-2.5 ">{pref.name}</p>
                </div>
              </label>
            </p>
          ))}
        </div>
      </div>
    );
  }

  if (active === "location") {
    return (
      <div className="md:w-[60%] mx-[10px] md:mx-[0] pb-20">
        <h1 className="text-[#107433] text-2xl font-semibold mt-6">
          My Location
        </h1>
        <p className="mb-3 mt-5">
          You orders are currently being shipped from our <b>Zürich</b>{" "}
          location.
        </p>

        <button
          className="py-2.5 text-lg px-6 rounded border border-[#ccc]"
          type="button"
        >
          Change
        </button>
      </div>
    );
  }

  if (active === "bonusEggs") {
    return (
      <div className="md:w-[60%] mx-[10px] md:mx-[0] pb-20 bonus-eggs-card p-[19px]">
        <h1 className="text-[#107433] text-2xl font-semibold mt-4">
          <b>Bonus Eggs</b>
        </h1>

        <div className="text-center mb-7 pt-8">
          <p className="text-xl">
            <b>1 Bonus Egg for every franc spent</b>
          </p>
          <p className="text-[#F4991A] mb-2.5 mt-3">
            Get double the number of Bonus Eggs thanks to your Farmy Pass
          </p>
          <p className="w-[84%] mx-auto">
            With our Bonus Egg programme, you collect Bonus Eggs with every
            purchase at Farmy – one egg for every franc spent. Once you have
            collected 500 Bonus Eggs, you can convert them into CHF 5 credit for
            your Farmy account or donate them to one of our partner
            organisations. We would like to introduce you briefly to the
            charitable organisations we support.
          </p>
          <div className="flex justify-center  mx-auto pt-6">
            <div className="py-2 px-5 rounded-full border border-[#d8d0d0] flex gap-1.5">
              <img src="https://www.farmy.ch/rewards/egg.png" alt="" />
              <img src="https://www.farmy.ch/rewards/egg.png" alt="" />
              <img src="https://www.farmy.ch/rewards/egg.png" alt="" />
              <img src="https://www.farmy.ch/rewards/egg.png" alt="" />
              <img src="https://www.farmy.ch/rewards/egg.png" alt="" />
              <img src="https://www.farmy.ch/rewards/egg.png" alt="" />
              <img src="https://www.farmy.ch/rewards/egg.png" alt="" />
              <img src="https://www.farmy.ch/rewards/egg.png" alt="" />
              <img src="https://www.farmy.ch/rewards/egg.png" alt="" />
              <img src="https://www.farmy.ch/rewards/egg.png" alt="" />
              <img src="https://www.farmy.ch/rewards/egg.png" alt="" />
              <img src="https://www.farmy.ch/rewards/egg.png" alt="" />
              <img src="https://www.farmy.ch/rewards/egg.png" alt="" />
              <img src="https://www.farmy.ch/rewards/egg.png" alt="" />
              <img src="https://www.farmy.ch/rewards/egg.png" alt="" />
              <img src="https://www.farmy.ch/rewards/egg.png" alt="" />
              <img src="https://www.farmy.ch/rewards/egg.png" alt="" />
              <img src="https://www.farmy.ch/rewards/egg.png" alt="" />
              <img src="https://www.farmy.ch/rewards/egg.png" alt="" />
              <img src="https://www.farmy.ch/rewards/egg.png" alt="" />
              <img src="https://www.farmy.ch/rewards/egg.png" alt="" />
              <img src="https://www.farmy.ch/rewards/egg.png" alt="" />
              <img src="https://www.farmy.ch/rewards/egg.png" alt="" />
              <img src="https://www.farmy.ch/rewards/egg.png" alt="" />
              <img src="https://www.farmy.ch/rewards/egg.png" alt="" />
            </div>
          </div>
          <p className="my-5">
            You have <span className="text-[#F4991A]">0 Bonus Eggs</span>
          </p>
          <button
            className="bg-[#F4991A] text-white px-4 py-1 rounded"
            type="button"
          >
            Convert Bonus Eggs into credit
          </button>
        </div>

        {bonusEggs.map((egg, index) => (
          <div key={index} className={`flex gap-8 p-4 md:p-7 ${index ? "border-image" : ""}  `}>
            <div className=" max-w-80 max-h-80">
              <img className="h-full rounded-xl" src={egg.url} alt="image" />
              {index === 0 && (
                <p className=" italic text-xs text-end text-[#888]">
                  Image: Sandra Serretti
                </p>
              )}
            </div>
            <div className="flex-1">
              <div className="flex justify-between">
                <img src={egg.logo} alt="" />
                <button
                  className="bg-[#f4991a] self-start px-4 py-1 text-white rounded"
                  type="button"
                >
                  Donate CHF 5
                </button>
              </div>

              <p className="pb-2 pt-5">
                <b>{egg.title}</b>
              </p>
              <p className="mb-5 text-sm">{egg.description}</p>

              <div className="w-full bg-[#ddd] rounded-3xl h-6">
                <div
                  className="bg-[#469343] h-full rounded-full"
                  style={{ width: `${Math.floor(+egg.percent.slice(0, -1))}%` }}
                ></div>
              </div>

              <div className="flex pt-5 justify-between">
                <div>
                  <p>CHF <span className="text-[22px] text-[#538B4E] font-semibold">{egg.price}</span></p>
                  <p className="text-sm">Already donated</p>
                </div>
                <div>
                  <p className="text-[22px] text-end text-[#538B4E] font-semibold">{egg.percent}</p>
                  <p className=" text-sm">of CHF 3000 donation target</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      <h1>s</h1>
    </div>
  );
};

export default SettingSection;
