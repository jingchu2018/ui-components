import styled from "styled-components";

import whiteTimeSrc from "../assets/time-white.png";
import blackTimeSrc from "../assets/time-black.png";

//props
export type TimeProps = {
  timeText: number; //how much time left after fist
  timeUnit: string;
  fontColor?: string;
  styleColor: string; // Theme color
  fontSize?: number;
  //no need function
};
/**
 *
 * @param timeProp
 * @returns
 */
export default function Time(timeProp: TimeProps) {
  const defaultProps = {
    timeText: 0,
    timeUnit: "seconds",
    styleColor: "white",
    fontColor: "black",
    fontSize: 12,
  };
  const {
    timeText = defaultProps.timeText,
    timeUnit = defaultProps.timeUnit, // black, or white
    fontColor,
    fontSize = defaultProps.fontSize,
    styleColor = defaultProps.styleColor,
  } = timeProp;

  const Wrapper = styled.div`
    background-color: ${styleColor === "white" ? "rgb(237,242,248)" : "black"};
    color: ${fontColor};
    font-size: ${fontSize}px;
    text-align: left;
    width: 100%;
    margin-bottom: 20px;
    height: 35px;
    display: flex;
    align-items: center;
    border: none;
    border-radius: 8px;
  `;
  const TimeShow = styled.span`
    font-weight: bold;
    margin-left: 8px;
  `;
  const imgSrc = styleColor === "white" ? whiteTimeSrc : blackTimeSrc;
  const SpanWrapper = styled.span`
    padding-left: 10px;
  `;

  return (
    <Wrapper>
      <img
        style={{ paddingLeft: "10px" }}
        src={imgSrc}
        width={18}
        height={18}
      />
      <SpanWrapper>
        Esimated time:
        <TimeShow>
          {timeText}&nbsp;{timeUnit}
        </TimeShow>
      </SpanWrapper>
    </Wrapper>
  );
}
