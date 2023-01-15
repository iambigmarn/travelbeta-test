import React from "react";

import {
  Img,
  Text,
  Button,
  Input,
  SelectBox,
  List,
  Grid,
  Stack,
} from "components";

const HotelsearchresultsOnePage = () => {
  return (
    <>
      <div className="bg-gray_50 flex flex-col font-metropolis items-center justify-start mx-[auto] pt-[1px] w-[100%]">
        <div className="flex flex-col items-center justify-start w-[100%]">
          <header className="w-[100%]">
            <div className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center p-[11px] sm:p-[5px] md:p-[7px] shadow-bs1 w-[100%]">
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center max-w-[1200px] md:ml-[75px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
                <Img
                  src="images/img_travelbetalogo.png"
                  className="max-w-[100%] w-[13%]"
                  alt="travelbetalogo"
                />
                <div className="flex flex-row md:flex-wrap sm:flex-wrap md:ml-[53px] ml-[78px] sm:mx-[0] pt-[3px] sm:px-[0] px-[3px] sm:w-[100%] w-[55%] common-row-list">
                  <ul className="flex flex-row items-start justify-center">
                    <li className="w-[auto] mt-[1px] mb-[4px] ml-[128px] sm:ml-[68px] sm:w-[100%] sm:my-[10px] md:ml-[88px]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[16px] text-gray_900"
                        rel="noreferrer"
                      >
                        Visa
                      </a>
                    </li>
                    <li className="w-[auto] mt-[1px] ml-[32px] sm:ml-[17px] sm:w-[100%] sm:my-[10px] md:ml-[22px]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[16px] text-gray_900"
                        rel="noreferrer"
                      >
                        Vacation packages
                      </a>
                    </li>
                    <li className="w-[auto] mb-[4px] ml-[32px] mr-[128px] sm:mr-[68px] sm:ml-[17px] sm:w-[100%] sm:my-[10px] md:mr-[88px] md:ml-[22px]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[16px] text-gray_900"
                        rel="noreferrer"
                      >
                        Become an affiliate
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:ml-[53px] ml-[78px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[20%]">
                  <Text
                    className="font-semibold text-gray_900 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Log in{" "}
                  </Text>
                  <Button
                    className="cursor-pointer font-bold min-w-[70%] text-[16px] text-center text-white_A700 w-[max-content]"
                    shape="RoundedBorder4"
                  >
                    Create account
                  </Button>
                </div>
              </div>
            </div>
          </header>
          <div className="flex flex-col justify-start w-[100%]">
            <div className="bg-gray_901 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:p-[15px] md:p-[22px] p-[32px] w-[100%]">
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center max-w-[944px] ml-[auto] mr-[auto] sm:mx-[0] md:mx-[148px] mx-[216px] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:pl-[0] sm:pr-[15px] md:pr-[27px] pr-[40px] sm:w-[100%] w-[80%]">
                  <Text
                    className="font-bold text-white_A700 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Accra, Ghana
                  </Text>
                  <Text
                    className="font-bold sm:ml-[42px] md:ml-[55px] ml-[80px] text-white_A700 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Sun Dec 2, 2021 - Mon Dec 20, 2021
                  </Text>
                  <div className="flex flex-col items-center ml-[120px] md:ml-[82px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[18%]">
                    <Text
                      className="font-bold text-white_A700 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      1 Adult, 1 Room
                    </Text>
                  </div>
                </div>
                <Button
                  className="cursor-pointer font-semibold min-w-[9%] ml-[120px] sm:ml-[63px] md:ml-[82px] text-[16px] text-center text-white_A700 w-[max-content]"
                  shape="RoundedBorder1"
                  size="md"
                  variant="OutlineWhiteA700"
                >
                  Edit
                </Button>
              </div>
            </div>
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start max-w-[1200px] md:ml-[82px] ml-[auto] mr-[auto] sm:mt-[42px] md:mt-[55px] mt-[80px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <div className="flex flex-col items-center justify-start sm:mx-[0] outline outline-[0.5px] outline-bluegray_100 sm:px-[0] sm:w-[100%] w-[28%]">
                <div className="bg-blue_50 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:p-[15px] md:p-[22px] p-[32px] w-[100%]">
                  <Text
                    className="font-bold text-gray_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Filter
                  </Text>
                  <Text
                    className="font-bold text-indigo_900 w-[auto]"
                    variant="body1"
                  >
                    Clear all
                  </Text>
                </div>
                <div className="bg-white_A700 flex flex-col items-center justify-start sm:p-[15px] md:p-[19px] p-[29px] w-[100%]">
                  <div className="flex flex-col justify-start mt-[3px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                    <Text
                      className="font-bold text-gray_900 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Hotel Name
                    </Text>
                    <Input
                      className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                      wrapClassName="flex md:mt-[11px] mt-[16px] sm:mt-[8px] w-[100%]"
                      type="text"
                      name="Frame2363"
                      placeholder="Enter hotel name"
                      suffix={
                        <Img
                          src="images/img_search.svg"
                          className="ml-[35px] mr-[4px] sm:ml-[18px] md:ml-[24px] my-[auto]"
                          alt="search"
                        />
                      }
                    ></Input>
                  </div>
                  <div className="bg-white_A700 flex flex-col items-center justify-start sm:mt-[29px] md:mt-[38px] mt-[56px] sm:mx-[0] sm:w-[100%] w-[98%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                      <Text
                        className="font-bold text-gray_900 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Budget per night
                      </Text>
                      <SelectBox
                        className="font-normal sm:mx-[0] not-italic text-[16px] text-indigo_900 sm:w-[100%] w-[32%]"
                        placeholderClassName="text-indigo_900"
                        name="Frame1374"
                        placeholder="Clear"
                        isSearchable={false}
                        isMulti={false}
                      ></SelectBox>
                    </div>
                    <div className="flex flex-col items-center justify-start md:mt-[11px] mt-[16px] sm:mt-[8px] w-[100%]">
                      <Img
                        src="images/img_group1350.svg"
                        className="max-w-[100%] w-[100%]"
                        alt="Group1350"
                      />
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mt-[12px] sm:mt-[6px] md:mt-[8px] w-[100%]">
                        <Text
                          className="font-normal not-italic text-gray_900 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          ₦0
                        </Text>
                        <Text
                          className="font-normal not-italic text-gray_900 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          ₦x
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-col justify-start sm:mt-[29px] md:mt-[38px] mt-[56px] sm:mx-[0] sm:w-[100%] w-[98%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                      <Text
                        className="font-bold text-gray_900 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Hotel class
                      </Text>
                      <SelectBox
                        className="font-normal sm:mx-[0] not-italic text-[16px] text-indigo_900 sm:w-[100%] w-[32%]"
                        placeholderClassName="text-indigo_900"
                        name="Frame1374 One"
                        placeholder="Clear"
                        isSearchable={false}
                        isMulti={false}
                      ></SelectBox>
                    </div>
                    <div className="flex flex-col justify-start md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[90%]">
                      <List
                        className="md:gap-[11px] gap-[16px] sm:gap-[8px] grid min-h-[auto] sm:w-[100%] w-[96%]"
                        orientation="vertical"
                      >
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:mr-[28px] mr-[41px] sm:mx-[0] my-[0] sm:px-[0] sm:w-[100%] w-[83%]">
                          <Img
                            src="images/img_checkmark.svg"
                            className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                            alt="checkmark"
                          />
                          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:ml-[5px] ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[83%]">
                            <Img
                              src="images/img_frame2365.svg"
                              className="flex-shrink-0 max-w-[100%] w-[31%]"
                              alt="Frame2365"
                            />
                            <Text
                              className="flex-grow font-normal sm:ml-[4px] md:ml-[5px] ml-[8px] not-italic text-gray_801"
                              variant="body1"
                            >
                              Just the basics
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center mr-[12px] md:mr-[8px] sm:mx-[0] my-[0] sm:px-[0] sm:w-[100%] w-[95%]">
                          <Img
                            src="images/img_file.svg"
                            className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                            alt="file"
                          />
                          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:ml-[5px] ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[86%]">
                            <Img
                              src="images/img_ticket.svg"
                              className="flex-shrink-0 max-w-[100%] w-[39%]"
                              alt="ticket"
                            />
                            <Text
                              className="flex-grow font-normal sm:ml-[4px] md:ml-[5px] ml-[8px] not-italic text-gray_801"
                              variant="body1"
                            >
                              Quality comfort
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between my-[0] w-[100%]">
                          <Img
                            src="images/img_file.svg"
                            className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                            alt="file One"
                          />
                          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[87%]">
                            <Img
                              src="images/img_frame2365_24X96.svg"
                              className="flex-shrink-0 max-w-[100%] sm:w-[100%] w-[49%]"
                              alt="Frame2365 One"
                            />
                            <Text
                              className="flex-grow font-normal not-italic text-gray_801"
                              variant="body1"
                            >
                              Lots of extras
                            </Text>
                          </div>
                        </div>
                      </List>
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:mt-[11px] mt-[16px] sm:mt-[8px] w-[100%]">
                        <Img
                          src="images/img_file.svg"
                          className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                          alt="file Two"
                        />
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[87%]">
                          <Img
                            src="images/img_frame2365_amber_A200.svg"
                            className="flex-shrink-0 max-w-[100%] sm:w-[100%] w-[58%]"
                            alt="Frame2365 Two"
                          />
                          <Text
                            className="flex-grow font-normal not-italic text-gray_801"
                            variant="body1"
                          >
                            Top service
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-start mb-[3px] sm:mt-[29px] md:mt-[38px] mt-[56px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                    <Text
                      className="font-bold text-gray_900 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Facilities
                    </Text>
                    <div className="flex flex-col items-center justify-start md:mt-[11px] mt-[16px] sm:mt-[8px] w-[100%]">
                      <Grid className="md:gap-[11px] gap-[16px] sm:gap-[8px] grid sm:grid-cols-1 grid-cols-2 min-h-[auto] w-[100%]">
                        <div className="bg-white_A700 border border-indigo_900 border-solid flex flex-col items-center justify-start p-[12px] sm:p-[6px] md:p-[8px] rounded-radius4 w-[100%]">
                          <Img
                            src="images/img_signal.svg"
                            className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                            alt="signal"
                          />
                          <Text
                            className="font-normal mt-[4px] not-italic text-gray_900 w-[auto]"
                            variant="body1"
                          >
                            Free Wi-FI
                          </Text>
                        </div>
                        <div className="bg-white_A700 flex flex-col items-center justify-start p-[12px] sm:p-[6px] md:p-[8px] rounded-radius4 w-[100%]">
                          <Img
                            src="images/img_notification.svg"
                            className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                            alt="notification"
                          />
                          <Text
                            className="font-normal mt-[4px] not-italic text-gray_801 w-[auto]"
                            variant="body1"
                          >
                            Free breakfast
                          </Text>
                        </div>
                        <div className="bg-white_A700 flex flex-col items-center justify-start p-[12px] sm:p-[6px] md:p-[8px] rounded-radius4 w-[100%]">
                          <Img
                            src="images/img_question.svg"
                            className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                            alt="question"
                          />
                          <Text
                            className="font-normal mt-[4px] not-italic text-gray_801 w-[auto]"
                            variant="body1"
                          >
                            Free parking
                          </Text>
                        </div>
                        <div className="bg-white_A700 flex flex-col items-center justify-start p-[12px] sm:p-[6px] md:p-[8px] rounded-radius4 w-[100%]">
                          <Img
                            src="images/img_minimize.svg"
                            className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                            alt="minimize"
                          />
                          <Text
                            className="font-normal mt-[4px] not-italic text-gray_801 w-[auto]"
                            variant="body1"
                          >
                            Air conditioned
                          </Text>
                        </div>
                        <div className="bg-white_A700 flex flex-col items-center justify-start p-[12px] sm:p-[6px] md:p-[8px] rounded-radius4 w-[100%]">
                          <Img
                            src="images/img_filter.svg"
                            className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                            alt="filter One"
                          />
                          <Text
                            className="font-normal mt-[4px] not-italic text-gray_801 w-[auto]"
                            variant="body1"
                          >
                            Bar/Lounge
                          </Text>
                        </div>
                        <div className="bg-white_A700 flex flex-col items-center justify-start p-[12px] sm:p-[6px] md:p-[8px] rounded-radius4 w-[100%]">
                          <Img
                            src="images/img_file_24X24.svg"
                            className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                            alt="file Three"
                          />
                          <Text
                            className="font-normal mt-[4px] not-italic text-gray_801 w-[auto]"
                            variant="body1"
                          >
                            Swimming pool
                          </Text>
                        </div>
                        <div className="bg-white_A700 flex flex-col items-center justify-start p-[12px] sm:p-[6px] md:p-[8px] rounded-radius4 w-[100%]">
                          <Img
                            src="images/img_airplane.svg"
                            className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                            alt="airplane"
                          />
                          <Text
                            className="font-normal mt-[4px] not-italic text-gray_801 w-[auto]"
                            variant="body1"
                          >
                            Restaurant
                          </Text>
                        </div>
                        <div className="bg-white_A700 flex flex-col items-center justify-start p-[12px] sm:p-[6px] md:p-[8px] rounded-radius4 w-[100%]">
                          <Img
                            src="images/img_minimize_24X24.svg"
                            className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                            alt="minimize One"
                          />
                          <Text
                            className="font-normal mt-[4px] not-italic text-gray_801 w-[auto]"
                            variant="body1"
                          >
                            Fitness Centre
                          </Text>
                        </div>
                      </Grid>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-start md:ml-[22px] ml-[32px] sm:mt-[15px] md:mt-[20px] mt-[30px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[70%]">
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[12%]">
                  <Img
                    src="images/img_sort.svg"
                    className="flex-shrink-0 max-w-[100%] w-[21%]"
                    alt="sort"
                  />
                  <Text
                    className="flex-grow font-semibold sm:ml-[3px] md:ml-[4px] ml-[6px] mt-[1px] text-indigo_900"
                    as="h5"
                    variant="h5"
                  >
                    Sort by
                  </Text>
                </div>
                <List
                  className="sm:gap-[12px] md:gap-[16px] gap-[24px] grid min-h-[auto] sm:mt-[11px] md:mt-[14px] mt-[21px] w-[100%]"
                  orientation="vertical"
                >
                  <Stack className="h-[274px] relative w-[100%]">
                    <div className="absolute flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly outline outline-[0.5px] outline-bluegray_100 top-[3%] w-[100%]">
                      <div className="bg-bluegray_900 flex flex-col items-center sm:mx-[0] md:pt-[147px] sm:pt-[15px] pt-[215px] sm:w-[100%] w-[30%]">
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly w-[100%]">
                          <Img
                            src="images/img_unsplashe9npwg.png"
                            className="max-w-[100%] w-[33%]"
                            alt="unsplashE9NPWG"
                          />
                          <Img
                            src="images/img_unsplashgtnfts.png"
                            className="max-w-[100%] w-[33%]"
                            alt="unsplashGtnFts"
                          />
                          <Img
                            src="images/img_unsplasha0bgod.png"
                            className="max-w-[100%] w-[33%]"
                            alt="unsplasha0BGOD"
                          />
                        </div>
                      </div>
                      <div className="bg-white_A700 flex flex-col items-center sm:mx-[0] sm:p-[15px] md:p-[22px] p-[32px] sm:w-[100%] w-[42%]">
                        <div className="flex flex-col justify-start sm:px-[0] w-[100%]">
                          <div className="flex flex-col justify-start w-[100%]">
                            <Text
                              className="font-semibold text-gray_900 w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              ibis Styles Accra Airport
                            </Text>
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[4px] md:mt-[5px] mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[43%]">
                              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[41%]">
                                <Text
                                  className="flex-grow font-semibold text-gray_801"
                                  as="h6"
                                  variant="h6"
                                >
                                  4.2
                                </Text>
                                <Img
                                  src="images/img_star.svg"
                                  className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                                  alt="star"
                                />
                              </div>
                              <Text
                                className="font-normal md:ml-[11px] ml-[16px] sm:ml-[8px] not-italic text-indigo_900 w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                (2,768)
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[18px] md:mt-[24px] mt-[35px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[76%]">
                            <Img
                              src="images/img_location.svg"
                              className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                              alt="location"
                            />
                            <Text
                              className="flex-grow font-normal leading-[16.00px] md:leading-[normal] sm:leading-[normal] ml-[4px] sm:mx-[0] not-italic text-gray_801"
                              variant="body2"
                            >
                              Plot 24 Airport City Area Airport
                              <br />
                              City Enclave, Ghana..
                            </Text>
                          </div>
                          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[18px] md:mt-[24px] mt-[35px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[88%]">
                            <div className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[28%]">
                              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] rounded-radius221 sm:w-[100%] w-[92%]">
                                <Img
                                  src="images/img_signal_12X12.svg"
                                  className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                  alt="signal One"
                                />
                                <Text
                                  className="flex-grow ml-[4px] not-italic text-bluegray_400"
                                  as="h1"
                                  variant="h1"
                                >
                                  Free Wi-FI
                                </Text>
                              </div>
                              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mt-[4px] md:mt-[5px] mt-[8px] rounded-radius221 w-[100%]">
                                <Img
                                  src="images/img_filter_12X12.svg"
                                  className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                  alt="filter Two"
                                />
                                <Text
                                  className="flex-grow not-italic text-bluegray_400"
                                  as="h1"
                                  variant="h1"
                                >
                                  Bar/Lounge
                                </Text>
                              </div>
                              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mt-[4px] md:mt-[5px] mt-[8px] sm:mx-[0] sm:px-[0] rounded-radius221 sm:w-[100%] w-[95%]">
                                <Img
                                  src="images/img_airplane_12X12.svg"
                                  className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                  alt="airplane One"
                                />
                                <Text
                                  className="flex-grow not-italic text-bluegray_400"
                                  as="h1"
                                  variant="h1"
                                >
                                  Restaurant
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-col justify-start md:ml-[5px] ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[34%]">
                              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mx-[0] sm:px-[0] rounded-radius221 sm:w-[100%] w-[97%]">
                                <Img
                                  src="images/img_notification_12X12.svg"
                                  className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                  alt="notification One"
                                />
                                <Text
                                  className="flex-grow not-italic text-bluegray_400"
                                  as="h1"
                                  variant="h1"
                                >
                                  Free breakfast
                                </Text>
                              </div>
                              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mt-[4px] md:mt-[5px] mt-[8px] rounded-radius221 w-[100%]">
                                <Img
                                  src="images/img_minimize_12X12.svg"
                                  className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                  alt="minimize Two"
                                />
                                <Text
                                  className="flex-grow not-italic text-bluegray_400"
                                  as="h1"
                                  variant="h1"
                                >
                                  Air conditioned
                                </Text>
                              </div>
                              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mt-[4px] md:mt-[5px] mt-[8px] sm:mx-[0] sm:px-[0] rounded-radius221 sm:w-[100%] w-[96%]">
                                <Img
                                  src="images/img_minimize_1.svg"
                                  className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                  alt="minimize One"
                                />
                                <Text
                                  className="flex-grow not-italic text-bluegray_400"
                                  as="h1"
                                  variant="h1"
                                >
                                  Fitness Centre
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-col justify-start md:ml-[5px] ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[34%]">
                              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] rounded-radius221 sm:w-[100%] w-[87%]">
                                <Img
                                  src="images/img_question_12X12.svg"
                                  className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                  alt="question One"
                                />
                                <Text
                                  className="flex-grow ml-[4px] not-italic text-bluegray_400"
                                  as="h1"
                                  variant="h1"
                                >
                                  Free parking
                                </Text>
                              </div>
                              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mt-[4px] md:mt-[5px] mt-[8px] rounded-radius221 w-[100%]">
                                <Img
                                  src="images/img_lightbulb.svg"
                                  className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                  alt="lightbulb"
                                />
                                <Text
                                  className="flex-grow not-italic text-bluegray_400"
                                  as="h1"
                                  variant="h1"
                                >
                                  Swimming pool
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-blue_50 flex flex-col items-center sm:mx-[0] sm:p-[15px] md:p-[25px] p-[37px] sm:w-[100%] w-[30%]">
                        <div className="flex flex-col items-end justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                          <div className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[81%]">
                            <Text
                              className="font-semibold text-gray_900 w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              ₦39,936
                            </Text>
                            <Text
                              className="font-semibold sm:mt-[4px] md:mt-[5px] mt-[8px] text-gray_900 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Per night & room
                            </Text>
                          </div>
                          <div className="flex flex-col items-end justify-start sm:mt-[21px] md:mt-[27px] mt-[40px] w-[100%]">
                            <Text
                              className="font-normal not-italic text-gray_801 w-[auto]"
                              variant="body2"
                            >
                              ₦39,936 for 1 night 1 room(s)
                            </Text>
                            <Text
                              className="font-normal mt-[3px] not-italic text-gray_801 w-[auto]"
                              variant="body2"
                            >
                              Includes taxes & fees
                            </Text>
                          </div>
                        </div>
                        <Button
                          className="cursor-pointer font-bold min-w-[96%] sm:mt-[12px] md:mt-[16px] mt-[24px] text-[14px] text-center text-white_A700 w-[max-content]"
                          shape="RoundedBorder4"
                        >
                          Book
                        </Button>
                      </div>
                    </div>
                    <div className="absolute bg-white_A700 flex flex-col justify-start sm:mx-[0] sm:p-[15px] md:p-[16px] p-[24px] rounded-radius16 shadow-bs3 sm:w-[100%] w-[28%]">
                      <div className="flex flex-col justify-start sm:px-[0] w-[100%]">
                        <Text
                          className="font-bold text-black_900 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Price
                        </Text>
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[4px] md:mt-[5px] mt-[8px] sm:mx-[0] md:p-[5px] p-[8px] sm:px-[0] sm:py-[4px] sm:w-[100%] w-[99%]">
                          <Img
                            src="images/img_checkmark_16X16.svg"
                            className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                            alt="checkmark One"
                          />
                          <Text
                            className="flex-grow font-normal not-italic text-black_900"
                            as="h6"
                            variant="h6"
                          >
                            Highest to lowest
                          </Text>
                        </div>
                        <div className="flex flex-col items-end justify-start sm:mt-[4px] md:mt-[5px] mt-[8px] sm:p-[4px] md:p-[5px] p-[8px] w-[100%]">
                          <Text
                            className="font-normal not-italic text-black_900 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Lowest to highest
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col justify-start mt-[10px] sm:mt-[5px] md:mt-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[89%]">
                        <Text
                          className="font-bold text-black_900 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Star
                        </Text>
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[4px] md:mt-[5px] mt-[8px] sm:p-[4px] md:p-[5px] p-[8px] w-[100%]">
                          <Img
                            src="images/img_checkmark_16X16.svg"
                            className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                            alt="checkmark One"
                          />
                          <Text
                            className="flex-grow font-normal not-italic text-black_900"
                            as="h6"
                            variant="h6"
                          >
                            5 stars to 1 star
                          </Text>
                        </div>
                        <div className="flex flex-col items-end justify-start sm:mt-[4px] md:mt-[5px] mt-[8px] sm:p-[4px] md:p-[5px] p-[8px] w-[100%]">
                          <Text
                            className="font-normal not-italic text-black_900 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            1 star to 5 stars
                          </Text>
                        </div>
                      </div>
                    </div>
                  </Stack>
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly outline outline-[0.5px] outline-bluegray_100 w-[100%]">
                    <div className="bg-bluegray_900 flex flex-col items-center sm:mx-[0] md:pt-[147px] sm:pt-[15px] pt-[215px] sm:w-[100%] w-[30%]">
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly w-[100%]">
                        <Img
                          src="images/img_unsplashe9npwg.png"
                          className="max-w-[100%] w-[33%]"
                          alt="unsplashE9NPWG One"
                        />
                        <Img
                          src="images/img_unsplashgtnfts.png"
                          className="max-w-[100%] w-[33%]"
                          alt="unsplashGtnFts One"
                        />
                        <Img
                          src="images/img_unsplasha0bgod.png"
                          className="max-w-[100%] w-[33%]"
                          alt="unsplasha0BGOD One"
                        />
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-col items-center sm:mx-[0] sm:p-[15px] md:p-[22px] p-[32px] sm:w-[100%] w-[42%]">
                      <div className="flex flex-col justify-start sm:px-[0] w-[100%]">
                        <div className="flex flex-col justify-start w-[100%]">
                          <Text
                            className="font-semibold text-gray_900 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            ibis Styles Accra Airport
                          </Text>
                          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[4px] md:mt-[5px] mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[43%]">
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[41%]">
                              <Text
                                className="flex-grow font-semibold text-gray_801"
                                as="h6"
                                variant="h6"
                              >
                                4.2
                              </Text>
                              <Img
                                src="images/img_star.svg"
                                className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                                alt="star One"
                              />
                            </div>
                            <Text
                              className="font-normal md:ml-[11px] ml-[16px] sm:ml-[8px] not-italic text-indigo_900 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              (2,768)
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[18px] md:mt-[24px] mt-[35px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[76%]">
                          <Img
                            src="images/img_location.svg"
                            className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                            alt="location One"
                          />
                          <Text
                            className="flex-grow font-normal leading-[16.00px] md:leading-[normal] sm:leading-[normal] ml-[4px] sm:mx-[0] not-italic text-gray_801"
                            variant="body2"
                          >
                            Plot 24 Airport City Area Airport
                            <br />
                            City Enclave, Ghana..
                          </Text>
                        </div>
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[18px] md:mt-[24px] mt-[35px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[88%]">
                          <div className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[28%]">
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] rounded-radius221 sm:w-[100%] w-[92%]">
                              <Img
                                src="images/img_signal_12X12.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="signal Two"
                              />
                              <Text
                                className="flex-grow ml-[4px] not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Free Wi-FI
                              </Text>
                            </div>
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mt-[4px] md:mt-[5px] mt-[8px] rounded-radius221 w-[100%]">
                              <Img
                                src="images/img_filter_12X12.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="filter Three"
                              />
                              <Text
                                className="flex-grow not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Bar/Lounge
                              </Text>
                            </div>
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mt-[4px] md:mt-[5px] mt-[8px] sm:mx-[0] sm:px-[0] rounded-radius221 sm:w-[100%] w-[95%]">
                              <Img
                                src="images/img_airplane_12X12.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="airplane Two"
                              />
                              <Text
                                className="flex-grow not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Restaurant
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col justify-start md:ml-[5px] ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[34%]">
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mx-[0] sm:px-[0] rounded-radius221 sm:w-[100%] w-[97%]">
                              <Img
                                src="images/img_notification_12X12.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="notification Two"
                              />
                              <Text
                                className="flex-grow not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Free breakfast
                              </Text>
                            </div>
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mt-[4px] md:mt-[5px] mt-[8px] rounded-radius221 w-[100%]">
                              <Img
                                src="images/img_minimize_12X12.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="minimize Three"
                              />
                              <Text
                                className="flex-grow not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Air conditioned
                              </Text>
                            </div>
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mt-[4px] md:mt-[5px] mt-[8px] sm:mx-[0] sm:px-[0] rounded-radius221 sm:w-[100%] w-[96%]">
                              <Img
                                src="images/img_minimize_1.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="minimize One One"
                              />
                              <Text
                                className="flex-grow not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Fitness Centre
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col justify-start md:ml-[5px] ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[34%]">
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] rounded-radius221 sm:w-[100%] w-[87%]">
                              <Img
                                src="images/img_question_12X12.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="question Two"
                              />
                              <Text
                                className="flex-grow ml-[4px] not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Free parking
                              </Text>
                            </div>
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mt-[4px] md:mt-[5px] mt-[8px] rounded-radius221 w-[100%]">
                              <Img
                                src="images/img_lightbulb.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="lightbulb One"
                              />
                              <Text
                                className="flex-grow not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Swimming pool
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-blue_50 flex flex-col items-center sm:mx-[0] sm:p-[15px] md:p-[25px] p-[37px] sm:w-[100%] w-[30%]">
                      <div className="flex flex-col items-end justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                        <div className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[81%]">
                          <Text
                            className="font-semibold text-gray_900 w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            ₦39,936
                          </Text>
                          <Text
                            className="font-semibold sm:mt-[4px] md:mt-[5px] mt-[8px] text-gray_900 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Per night & room
                          </Text>
                        </div>
                        <div className="flex flex-col items-end justify-start sm:mt-[21px] md:mt-[27px] mt-[40px] w-[100%]">
                          <Text
                            className="font-normal not-italic text-gray_801 w-[auto]"
                            variant="body2"
                          >
                            ₦39,936 for 1 night 1 room(s)
                          </Text>
                          <Text
                            className="font-normal mt-[3px] not-italic text-gray_801 w-[auto]"
                            variant="body2"
                          >
                            Includes taxes & fees
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="cursor-pointer font-bold min-w-[96%] sm:mt-[12px] md:mt-[16px] mt-[24px] text-[14px] text-center text-white_A700 w-[max-content]"
                        shape="RoundedBorder4"
                      >
                        Book
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly outline outline-[0.5px] outline-bluegray_100 w-[100%]">
                    <div className="bg-bluegray_900 flex flex-col items-center sm:mx-[0] md:pt-[147px] sm:pt-[15px] pt-[215px] sm:w-[100%] w-[30%]">
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly w-[100%]">
                        <Img
                          src="images/img_unsplashe9npwg.png"
                          className="max-w-[100%] w-[33%]"
                          alt="unsplashE9NPWG Two"
                        />
                        <Img
                          src="images/img_unsplashgtnfts.png"
                          className="max-w-[100%] w-[33%]"
                          alt="unsplashGtnFts Two"
                        />
                        <Img
                          src="images/img_unsplasha0bgod.png"
                          className="max-w-[100%] w-[33%]"
                          alt="unsplasha0BGOD Two"
                        />
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-col items-center sm:mx-[0] sm:p-[15px] md:p-[22px] p-[32px] sm:w-[100%] w-[42%]">
                      <div className="flex flex-col justify-start sm:px-[0] w-[100%]">
                        <div className="flex flex-col justify-start w-[100%]">
                          <Text
                            className="font-semibold text-gray_900 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            ibis Styles Accra Airport
                          </Text>
                          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[4px] md:mt-[5px] mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[43%]">
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[41%]">
                              <Text
                                className="flex-grow font-semibold text-gray_801"
                                as="h6"
                                variant="h6"
                              >
                                4.2
                              </Text>
                              <Img
                                src="images/img_star.svg"
                                className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                                alt="star Two"
                              />
                            </div>
                            <Text
                              className="font-normal md:ml-[11px] ml-[16px] sm:ml-[8px] not-italic text-indigo_900 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              (2,768)
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[18px] md:mt-[24px] mt-[35px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[76%]">
                          <Img
                            src="images/img_location.svg"
                            className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                            alt="location Two"
                          />
                          <Text
                            className="flex-grow font-normal leading-[16.00px] md:leading-[normal] sm:leading-[normal] ml-[4px] sm:mx-[0] not-italic text-gray_801"
                            variant="body2"
                          >
                            Plot 24 Airport City Area Airport
                            <br />
                            City Enclave, Ghana..
                          </Text>
                        </div>
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[18px] md:mt-[24px] mt-[35px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[88%]">
                          <div className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[28%]">
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] rounded-radius221 sm:w-[100%] w-[92%]">
                              <Img
                                src="images/img_signal_12X12.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="signal Three"
                              />
                              <Text
                                className="flex-grow ml-[4px] not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Free Wi-FI
                              </Text>
                            </div>
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mt-[4px] md:mt-[5px] mt-[8px] rounded-radius221 w-[100%]">
                              <Img
                                src="images/img_filter_12X12.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="filter Four"
                              />
                              <Text
                                className="flex-grow not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Bar/Lounge
                              </Text>
                            </div>
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mt-[4px] md:mt-[5px] mt-[8px] sm:mx-[0] sm:px-[0] rounded-radius221 sm:w-[100%] w-[95%]">
                              <Img
                                src="images/img_airplane_12X12.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="airplane Three"
                              />
                              <Text
                                className="flex-grow not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Restaurant
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col justify-start md:ml-[5px] ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[34%]">
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mx-[0] sm:px-[0] rounded-radius221 sm:w-[100%] w-[97%]">
                              <Img
                                src="images/img_notification_12X12.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="notification Three"
                              />
                              <Text
                                className="flex-grow not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Free breakfast
                              </Text>
                            </div>
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mt-[4px] md:mt-[5px] mt-[8px] rounded-radius221 w-[100%]">
                              <Img
                                src="images/img_minimize_12X12.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="minimize Four"
                              />
                              <Text
                                className="flex-grow not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Air conditioned
                              </Text>
                            </div>
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mt-[4px] md:mt-[5px] mt-[8px] sm:mx-[0] sm:px-[0] rounded-radius221 sm:w-[100%] w-[96%]">
                              <Img
                                src="images/img_minimize_1.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="minimize One Two"
                              />
                              <Text
                                className="flex-grow not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Fitness Centre
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col justify-start md:ml-[5px] ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[34%]">
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] rounded-radius221 sm:w-[100%] w-[87%]">
                              <Img
                                src="images/img_question_12X12.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="question Three"
                              />
                              <Text
                                className="flex-grow ml-[4px] not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Free parking
                              </Text>
                            </div>
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mt-[4px] md:mt-[5px] mt-[8px] rounded-radius221 w-[100%]">
                              <Img
                                src="images/img_lightbulb.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="lightbulb Two"
                              />
                              <Text
                                className="flex-grow not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Swimming pool
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-blue_50 flex flex-col items-center sm:mx-[0] sm:p-[15px] md:p-[25px] p-[37px] sm:w-[100%] w-[30%]">
                      <div className="flex flex-col items-end justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                        <div className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[81%]">
                          <Text
                            className="font-semibold text-gray_900 w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            ₦39,936
                          </Text>
                          <Text
                            className="font-semibold sm:mt-[4px] md:mt-[5px] mt-[8px] text-gray_900 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Per night & room
                          </Text>
                        </div>
                        <div className="flex flex-col items-end justify-start sm:mt-[21px] md:mt-[27px] mt-[40px] w-[100%]">
                          <Text
                            className="font-normal not-italic text-gray_801 w-[auto]"
                            variant="body2"
                          >
                            ₦39,936 for 1 night 1 room(s)
                          </Text>
                          <Text
                            className="font-normal mt-[3px] not-italic text-gray_801 w-[auto]"
                            variant="body2"
                          >
                            Includes taxes & fees
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="cursor-pointer font-bold min-w-[96%] sm:mt-[12px] md:mt-[16px] mt-[24px] text-[14px] text-center text-white_A700 w-[max-content]"
                        shape="RoundedBorder4"
                      >
                        Book
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly outline outline-[0.5px] outline-bluegray_100 w-[100%]">
                    <div className="bg-bluegray_900 flex flex-col items-center sm:mx-[0] md:pt-[147px] sm:pt-[15px] pt-[215px] sm:w-[100%] w-[30%]">
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly w-[100%]">
                        <Img
                          src="images/img_unsplashe9npwg.png"
                          className="max-w-[100%] w-[33%]"
                          alt="unsplashE9NPWG Three"
                        />
                        <Img
                          src="images/img_unsplashgtnfts.png"
                          className="max-w-[100%] w-[33%]"
                          alt="unsplashGtnFts Three"
                        />
                        <Img
                          src="images/img_unsplasha0bgod.png"
                          className="max-w-[100%] w-[33%]"
                          alt="unsplasha0BGOD Three"
                        />
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-col items-center sm:mx-[0] sm:p-[15px] md:p-[22px] p-[32px] sm:w-[100%] w-[42%]">
                      <div className="flex flex-col justify-start sm:px-[0] w-[100%]">
                        <div className="flex flex-col justify-start w-[100%]">
                          <Text
                            className="font-semibold text-gray_900 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            ibis Styles Accra Airport
                          </Text>
                          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[4px] md:mt-[5px] mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[43%]">
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[41%]">
                              <Text
                                className="flex-grow font-semibold text-gray_801"
                                as="h6"
                                variant="h6"
                              >
                                4.2
                              </Text>
                              <Img
                                src="images/img_star.svg"
                                className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                                alt="star Three"
                              />
                            </div>
                            <Text
                              className="font-normal md:ml-[11px] ml-[16px] sm:ml-[8px] not-italic text-indigo_900 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              (2,768)
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[18px] md:mt-[24px] mt-[35px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[76%]">
                          <Img
                            src="images/img_location.svg"
                            className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                            alt="location Three"
                          />
                          <Text
                            className="flex-grow font-normal leading-[16.00px] md:leading-[normal] sm:leading-[normal] ml-[4px] sm:mx-[0] not-italic text-gray_801"
                            variant="body2"
                          >
                            Plot 24 Airport City Area Airport
                            <br />
                            City Enclave, Ghana..
                          </Text>
                        </div>
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[18px] md:mt-[24px] mt-[35px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[88%]">
                          <div className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[28%]">
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] rounded-radius221 sm:w-[100%] w-[92%]">
                              <Img
                                src="images/img_signal_12X12.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="signal Four"
                              />
                              <Text
                                className="flex-grow ml-[4px] not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Free Wi-FI
                              </Text>
                            </div>
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mt-[4px] md:mt-[5px] mt-[8px] rounded-radius221 w-[100%]">
                              <Img
                                src="images/img_filter_12X12.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="filter Five"
                              />
                              <Text
                                className="flex-grow not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Bar/Lounge
                              </Text>
                            </div>
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mt-[4px] md:mt-[5px] mt-[8px] sm:mx-[0] sm:px-[0] rounded-radius221 sm:w-[100%] w-[95%]">
                              <Img
                                src="images/img_airplane_12X12.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="airplane Four"
                              />
                              <Text
                                className="flex-grow not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Restaurant
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col justify-start md:ml-[5px] ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[34%]">
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mx-[0] sm:px-[0] rounded-radius221 sm:w-[100%] w-[97%]">
                              <Img
                                src="images/img_notification_12X12.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="notification Four"
                              />
                              <Text
                                className="flex-grow not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Free breakfast
                              </Text>
                            </div>
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mt-[4px] md:mt-[5px] mt-[8px] rounded-radius221 w-[100%]">
                              <Img
                                src="images/img_minimize_12X12.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="minimize Five"
                              />
                              <Text
                                className="flex-grow not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Air conditioned
                              </Text>
                            </div>
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mt-[4px] md:mt-[5px] mt-[8px] sm:mx-[0] sm:px-[0] rounded-radius221 sm:w-[100%] w-[96%]">
                              <Img
                                src="images/img_minimize_1.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="minimize One Three"
                              />
                              <Text
                                className="flex-grow not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Fitness Centre
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col justify-start md:ml-[5px] ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[34%]">
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] rounded-radius221 sm:w-[100%] w-[87%]">
                              <Img
                                src="images/img_question_12X12.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="question Four"
                              />
                              <Text
                                className="flex-grow ml-[4px] not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Free parking
                              </Text>
                            </div>
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mt-[4px] md:mt-[5px] mt-[8px] rounded-radius221 w-[100%]">
                              <Img
                                src="images/img_lightbulb.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="lightbulb Three"
                              />
                              <Text
                                className="flex-grow not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Swimming pool
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-blue_50 flex flex-col items-center sm:mx-[0] sm:p-[15px] md:p-[25px] p-[37px] sm:w-[100%] w-[30%]">
                      <div className="flex flex-col items-end justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                        <div className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[81%]">
                          <Text
                            className="font-semibold text-gray_900 w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            ₦39,936
                          </Text>
                          <Text
                            className="font-semibold sm:mt-[4px] md:mt-[5px] mt-[8px] text-gray_900 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Per night & room
                          </Text>
                        </div>
                        <div className="flex flex-col items-end justify-start sm:mt-[21px] md:mt-[27px] mt-[40px] w-[100%]">
                          <Text
                            className="font-normal not-italic text-gray_801 w-[auto]"
                            variant="body2"
                          >
                            ₦39,936 for 1 night 1 room(s)
                          </Text>
                          <Text
                            className="font-normal mt-[3px] not-italic text-gray_801 w-[auto]"
                            variant="body2"
                          >
                            Includes taxes & fees
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="cursor-pointer font-bold min-w-[96%] sm:mt-[12px] md:mt-[16px] mt-[24px] text-[14px] text-center text-white_A700 w-[max-content]"
                        shape="RoundedBorder4"
                      >
                        Book
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly outline outline-[0.5px] outline-bluegray_100 w-[100%]">
                    <div className="bg-bluegray_900 flex flex-col items-center sm:mx-[0] md:pt-[147px] sm:pt-[15px] pt-[215px] sm:w-[100%] w-[30%]">
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly w-[100%]">
                        <Img
                          src="images/img_unsplashe9npwg.png"
                          className="max-w-[100%] w-[33%]"
                          alt="unsplashE9NPWG Four"
                        />
                        <Img
                          src="images/img_unsplashgtnfts.png"
                          className="max-w-[100%] w-[33%]"
                          alt="unsplashGtnFts Four"
                        />
                        <Img
                          src="images/img_unsplasha0bgod.png"
                          className="max-w-[100%] w-[33%]"
                          alt="unsplasha0BGOD Four"
                        />
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-col items-center sm:mx-[0] sm:p-[15px] md:p-[22px] p-[32px] sm:w-[100%] w-[42%]">
                      <div className="flex flex-col justify-start sm:px-[0] w-[100%]">
                        <div className="flex flex-col justify-start w-[100%]">
                          <Text
                            className="font-semibold text-gray_900 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            ibis Styles Accra Airport
                          </Text>
                          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[4px] md:mt-[5px] mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[43%]">
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[41%]">
                              <Text
                                className="flex-grow font-semibold text-gray_801"
                                as="h6"
                                variant="h6"
                              >
                                4.2
                              </Text>
                              <Img
                                src="images/img_star.svg"
                                className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                                alt="star Four"
                              />
                            </div>
                            <Text
                              className="font-normal md:ml-[11px] ml-[16px] sm:ml-[8px] not-italic text-indigo_900 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              (2,768)
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[18px] md:mt-[24px] mt-[35px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[76%]">
                          <Img
                            src="images/img_location.svg"
                            className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                            alt="location Four"
                          />
                          <Text
                            className="flex-grow font-normal leading-[16.00px] md:leading-[normal] sm:leading-[normal] ml-[4px] sm:mx-[0] not-italic text-gray_801"
                            variant="body2"
                          >
                            Plot 24 Airport City Area Airport
                            <br />
                            City Enclave, Ghana..
                          </Text>
                        </div>
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[18px] md:mt-[24px] mt-[35px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[88%]">
                          <div className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[28%]">
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] rounded-radius221 sm:w-[100%] w-[92%]">
                              <Img
                                src="images/img_signal_12X12.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="signal Five"
                              />
                              <Text
                                className="flex-grow ml-[4px] not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Free Wi-FI
                              </Text>
                            </div>
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mt-[4px] md:mt-[5px] mt-[8px] rounded-radius221 w-[100%]">
                              <Img
                                src="images/img_filter_12X12.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="filter Six"
                              />
                              <Text
                                className="flex-grow not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Bar/Lounge
                              </Text>
                            </div>
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mt-[4px] md:mt-[5px] mt-[8px] sm:mx-[0] sm:px-[0] rounded-radius221 sm:w-[100%] w-[95%]">
                              <Img
                                src="images/img_airplane_12X12.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="airplane Five"
                              />
                              <Text
                                className="flex-grow not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Restaurant
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col justify-start md:ml-[5px] ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[34%]">
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mx-[0] sm:px-[0] rounded-radius221 sm:w-[100%] w-[97%]">
                              <Img
                                src="images/img_notification_12X12.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="notification Five"
                              />
                              <Text
                                className="flex-grow not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Free breakfast
                              </Text>
                            </div>
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mt-[4px] md:mt-[5px] mt-[8px] rounded-radius221 w-[100%]">
                              <Img
                                src="images/img_minimize_12X12.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="minimize Six"
                              />
                              <Text
                                className="flex-grow not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Air conditioned
                              </Text>
                            </div>
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mt-[4px] md:mt-[5px] mt-[8px] sm:mx-[0] sm:px-[0] rounded-radius221 sm:w-[100%] w-[96%]">
                              <Img
                                src="images/img_minimize_1.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="minimize One Four"
                              />
                              <Text
                                className="flex-grow not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Fitness Centre
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col justify-start md:ml-[5px] ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[34%]">
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] rounded-radius221 sm:w-[100%] w-[87%]">
                              <Img
                                src="images/img_question_12X12.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="question Five"
                              />
                              <Text
                                className="flex-grow ml-[4px] not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Free parking
                              </Text>
                            </div>
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mt-[4px] md:mt-[5px] mt-[8px] rounded-radius221 w-[100%]">
                              <Img
                                src="images/img_lightbulb.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="lightbulb Four"
                              />
                              <Text
                                className="flex-grow not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Swimming pool
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-blue_50 flex flex-col items-center sm:mx-[0] sm:p-[15px] md:p-[25px] p-[37px] sm:w-[100%] w-[30%]">
                      <div className="flex flex-col items-end justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                        <div className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[81%]">
                          <Text
                            className="font-semibold text-gray_900 w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            ₦39,936
                          </Text>
                          <Text
                            className="font-semibold sm:mt-[4px] md:mt-[5px] mt-[8px] text-gray_900 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Per night & room
                          </Text>
                        </div>
                        <div className="flex flex-col items-end justify-start sm:mt-[21px] md:mt-[27px] mt-[40px] w-[100%]">
                          <Text
                            className="font-normal not-italic text-gray_801 w-[auto]"
                            variant="body2"
                          >
                            ₦39,936 for 1 night 1 room(s)
                          </Text>
                          <Text
                            className="font-normal mt-[3px] not-italic text-gray_801 w-[auto]"
                            variant="body2"
                          >
                            Includes taxes & fees
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="cursor-pointer font-bold min-w-[96%] sm:mt-[12px] md:mt-[16px] mt-[24px] text-[14px] text-center text-white_A700 w-[max-content]"
                        shape="RoundedBorder4"
                      >
                        Book
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly outline outline-[0.5px] outline-bluegray_100 w-[100%]">
                    <div className="bg-bluegray_900 flex flex-col items-center sm:mx-[0] md:pt-[147px] sm:pt-[15px] pt-[215px] sm:w-[100%] w-[30%]">
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly w-[100%]">
                        <Img
                          src="images/img_unsplashe9npwg.png"
                          className="max-w-[100%] w-[33%]"
                          alt="unsplashE9NPWG Five"
                        />
                        <Img
                          src="images/img_unsplashgtnfts.png"
                          className="max-w-[100%] w-[33%]"
                          alt="unsplashGtnFts Five"
                        />
                        <Img
                          src="images/img_unsplasha0bgod.png"
                          className="max-w-[100%] w-[33%]"
                          alt="unsplasha0BGOD Five"
                        />
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-col items-center sm:mx-[0] sm:p-[15px] md:p-[22px] p-[32px] sm:w-[100%] w-[42%]">
                      <div className="flex flex-col justify-start sm:px-[0] w-[100%]">
                        <div className="flex flex-col justify-start w-[100%]">
                          <Text
                            className="font-semibold text-gray_900 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            ibis Styles Accra Airport
                          </Text>
                          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[4px] md:mt-[5px] mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[43%]">
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[41%]">
                              <Text
                                className="flex-grow font-semibold text-gray_801"
                                as="h6"
                                variant="h6"
                              >
                                4.2
                              </Text>
                              <Img
                                src="images/img_star.svg"
                                className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                                alt="star Five"
                              />
                            </div>
                            <Text
                              className="font-normal md:ml-[11px] ml-[16px] sm:ml-[8px] not-italic text-indigo_900 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              (2,768)
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[18px] md:mt-[24px] mt-[35px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[76%]">
                          <Img
                            src="images/img_location.svg"
                            className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                            alt="location Five"
                          />
                          <Text
                            className="flex-grow font-normal leading-[16.00px] md:leading-[normal] sm:leading-[normal] ml-[4px] sm:mx-[0] not-italic text-gray_801"
                            variant="body2"
                          >
                            Plot 24 Airport City Area Airport
                            <br />
                            City Enclave, Ghana..
                          </Text>
                        </div>
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[18px] md:mt-[24px] mt-[35px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[88%]">
                          <div className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[28%]">
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] rounded-radius221 sm:w-[100%] w-[92%]">
                              <Img
                                src="images/img_signal_12X12.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="signal Six"
                              />
                              <Text
                                className="flex-grow ml-[4px] not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Free Wi-FI
                              </Text>
                            </div>
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mt-[4px] md:mt-[5px] mt-[8px] rounded-radius221 w-[100%]">
                              <Img
                                src="images/img_filter_12X12.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="filter Seven"
                              />
                              <Text
                                className="flex-grow not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Bar/Lounge
                              </Text>
                            </div>
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mt-[4px] md:mt-[5px] mt-[8px] sm:mx-[0] sm:px-[0] rounded-radius221 sm:w-[100%] w-[95%]">
                              <Img
                                src="images/img_airplane_12X12.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="airplane Six"
                              />
                              <Text
                                className="flex-grow not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Restaurant
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col justify-start md:ml-[5px] ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[34%]">
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mx-[0] sm:px-[0] rounded-radius221 sm:w-[100%] w-[97%]">
                              <Img
                                src="images/img_notification_12X12.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="notification Six"
                              />
                              <Text
                                className="flex-grow not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Free breakfast
                              </Text>
                            </div>
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mt-[4px] md:mt-[5px] mt-[8px] rounded-radius221 w-[100%]">
                              <Img
                                src="images/img_minimize_12X12.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="minimize Seven"
                              />
                              <Text
                                className="flex-grow not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Air conditioned
                              </Text>
                            </div>
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mt-[4px] md:mt-[5px] mt-[8px] sm:mx-[0] sm:px-[0] rounded-radius221 sm:w-[100%] w-[96%]">
                              <Img
                                src="images/img_minimize_1.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="minimize One Five"
                              />
                              <Text
                                className="flex-grow not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Fitness Centre
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col justify-start md:ml-[5px] ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[34%]">
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] rounded-radius221 sm:w-[100%] w-[87%]">
                              <Img
                                src="images/img_question_12X12.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="question Six"
                              />
                              <Text
                                className="flex-grow ml-[4px] not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Free parking
                              </Text>
                            </div>
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mt-[4px] md:mt-[5px] mt-[8px] rounded-radius221 w-[100%]">
                              <Img
                                src="images/img_lightbulb.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="lightbulb Five"
                              />
                              <Text
                                className="flex-grow not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Swimming pool
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-blue_50 flex flex-col items-center sm:mx-[0] sm:p-[15px] md:p-[25px] p-[37px] sm:w-[100%] w-[30%]">
                      <div className="flex flex-col items-end justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                        <div className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[81%]">
                          <Text
                            className="font-semibold text-gray_900 w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            ₦39,936
                          </Text>
                          <Text
                            className="font-semibold sm:mt-[4px] md:mt-[5px] mt-[8px] text-gray_900 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Per night & room
                          </Text>
                        </div>
                        <div className="flex flex-col items-end justify-start sm:mt-[21px] md:mt-[27px] mt-[40px] w-[100%]">
                          <Text
                            className="font-normal not-italic text-gray_801 w-[auto]"
                            variant="body2"
                          >
                            ₦39,936 for 1 night 1 room(s)
                          </Text>
                          <Text
                            className="font-normal mt-[3px] not-italic text-gray_801 w-[auto]"
                            variant="body2"
                          >
                            Includes taxes & fees
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="cursor-pointer font-bold min-w-[96%] sm:mt-[12px] md:mt-[16px] mt-[24px] text-[14px] text-center text-white_A700 w-[max-content]"
                        shape="RoundedBorder4"
                      >
                        Book
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly outline outline-[0.5px] outline-bluegray_100 w-[100%]">
                    <div className="bg-bluegray_900 flex flex-col items-center sm:mx-[0] md:pt-[147px] sm:pt-[15px] pt-[215px] sm:w-[100%] w-[30%]">
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly w-[100%]">
                        <Img
                          src="images/img_unsplashe9npwg.png"
                          className="max-w-[100%] w-[33%]"
                          alt="unsplashE9NPWG Six"
                        />
                        <Img
                          src="images/img_unsplashgtnfts.png"
                          className="max-w-[100%] w-[33%]"
                          alt="unsplashGtnFts Six"
                        />
                        <Img
                          src="images/img_unsplasha0bgod.png"
                          className="max-w-[100%] w-[33%]"
                          alt="unsplasha0BGOD Six"
                        />
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-col items-center sm:mx-[0] sm:p-[15px] md:p-[22px] p-[32px] sm:w-[100%] w-[42%]">
                      <div className="flex flex-col justify-start sm:px-[0] w-[100%]">
                        <div className="flex flex-col justify-start w-[100%]">
                          <Text
                            className="font-semibold text-gray_900 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            ibis Styles Accra Airport
                          </Text>
                          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[4px] md:mt-[5px] mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[43%]">
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[41%]">
                              <Text
                                className="flex-grow font-semibold text-gray_801"
                                as="h6"
                                variant="h6"
                              >
                                4.2
                              </Text>
                              <Img
                                src="images/img_star.svg"
                                className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                                alt="star Six"
                              />
                            </div>
                            <Text
                              className="font-normal md:ml-[11px] ml-[16px] sm:ml-[8px] not-italic text-indigo_900 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              (2,768)
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[18px] md:mt-[24px] mt-[35px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[76%]">
                          <Img
                            src="images/img_location.svg"
                            className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                            alt="location Six"
                          />
                          <Text
                            className="flex-grow font-normal leading-[16.00px] md:leading-[normal] sm:leading-[normal] ml-[4px] sm:mx-[0] not-italic text-gray_801"
                            variant="body2"
                          >
                            Plot 24 Airport City Area Airport
                            <br />
                            City Enclave, Ghana..
                          </Text>
                        </div>
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[18px] md:mt-[24px] mt-[35px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[88%]">
                          <div className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[28%]">
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] rounded-radius221 sm:w-[100%] w-[92%]">
                              <Img
                                src="images/img_signal_12X12.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="signal Seven"
                              />
                              <Text
                                className="flex-grow ml-[4px] not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Free Wi-FI
                              </Text>
                            </div>
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mt-[4px] md:mt-[5px] mt-[8px] rounded-radius221 w-[100%]">
                              <Img
                                src="images/img_filter_12X12.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="filter Eight"
                              />
                              <Text
                                className="flex-grow not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Bar/Lounge
                              </Text>
                            </div>
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mt-[4px] md:mt-[5px] mt-[8px] sm:mx-[0] sm:px-[0] rounded-radius221 sm:w-[100%] w-[95%]">
                              <Img
                                src="images/img_airplane_12X12.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="airplane Seven"
                              />
                              <Text
                                className="flex-grow not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Restaurant
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col justify-start md:ml-[5px] ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[34%]">
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mx-[0] sm:px-[0] rounded-radius221 sm:w-[100%] w-[97%]">
                              <Img
                                src="images/img_notification_12X12.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="notification Seven"
                              />
                              <Text
                                className="flex-grow not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Free breakfast
                              </Text>
                            </div>
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mt-[4px] md:mt-[5px] mt-[8px] rounded-radius221 w-[100%]">
                              <Img
                                src="images/img_minimize_12X12.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="minimize Eight"
                              />
                              <Text
                                className="flex-grow not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Air conditioned
                              </Text>
                            </div>
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mt-[4px] md:mt-[5px] mt-[8px] sm:mx-[0] sm:px-[0] rounded-radius221 sm:w-[100%] w-[96%]">
                              <Img
                                src="images/img_minimize_1.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="minimize One Six"
                              />
                              <Text
                                className="flex-grow not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Fitness Centre
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col justify-start md:ml-[5px] ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[34%]">
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] rounded-radius221 sm:w-[100%] w-[87%]">
                              <Img
                                src="images/img_question_12X12.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="question Seven"
                              />
                              <Text
                                className="flex-grow ml-[4px] not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Free parking
                              </Text>
                            </div>
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mt-[4px] md:mt-[5px] mt-[8px] rounded-radius221 w-[100%]">
                              <Img
                                src="images/img_lightbulb.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="lightbulb Six"
                              />
                              <Text
                                className="flex-grow not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Swimming pool
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-blue_50 flex flex-col items-center sm:mx-[0] sm:p-[15px] md:p-[25px] p-[37px] sm:w-[100%] w-[30%]">
                      <div className="flex flex-col items-end justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                        <div className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[81%]">
                          <Text
                            className="font-semibold text-gray_900 w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            ₦39,936
                          </Text>
                          <Text
                            className="font-semibold sm:mt-[4px] md:mt-[5px] mt-[8px] text-gray_900 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Per night & room
                          </Text>
                        </div>
                        <div className="flex flex-col items-end justify-start sm:mt-[21px] md:mt-[27px] mt-[40px] w-[100%]">
                          <Text
                            className="font-normal not-italic text-gray_801 w-[auto]"
                            variant="body2"
                          >
                            ₦39,936 for 1 night 1 room(s)
                          </Text>
                          <Text
                            className="font-normal mt-[3px] not-italic text-gray_801 w-[auto]"
                            variant="body2"
                          >
                            Includes taxes & fees
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="cursor-pointer font-bold min-w-[96%] sm:mt-[12px] md:mt-[16px] mt-[24px] text-[14px] text-center text-white_A700 w-[max-content]"
                        shape="RoundedBorder4"
                      >
                        Book
                      </Button>
                    </div>
                  </div>
                </List>
              </div>
            </div>
            <Button
              className="capitalize cursor-pointer font-semibold min-w-[59%] sm:ml-[257px] md:ml-[332px] ml-[483px] mt-[131px] sm:mt-[69px] md:mt-[90px] text-[12px] text-center text-indigo_900 w-[max-content]"
              variant="FillWhiteA700"
            >
              Load more results
            </Button>
            <footer className="bg-gray_901 sm:mt-[21px] md:mt-[27px] mt-[40px] w-[100%]">
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between max-w-[1002px] mb-[138px] sm:mb-[73px] md:mb-[94px] ml-[auto] mr-[auto] sm:mt-[50px] md:mt-[64px] mt-[94px] sm:mx-[0] mx-[auto] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[40%]">
                  <div className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[21%]">
                    <Text
                      className="font-bold text-gray_52 w-[auto]"
                      variant="body1"
                    >
                      Services
                    </Text>
                    <div className="flex flex-col justify-start md:mt-[11px] mt-[16px] sm:mt-[8px] w-[100%] common-column-list">
                      <ul className="flex flex-col">
                        <li className="w-[auto]">
                          <Text
                            className="cursor-pointer font-normal not-italic text-white_A700_b2"
                            variant="body1"
                          >
                            Flights
                          </Text>
                        </li>
                        <li className="w-[auto] mt-[12px] sm:mt-[6px] md:mt-[8px]">
                          <a
                            href={"javascript:"}
                            className="cursor-pointer font-normal not-italic text-[14px] text-white_A700_b2"
                            rel="noreferrer"
                          >
                            Hotels
                          </a>
                        </li>
                        <li className="w-[auto] mt-[12px] sm:mt-[6px] md:mt-[8px]">
                          <a
                            href={"javascript:"}
                            className="cursor-pointer font-normal not-italic text-[14px] text-white_A700_b2"
                            rel="noreferrer"
                          >
                            Visas
                          </a>
                        </li>
                        <li className="w-[auto] mt-[12px] sm:mt-[6px] md:mt-[8px]">
                          <a
                            href={"javascript:"}
                            className="cursor-pointer font-normal leading-[18.00px] md:leading-[normal] sm:leading-[normal] not-italic text-[14px] text-white_A700_b2"
                            rel="noreferrer"
                          >
                            Vacation
                            <br />
                            Packages
                          </a>
                        </li>
                        <li className="w-[auto] mt-[12px] sm:mt-[6px] md:mt-[8px]">
                          <a
                            href={"javascript:"}
                            className="cursor-pointer font-normal leading-[18.00px] md:leading-[normal] sm:leading-[normal] not-italic text-[14px] text-white_A700_b2"
                            rel="noreferrer"
                          >
                            Protocol
                            <br />
                            Services
                          </a>
                        </li>
                        <li className="w-[auto] mt-[12px] sm:mt-[6px] md:mt-[8px]">
                          <a
                            href={"javascript:"}
                            className="cursor-pointer font-normal not-italic text-[14px] text-white_A700_b2"
                            rel="noreferrer"
                          >
                            Blue Ribbon
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[21%]">
                    <Text
                      className="font-bold text-gray_52 w-[auto]"
                      variant="body1"
                    >
                      Account
                    </Text>
                    <div className="flex flex-col justify-start md:mt-[11px] mt-[16px] sm:mt-[8px] w-[100%]">
                      <Text
                        className="font-normal not-italic text-white_A700_b2 w-[auto]"
                        variant="body1"
                      >
                        My Account
                      </Text>
                      <Text
                        className="font-normal mt-[12px] sm:mt-[6px] md:mt-[8px] not-italic text-white_A700_b2 w-[auto]"
                        variant="body1"
                      >
                        Affiliate
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[19%]">
                    <Text
                      className="font-bold text-gray_52 w-[auto]"
                      variant="body1"
                    >
                      Travelbeta
                    </Text>
                    <div className="flex flex-col justify-start md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%] common-column-list">
                      <ul className="flex flex-col">
                        <li className="w-[auto]">
                          <Text
                            className="cursor-pointer font-normal not-italic text-white_A700_b2"
                            variant="body1"
                          >
                            About us
                          </Text>
                        </li>
                        <li className="w-[auto] mt-[12px] sm:mt-[6px] md:mt-[8px]">
                          <a
                            href={"javascript:"}
                            className="cursor-pointer font-normal not-italic text-[14px] text-white_A700_b2"
                            rel="noreferrer"
                          >
                            Contact us
                          </a>
                        </li>
                        <li className="w-[auto] mt-[12px] sm:mt-[6px] md:mt-[8px]">
                          <a
                            href={"javascript:"}
                            className="cursor-pointer font-normal not-italic text-[14px] text-white_A700_b2"
                            rel="noreferrer"
                          >
                            FAQ’s
                          </a>
                        </li>
                        <li className="w-[auto] mt-[12px] sm:mt-[6px] md:mt-[8px]">
                          <a
                            href={"javascript:"}
                            className="cursor-pointer font-normal not-italic text-[14px] text-white_A700_b2"
                            rel="noreferrer"
                          >
                            Feedback
                          </a>
                        </li>
                        <li className="w-[auto] mt-[12px] sm:mt-[6px] md:mt-[8px]">
                          <a
                            href={"javascript:"}
                            className="cursor-pointer font-normal not-italic text-[14px] text-white_A700_b2"
                            rel="noreferrer"
                          >
                            Blog
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-start sm:mt-[46px] md:mt-[59px] mt-[87px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[26%]">
                  <Img
                    src="images/img_eye.svg"
                    className="max-w-[100%] w-[37%]"
                    alt="eye"
                  />
                  <div className="flex flex-col items-end justify-start sm:mt-[20px] md:mt-[26px] mt-[39px] w-[100%]">
                    <Img
                      src="images/img_frame1278.svg"
                      className="max-w-[100%] sm:w-[100%] w-[47%]"
                      alt="Frame1278"
                    />
                    <Text
                      className="font-normal leading-[20.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-white_A700_b2 w-[100%]"
                      variant="body1"
                    >
                      <span className="text-white_A700_b2 text-[14px] font-roboto">
                        ©{" "}
                      </span>
                      <span className="text-white_A700_b2 text-[14px] font-metropolis">
                        2021 Travelbeta All Rights Reserved.
                        <br />
                        Privacy Policy | Terms and Conditions
                      </span>
                    </Text>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelsearchresultsOnePage;
