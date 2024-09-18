import { UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { useForm } from 'antd/es/form/Form';
import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import News from '../../components/News/News';
import Product from '../../components/Product/Product';
import { useUser } from '../../hooks/useUser';
import { UsersService } from '../../services/user.service';
import CartWindow from "../../components/CartWindow/CartWindow";
import { CartContext } from "../../CartContext";

export default function LogIn() {
  const [form] = useForm();
  const navigate = useNavigate();
  const user = useUser();
  const { cart } = useContext(CartContext);

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
    <div className='container'>
      <div className='px-[10px] mt-[50px]'>
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
                  className='shadow-text shadow-sm w-[100%] text-[18px] text-white h-[50px] bg-[#F4991A] rounded-sm'
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
              <button className='shadow-text shadow-lg w-[188px] h-[50px] mt-2 mb-7 px-5 py-3 bg-[#F4991A] font-bold text-white rounded-sm border border-[#F4991A]'>
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
      <div className='px-[10px] mt-[50px]'>
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
          <a href="/farm-shop">
            <button className='shadow-text shadow-lg border w-[160px] text-white h-[50px] bg-[#F4991A] rounded-sm font-bold'>
              Show more
            </button>
          </a>
          <div className='w-[70%] flex flex-col gap-5 items-center md:flex-row md:justify-between text-[12px] mt-[60px]'>
            <a href="/farm-shop">
              <button className='border w-[120px] text-white h-[40px] bg-[#F4991A] rounded-sm font-bold'>
                Fruit & Vegetables
              </button>
            </a>
            <a href="/farm-shop">
              <button className='border w-[100px] text-white h-[40px] bg-[#F4991A] rounded-sm font-bold'>
                Meat & Fish
              </button>
            </a>
          </div>
        </div>
      </div>
      <p className='mt-[30px] text-[20px] px-[10px] text-[#107433]'>Neue Produzenten</p>
      <div className='px-[10px] mt-[10px] grid grid-cols-1 md:grid-cols-2 gap-3 mb-[50px]'>
        <News name={'Tutu’s Food'} description={'Tutu’s ice pops were created by the two friends Tatiana Weber and Sabrina Zakowski in 2017 out of passion for good and healthy food. Tutu’s ice pops were created by the two friends Tatiana Weber and Sabrina Zakowski in 2017 out of passion for good and healthy food. The de...s'} img={'https://d1q864mr06oufu.cloudfront.net/farmy-s3/public/farmy/suppliers/1356/large/tutus-tanja-und-sabrina-farmy-ch-a.jpg?1559663254'} country={'Zurich'} id={'1'} flag={"https://www.farmy.ch/flags/v2/50/arm-zurich.png"} />
        <News name={'Bio-Backwaren Neuhof'} description={'The delicious recipes of the former Bäckerei Neuhof have been taken over by the traditional Plüss bakery, and with its twenty or so employees, the production of organic Neuhof bakery products continues with a great deal of heart and soul and in true master baker quality. This ...'} img={'https://d1q864mr06oufu.cloudfront.net/farmy-s3/public/farmy/suppliers/407/large/Farmy.jpg?1708333552'} country={'Weiningen'} id={'1'} flag={"https://www.farmy.ch/flags/v2/50/arm-zurich.png"} />
        <News name={'Umami'} description={'Denis Weinberg and Robin Bertschinger are behind the young start-up UMAMI. The UMAMI project was launched in 2015 and aims to produce food according to the principle of "local, uncompromising and qualitative". A sophisticated production method based on the principles of aquapo...'} img={'https://d1q864mr06oufu.cloudfront.net/farmy-s3/public/farmy/suppliers/761/large/Umami-farmy-01a.jpg?1637936704'} country={'Zurich'} id={'1'} flag={"https://www.farmy.ch/flags/v2/50/arm-zurich.png"} />
        <News name={'Brasserie Docteur...'} description={"The Waadtländer brewery Docteur Gab's counts about twenty coworkers, who are inspired by a common passion: Beers with character, with body and spirit. The experts of the brewery Docteur Gab's choose their raw materials with the utmost care. Malts and hops are of very hig..."} img={'https://d1q864mr06oufu.cloudfront.net/farmy-s3/public/farmy/suppliers/817/large/Docteur_Gabs_Q-fondateurs.jpg?1518624875'} country={'Puidoux'} id={'1'} flag={"https://www.farmy.ch/flags/v2/50/arm-waadt.png"} />
      </div>
      {user?.cart ? <div className="hidden xl:block">
        <CartWindow />
      </div> : cart ? <div className="hidden xl:block">
        <CartWindow />
      </div> : null}
    </div>
  );
}
