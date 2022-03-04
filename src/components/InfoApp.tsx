import React from "react";
import Link from "next/link";

import { Container, Content } from "../styles/components/InfoApp";

const InfoApp: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={"/images/logo.svg"} width={256} height={256} alt="Logo da Prisma Systems" />

        <h3>
          Template de app utilizando <span className="highlightedInfo">React.js</span>,&nbsp;<span className="highlightedInfo">Next.js</span>,&nbsp;
          <span className="highlightedInfo">Electron</span> e <span className="highlightedInfo">Typescript</span>
        </h3>
        <nav>
          <ul>
            <li>
              <Link href="/">
                <a title="Ir até a página Home">Home</a>
              </Link>
            </li>
            |
            <li>
              <Link href="/next">
                <a title="Ir até a página Next">Next</a>
              </Link>
            </li>
          </ul>
        </nav>
      </Content>
    </Container>
  );
};

export default InfoApp;
