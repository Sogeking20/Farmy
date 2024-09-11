// import { FaCaretDown } from "react-icons/fa";
import React, { useState } from "react";
import { CaretDownOutlined, CaretLeftOutlined } from '@ant-design/icons';

const Checkbox = ({ text }) => {
  return (
    <label className="custom-checkbox mt-2">
      <input type="checkbox" />
      <span className="checkmark"></span>
      <span className="label text-[#333333] hover:text-[#F4991A] text-sm">{text}</span>
    </label>
  );
};



export const Drawer = ({ text, list }) => {
  const [isOpen, setIsOpen] = useState(false); // состояние для отслеживания, открыт ли аккордео
  const toggleAccordion = () => {
    setIsOpen(!isOpen); // изменяем состояние
  };

  return (
    <>
      <hr className="my-5" />
      <div className="w-[100%]">
        <div onClick={toggleAccordion} className="w-[100%] text-[18px] flex justify-between cursor-pointer">
          <h3 className=" font-bold text-sm text-[#333333]">{text}</h3>
          {isOpen ? <CaretDownOutlined /> : <CaretLeftOutlined  />}
          </div>
          {isOpen && <div className="flex flex-col">
                  {list.map((el) => (
                    <Checkbox key={el} text={el} />
                  ))}
        </div>}
      </div>

    </>
  );
};

export default Checkbox;
