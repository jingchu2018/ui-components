import DepositAtom from "@/components/DepositAtom";
import styled from "styled-components";

//test page
export default function HomePage() {
  const depositAtomData = {
    // from data
    fromContent: "atom1xy5y...m6wwwz9a",
    toContent: "osmo1xy5y...w9a use",
    // the data after computed to show ,like 1,234
    computeData: "1,234",
    // select max data
    selectMaxData: 6,

    // -----The following properties you also can change which has default values----

    // title: " Deposit ATOM",
    // //dialog width default 500
    // width: 600,
    // // open or colse default open
    // isOpen: true,
    // //confirm button text
    // confirmText: "Transfer",
    // // cancel button text
    // cancelText: "Cancel",
    // // time left
    // timeText: 20,
    // timeUnit: "second",
    // // from title default is From Cosmos Hub
    // fromTitle: " From Cosmos Hub",
    // // to title default is To Osmosis
    // toTitle: " To Osmosis",
    // // inital ATOMS select,default 2
    // initAmountData: 2,
    // // dialog title default Deposit ATOM
  };
  // change the styleColor to acquire white or black component

  const blackDepositAtomData = {
    // Theme color: black, or white default white
    styleColor: "black",
    ...depositAtomData,
  };

  const whiteDepositAtomData = {
    // Theme color: black, or white default white
    styleColor: "white",
    ...depositAtomData,
  };

  const Mask = styled.div`
    position: absolute;
    background-color: rgb(191, 191, 191);
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  `;
  const BlackWrapper = styled.div`
    position: absolute;
    top: 20px;
    left: 20px;
  `;
  const WhiteWrapper = styled.div`
    float: right;
    position: absolute;
    top: 20px;
    right: 20px;
  `;
  return (
    <Mask>
      <BlackWrapper>
        <DepositAtom {...blackDepositAtomData}></DepositAtom>
      </BlackWrapper>
      <WhiteWrapper>
        <DepositAtom {...whiteDepositAtomData}></DepositAtom>
      </WhiteWrapper>
    </Mask>
  );
}
