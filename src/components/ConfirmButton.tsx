import { useState } from "react";
import Button from "./Button";
// confirm button props
export type ConfirmButtonProps = {
  //confirm button text
  confirmText?: undefined | string;
  // cancel button text
  cancelText?: undefined | string;
  // Theme color: black, or white
  styleColor: string;
};
/**
 *
 * @param buttonProp
 * @returns
 */
export default function ConfirmButton(buttonProp: ConfirmButtonProps) {
  const [fontWeight, setFontWeight] = useState(true); // cick event will use ,but now it isn't inuse
  const defaultProps = {
    confirmText: "Transfer",
    cancelText: "Cancel",
    // Theme color black or white ,todo  other color
    styleColor: "white",
  };
  // The first button's font-color and themecolor
  const confirmColor = buttonProp.styleColor || defaultProps.styleColor;
  const confirmButton = {
    buttonText: buttonProp.confirmText || defaultProps.confirmText,
    styleColor: confirmColor,
    fontWeight: fontWeight,
    fontColor: confirmColor,
    fontSize: 15,
  };

  const cancelButton = {
    buttonText: buttonProp.cancelText || defaultProps.cancelText,
    styleColor:
      (buttonProp.styleColor || defaultProps.styleColor) === "white"
        ? "black"
        : "white",
    fontWeight: !fontWeight,
    fontSize: 13,
    fontColor: "rgb(110,125,139)",
  };

  return (
    <>
      <Button {...confirmButton}></Button>
      <Button {...cancelButton}></Button>
    </>
  );
}
