import styled from 'styled-components';

export const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 0 40px;

  .player-left {
    .song-details {
      display: flex;
      align-items: center;
      justify-content: space-around;

      width: 200px;

      img {
        width: 50px;
        height: 50px;
        object-fit: cover;
      }

      .name-author {
        text-align: center;

        h4 {
          font-size: 14px;
        }

        p {
          font-size: 12px;
        }
      }
    }
  }
  
  .player-center {
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    width: 100px;

    .player-button {
      transition: all 0.2s ease-in-out;
      cursor: pointer;

      &:hover {
        transform: scale(1.15);
      }
    }
  }
`;
