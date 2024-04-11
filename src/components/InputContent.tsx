import styled from "styled-components";
import editWhiteIcon from "../assets/pen-black.png";
import editBlackIcon from "../assets/pen-white.png";

//InputContents props
export type InputContentsProps = {
  title: string;
  content: string; // black, or white
  imgUrl: string;
  hasEdit?: boolean;
  styleColor: string;
  //no need function
};
/**
 *
 * @param inputContentsProp
 * @returns
 */
export default function InputContents(inputContentsProp: InputContentsProps) {
  const defaultProps = {
    styleColor: "white", // black or white ,todo  other color
    hasEdit: false,
  };
  const {
    title,
    content, // black, or white
    imgUrl,
    hasEdit = defaultProps.hasEdit,
    styleColor = defaultProps.styleColor,
  } = inputContentsProp;

  const SpanContent = styled.span`
    background-color: ${styleColor === "white" ? "rgb(236,243,250)" : "rgb(20,21,22)"};
    width: 100%;
    read-only:true
    height: 88px;
    border: none;
    display:flex;
    border-radius: 8px;
    overflow:hidden;
  `;
  const InputText = styled.input`
    color: ${styleColor === "white" ? "rgb(115,129,143)" : "rgb(74,84,95)"};
    font-size: 14px;
    text-align: left;
  `;
  const Wrapper = styled.div`
    flex: 2;
    display: flex;
  `;
  const Title = styled.div`
    color: ${styleColor === "white" ? "rgb(115,129,143)" : "rgb(74,84,95)"};
    font-size: 15px;
    text-align: left;
    font-weight: bold;
    margin-bottom: 15px;
  `;
  return (
    <Wrapper>
      <Title>{title}</Title>
      <SpanContent>
        <img src={imgUrl} />
        <InputText>{content}</InputText>
        {hasEdit ? (
          <img src={styleColor === "white" ? editWhiteIcon : editBlackIcon} />
        ) : null}
      </SpanContent>
    </Wrapper>
  );
}
