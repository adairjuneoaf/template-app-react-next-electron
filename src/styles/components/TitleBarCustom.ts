import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: auto;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  //padding: 0.5rem 1rem;

  top: 0;
  left: 0;

  -webkit-app-region: drag;
  user-select: none;
  cursor: -webkit-grab;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;

  user-select: none;

  -webkit-app-region: no-drag;

  button {
    width: 2.875rem;
    height: 1.875rem;
    padding: 0.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1.125rem;

    color: var(--white-prisma);
    background-color: var(--gray-prisma);

    border: 0;

    &.minimize,
    &.maximize {
      transition: filter 0.1s;
      &:hover {
        filter: brightness(0.8);
      }
    }

    &:first-child {
      //border-radius: 8px 0 0 8px;
    }

    &.close {
      //border-radius: 0 8px 8px 0;

      transition: background-color 0.1s;
      &:hover {
        background-color: #ff1818;
      }
    }
  }
`;
