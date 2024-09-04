import { UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { useForm } from 'antd/es/form/Form';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import News from '../../components/News/News';
import Product from '../../components/Product/Product';
import { useUser } from '../../hooks/useUser';
import { UsersService } from '../../services/user.service';

export default function LogIn() {
  const [form] = useForm();
  const navigate = useNavigate();
  const user = useUser();

  function onFinish(data) {
    UsersService.checkPass(data.email, data.password);
    form.resetFields();
  }

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user]);

  return (
    <div className='w-[100vw]'>
      <div className='px-[50px] mt-[50px]'>
        <h3 className='text-[24px] text-[#107433] font-bold mb-5'>Sign In</h3>
        <div className='flex flex-col md:flex-row gap-[30px] md:gap-5'>
          <div className='md:w-[50%]'>
            <Form
              form={form}
              onFinish={onFinish}
              style={{ width: '100%', marginTop: '10px' }}
            >
              <Form.Item
                name='email'
                rules={[{ required: true, message: 'Field required' }]}
                style={{ width: '100%', textAlign: 'left' }}
              >
                <Input
                  placeholder='Email...'
                  className='w-[100%] h-[50px] border p-3 mb-3 rounded-sm'
                />
              </Form.Item>
              <Form.Item
                name='password'
                rules={[{ required: true, message: 'Field required' }]}
                style={{ width: '100%', textAlign: 'left' }}
              >
                <Input
                  placeholder='Password...'
                  className='w-[100%] h-[50px] border p-3 mb-3 rounded-sm'
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type='primary'
                  htmlType='submit'
                  className='w-[100%] text-white h-[50px] bg-[#F4991A] rounded-sm'
                >
                  Log In
                </Button>
              </Form.Item>
            </Form>
          </div>
          <div className='md:w-[50%] text-center'>
            <p className='w-[100%] border-t'>
              <span className='relative top-[-14px] bg-white px-[7px]'>
                New to Farmy?
              </span>
            </p>
            <a href='/signup'>
              <button className='w-[188px] h-[50px] mt-2 mb-7 px-5 py-3 bg-[#F4991A] font-bold text-white rounded-sm border border-[#F4991A]'>
                <UserOutlined /> Register now!
              </button>
            </a>
            <p className='w-[100%] border-t'>
              <span className='relative top-[-14px] bg-white px-[7px]'>
                Login or Signup through:
              </span>
            </p>
            <button className='w-[188px] h-[50px] mt-2 px-5 py-3 bg-[#3B5998] font-bold text-white rounded-sm border'>
              <UserOutlined /> Facebook
            </button>
          </div>
        </div>
      </div>
      <div className='px-[50px] mt-[50px]'>
        <h3 className='text-[24px] text-[#107433] font-bold mb-5'>
          New Products
        </h3>
        <Product
          img={
            'https://d1q864mr06oufu.cloudfront.net/farmy-s3/public/spree/products/36527/product/Colli_del_Soligo-Prosecco_Extra_Dry_Nudo_DOC_75cl-farmy-ch-02.jpg?1697647421'
          }
          name={'Prosecco Extra Dry "Nudo" DOC, 75cl'}
          priceBefore={14.5}
          priceAfrer={11.9}
          description={'Cantina Colli del Soligo'}
        />
        <div className='flex flex-col w-[100%] mt-[40px] items-center'>
          <button className='border w-[160px] text-white h-[50px] bg-[#F4991A] rounded-sm font-bold'>
            Show more
          </button>
          <div className='w-[70%] flex flex-col gap-5 items-center md:flex-row md:justify-between text-[12px] mt-[60px]'>
            <button className='border w-[120px] text-white h-[40px] bg-[#F4991A] rounded-sm font-bold'>
              Fruit & Vegetables
            </button>
            <button className='border w-[100px] text-white h-[40px] bg-[#F4991A] rounded-sm font-bold'>
              Meat & Fish
            </button>
          </div>
        </div>
      </div>
      <div className='px-[50px] mt-[50px] grid grid-cols-1 md:grid-cols-2 gap-3 mb-[50px]'>
        <News />
        <News />
        <News />
        <News />
      </div>
    </div>
  );
}
