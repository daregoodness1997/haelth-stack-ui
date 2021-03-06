import styled from 'styled-components';

export const PageWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  padding: 3.2rem;
  overflow: auto;
`;

export const HeadWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
  & div span {
    margin-top: 1rem;
    font-size: 0.8rem;
  }
`;

export const DetailsWrapper = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.neutralwhite};
  padding: 2rem;
  border-radius: 4px;
  margin-top: 2rem;

  & h2 {
    font-size: 0.9rem;
    font-weight: bolder;
    padding: 1.2rem 0 2.4rem;
  }
  & span {
    font-weight: bold;
    cursor: pointer;
  }
`;

export const GrayWrapper = styled.div`
  background: ${({ theme }) => theme.grayFour};
  border-radius: 4px;
  padding: 2rem;
`;

export const GridWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  margin-top: 3.2rem;

  &.subgrid {
    margin-top: 1rem;
  }

  & label {
    display: block;
    font-size: 0.75rem;
    margin-bottom: 0.5rem;
  }
  & p {
    background: ${({ theme }) => theme.grayFour};
    padding: 0.9rem;
    height: 50px;
    border-radius: 2px;
  }
`;

export const BottomWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 2rem;
  & button {
    margin-left: 1rem;
  }
`;
