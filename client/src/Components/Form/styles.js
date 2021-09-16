import styled from "styled-components";
import { TextField, Button, Paper } from "@material-ui/core";

export const FormContainer = styled(Paper)`
  padding: 10px;
`;

export const TextInput = styled(TextField)`
  margin: 5px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const FileInput = styled.div`
  width: 97%;
  margin: 10px 0;
`;

export const SubmitButton = styled(Button)`
  margin-bottom: 10px;
`;