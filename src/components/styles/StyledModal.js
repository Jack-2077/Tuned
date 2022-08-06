import styled, { keyframes } from 'styled-components/macro';

const modalAnimation = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;

const loadingAnimation = keyframes`
    0% {
    top: 8px;
    height: 64px;
  }
  50%, 100% {
    top: 24px;
    height: 32px;
  }
`;
const StyledModalOverlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 40%;

  @media (max-width: 600px) {
    img {
      height: 110px !important;
    }
  }

  @media (max-width: 950px) {
    width: 90% !important;
  }
  height: 70%;
  transform: translate(-50%, -50%);
  color: var(--color-invalid);
  background-color: var(--dark-grey);
  padding: 1rem;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 10;
  animation: ${modalAnimation} 300ms ease-out forwards;

  span {
    margin-left: 10px;
  }

  img {
    display: block;
    margin: auto;
    width: auto;
    height: 30%;
  }

  label {
    display: block;
    margin: 0px 0px 5px;
  }
  label > span {
    display: inline-block;
    margin-top: 10px;
    color: var(--white);
  }

  input[type='text'] {
    background-color: var(--black);
    margin-top: 6px;
  }

  button:first-of-type {
    background-color: var(--color-invalid);
  }

  button + button {
    margin: 4% 0 0 4%;
  }
`;
const StyledModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 10;
`;

const StyledLoadingAnimation = styled.div`
  display: inline-block;
  position: fixed;
  width: 80px;
  height: 80px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  div {
    display: inline-block;
    position: absolute;
    left: 8px;
    width: 16px;
    background: var(--purple);
    animation: ${loadingAnimation} 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
  }

  div:nth-child(1) {
    left: 8px;
    animation-delay: -0.24s;
  }
  div:nth-child(2) {
    left: 32px;
    animation-delay: -0.12s;
  }
  div:nth-child(3) {
    left: 56px;
    animation-delay: 0;
  }
`;

export { StyledModalOverlay, StyledModalBackdrop, StyledLoadingAnimation };
