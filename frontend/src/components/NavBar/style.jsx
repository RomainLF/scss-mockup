import styled from "styled-components";

export default styled.div`
  .navbar {
    position: fixed;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 140px;
    width: 100vw;
    bottom: 0;

    .box-circle {
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      .circle {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 200px;
        height: 100px;
        border-top-left-radius: 100px;
        border-top-right-radius: 100px;
        background-color: #d7e7e5;
        border-left: 0;
        bottom: -20px;
        box-shadow: inset #315f58 0px 19px 38px, #315f58 20px 15px 62px;
        cursor: pointer;
        z-index: 999;

        .burger {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-left: 0px;
          width: 35px;

          > span {
            margin: 5px 0;
            display: block;
            border-radius: 20px;
            background-color: red;

            &:nth-child(1) {
              height: 4px;
              width: 60%;
              animation: reduce 2s ease-out 0.1s infinite;
            }

            &:nth-child(2) {
              height: 4px;
              width: 60%;
              animation: reduce 2s ease-out 0.5s infinite;
            }

            &:nth-child(3) {
              height: 4px;
              width: 60%;
              animation: reduce 2s ease-out 0.8s infinite;
            }

            @keyframes reduce {
              0% {
                width: 60%;
              }

              50% {
                width: 100%;
                background-color: blue;
              }

              100% {
                width: 60%;
              }
            }
          }
        }
      }

      .box-out-circle {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        bottom: 0;
        width: 100%;
        height: 100%;

        .out-circle {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 280px;
          height: 135px;
          border-top-left-radius: 135px;
          border-top-right-radius: 135px;
          background-color: transparent;
          border: 2px solid #000000;
          border-bottom: 0;

          .hidden-circle {
            width: 110%;
            height: 110%;
            background-color: #d7e7e5;
            margin-top: -10px;

            .box-sidenav {
              position: absolute;
              display: flex;
              justify-content: center;
              align-items: center;
              width: 58px;
              height: 58px;
              background-color: #000000;
              border-radius: 50%;
              cursor: pointer;
              z-index: 999;
              transition: 0.8s;

              &::before {
                position: absolute;
                content: "";
                width: 100%;
                height: 100%;
                border-radius: 50%;
                top: 1;
                left: 1;
              }

              &:hover::before {
                animation: pulse 0.8s both;
              }

              @keyframes pulse {
                0% {
                  box-shadow: 0 0 0 5px #000000;
                }

                100% {
                  box-shadow: 0 0 0 20px transparent;
                }
              }

              &.sidenav-1 {
                bottom: 36%;
                left: -30%;
                opacity: 0;

                &:after {
                  position: absolute;
                  content: "Home";
                  width: max-content;
                  color: $secondary-color;
                  font-size: 25px;
                  font-weight: 600;
                  top: 13px;
                  bottom: 80px;
                  opacity: 0;
                  transition: 0.3s;
                }

                &:hover::after {
                  transition: 0.3s;
                  opacity: 1 !important;
                }
              }

              &.sidenav-2 {
                right: 85%;
                top: -45%;
                opacity: 0;

                &:after {
                  position: absolute;
                  content: "Filter";
                  width: max-content;
                  color: $secondary-color;
                  font-size: 25px;
                  font-weight: 600;
                  top: 13px;
                  left: 80px;
                  opacity: 0;
                  transition: 0.3s;
                }

                &:hover::after {
                  transition: 0.3s;
                  opacity: 1 !important;
                }
              }

              &.sidenav-3 {
                left: 40%;
                top: -75%;
                opacity: 0;

                &:after {
                  position: absolute;
                  content: "Profil";
                  width: max-content;
                  color: blue;
                  font-size: 25px;
                  font-weight: 600;
                  top: 13px;
                  left: 80px;
                  opacity: 0;
                  transition: 0.3s;
                }

                &:hover::after {
                  transition: 0.3s;
                  opacity: 1 !important;
                }
              }

              &.sidenav-4 {
                left: 85%;
                top: -45%;
                opacity: 0;

                &:after {
                  position: absolute;
                  content: "An Idea ?";
                  width: max-content;
                  color: blue;
                  font-size: 25px;
                  font-weight: 600;
                  top: 13px;
                  left: 80px;
                  opacity: 0;
                  transition: 0.3s;
                }

                &:hover::after {
                  transition: 0.3s;
                  opacity: 1 !important;
                }
              }

              &.sidenav-5 {
                bottom: 36%;
                right: -30%;
                opacity: 0;

                &:after {
                  position: absolute;
                  content: "Logout";
                  width: max-content;
                  color: blue;
                  font-size: 25px;
                  font-weight: 600;
                  top: 13px;
                  left: 80px;
                  opacity: 0;
                }

                &:hover::after {
                  transition: 0.3s;
                  opacity: 1 !important;
                }
              }

              .nav-link {
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;

                &::before {
                  position: absolute;
                  content: "";
                  border-left: 9px solid transparent;
                  border-right: 9px solid transparent;
                  border-top: 12px solid #000000;
                }

                &.link-1::before {
                  left: 17px;
                  bottom: -10px;
                  transform: rotate(17deg);
                }

                &.link-2::before {
                  left: 1px;
                  bottom: 1px;
                  transform: rotate(52deg);
                }

                &.link-3::before {
                  left: -5px;
                  bottom: 22px;
                  transform: rotate(90deg);
                }

                &.link-4::before {
                  left: 0px;
                  bottom: 40px;
                  transform: rotate(123deg);
                }

                &.link-5::before {
                  left: 18px;
                  bottom: 54px;
                  transform: rotate(165deg);
                }

                & .nav-item {
                  position: relative;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  width: 40px;
                  height: 40px;
                  background-color: #ffffff;
                  border-radius: 50%;
                  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.363);
                  transition: 0.3s;

                  &::before {
                    position: absolute;
                    content: "";
                    background-repeat: no-repeat;
                  }
                }

                .item-1::before {
                  width: 60%;
                  height: 60%;
                  bottom: 10px;
                }

                .item-2::before {
                  width: 60%;
                  height: 60%;
                  top: 10px;
                }

                .item-3::before {
                  width: 60%;
                  height: 60%;
                }

                .item-4::before {
                  width: 60%;
                  height: 60%;
                  left: 11px;
                }

                .item-5::before {
                  width: 65%;
                  height: 65%;
                  top: 11px;
                  left: 9px;
                }
              }
            }
          }

          @keyframes slide-left {
            to {
              margin-right: 100%;
            }
          }

          &::before,
          &::after {
            position: absolute;
            content: "";
            background-color: $main-color;
            width: 40px;
            height: 12px;
            z-index: 99;
          }

          &::before {
            top: -4px;
            left: 0px;
          }

          &::after {
            bottom: -4px;
            left: 0px;
          }
          //---------petit cercle---------//
          .dots {
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 26px;
            height: 26px;
            background-color: #ffffff;
            border: 3px solid #000000;
            border-radius: 50%;
            z-index: 999;

            &.out-dot-1 {
              top: 70px;
              left: -7px;
              opacity: 0;
            }

            &.out-dot-2 {
              top: 5px;
              left: 40px;
              opacity: 0;
            }

            &.out-dot-3 {
              top: calc(50% - 85px);
              left: 125px;
              opacity: 0;
            }

            &.out-dot-4 {
              top: 5px;
              right: 40px;
              opacity: 0;
            }

            &.out-dot-5 {
              top: 70px;
              right: -7px;
              opacity: 0;
            }
            //petit cercle dans petit cercle
            .inner-dot {
              background-color: black;
              width: 12px;
              height: 12px;
              border-radius: 50%;
            }
          }
        }
      }
    }
  }

  .hidden-circle-animated {
    animation: slide-left 1s ease-out 0.3s both;
  }

  .out-dot-1-animated {
    animation: fade-in 0.3s ease-out 0.4s both;
  }

  .out-dot-2-animated {
    animation: fade-in 0.2s ease-out 0.3s both;
  }

  .out-dot-3-animated {
    animation: fade-in 0.1s ease-out 0.1s both;
  }

  .out-dot-4-animated {
    animation: fade-in 0.2s ease-out 0.3s both;
  }

  .out-dot-5-animated {
    animation: fade-in 0.3s ease-out 0.4s both;
  }

  .sidenav-1-animated {
    animation: fade-in 0.2s ease-out 0.7s both;
  }

  .sidenav-2-animated {
    animation: fade-in 0.2s ease-out 0.6s both;
  }

  .sidenav-3-animated {
    animation: fade-in 0.2s ease-out 0.5s both;
  }

  .sidenav-4-animated {
    animation: fade-in 0.2s ease-out 0.6s both;
  }

  .sidenav-5-animated {
    animation: fade-in 0.2s ease-out 0.7s both;
  }

  @keyframes fade-in {
    to {
      opacity: 1;
    }
  }

  .animated-out {
    animation: fade-out 0.2s ease-out both;
  }

  @keyframes fade-out {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
      visibility: hidden;
    }
  }
`;
