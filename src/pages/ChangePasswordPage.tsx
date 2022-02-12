import React, {FC, useState} from 'react';
import {Button, Card, Form, Input} from "antd";
import {useNavigate} from "react-router-dom";
import requester from "../utils/requester";
import {errorMessage, successMessage} from "../utils/messages";

const ChangePasswordPage: FC = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const registerUser = (values: any) => {
    errorMessage('Не возможно изменить пароль');
    navigate('/');
  };

  return (
    <div className={'container'}>
      <Card style={{width: 400}}>
        <Form
          form={form}
          name="register"
          onFinish={registerUser}
          scrollToFirstError
        >
          <Form.Item
            name="oldPassword"
            label="Старый пароль"
            rules={[
              {
                required: true,
              },
              () => ({
                validator(_, value) {
                  if (value.length >= 6 && value.length < 10) {
                    return Promise.resolve();
                  }
                },
              }),
            ]}
            hasFeedback
          >
            <Input.Password/>
          </Form.Item>
          <Form.Item
            name="newPassword"
            label="Новый пароль"
            rules={[
              {
                required: true,
              },
              () => ({
                validator(_, value) {
                  if (value.length >= 6 && value.length < 10) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('Минимальная длина 6, максимальная длина 10'));
                },
              }),
            ]}
            hasFeedback
          >
            <Input.Password/>
          </Form.Item>
          <Form.Item
            name="confirm"
            label="Подтвердить новый пароль"
            dependencies={['newPassword']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Подтвердите свой пароль',
              },
              ({getFieldValue}) => ({
                validator(_, value) {
                  if (!value || getFieldValue('newPassword') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('Пароль не совпадает!'));
                },
              }),
            ]}
          >
            <Input.Password/>
          </Form.Item>
          <Form.Item style={{textAlign: 'center', marginTop: 10}}>
            <Button style={{width: 190}} type="primary" htmlType="submit">
              Изменить пароль
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default ChangePasswordPage;
