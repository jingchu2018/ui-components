import styled, { isStyledComponent } from "styled-components";
import closeBlackPng from "../assets/close-back.png";
import closeWhitePng from "../assets/close-white.png";
//Dialog props
export type DialogProps = {
  title?: string;
  styleColor: string; // black, or white
  fontSize?: number;
  width?: number;
  //no need function
  content?: any;
  isOpen?: boolean;
};

export default function Dialog(dialogProp: DialogProps) {
  const defaultProps = {
    styleColor: "white", // black or white ,todo  other color
    fontSize: 28,
    width: 500,
    isOpen: true,
  };
  const {
    title,
    styleColor = defaultProps.styleColor, // black, or white
    fontSize = defaultProps.fontSize,
    width = defaultProps.width,
    content,
    isOpen = defaultProps.isOpen,
  } = dialogProp;

  const Dialog = styled.div`
    background-color: ${styleColor === "white" ? "white" : "rgb(33,36,40)"};
    width: ${width}px;
    border: 1px solid;
    border-color: ${styleColor === "white"
      ? "rgb(182, 182, 182)"
      : "rgb(105,108,109)"};
    border-radius: 15px;
    padding: 20px 20px 20px 20px;
    visibility: ${isOpen ? "visible" : "hidden"};
    min-height: 90px;
    position: relative;
    overflow: none;
  `;
  const SpanWrapper = styled.span`
    display: flex;
    align-items: center;
    padding: 0 10 0 10;
  `;
  const Title = styled.span`
    color: ${styleColor === "white" ? "rgb(44,50,55)" : "rgb(236,241,247)"};
    font-size: ${fontSize}px;
    text-align: center;
  `;

  const Close = styled.img`
    align-self: right;
    position: absolute;
    right: 20px;
    top: 20px;
  `;
  console.log(content);

  // close imgsrc
  const closeSrc = styleColor === "white" ? closeWhitePng : closeBlackPng;
  return (
    <Dialog>
      <SpanWrapper>
        <Title>{title}</Title>
        <Close src={closeSrc} width={50} height={50}></Close>
      </SpanWrapper>
      {content}
    </Dialog>
  );
}
