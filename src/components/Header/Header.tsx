import { FC } from 'react';
import styled from 'styled-components';

export const Header: FC = () => {
  return (
    <StyledHeader>
      <Wrapper>
        <h1>CV Creator</h1>
        <span>by Antonov Kirill</span>
      </Wrapper>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px #e1e1e1 solid;
  margin-bottom: 70px;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  & span {
    color: #666666;
    font-size: 14px;
  }
`;
