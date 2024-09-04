// import { FaCaretDown } from "react-icons/fa";

const Checkbox = ({ text }) => {
  return (
    <label class="custom-checkbox mt-2">
      <input type="checkbox" />
      <span class="checkmark"></span>
      <span class="label text-[#333333] hover:text-[#F4991A] text-sm">{text}</span>
    </label>
  );
};

export const Drawer = ({ text, list }) => {
  return (
    <>
      <hr className="my-5" />
      <div className="flex justify-between">
        <p className=" font-bold text-sm text-[#333333]">{text}</p>
        {/* <FaCaretDown className="text-[#888] w-5 h-5" /> */}
      </div>
      <div className="flex flex-col">
        {list.map((el) => (
          <Checkbox text={el} />
        ))}
      </div>
    </>
  );
};

export default Checkbox;
