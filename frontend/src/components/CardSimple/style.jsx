import styled from "styled-components";

export default styled.div`
  width: 12em;
  height: 19em;
  background-color: #d7e7e5;
  margin-left: 5em;
  margin-top: 4em;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 9px 6px 5px 0px #eef3f2;
  .mainCor {
    width: 11em;
    height: 18em;
    background-color: white;
    border-radius: 1em;
    .nameAndProfit {
      //background-color: red;
      text-align: center;
      width: 90%;
      margin: auto;
      h1 {
        font-size: 1.2em;
      }
      .profits {
        font-size: 0.8em;
        span {
          font-size: 1.2em;
        }
      }
    }
    table {
      background-color: #d7d6d6;
      width: 100%;
      height: 20%;
      font-size: 70%;
      margin-bottom: 7%;
      th {
        border: 2px solid #d7e7e5;
      }
    }
    .qte {
      text-align: left;
      color: #b00000;
    }
    span {
      font-size: 0.6rem;
      color: black;
    }
  }
`;
