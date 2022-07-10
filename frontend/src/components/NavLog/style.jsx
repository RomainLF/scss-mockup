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
      margin-top: 5em;
      margin-left: 5em;
    }
    .tree {
      margin-top: 6em;
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
      transform: rotate(20deg) translate(3em);
    }
    50% {
      transform: rotate(10deg);
      transform: scale3d(2, 0.95, 2);
    }
    70% {
      transform: translate(0em, -1em);
    }
    to {
      transform: rotate(90deg);
    }
  }

  .big-circle-animated {
    animation: slide-left 1s ease-out 0.1s both;
  }
  .span-animated {
    animation: slide-first-span 5s ease-out 1s both;
  }
`;
