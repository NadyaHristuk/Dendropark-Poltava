import { Button, Form, Input } from "antd";
import { login } from "../../srviceApiAuth";
import { useNavigate } from "react-router-dom";
import { useCustomContext } from "../../../context/Context";

const LoginForm = () => {
  const navigate = useNavigate();
  const { setAdminEmail } = useCustomContext();

  const onFinish = async (values) => {
    try {
      const response = await login({
        email: values.email,
        password: values.password,
      });

      navigate("/admin/product");
      setAdminEmail(values.email);

      console.log("Login response:", response);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Увійти
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
