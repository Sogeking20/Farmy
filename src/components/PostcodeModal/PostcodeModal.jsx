import { Modal } from 'antd';

export default function PostcodeModal({ isModalOpen, onClose }) {
  return (
    <Modal
      open={isModalOpen}
      onCancel={onClose}
      afterClose={() => onClose && onClose()}
      onOk={() => {}}
      width={480}
      footer={null} 
      style={{ margin: 'auto', padding: '20px' }}
    >
      <div className='w-[100%] flex flex-col justify-center items-center gap-5 text-center mt-5'>
        <h3 className='text-[24px] font-bold'>
          Where do you want us to deliver?
        </h3>
        <p className='text-[16px]'>
          Enter your postcode to see delivery conditions for your location.
        </p>
        <input
          className='w-[200px] h-[40px] text-center border'
          type='text'
          placeholder='Enter your postcode'
        />
        <p className='font-bold'>or</p>
        <a
          className='text-[#3B5AC1] underline text-[18px] font-semibold'
          href='/login'
        >
          Log In
        </a>
      </div>
    </Modal>
  );
}
