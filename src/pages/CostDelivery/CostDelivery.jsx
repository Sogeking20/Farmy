import PostcodeModal from '../../components/PostcodeModal/PostcodeModal';
import React, { useEffect, useState } from "react";
import { UpOutlined } from '@ant-design/icons';

export default function CostDelivery() {
    const [activeModal, setActiveModal] = useState(false);

    return (
        <div className="max-w-[940px] w-[100%] mx-[auto] flex flex-col items-center my-[40px]">
            <h1 className="max-w-[500px] w-[100%] text-[40px] text-[#107433] font-bold text-center mb-[50px]">Get your groceries delivered to your doorstep!</h1>
            <div className="max-w-[500px] w-[100%] border rounded-xl px-5 pt-5 pb-[50px] text-[24px] font-bold text-center mb-[15px]">
                The next available delivery date for your region is:
            </div>
            <p onClick={() => setActiveModal(true)} className="text-[16px] text-[#333333] underline cursor-pointer mb-[40px]">Change your region</p>
            <div className="w-[100%] flex flex-col gap-[50px] items-start font-semibold text-[21px]">
                <p>Delivery details for your zone:</p>
                <p>For more information, <span className='underline cursor-pointer'>click here <UpOutlined /></span></p>
            </div>


            <PostcodeModal
                isModalOpen={activeModal === true}
                onClose={() => setActiveModal(false)}
            />
        </div>
    )
}