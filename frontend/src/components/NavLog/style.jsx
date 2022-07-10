import styled from "styled-components";

export default styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-start;
  height: 100vw;
  width: 9em;
  left: 0;
  .circle {
    width: 9em;
    height: 9em;
    background-color: red;
    border-radius: 50%;
    position: absolute;
    top: -4em;
    left: -4em;
    z-index: 2;
    span {
      position: absolute;
      width: 2.2em;
      height: 0.2em;
      background-color: black;
    }
    .one {
      margin-top: 5.5em;
      margin-left: 5em;
    }
    .two {
      margin-top: 6em;
      margin-left: 5em;
    }
    .tree {
      margin-top: 6.5em;
      margin-left: 5em;
    }
  }
  .big_circle {
    height: 16em;
    aspect-ratio: 1/1;
    background-color: blue;
    border-radius: 50%;
    margin-top: -11em;
    margin-left: -11em;
    overflow: hidden;
    button {
      position: relative;
      cursor: pointer;
    }
    .button-one {
      background-color: #743a3a;
      margin-top: 14em;
      margin-left: 8em;
      width: 6.3em;
      height: 5.3em;
      clip-path: polygon(0 0, 41% 0, 100% 100%, 0% 100%);
    }
    .button-two {
      background-color: #3a7458;
      margin-top: -9em;
      margin-left: 15em;
      width: 6.3em;
      height: 5.3em;
      clip-path: polygon(0 0, 41% 0, 100% 100%, 0% 100%);
    }
  }

  @keyframes slide-left {
    to {
      margin-left: -7em;
      margin-top: -7em;
    }
  }
  @keyframes slide-first-span {
    from {
      transform: rotate(0deg);
    }
    30% {
      transform: rotate(20deg) translate(0.1em 0em);
    }
    60% {
      //transform: translate(3em);
    }
    to {
      transform: translate(4.2em, 1.9em) rotate(20deg) scale3d(1.9, 1, 0.1);
      border-top-left-radius: 2px;
    }
  }
  @keyframes slide-second-span {
    from {
      transform: rotate(0deg);
    }
    30% {
      transform: rotate(40deg) translate(0em 0.1em);
    }
    60% {
      //transform: translate(3em, 3em);
    }
    to {
      transform: translate(1.1em, 4.4em) rotate(55deg) scale3d(1.9, 1, 0.1);
    }
  }

  .big-circle-animated {
    animation: slide-left 1s ease-out 0.1s both;
  }
  .span-animated {
    animation: slide-first-span 1s ease-out 0.1s both;
  }
  .span-animated-two {
    animation: slide-second-span 1s ease-out 0.1s both;
  }
`;
