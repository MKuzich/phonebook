import styled from 'styled-components';
import { Spinner } from 'react-bootstrap';

export const Item = styled.li`
  display: flex;
  align-items: baseline;
  margin-bottom: 8px;
`;

export const Text = styled.span`
  margin-right: ${p => p.theme.space[5]}px;
`;

export const Spin = styled(Spinner)`
  margin-left: ${p => p.theme.space[3]}px;
`;
