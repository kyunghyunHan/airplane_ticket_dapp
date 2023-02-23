import React, { useState } from "react";
import { Form, Input, Button, DatePicker } from "antd";
import moment from "moment";

function App() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = (values: any) => {
    setLoading(true);
    // 여기서 서버로 비행기 티켓 구매 정보를 보내는 로직을 구현합니다.
    console.log(values);
    setLoading(false);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="ticket-purchase-form-container">
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        className="ticket-purchase-form"
      >
        <h2 className="ticket-purchase-form-title">비행기 티켓 구매</h2>

        <Form.Item
          label="이름"
          name="name"
          rules={[{ required: true, message: "이름을 입력해주세요!" }]}
          className="ticket-purchase-form-item"
        >
          <Input placeholder="이름을 입력하세요" />
        </Form.Item>

        <Form.Item
          label="출발지"
          name="from"
          rules={[{ required: true, message: "출발지를 입력해주세요!" }]}
          className="ticket-purchase-form-item"
        >
          <Input placeholder="출발지를 입력하세요" />
        </Form.Item>

        <Form.Item
          label="도착지"
          name="to"
          rules={[{ required: true, message: "도착지를 입력해주세요!" }]}
          className="ticket-purchase-form-item"
        >
          <Input placeholder="도착지를 입력하세요" />
        </Form.Item>

        <Form.Item
          label="출발일"
          name="departureDate"
          rules={[{ required: true, message: "출발일을 선택해주세요!" }]}
          className="ticket-purchase-form-item"
        >
          <DatePicker
            format="YYYY-MM-DD"
            disabledDate={currentDate =>
              currentDate && currentDate < moment().startOf("day")
            }
          />
        </Form.Item>

        <Form.Item className="ticket-purchase-form-item">
          <Button type="primary" htmlType="submit" loading={loading}>
            구매하기
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default App;
