import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 96px 0; ;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const InputWrapper = styled.div`
  display: flex;
`;

export const Input = styled.input`
  min-width: 240px;
  padding: 4px 12px;
`;

export const Label = styled.label`
  align-items: center;
  cursor: pointer;
  display: flex;
`;

export const LabelText = styled.p`
  min-width: 100px;
`;

export const Checkbox = styled.input``;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  padding: 8px 24px;
  letter-spacing: 1px;
`;

export const TodosWrapper = styled.div``;

export const Section = styled.section`
  display: flex;
  padding: 24px;
  border-bottom: 1px solid #30dafb;
`;

export const TextWrapper = styled.div`
  display: flex;
`;

export const Text = styled.p`
  width: 200px;
`;
