import styled from 'styled-components';

export const Board = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`;

export const ContentWrapper = styled.div`
  width: 60%;
  height: 60%;
  background-color: white;
  box-shadow: 8px 6px 20px black;
  margin-left: 10px;
  position: relative;

  border-radius: 25px;

  .user-info {
    display: flex;
    justify-content: space-between;

    height: 140px;
    padding: 10px 15px;
    border-bottom: 3px solid #707070;
  }

  .searchbar {
    width: 95%;

    input {
      width: 90%;
      outline: none;
      border-radius: 15px;
      padding: 5px;
    }

    .list-of-songs {
      padding: 10px 15px;
      overflow-y: overlay;
      max-height: 100px;

      &::-webkit-scrollbar {
        display: none;
      }

      .result-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 0;

        border-bottom: 2px solid #707070;

        .add-song {
          transition: all 0.2s ease-in-out;

          &:hover {
            transform: scale(1.2);
          }
        }

        p {
          max-width: 50%;
        }

        a {
          text-decoration: none;
          color: black;

          &:hover {
            color: #1db954;
          }
        }
      }
    }
  }

  .user-option {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    width: 30%;

    
    .picture-username {
      display: flex;
      align-items: center;
      justify-content: center;

      padding: 10px;

      background-color: white;
      box-shadow: 9px 6px 15px black;
      border-radius: 15px;

      img {
        width: 45px;
        height: 45px;

        box-shadow: 3px 5px 10px black;
        border-radius: 50%;
        margin-right: 10px;
      }

      span {
        font-style: italic;
        font-size: 16px;
        color: #1db954;
      }
    }

    .log-out {
      transition: all 0.2s ease-out;
      cursor: pointer;

      &:hover {
        transform: scale(1.10);
      }
    }
  }

  .body {
    position: relative;
    display: flex;
    flex-direction: column;

    .main-content {
      position: relative;
      display: flex;
      border-bottom: 3px solid #707070;

      .playlist {
        position: relative;
        width: 25%;
        height: 360px;
        border-right: 3px solid #707070; 

        .title {
          position: relative;
          border-bottom: 3px solid #707070;
          width: 100%;
          height: 60px;

          .add-block {
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 100%;

            padding: 0 15px;

            h2 {
              font-style: italic;
            }

            .add-icon {
              transition: all 0.2s ease-in-out;

              &:hover {
                transform: scale(1.15)
              }
            }
          }

          .playlist-modal-creation {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            position: absolute;
            padding: 50px;
            color: white;

            border-radius: 25px;

            left: 75%;
            top: 90%;

            background-color: rgba(0,0,0,0.8);

            h2 {
              margin-bottom: 15px;
            }

            input {
              border: none;
              outline: none;
              padding: 5px 10px;
              border-radius: 10px;
              margin-bottom: 15px;
            }

            .buttons {
              width: 100%;
              display: flex;
              flex-direction: column;

              .create {
                background-color: green;
                margin-bottom: 10px;
              }

              .cancel {
                background-color: red;
              }

              button {
                cursor: pointer;
                padding: 5px 0;
                width: 100%;
                color: white;
                font-weight: bold;
                border-radius: 15px;
                outline: none;
                border: none;
                transition: all 0.2s ease-in;

                &:hover {
                  transform: scale(1.1)
                }
              }
            }
          }
        }

        .list {
          padding: 0 15px 10px;
          overflow-y: overlay;
          max-height: 300px;

          &::-webkit-scrollbar {
            width: 12px;
          }

          &::-webkit-scrollbar-track {
            background-color: white;
          }

          &::-webkit-scrollbar-thumb {
            background-color: #1db954;
            border-radius: 100%;
          }

          ul {
            list-style: none;

            li {
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin-top: 20px;

              span {
                cursor: pointer;

                &:hover {
                  color: #1db954;
                }
              }

              .trash-icon {
                cursor: pointer;
                
                &:hover {
                  stroke: red;
                }
              } 
            }
          }
        }
      }

      .playlist-content {
        display: flex;
        flex-direction: column;
        width: 50%;

        .playlist-info {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 60px;

          border-bottom: 3px solid #707070;

          .player-button {
            transition: all 0.2s ease-in-out;
            cursor: pointer;

            &:hover {
              transform: scale(1.15);
            }
          }

          h3 {
            margin-right: 10px;
          }

          span {
            font-size: 14px;
          }
        }

        .playlist-songs {
          padding: 30px;
          overflow-y: overlay;
          max-height: 300px;

          &::-webkit-scrollbar {
            width: 12px;
          }

          &::-webkit-scrollbar-track {
            background-color: white;
          }

          &::-webkit-scrollbar-thumb {
            background-color: #1db954;
            border-radius: 100%;
          }

          ul {
            list-style: none;

            li {
              margin-bottom: 10px;
              cursor: pointer;
              display: flex;
              justify-content: space-between;
              align-items: center;

              &:hover {
                color: #1db954; 
              }

              .trash-icon {
                cursor: pointer;
                
                &:hover {
                  stroke: red;
                }
              } 
            }
          }
        }
      }

      .song-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;

        width: 25%;
        border-left: 3px solid #707070;

        img {
          width: 150px;
          height: 150px;
        }
      }
    }
  }
`;
