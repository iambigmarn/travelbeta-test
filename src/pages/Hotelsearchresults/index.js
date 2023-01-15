import React from "react";
import { Img, Text, Button, Input, SelectBox, Grid, List } from "components";
import HeaderNav from "components/HeaderNav";
import AddressNav from "components/AddressNav";
import FooterNav from "components/FooterNav";
import FilterPost from "components/FilterPost";

const HotelsearchresultsPage = () => {
  return (
    <>
      <div className="bg-gray_50 flex flex-col font-metropolis items-center justify-start mx-[auto] pt-[1px] w-[100%]">
        <div className="flex flex-col items-center justify-start w-[100%]">
          <HeaderNav/>
          <div className="flex flex-col w-[100%]">
            <AddressNav/>
            <FilterPost/>
            <FooterNav/>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelsearchresultsPage;
