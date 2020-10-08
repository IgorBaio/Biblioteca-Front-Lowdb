import styled from 'styled-components';

export const LivroContainer = styled.div`
  position: relative;
  overflow: hidden;
  max-height:50%;
  max-width: 70%;
  padding-top: 30%;
  margin-left:5%;
  margin-bottom:30%;
  @media (max-width: 450px) {
    display: none;
  }
`;

