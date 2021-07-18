import styled from 'styled-components';

export const FormGroup = styled.fieldset`
  border: 0;

  &:first-child{
    margin-top: 2rem;
  }

  input{
    width: 100%;
    background-color: #f4f4f4;
    color: var(--text-title);
    border: 0;
    padding: 0.9rem 1rem;
    margin-bottom: 1rem;
    border-radius: 100000px;

    ::placeholder{
      color: var(--text);
      opacity: 1;
    }
  }
`;

export const Button = styled.button`
  border: 0;
  padding: 0.5rem 0.75rem;
  color: var(--box-background);
  border-radius: 10000px;
  background-color: var(--highlight-button);
`;