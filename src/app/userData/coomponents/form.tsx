// components/UserForm.jsx

'use client';

import { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { Badge } from "@/components/ui/badge";
import { PackageCheck } from "lucide-react";

export default function UserForm({ user }: any) {
  const [form] = Form.useForm();
  
  const onFinish = async (values: any) => {
    try {
      const response = await fetch('https://kmkcorp.vercel.app/api/updateData', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (response.ok) {
        message.success("Данные сохранены");
      } else {
        throw new Error(data.message);
      }
    } catch (error: any) {
      message.error(error.message);
    }
  };

  return (
    <div className="p-5">
      <Badge
        className="w-fit gap-2 border-2 border-primary px-3 py-[0.365rem] text-base font-bold uppercase"
        variant="outline"
      >
        <PackageCheck size={16} />
        НАСТРОЙКИ АККАУНТА
      </Badge>

      <div className='container flex flex-col items-center justify-center gap-4 h-screen'>
        <Form form={form} onFinish={onFinish} initialValues={user} className='flex flex-col gap-4'>
          <p className='text-gray-100'> Фамилия Имя Отчество </p>
          <Form.Item name="name" rules={[{ required: true, message: 'Please input your name!' }]}>
            <Input placeholder='ФИО' />
          </Form.Item>
          <p className='text-gray-100'> Адрес доставки </p>
          <Form.Item name="adress" rules={[{ required: true, message: 'Please input your address!' }]}>
            <Input placeholder='Адрес' />
          </Form.Item>
          <p className='text-gray-100'> Номер телефона </p>
          <Form.Item name="phone" rules={[{ required: true, message: 'Please input your phone number!' }]}>
            <Input placeholder='Телефон' />
          </Form.Item>
          <Form.Item>
            <Button block type='primary' className='bg-blue-500' htmlType='submit'>Сохранить</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
