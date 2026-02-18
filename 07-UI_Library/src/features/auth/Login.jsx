import { Card, Form, Input, Button, Typography } from "antd";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

export default function Login() {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("AntD login:", values);
    setTimeout(() => navigate("/dashboard"), 800);
  };

  return (
    <div className="flex min-h-svh items-center justify-center bg-muted p-6">
      <Card className="w-full max-w-md shadow-sm">
        <Title level={3} className="text-center">
          Login (Ant Design)
        </Title>

        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Email required" },
              { type: "email", message: "Enter valid email" },
            ]}
          >
            <Input placeholder="Enter email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: "Password required" },
              { min: 6, message: "Minimum 6 characters" },
            ]}
          >
            <Input.Password placeholder="Enter password" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
