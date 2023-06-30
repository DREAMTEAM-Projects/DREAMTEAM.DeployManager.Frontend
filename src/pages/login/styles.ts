import styled from "styled-components";
import { Input, Button } from "@chakra-ui/react";

const Container = styled.div`
  display: flex;
  min-height: 85vh;
  flex-direction: column;
  justify-content: center;
  padding: 6px;
  padding-top: 12px;
  background-color: white;
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;

  & img {
    width: 50px;
    height: 50px;
  }
`;

const FormWrapper = styled.div`
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 30rem;
`;

const StyledLabel = styled.label`
  display: block;
  font-size: 14px;
  font-weight: medium;
  line-height: 1.5;
  color: #2d3748;
`;

const StyledInput = styled(Input)`
  margin-top: 2px;
`;

const StyledButton = styled(Button)`
  width: 100%;
  justify-content: center;
  border-radius: 4px;
  margin-top: 10px;
  background-color: #3f91f9 !important;
  color: #fff !important;

  &:hover {
    background-color: #3f91f9;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

export {
  Container,
  FormWrapper,
  LogoWrapper,
  StyledButton,
  StyledInput,
  StyledLabel,
};
