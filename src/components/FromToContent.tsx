import styled from "styled-components";
import InputContents from "./InputContent";
import arrowWhite from "../assets/arrow-white.png";
import arrowBlack from "../assets/arrow-black.png";
import fromWhiteIcon from "../assets/from-white.png";
import fromBlackIcon from "../assets/from-black.png";
import toWhiteIcon from "../assets/to-white.png";
import toBlackIcon from "../assets/to-black.png";
//FromTo props
export type FromToProps = {
  fromTitle: string;
  toTitle: string; // black, or white
  fromContent: string;
  toContent: string;
  styleColor: string;
  //no need function
};
/**
 *
 * @param fromToProp
 * @returns
 */
export default function FromTo(fromToProp: FromToProps) {
  const {
    fromTitle,
    toTitle,
    styleColor = "white",
    fromContent,
    toContent,
  } = fromToProp;

  const FromToWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    position: relative;
  `;
  const fromProps = {
    title: fromTitle,
    content: fromContent,
    hasEdit: false,
    styleColor,
    imgUrl: styleColor === "white" ? fromWhiteIcon : fromBlackIcon,
  };

  const toProps = {
    title: toTitle,
    content: toContent,
    hasEdit: true,
    styleColor,
    imgUrl: styleColor === "white" ? toWhiteIcon : toBlackIcon,
  };

  const ImgIcon = styled.img`
    margin: 30px 2px 0px 2px;
    position: relative;
  `;

  return (
    <FromToWrapper>
      <InputContents {...fromProps}></InputContents>
      <ImgIcon
        src={styleColor === "white" ? arrowWhite : arrowBlack}
        width={15}
        height={15}
      />
      <InputContents {...toProps}></InputContents>
    </FromToWrapper>
  );
}
