import React from "react";
import { Img, Text, Button, Input, SelectBox, Grid, List } from "components";
import { IoIosArrowBack } from 'react-icons/io';
import { HiPencil } from 'react-icons/hi';

const AddressNav = () => {
  return (
    <div className="bg-gray_901 flex flex-row items-center justify-between p-6 w-full">
        <IoIosArrowBack className="text-3xl text-white font-bold sm_l:hidden"/>
        <div className="sm_l:flex sm_l:flex-row sm_l:justify-around sm_l:w-full">
        <Text
            className="font-bold text-white_A700 text-xl sm_l:text-base"
            as="h6"
            variant="h6"
          >
            Accra, Ghana
          </Text>
          <Text
            className="text-white_A700 text-xs w-[auto] sm_l:text-base sm_l:font-bold"
            as="h6"
            variant="h6"
          >
            Sun Dec 2, 2021 - Mon Dec 20, 2021
          </Text>
           <Text
              className="= text-white_A700 text-xs w-[auto] sm_l:text-base sm_l:font-bold"
              as="h6"
              variant="h6"
            >
              1 Adult, 1 Room
            </Text>
        </div>
            <HiPencil className="text-3xl text-white font-bold sm_l:hidden" />
        <Button
          className="hidden sm_l:flex sm_l:flex-row cursor-pointer font-semibold text-center text-white_A700 w-[max-content]"
          shape="RoundedBorder1"
          size="md"
          variant="OutlineWhiteA700"
          rightIcon={<HiPencil className="ml-1 mt-1 text-base text-white font-bold" />}
        >
          Edit 
        </Button>
    </div>

    
  );
};

export default AddressNav;
