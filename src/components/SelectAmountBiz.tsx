import styled from "styled-components";
import fromWhiteIcon from "../assets/left-white.png";
import fromBlackIcon from "../assets/left-black.png";
//SelectAmount props
export type SelectAmountProps = {
  initAmountData: string;
  styleColor: string; // black, or white
  //no need function
  selectData: [];
  computeData: string;
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
    selectData: [1, 2, 3, 4, 5], //select data
    computeData: 0,
  };
  const {
    initAmountData = defaultProps.initAmountData,
    styleColor = defaultProps.styleColor, // black, or white
    selectData = defaultProps.selectData,
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
    font-size: 13px;
    font-weight: normal;
    position: absolute;
    right: 10px;
  `;
  const DataUnit = styled.span`
    font-weight: bold;
  `;

  const SelectWrapper = styled.span`
    border: 1px solid;
    border-color: ${
      styleColor === "white" ? "rgb(200,206,211)" : "rgb(53,61,69)"
    }
    height:114px;
    border-radius:8px;
  `;
  const Select = styled.span`
    font-size: 14px;
    font-weight: bold;
  `;
  const BottomBtn = styled.button`
   background: ${styleColor === "white" ? "rgb(237,243,249)" : "rgb(43,49,55)"}
    font-size: 12;
    border-radius: 8px;
    font-weight: bold;
    margin-left:10px;
    color: ${styleColor === "white" ? "rgb(112,120,135)" : "rgb(99,114,128)"};
  `;
  const RightNoticeWrapper = styled.span`
    position: absolute;
    right: 10px;
    display: flex;
  `;
  const rightContent = styled.span`
    font-size: 12px;
    color: ${styleColor === "white" ? "rgb(125,138,151)" : "rgb(87,99,112)"};
    padding-left: 2px;
  `;
  const RightKey = styled.span`
    font-weight: bold;
    font-size: 14px;
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
          width={50}
          height={50}
        />
        <Select>
          {selectData.map((i) => {
            return <option>{i}</option>;
          })}
        </Select>
        <RightNoticeWrapper>
          <RightKey>ATOM</RightKey>≈ &nbsp; ${computeData}
        </RightNoticeWrapper>
      </SelectWrapper>
      <span>
        <BottomBtn>Max</BottomBtn>
        <BottomBtn>1/2</BottomBtn>
        <BottomBtn>1/3</BottomBtn>
      </span>
    </SelectAmount>
  );
}
