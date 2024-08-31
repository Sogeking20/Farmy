import { Radio } from "antd"

export default function Question() {
    return(
        <div className="max-w-[960px] mx-[auto] w-[100%] px-5 flex flex-col itens-center text-center">
            <h3 className="text-[24px] font-bold mt-[50px] mb-[15px]">Support</h3>
            <p className="text-[16px] mb-[50px] font-semibold">Please, choose a type of problem you need to solve. Leave your message using our form and we will contact you as soon as possible.</p>
            <input type="text" className="w-[100%] h-[50px] border px-[20px] mb-[15px]" placeholder="Search your problem"/>
            <Radio.Group
                className="w-[100%] flex flex-col md:flex-row items-center gap-3 mb-[100px]"
                defaultValue="a"
                >
                {['Delivery', 'Ordering', 'Payment', 'Complaints', 'Products'].map((city, index) => (
                    <Radio.Button
                    key={index}
                    value={city.toLowerCase()}
                    className="w-[100%] md:[180px]"
                    style={{
                        backgroundColor: 'white',
                        textAlign: 'center',
                        padding: '8px 16px',
                        cursor: 'pointer',
                        transition: 'color 0.3s',
                        fontSize: '20px',
                        borderRadius: '5px',
                        fontWeight: 'bold'
                    }}
                    >
                    {city}
                    </Radio.Button>
                ))}
                <style jsx>{`
                    .ant-radio-button-wrapper {
                    color: black; /* Исходный цвет текста */
                    border-left: none !important; /* Убираем левый бордер */
                    border-right: none !important; /* Убираем правый бордер */
                    }

                    .ant-radio-button-wrapper:first-child {
                    border-left: none !important; /* Убираем левый бордер у первого элемента */
                    }

                    .ant-radio-button-wrapper:last-child {
                    border-right: none !important; /* Убираем правый бордер у последнего элемента */
                    }

                    .ant-radio-button-wrapper:hover {
                    color: #ff8c00; /* Оранжевый цвет текста при наведении */
                    }

                    .ant-radio-button-wrapper-checked {
                    color: #ff8c00 !important; /* Оранжевый цвет текста в активном состоянии */
                    }
                `}</style>
                </Radio.Group>
        </div>
    )
}