"use client"

import React from 'react';

import { Input, Form, Button } from "antd";
import { signIn } from 'next-auth/react';

const LoginForm = () => {

  const onFinish = async (e: any) => {
    var re = /\S+@\S+\.\S+/;
    if (re.test(e.email) === false) {
      return alert("Неверный Email");
    }
    if (e.password.length < 6) {
      return alert("Пароль должен быть больше 6 символов");
    }

    await signIn('credentials', {
      email: e.email,
      password: e.password,
      callbackUrl: '/',
    });
    
  }

  return (
    <div className='container flex flex-col items-center justify-center gap-4 h-screen'>
      <Form onFinish={onFinish} className='flex flex-col gap-4'>
        <p className='text-blue-500'> Email </p>
        <Form.Item name="email">
          <Input placeholder='Email' required></Input>
        </Form.Item>
        <p className='text-blue-500'> Пароль </p>
        <Form.Item name="password">
          <Input.Password placeholder='Пароль' required></Input.Password>
        </Form.Item>
        <Form.Item>
          <Button block type='primary' className='bg-blue-500' htmlType='submit'>Войти / Зарегистрироваться</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
