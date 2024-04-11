import styled from "styled-components";
import InputContents from "./InputContent";
import arrowWhite from "../assets/arrow-white.png";
import arrowBlack from "../assets/arrow-black.png";
import fromWhiteIcon from "../assets/left-white.png";
import fromBlackIcon from "../assets/left-black.png";
import toWhiteIcon from "../assets/right-white.png";
import toBlackIcon from "../assets/right-black.png";
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
  return (
    <FromToWrapper>
      <InputContents {...fromProps}></InputContents>
      <img
        src={styleColor === "white" ? arrowWhite : arrowBlack}
        width={25}
        height={25}
      />
      <InputContents {...toProps}></InputContents>
    </FromToWrapper>
  );
}
