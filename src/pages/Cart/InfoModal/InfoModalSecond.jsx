import { Modal } from 'antd';

export default function InfoModalSecond({ isModalOpen, onClose }) {
  return (
    <Modal
      open={isModalOpen}
      onCancel={onClose}
      afterClose={() => onClose && onClose()}
      onOk={() => {}}
      width={480}
      footer={null} 
      style={{ margin: 'auto', padding: '30px' }}
    >
      <div className='w-[100%] flex flex-col gap-3 mt-5'>
        <h3 className='text-[24px] font-bold text-start'>
            This order contains “cut-by-hand“ items
        </h3>
        <p className='text-[17px]'>
            This means that the item you are ordering may vary slightly in weight, so the exact price can only be determined on the day of delivery. You will therefore be charged a little more. After exact calculation and invoicing, we will credit the difference back to your Farmy account.
        </p>
      </div>
    </Modal>
  );
}
