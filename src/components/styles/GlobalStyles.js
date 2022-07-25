import { createGlobalStyle } from 'styled-components/macro';
import fonts from './fonts';
import variables from './variables';

const GlobalStyles = createGlobalStyle`
  ${fonts};
  ${variables};

  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  body,
html {
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
}

  body {
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: var(--black);
    color: var(--white);
    font-family: var(--font);
    font-size: var(--fz-md);
  }
  &::-webkit-scrollbar {
    width: 10px;
  }
  
  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: var(--light-grey);
  }
  ::-webkit-scrollbar-track {
    border-radius: 3px;
    background-color: transparent;
}
  
  h1, h2, h3, h4, h5, h6 {
    letter-spacing: -.04em;
    margin: 0 0 10px;
  }

  p {
    margin: 0 0 10px;
  }

  a,
  button {
    transition: all 0.2s ease;
    color: inherit;
  }

  a {
    text-decoration: none;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }

  button {
    border: 0;
    height: var(--spacing-xl);
    cursor: pointer;
    font-family: inherit;
    border-radius: var(--border-radius-pill);
    background-color: var(--purple);
    color: var(--white);
    font-size: var(--fz-sm);
    font-weight: 700;
    padding: var(--spacing-xs) var(--spacing-lg);
  }

  button:hover, button:focus{
    transform: scale(1.15);
      outline: 0;
  }

  button:disabled,
button[disabled]{
  background-color: var(--grey);
  cursor: auto;
  transform: scale(1)
}
  input[type=text]{
    border-radius: 40px;
  min-width: 85%;
  margin-top: 2%;
  height: 40px;
  background-color: var(--dark-grey);
  color: var(--white);
  border: none;
  font-family: var(--font);
  padding: 10px;
  }
  
input:focus{
  outline-color: var(--purple);
}


  img {
    vertical-align: middle;
  }

  main {
    position: relative;
    padding: var(--spacing-xxl) 0;
  }

  .app {
    min-height: 100vh;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  .overflow-ellipsis {
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: unset;
    word-break: break-all;
  }

  .empty-notice {
    color: var(--grey);
    font-size: var(--fz-lg);
    text-align: center;
    padding: var(--spacing-xxl);
  }

  .track__item__icons {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .track__item__icons svg {
    fill: var(--purple);
    height: 2em;
    width: 2em;
    transition: all 0.2s linear;
  }

  .track__item__icons svg:nth-child(2){
    
    height: 10em;
    width:10em;
    
  }

  .track__item__icons div:last-child svg:not(.next) {
    fill: #6e6c6a;
  }

  .track__item__icons svg:hover {
    transform: scale(1.2);
  }

  .icons-tooltip {
    position: relative;
    display: inline-block;
  }

  .icons-tooltip .icons-tooltip-text{
    visibility: hidden;
    width: 120px;
    top: 80%;
    left: 50%;
    margin-left: -60px;
    color: #fff;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;

    position: absolute;
    z-index: 1;
  }

  .icons-tooltip:last-child .icons-tooltip-text:last-child{
    left: -10px;
  }

  .icons-mediacontrols{
    top: 80%;
  }


  .icons-tooltip:hover .icons-tooltip-text {
    visibility: visible;
  }
`;

export default GlobalStyles;
