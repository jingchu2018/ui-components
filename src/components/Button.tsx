import styled from "styled-components";
//button props
export type ButtonProps = {
  buttonText: string;
  styleColor: string; // black, or white
  fontWeight: boolean;
  fontSize: number;
  fontColor: string;
  //no need function
};
/**
 *
 * @param buttonProp
 * @returns
 */
export default function Button(buttonProp: ButtonProps) {
  const defaultProps = {
    buttonText: "Confirm",
    styleColor: "white", // black or white ,todo  other color
    fontWeight: true,
    fontSize: 15,
    fontColor: "black",
  };
  const {
    buttonText = defaultProps.buttonText,
    styleColor = defaultProps.styleColor, // black, or white
    fontWeight = defaultProps.fontWeight,
    fontSize = defaultProps.fontSize,
    fontColor = defaultProps.fontColor,
  } = buttonProp;

  const Button = styled.button`
    background-color: ${styleColor === "white" ? "black" : "white"};
    color: ${fontColor};
    font-size: ${fontSize}px;
    text-align: center;
    width: 100%;
    height: 55px;
    font-weight: ${fontWeight ? "bold" : "normal"};
    border: none;
    border-radius: 8px;
    cursor: pointer;
  `;
  return <Button>{buttonText}</Button>;
}
