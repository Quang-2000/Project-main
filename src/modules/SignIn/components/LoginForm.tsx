import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Flex, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";

const LoginForm = () => {
  const navigate = useNavigate();
  const validationSchema = Yup.object({
    username: Yup.string().required("Vui lòng nhập tên người dùng!"),
    password: Yup.string().required("Vui lòng nhập mật khẩu!"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      const storedUser = localStorage.getItem("user");

      if (storedUser) {
        const { username, password } = JSON.parse(storedUser);

        if (username === values.username && password === values.password) {
          navigate("/homePage");
        } else {
          formik.setFieldError(
            "username",
            "Tên tài khoản hoặc mật khẩu không trùng khớp ! "
          );
          formik.setFieldError("password", "");
        }
      } else {
        message.error("Tài khoản chưa đăng ký. Vui lòng đăng ký trước.");
      }
    },
  });

  return (
    <div
      className="form-login bg-white p-4 shadow rounded mx-auto"
      style={{ maxWidth: "400px", flex: 1, margin: "60px 0" }}
    >
      <h1 className="text-center mb-4">ĐĂNG NHẬP</h1>
      <Form name="login" onFinish={formik.handleSubmit} autoComplete="on">
        <Form.Item
          name="username"
          validateStatus={
            formik.errors.username && formik.touched.username ? "error" : ""
          }
          help={
            formik.errors.username && formik.touched.username
              ? formik.errors.username
              : null
          }
        >
          <Input
            prefix={<UserOutlined />}
            placeholder="Tên đăng nhập"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Form.Item>

        <Form.Item
          name="password"
          validateStatus={
            formik.errors.password && formik.touched.password ? "error" : ""
          }
          help={
            formik.errors.password && formik.touched.password
              ? formik.errors.password
              : null
          }
        >
          <Input
            prefix={<LockOutlined />}
            type="password"
            placeholder="Mật khẩu"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Form.Item>

        <Form.Item>
          <Flex
            justify="space-between"
            align="center"
            style={{ width: "100%" }}
          >
            <a href="#">Quên mật khẩu ?</a>
          </Flex>
        </Form.Item>

        <Form.Item>
          <Button block type="primary" htmlType="submit">
            ĐĂNG NHẬP
          </Button>
          <div className="text-center mt-2">
            Bạn chưa có tài khoản? <Link to="/registerPage">Đăng ký ngay</Link>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
