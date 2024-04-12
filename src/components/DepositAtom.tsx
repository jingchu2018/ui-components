import ConfirmButton from "@/components/ConfirmButton";
import Time from "@/components/Time";
import Dialog from "@/components/Dialog";
import FromToContent from "@/components/FromToContent";
import SelectAmount from "./SelectAmountBiz";
import styled from "styled-components";

export type DepositAtomProps = {
  // Theme color: black, or white default white
  styleColor?: string;
  // dialog title default Deposit ATOM
  title?: string;
  //dialog width default 500
  width?: number;
  // open or colse default open
  isOpen?: boolean;
  //confirm button text
  confirmText?: string;
  // cancel button text
  cancelText?: string;
  // time left
  timeText?: number;
  // time unit
  timeUnit?: string;
  // from title default is From Cosmos Hub
  fromTitle?: string;
  // to title default is To Osmosis
  toTitle?: string;
  // from data default: atom1xy5y...m6wwwz9a use for test
  fromContent: string;
  // to data default: osmo1xy5y...w9a use for test
  toContent: string;
  // inital ATOMS select,default 2
  initAmountData?: number;
  // the data after computed to show ,like 1,234
  computeData?: string | number;
  // select max data
  selectMaxData: number;
};
/**
 *
 * @param depositAtomProps
 * @returns
 */
export default function DepositAtom(depositAtomProps: DepositAtomProps) {
  const styleColor = depositAtomProps?.styleColor || "white";
  const bottomButtonWhiteProps = {
    confirmText: depositAtomProps?.confirmText,
    cancelText: depositAtomProps?.cancelText,
    styleColor,
  };
  const TimeData = {
    timeText: depositAtomProps?.timeText || 20,
    timeUnit: depositAtomProps?.timeUnit || "seconds",
    styleColor,
    fontColor: styleColor === "white" ? "rgb(56,53,60)" : "rgb(226,232,238)",
  };
  const fromToData = {
    fromTitle: depositAtomProps?.fromTitle || "From Cosmos Hub",
    toTitle: depositAtomProps?.toTitle || "To Osmosis",
    styleColor,
    fromContent: depositAtomProps.fromContent || "atom1xy5y...m6wwwz9a",
    toContent: depositAtomProps.toContent || "osmo1xy5y...w9a",
  };

  const selectAmoutData = {
    styleColor,
    initAmountData: depositAtomProps?.initAmountData || 2,
    computeData: depositAtomProps?.computeData || "1,234",
    selectMaxData: 6,
  };
  const content = (
    <>
      <FromToContent {...fromToData}></FromToContent>
      <SelectAmount {...selectAmoutData}></SelectAmount>
      <Time {...TimeData}></Time>
      <ConfirmButton {...bottomButtonWhiteProps}></ConfirmButton>
    </>
  );
  const DialogData = {
    title: depositAtomProps?.title || "Deposit ATOM",
    isOpen:
      typeof depositAtomProps.isOpen === "boolean"
        ? depositAtomProps.isOpen
        : true,
    styleColor,
    width: depositAtomProps?.width,
    content,
  };

  return <Dialog {...DialogData}></Dialog>;
}
