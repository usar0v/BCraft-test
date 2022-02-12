import React, {FC, useState} from 'react';
import {
  Form,
  Input,
  Button, Card,
} from 'antd';
import requester from "../utils/requester";
import {errorMessage, successMessage} from "../utils/messages";
import {useNavigate} from "react-router-dom";


const RegisterComponent: FC = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const registerUser = (values: any) => {
    setLoading(true);
    requester.post('auth/email/register', {
      ...values, confirm: ''
    }).then(res => {
      successMessage('Вы успешно зарегистрированы, войдите в свой аккаунт');
      navigate('/login')
    }).catch(err => {
      errorMessage('аккаунт заранее зарегистрирован!');
    }).finally(() => {
      setLoading(false);
    });
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
            name="email"
            label="E-mail"
            rules={[
              {
                type: 'email',
                message: 'Введите email правильно',
              },
              {
                required: true,
                message: 'Введите свой email',
              },
            ]}
          >
            <Input/>
          </Form.Item>
          <Form.Item
            name="firstName"
            label="Имя"
            rules={[
              {
                required: true,
                message: 'Введите свое имя!',
                whitespace: true,
              },
            ]}
          >
            <Input/>
          </Form.Item>
          <Form.Item
            name="lastName"
            label="Фамилия"
            rules={[
              {
                required: true,
                message: 'Введите свою фамилию!',
                whitespace: true,
              },
            ]}
          >
            <Input/>
          </Form.Item>
          <Form.Item
            name="password"
            label="Пароль"
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
            label="Подтвердить пароль"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Подтвердите свой пароль',
              },
              ({getFieldValue}) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
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
            <Button loading={loading} style={{width: 190}} type="primary" htmlType="submit">
              Регистрация
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default RegisterComponent;
