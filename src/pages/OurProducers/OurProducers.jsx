import { Divider, Radio } from "antd"
import ProducerCard from "../../components/ProducerCard/ProducerCard"

export default function OurProducers() {

    return (
        <div className="max-w-[960px] w-[100%] mx-auto text-center px-3">
            <h3 className="text-[24px] font-bold">Our Producers</h3>
            <Divider style={{borderColor: 'black', marginTop: '20px'}}/>
            <div className="w-[100%] flex justify-between">
                <Radio.Group
                className="w-[100%] grid grid-cols-3 lg:grid-cols-6 gap-5"
                defaultValue="a"
                >
                {['A-C', 'D-F', 'G-L', 'M-Q', 'R-V', 'V-Z'].map((city, index) => (
                    <Radio.Button
                    key={index}
                    value={city.toLowerCase()}
                    style={{
                        border: 'none',
                        backgroundColor: 'white',
                        textAlign: 'center',
                        padding: '8px 16px',
                        cursor: 'pointer',
                        transition: 'color 0.3s',
                        fontSize: '20px'
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
            <Divider style={{borderColor: 'black',  marginBottom: '20px'}}/>
            <div className="w-[100%] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-[100px]">
                <ProducerCard />
                <ProducerCard />
                <ProducerCard />
                <ProducerCard />
            </div>
        </div>
    )
}