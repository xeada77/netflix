import React from "react";
import jumboData from "../fixtures/jumbo";
import { Jumbotron } from "../components/";

const JumbotronContainer = () => {
  return (
    <Jumbotron.Container>
      {jumboData.map((jumbo) => (
        <Jumbotron key={jumbo.id} direction={jumbo.direction}>
          <Jumbotron.Pane>
            <Jumbotron.Title>{jumbo.title}</Jumbotron.Title>
            <Jumbotron.SubTitle>{jumbo.subTitle}</Jumbotron.SubTitle>
          </Jumbotron.Pane>
          <Jumbotron.Pane>
            <Jumbotron.Image
              src={jumbo.image}
              alt={jumbo.alt}
            ></Jumbotron.Image>
          </Jumbotron.Pane>
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
};

export default JumbotronContainer;
