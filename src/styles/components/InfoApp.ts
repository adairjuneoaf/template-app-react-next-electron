import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  height: auto;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.section`
  width: auto;
  height: auto;

  display: flex;
  align-items: center;
  flex-direction: column;

  .logoPrisma {
    width: 256px;
    height: 256px;
  }

  h3 {
    font-size: 1.125rem;
    font-weight: 400;
  }

  nav {
    margin-top: 2rem;
    ul {
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: center;

      gap: 1rem;
      li {
        list-style: none;

        a {
          font-size: 1.125rem;

          transition: color 0.2s;
          &:hover {
            color: var(--orange-prisma);
          }
        }
      }
    }
  }
`;
