import React, {FC} from 'react';
import {useAppSelector} from "../hooks";
import Title from "antd/lib/typography/Title";

const HomePage: FC = () => {
  const {user} = useAppSelector(state => state.auth);

  return (
    <div className={'container'}>
      <Title level={2}>
        Добро Пожаловать {user?.firstName}
      </Title>
    </div>
  );
};

export default HomePage;
