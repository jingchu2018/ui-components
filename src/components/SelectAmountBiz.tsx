import styled from "styled-components";
import fromWhiteIcon from "../assets/select-amount-white.png";
import fromBlackIcon from "../assets/select-amount-black.png";
//SelectAmount props
export type SelectAmountProps = {
  initAmountData: number;
  styleColor: string; // black, or white
  //no need function
  selectMaxData: number;
  computeData: string | number;
};
/**
 * select amount component
 * @param selectAmountProp
 * @returns
 */
export default function SelectAmount(selectAmountProp: SelectAmountProps) {
  const defaultProps = {
    initAmountData: "",
    styleColor: "white", // black or white ,todo  other color
    title: "Slect Amount", // don't allow to updateTitle, maybe later allow
    selectMaxData: 2, //select data
    computeData: 0,
  };
  const {
    initAmountData = defaultProps.initAmountData,
    styleColor = defaultProps.styleColor, // black, or white
    selectMaxData = defaultProps.selectMaxData,
    computeData = defaultProps.computeData,
  } = selectAmountProp;

  const SelectAmount = styled.div`
    color: ${styleColor === "white" ? "black" : "white"};
    text-align: center;
    width: 100%;
    border: none;
    border-radius: 8px;
  `;
  const SelectTitleWrapper = styled.span`
    color: ${styleColor === "white" ? "rgb(107,121,137)" : "rgb(102,117,131)"};
    text-align: left;
    width: 100%;
    display: flex;
    font-weight: bold;
    font-size: 14px;
    overflow: hidden;
  `;
  const SelectRightNotice = styled.span`
    font-size: 12px;
    font-weight: normal;
    position: absolute;
    right: 20px;
  `;
  const DataUnit = styled.span`
    font-weight: bold;
    font-size: 13px;
    margin-left: 4px;
  `;

  const SelectWrapper = styled.div`
    display:flex;
    border: 1px solid;
    border-color: ${
      styleColor === "white" ? "rgb(222,227,232)" : "rgb(53,61,69)"
    }
    width:100%;
    margin: 20px 0 10px 0;
    padding:0 8px 0 8px;
    height:52px;
    border-radius:8px;
    align-items:center;
    position:relative;
  `;
  const SelectSpan = styled.span`
    font-size: 14px;
    font-weight: bold;
    margin-left: 8px;
  `;

  const RightNoticeWrapper = styled.span`
    position: absolute;
    right: 10px;
    font-size: 12px;
    display: flex;

    align-items: center;
    color: ${styleColor === "white" ? "rgb(149,159,170)" : "rgb(73,83,95)"};
  `;
  // const rightContent = styled.span`
  //   font-size: 12px;
  //   color: ${styleColor === "white" ? "rgb(125,138,151)" : "rgb(87,99,112)"};
  //   padding-left: 2px;
  // `;
  const RightKey = styled.span`
    font-weight: bold;
    font-size: 14px;
    color: ${styleColor === "white" ? "rgb(59,65,70)" : "rgb(231,236,241)"};
    margin-right: 4px;
    align-self: center;
  `;
  const ButtonWrapper = styled.span`
    float: right;
    margin-bottom: 20px;
  `;
  const BottomBtn = styled.button`
   background: ${styleColor === "white" ? "rgb(237,243,249)" : "rgb(43,49,55)"}
    font-size: 12;
    border-radius: 6px;
    border:none;
    padding:6px 8px 6px 8px;
    font-weight: bold;
    margin-left:10px;
    color: ${styleColor === "white" ? "rgb(112,120,135)" : "rgb(99,114,128)"};
  `;
  return (
    <SelectAmount>
      <SelectTitleWrapper>
        <span>{defaultProps.title}</span>
        <SelectRightNotice>
          Available
          <DataUnit>{initAmountData} &nbsp;ATOM</DataUnit>
        </SelectRightNotice>
      </SelectTitleWrapper>
      <SelectWrapper>
        <img
          src={styleColor === "white" ? fromWhiteIcon : fromBlackIcon}
          width={34}
          height={34}
        />
        <SelectSpan>{initAmountData}</SelectSpan>
        <RightNoticeWrapper>
          <RightKey>ATOM</RightKey>≈ &nbsp; ${computeData}
        </RightNoticeWrapper>
      </SelectWrapper>
      <ButtonWrapper>
        <BottomBtn>Max</BottomBtn>
        <BottomBtn>1/2</BottomBtn>
        <BottomBtn>1/3</BottomBtn>
      </ButtonWrapper>
    </SelectAmount>
  );
}
