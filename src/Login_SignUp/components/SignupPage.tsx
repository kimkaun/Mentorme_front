import { useState, FormEvent, ChangeEvent } from "react";
import { Container, Form, Input, Button, Title, Label, InputWrapper } from "./SignUpPage_styles"; // 스타일 import
import React from "react";

function SignupPage() {
  const [formData, setFormData] = useState({
    id: "",
    password: "",
    confirmPassword: "",
    name: "",
    email: ""
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 비밀번호 확인
    if (formData.password !== formData.confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    // DB에 가입 요청하거나 처리하는 로직을 추가할 수 있습니다.
    alert("회원가입이 완료되었습니다.");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Container>
      <Title>회원가입</Title>
      <Form onSubmit={handleSubmit}>
        <InputWrapper>
          <Label htmlFor="id">아이디</Label>
          <Input
            type="text"
            id="id"
            name="id"
            placeholder="아이디"
            value={formData.id}
            onChange={handleChange}
            required
          />
        </InputWrapper>

        <InputWrapper>
          <Label htmlFor="password">비밀번호</Label>
          <Input
                type="password"
                id="password"
                name="password"
                placeholder="비밀번호"
                value={formData.password}
                onChange={handleChange}
                required
            />
          <Input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="비밀번호 확인"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
            />
        </InputWrapper>

        <InputWrapper>
          <Label htmlFor="name">이름</Label>
          <Input
                type="text"
                id="name"
                name="name"
                placeholder="이름"
                value={formData.name}
                onChange={handleChange}
                required
            />
        </InputWrapper>

        <InputWrapper>
          <Label htmlFor="email">이메일</Label>
          <Input
                type="email"
                id="email"
                name="email"
                placeholder="이메일"
                value={formData.email}
                onChange={handleChange}
                required
            />
        </InputWrapper>
        <Button type="submit">회원가입</Button>
      </Form>
    </Container>
  );
}

export default SignupPage;
