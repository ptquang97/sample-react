import { Button, Checkbox, Form, Image, Input, Typography } from "antd"
import { memo } from "react"
import { FaLock, FaUserAlt } from "react-icons/fa"

const Signin = () => {
  const handleSubmit = (values: any) => {
    console.log(values)
  }

  return (
    <div className="w-full flex flex-col items-center justify-end h-screen">
      <Form
        name="signin"
        onFinish={handleSubmit}
        autoComplete="off"
        layout="vertical"
        className="w-full max-w-[300px] flex-grow-[0.3]"
      >
        <Form.Item className="flex justify-center">
          <Typography.Title level={1} className="text-[#47A6F1] text-center">
            Sign in
          </Typography.Title>
          <Typography.Text>Sign in and start managing</Typography.Text>
        </Form.Item>

        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input
            prefix={<FaUserAlt color="gray" className="mr-1" />}
            placeholder="Username"
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            prefix={<FaLock color="gray" className="mr-1" />}
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item
          className={`
            [&>div>div>div>.ant-form-item-control-input-content]:flex
            [&>div>div>div>.ant-form-item-control-input-content]:justify-between
          `}
        >
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Typography.Link className="text-[#47A6F1]">
            Forgot password
          </Typography.Link>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="w-full">
            Login
          </Button>
        </Form.Item>
      </Form>
      <Image
        width="100%"
        preview={false}
        src="/icons/line-signin.svg"
        alt="decor"
      />
    </div>
  )
}

export default memo(Signin)
