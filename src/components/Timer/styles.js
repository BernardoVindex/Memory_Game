import styled, { css } from "styled-components";

export const TimeArea = styled.time`
  font-size: 5rem;

  ${props => props.clockType === 'count_down_Clock' && css`
    background: rgba(32, 35, 41, 0.8);
    position: fixed;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  `}

  ${props => props.clockType === 'digital_Clock' && css`
  `}
`