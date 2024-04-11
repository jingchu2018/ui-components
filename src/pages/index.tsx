import ConfirmButton from "@/components/ConfirmButton";
import Time from "@/components/Time";
import Dialog from "@/components/Dialog";
import styled from "styled-components";
import FromToContent from "@/components/FromToContent";
export default function HomePage() {
  const styleColor = "white";
  const bottomButtonWhiteProps = {
    confirmText: "Transfer",
    cancelText: "Cancel",
    styleColor,
  };
  const TimeData = {
    timeText: "20",
    timeUnit: "seconds",
    styleColor,
    fontColor: styleColor === "white" ? "rgb(56,53,60)" : "rgb(226,232,238)",
    fontSize: 18,
  };
  const fromToData = {
    fromTitle: "sds",
    toTitle: "dd",
    styleColor: "white",
    fromContent: "ddddd",
    toContent: "ddd",
  };
  const content = (
    <>
      <FromToContent {...fromToData}></FromToContent>
      <Time {...TimeData}></Time>
      <ConfirmButton {...bottomButtonWhiteProps}></ConfirmButton>
    </>
  );
  const DialogData = {
    title: "Deposit ATOM",
    isOpen: true,
    styleColor: "white",
    width: 500,
    content,
  };
  const Wrapper = styled.div`
    background-color: rgb(191, 191, 191);
    whdth: 100%;
    height: 100%;
  `;
  return (
    <Wrapper>
      <Dialog {...DialogData}></Dialog>
    </Wrapper>
  );
}
