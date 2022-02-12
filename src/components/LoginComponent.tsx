import React, {ChangeEvent, FC, useState} from 'react';
import {Button, Card, Form, Input} from "antd";
import {useNavigate} from "react-router-dom";
import requester from "../utils/requester";
import {errorMessage, successMessage} from "../utils/messages";
import {useAppDispatch} from "../hooks";
import {setUser} from "../store/slices/authSlice";

const LoginComponent: FC = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const loginUser = (values: any) => {
    setLoading(true);
    requester.post('auth/email/login', values).then(res => {
      dispatch(setUser(res));
      successMessage('Вы успешно зашли в свой аккаунт');
      navigate('/')
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
          onFinish={loginUser}
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
          <Form.Item style={{textAlign: 'center', marginTop: 10}}>
            <Button loading={loading} style={{width: 190}} type="primary" htmlType="submit">
              Войти
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default LoginComponent;
