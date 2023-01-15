import React from "react";

import {
  Img,
  Text,
  Button,
  RadioGroup,
  Radio,
  Line,
  Grid,
  List,
} from "components";
import HeaderNav from "components/HeaderNav";
import AddressNav from "components/AddressNav";
import FooterNav from "components/FooterNav";
import PaymentMethods from "components/PaymentMethods";

const PaymentMethodsBankAccountPage = () => {
  return (
    <>
      <div className="bg-gray_50 flex flex-col font-metropolis items-center justify-start mx-[auto] pt-[1px] w-[100%]">
        <div className="flex flex-col items-center justify-start w-[100%]">
          <HeaderNav/>
          <div className="flex flex-col w-[100%]">
            <AddressNav/>
            <PaymentMethods/>
            <FooterNav/>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentMethodsBankAccountPage;
