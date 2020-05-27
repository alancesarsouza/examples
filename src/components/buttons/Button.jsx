import styled from "styled-components";

const Button = styled.input`
  padding: 10px;
  border-radius: 6px;
  background: ${({variant, disabled}) => {
    if(disabled) return '#afafaf'
    switch (variant) {
      case 'secondary':
        return '#fafafa'
      default:
        return '#069'
    }
  } };
`;

export default Button

