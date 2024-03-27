import { FC } from 'react';
import { IContainerProps } from './types';
import styled from 'styled-components';

export const Content: FC<IContainerProps> = ({ children }) => {
  return <StyledContent>{children}</StyledContent>;
};

const StyledContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
`;
