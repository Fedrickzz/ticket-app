import { SaveOutlined } from '@ant-design/icons';
import { Button, Divider, Form, Input, InputNumber, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useHideMenu } from '../hooks/useHideMenu';
import { getUsuarioStorage } from '../helpers/getUsuarioStorage';
import { useState } from 'react';

const { Title, Text } = Typography;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 14,
  },
};

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 14,
  },
};

export const Ingresar = () => {

  const navigate = useNavigate();
  const [usuario] = useState(getUsuarioStorage());

  useHideMenu(false);

  const onFinish = ({ agente, escritorio }) => {

    localStorage.setItem('agente', agente);
    localStorage.setItem('escritorio', escritorio);
    navigate('/desktop');
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  if (usuario.agente && usuario.escritorio) {
    return navigate('/desktop');
  }

  return (
    <>
      <Title level={2}>Ingresar</Title>
      <Text>Ingrese su nombre y su número de escritorio</Text>
      <Divider />

      <Form
        {...layout}
        name='basic'
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='off'
      >
        <Form.Item
          label='Nombre del agente'
          name='agente'
          rules={[
            {
              required: true,
              message: 'Por favor ingrese su nombre',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Escritorio'
          name='escritorio'
          rules={[
            {
              required: true,
              message: 'Ingrese el numero de escritorio',
            },
          ]}
        >
          <InputNumber min={1} max={99} />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button
            type='primary'
            htmlType='submit'
            shape='round'
          >
            <SaveOutlined />
            Ingresar
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
