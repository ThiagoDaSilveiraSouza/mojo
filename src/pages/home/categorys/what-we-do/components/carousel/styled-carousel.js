import styled from 'styled-components'

export const StyledCarouse = styled.section`
  width: 100%;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  position: relative;
  .carousel-arrow {
    position: absolute;
    top: calc(50% - 5rem);
    transition: 0.3s;
    cursor: pointer;
    opacity: 0.8;
    width: 10rem;
    height: 10rem;
    border-radius: 10px;
    user-select: none;
    :hover {
      transform: scale(1.1);
      opacity: 1;
    }
    :nth-child(2) {
      left: 5px;
    }
    :last-child {
      right: 5px;
    }
    @media (max-width: 500px) {
      width: 6rem;
      height: 6rem;
      top: calc(50% - 3rem);
    }
  }
  .disable-button {
    opacity: 0.2;
    :hover {
      transform: none;
      opacity: 0.2;
      cursor: not-allowed;
    }
  }
`

export const StyledCarouselWrapper = styled.div`
  width: 80%;
  max-width: 90vw;
  min-width: 260px;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  display: flex;
  position: relative;
  ::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`
