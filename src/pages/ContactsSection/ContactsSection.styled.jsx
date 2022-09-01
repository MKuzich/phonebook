import styled from 'styled-components';

export const Header = styled.h2`
  text-align: center;
  margin-bottom: ${p => p.theme.space[5]}px;
`;

export const Section = styled.section`
  margin-left: auto;
  margin-right: auto;
  padding: ${p => p.theme.space[5]}px ${p => p.theme.space[4]}px;

  margin-top: ${p => p.theme.space[6]}px;
  display: flex;
  justify-content: space-between;
`;
