import styled from 'styled-components';
import { Spinner } from 'react-bootstrap';

export const Title = styled.h1`
  margin-bottom: ${p => p.theme.space[5]}px;
  text-align: center;
`;

export const Section = styled.section`
  margin-left: auto;
  margin-right: auto;
  padding: ${p => p.theme.space[5]}px ${p => p.theme.space[4]}px;
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.large};
  border-color: ${p => p.theme.colors.borders};
  margin-top: ${p => p.theme.space[6]}px;
  width: 60%;
  @media screen and (max-width: 767px) {
    width: 90%;
  }
`;

export const Spin = styled(Spinner)`
  margin-left: ${p => p.theme.space[3]}px;
`;
