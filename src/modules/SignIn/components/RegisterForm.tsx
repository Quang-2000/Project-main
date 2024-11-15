import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, message } from "antd";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const LoginForm = () => {
  const validationSchema = Yup.object({
    username: Yup.string()
      .min(7, "Vui lòng nhập trên 7 kí tự !")
      .required("Vui lòng nhập tên người dùng!"),
    email: Yup.string()
      .email("Email không hợp lệ!")
      .required("Vui lòng nhập email!"),
    password: Yup.string()
      .min(8, "Vui lòng nhập trên 8 kí tự")
      .required("Vui lòng nhập mật khẩu!"),
    confirmpassword: Yup.string()
      .oneOf([Yup.ref("password")], "Mật khẩu xác nhận không khớp!")
      .required("Vui lòng xác nhận mật khẩu!"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
    validationSchema,
    onSubmit: (values) => {
      const existingUser = localStorage.getItem("user");

      if (existingUser) {
        message.error("Tài khoản đã tồn tại. Vui lòng đăng nhập.");
      } else {
        localStorage.setItem(
          "user",
          JSON.stringify({
            username: values.username,
            email: values.email,
            password: values.password,
          })
        );
        message.success("Đăng ký thành công!");
      }
    },
  });

  return (
    <div
      className="form-register bg-white p-4 shadow rounded mx-auto"
      style={{ maxWidth: "400px", flex: 1, margin: "60px 0" }}
    >
      <h2 className="text-center mb-4">ĐĂNG KÝ TÀI KHOẢN</h2>
      <Form name="register" onFinish={formik.handleSubmit} autoComplete="on">
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
          name="email"
          validateStatus={
            formik.errors.email && formik.touched.email ? "error" : ""
          }
          help={
            formik.errors.email && formik.touched.email
              ? formik.errors.email
              : null
          }
        >
          <Input
            prefix={<UserOutlined />}
            placeholder="Email"
            name="email"
            value={formik.values.email}
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

        <Form.Item
          name="confirmpassword"
          validateStatus={
            formik.errors.confirmpassword && formik.touched.confirmpassword
              ? "error"
              : ""
          }
          help={
            formik.errors.confirmpassword && formik.touched.confirmpassword
              ? formik.errors.confirmpassword
              : null
          }
        >
          <Input
            prefix={<LockOutlined />}
            type="password"
            placeholder="Xác nhận mật khẩu"
            name="confirmpassword"
            value={formik.values.confirmpassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Form.Item>

        <Form.Item>
          <Button block type="primary" htmlType="submit">
            ĐĂNG KÝ
          </Button>
          <div className="text-center mt-2">
            Bạn đã có tài khoản? <Link to="/loginPage">Đăng nhập ngay</Link>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
