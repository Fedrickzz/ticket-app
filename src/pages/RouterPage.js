// antdesing
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';

// router
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import { Ingresar } from './Ingresar';
import { Cola } from './Cola';
import { CrearTicket } from './CrearTicket';
import { Escritorio } from './Escritorio';
import { useContext } from 'react';
import { UiContext } from '../context/UiContext';

const { Sider, Content } = Layout;

export const RouterPage = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const { ocultarMenu } = useContext(UiContext);

  return (
    <Layout style={{ height: '100vh' }}>
      <Sider
        collapsedWidth={0}
        breakpoint='md'
        hidden={ocultarMenu}
      >
        <div className='demo-logo-vertical' />
        <Menu
          theme='dark'
          mode='inline'
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: <Link to='/login'>Ingresar</Link>,
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: <Link to='/queue'>Cola</Link>,
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: <Link to='/create'>Crear Ticket</Link>,
            },
          ]}
        />
      </Sider>
      <Layout>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Routes>
            <Route path='/login' element={<Ingresar />}></Route>
            <Route path='/queue' element={<Cola />}></Route>
            <Route path='/create' element={<CrearTicket />}></Route>

            <Route path='/desktop' element={<Escritorio />}></Route>
            <Route path='*' element={<Navigate to='/login' />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};
