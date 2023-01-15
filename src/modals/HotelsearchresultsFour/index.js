import React from "react";
import ModalProvider from "react-modal";

import { Img, Text } from "components";

const HotelsearchresultsFourModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] !w-[21%] sm:w-[100%] flex-col flex"
        overlayClassName="bg-black_900_99 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="max-h-[97vh] overflow-y-auto">
          <div className="bg-white_A700 flex flex-col items-center justify-start max-w-[297px] ml-[auto] mr-[auto] md:mt-[10px] mt-[15px] sm:mt-[7px] sm:p-[15px] md:p-[38px] p-[56px] sm:pl-[15px] sm:pr-[15px] rounded-radius16 w-[100%]">
            <Img
              src="images/img_rectangle.png"
              className="h-[107px] sm:h-[57px] md:h-[74px] max-w-[100%] w-[107px] sm:w-[56px] md:w-[73px]"
              alt="Rectangle"
            />
            <div className="flex flex-col items-center justify-start sm:mt-[12px] md:mt-[16px] mt-[24px] sm:px-[0] w-[100%]">
              <Img
                src="images/img_camera.svg"
                className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                alt="camera"
              />
              <Text
                className="font-normal leading-[24.00px] md:leading-[normal] sm:leading-[normal] md:mt-[11px] mt-[16px] sm:mt-[8px] not-italic text-center text-gray_900 w-[100%]"
                as="h6"
                variant="h6"
              >
                Please hold on while
                <br />
                we process your room...
              </Text>
            </div>
          </div>
        </div>
      </ModalProvider>
    </>
  );
};

export default HotelsearchresultsFourModal;
