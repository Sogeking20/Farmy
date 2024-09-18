import { Modal } from 'antd';

export default function InfoModal({ isModalOpen, onClose }) {
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
            Small order surcharge
        </h3>
        <p className='text-[17px]'>
            For operational reasons, we have to apply a surcharge of CHF 7.90 for all orders with a goods value of less than CHF 100.
        </p>
      </div>
    </Modal>
  );
}
