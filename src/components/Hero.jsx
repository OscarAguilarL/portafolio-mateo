import React from 'react';
import styled from '@emotion/styled';

import user from '../img/User.png';

const HeroStyled = styled.section`
  margin-block-start: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  padding-block-end: 4rem;

  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    gap: 7rem;
    padding-block-end: 5rem;
  }
`;

const HeroImageStyled = styled.div`
  max-inline-size: 15.625rem;
  max-block-size: 15.625rem;
  aspect-ratio: 1/1;
  border-radius: 50%;
  overflow: hidden;

  img {
    block-size: 100%;
    inline-size: 100%;
  }

  @media screen and (min-width: 768px) {
    max-inline-size: 22rem;
    max-block-size: 22rem;
  }
`;

const HeroDescriptionStyled = styled.div`
  color: var(--white);
  max-inline-size: 45rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h4 {
    font: var(--headline4);
    margin: 0;
  }

  p {
    margin: 0;
    font: var(--body1-regular);
  }

  @media screen and (min-width: 768px) {
    align-items: flex-start;
  }
`;

export const Hero = () => {
  return (
    <div>
      <HeroStyled>
        <HeroImageStyled>
          <img
            src={user}
            alt="Foto de perfil de Mateo Martínez"
            width="250"
            height="250"
          />
        </HeroImageStyled>

        <HeroDescriptionStyled>
          <h4>
            Hola ✋, Soy Mateo Martínez un Frontend, centrado en la creación de
            productos digitales durante los últimos 4 años.
          </h4>
          <p>
            Me encanta centrarme en los detalles de las experiencias de nuevos
            productos con una implementación en código perfecta. Pero los
            grandes productos no comienzan ahí, comienzan con una sólida
            colaboración con los compañeros de equipo de investigación,
            ingeniería y productos para comprender los problemas y las
            circunstancias de los clientes.
          </p>
        </HeroDescriptionStyled>
      </HeroStyled>
    </div>
  );
};
