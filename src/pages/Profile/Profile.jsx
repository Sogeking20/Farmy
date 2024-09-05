import { useState } from "react";
import SettingSection from "../../components/Settings/SettingSection";
import { useUser } from "../../hooks/useUser";

const Profile = ({ section }) => {
  const user = useUser();
  const [activeSection, setActiveSection] = useState("myInfo");

  const changeSection = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="flex justify-center min-w-[70vw] pt-10 gap-12">
      <div className="">
        <li
          onClick={() => changeSection("myInfo")}
          className={`py-2 ${
            activeSection === "myInfo" && "bg-[#E4EBE6]"
          } hover:bg-[#E4EBE6] my-1 rounded-lg cursor-pointer flex items-center gap-5 list-none px-2.5`}
        >
          <img
            width={50}
            height={50}
            src="https://d23qaq2ahooeph.cloudfront.net/assets/user_edit/icons_my-information-5091e87bca22ba1dbd6d40bd4c551df8819ca645018d1d7588350997f939c193.png"
            alt=""
          />
          <p
            className={`font-extrabold ${
              activeSection === "myInfo" && "text-[#107433]"
            }`}
          >
            My Information
          </p>
        </li>
        <li
          onClick={() => changeSection("familyPeople")}
          className={`py-2 ${
            activeSection === "familyPeople" && "bg-[#E4EBE6]"
          } hover:bg-[#E4EBE6] my-1 rounded-lg cursor-pointer flex items-center gap-5 list-none px-2.5`}
        >
          <img
            width={50}
            height={50}
            src="https://d23qaq2ahooeph.cloudfront.net/assets/user_edit/icons_farmy_family-f92b5ca04c2482964666f2cf621f112ef7ecb3daf0be6e3d05fa1dec51943ab2.png"
            alt=""
          />
          <p
            className={`font-extrabold ${
              activeSection === "familyPeople" && "text-[#107433]"
            }`}
          >
            Farmy Family profile
          </p>
        </li>
        <li
          onClick={() => changeSection("referral")}
          className={`py-2 ${
            activeSection === "referral" && "bg-[#E4EBE6]"
          } hover:bg-[#E4EBE6] my-1 rounded-lg cursor-pointer flex items-center gap-5 list-none px-2.5`}
        >
          <img
            width={50}
            height={50}
            src="https://d23qaq2ahooeph.cloudfront.net/assets/user_edit/icons_referral-invitations-af7b8844093863fda41bd985dcdd6cf20d706189bd6629aefcd75e7454cc3cdd.png"
            alt=""
          />
          <p
            className={`font-extrabold ${
              activeSection === "referral" && "text-[#107433]"
            }`}
          >
            Referral invitations
          </p>
        </li>
        <li
          onClick={() => changeSection("password")}
          className={`py-2 ${
            activeSection === "password" && "bg-[#E4EBE6]"
          } hover:bg-[#E4EBE6] my-1 rounded-lg cursor-pointer flex items-center gap-5 list-none px-2.5`}
        >
          <img
            width={50}
            height={50}
            src="https://d23qaq2ahooeph.cloudfront.net/assets/user_edit/icons_password-1f04f0553bb726db9d1c1b07656764c46753863937636efe8e29abdf31c01fc6.png"
            alt=""
          />
          <p
            className={`font-extrabold ${
              activeSection === "password" && "text-[#107433]"
            }`}
          >
            Password
          </p>
        </li>
        <li
          onClick={() => changeSection("dietaryPref")}
          className={`py-2 ${
            activeSection === "dietaryPref" && "bg-[#E4EBE6]"
          } hover:bg-[#E4EBE6] my-1 rounded-lg cursor-pointer flex items-center gap-5 list-none px-2.5`}
        > 
          <img
            width={50}
            height={50}
            src="https://d23qaq2ahooeph.cloudfront.net/assets/user_edit/icons_dietary-preferences-e1df97c6edf3def8424db91b1cbf1bd1468e1e0892c4998e02aba56d2bd9fe00.png"
            alt=""
          />
          <p
            className={`font-extrabold ${
              activeSection === "dietaryPref" && "text-[#107433]"
            }`}
          >
            Dietary preferences
          </p>
        </li>
        <li
          onClick={() => changeSection("accountBalance")}
          className={`py-2 ${
            activeSection === "accountBalance" && "bg-[#E4EBE6]"
          } hover:bg-[#E4EBE6] my-1 rounded-lg cursor-pointer flex items-center gap-5 list-none px-2.5`}
        >
          <img
            width={50}
            height={50}
            src="https://d23qaq2ahooeph.cloudfront.net/assets/user_edit/icons_account-balance-dcf5c765fb7753f5b21638b4491617e7dd7a15b5cc3d8bb51a9ae126a1cee5e4.png"
            alt=""
          />
          <p
            className={`font-extrabold ${
              activeSection === "accountBalance" && "text-[#107433]"
            }`}
          >
            Account balance
          </p>
        </li>
        <li
          onClick={() => changeSection("location")}
          className={`py-2 ${
            activeSection === "location" && "bg-[#E4EBE6]"
          } hover:bg-[#E4EBE6] my-1 rounded-lg cursor-pointer flex items-center gap-5 list-none px-2.5`}
        >
          <img
            width={50}
            height={50}
            src="https://d23qaq2ahooeph.cloudfront.net/assets/user_edit/icons_locations-67ddf9f3934bd97af276b7fcfe588d312c30c044f75a3fcd0fe8bf4f0be39f73.png"
            alt=""
          />
          <p
            className={`font-extrabold ${
              activeSection === "location" && "text-[#107433]"
            }`}
          >
            My location
          </p>
        </li>
        <li
          onClick={() => changeSection("bonusEggs")}
          className={`py-2 ${
            activeSection === "bonusEggs" && "bg-[#E4EBE6]"
          } hover:bg-[#E4EBE6] my-1 rounded-lg cursor-pointer flex items-center gap-5 list-none px-2.5`}
        >
          <img
            width={50}
            height={50}
            src="https://d23qaq2ahooeph.cloudfront.net/assets/user_edit/icons_bonus-eggs-29f55107602d1c19fef1a982ef273e3e563b5fae40a605237687707fa0cb9b7d.png"
            alt=""
          />
          <p
            className={`font-extrabold ${
              activeSection === "bonusEggs" && "text-[#107433]"
            }`}
          >
            Bonus Eggs
          </p>
        </li>
      </div>

      <SettingSection active={activeSection} />
    </div>
  );
};

export default Profile;
