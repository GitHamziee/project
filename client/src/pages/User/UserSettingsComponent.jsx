import React from 'react';
import { Form, Input, Button } from 'antd';

function UserSettingsComponent() {
  return (
    <Form>
  <Form.Item label="Username" name="username">
    <Input/>
  </Form.Item>
  <Form.Item label="Password" name="password">
    <Input.Password />
  </Form.Item>
  <Form.Item>
    <Button type="primary" htmlType="submit">
      Submit
    </Button>
  </Form.Item>
</Form>
   
  )
}

export default UserSettingsComponent

