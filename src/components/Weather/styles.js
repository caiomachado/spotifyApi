import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100%;

  .content-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    background-color: white;
    border-radius: 25px;
    box-shadow: 8px 6px 20px black;
    padding: 30px;

    height: 60%;
    width: 100%;
    max-width: 390px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 50%;

    

    h2 {
      font-style: italic;
      font-size: 24px;
      font-weight: bold;

      margin-bottom: auto;
    }

    input {
      width: 200px;
      height: 30px;
      padding: 0 10px;

      border-radius: 25px;
      outline: none;
      border: 1px solid #707070;

      margin-bottom: 25px;
    }

    .loading-message {
      margin-bottom: 10px;
      font-weight: bold;
    }

    button {
      width: 100px;
      height: 30px;

      background-color: #1DB954;

      font-weight: bold;
      font-size: 18px;

      border-radius: 25px;
      outline: none;
      border: none;
      transition: all 0.2s ease-in-out;

      &:hover {
        transform: scale(1.15)
      }
    }
  }

  .bottom-block {
    height: 50%;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    .weather-result {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .city-info {
        background-color: #1DB954;
        box-shadow: 4px 3px 10px black;
        border-radius: 25px;
        padding: 8px;
        margin-bottom: 10px;
      }

      span {
        font-weight: bold;
      }
    }
  }

  .music-suggestion {
    background-color: #6c6ce9;
    border-radius: 15px;

    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      color: white;
    }
  }
`;
