import styled from "styled-components";
import editWhiteIcon from "../assets/pen-white.png";
import editBlackIcon from "../assets/pen-black.png";

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
    background-color: ${styleColor === "white"
      ? "rgb(236,243,250)"
      : "rgb(20,21,22)"};

    height: 45px;
    border: none;
    display: flex;
    border-radius: 8px;
    position: relative;
    padding: 3px;
    align-items: center;
  `;
  const InputText = styled.div`
    color: ${styleColor === "white" ? "rgb(115,129,143)" : "rgb(74,84,95)"};
    font-size: 11px;
    text-align: left;
  `;
  const Wrapper = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
  `;
  const Title = styled.div`
    color: ${styleColor === "white" ? "rgb(115,129,143)" : "rgb(74,84,95)"};
    font-size: 13px;
    text-align: left;
    font-weight: bold;
    margin-bottom: 15px;
  `;
  const ImgIcon = styled.img`
    position: absolute;
    right: 15px;
  `;
  return (
    <Wrapper>
      <Title>{title}</Title>
      <SpanContent>
        <img src={imgUrl} width={28} height={28} />
        <InputText>{content}</InputText>
        {hasEdit ? (
          <ImgIcon
            width={18}
            height={18}
            src={styleColor === "white" ? editWhiteIcon : editBlackIcon}
          />
        ) : null}
      </SpanContent>
    </Wrapper>
  );
}
