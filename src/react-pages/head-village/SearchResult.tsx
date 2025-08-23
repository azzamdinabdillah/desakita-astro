import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Title from "../../components/Title";
import { Link } from "react-router";
import Button from "../../components/Button";
import DetailsList from "../../components/DetailsList";
import CardItemGeneral from "../../components/CardItemGeneral";
import UserImage from "../../components/UserImage";
import DashboardStatus from "../../components/DashboardStatus";

export default function SearchResult() {
  return (
    <div>
      <div className="flex flex-col gap-6 lg:gap-7.5" data-rttabs="true">
        <div className="top flex flex-col gap-4 lg:gap-6">
          <Title title="Search Result: Malik" />
          <div
            className="flex gap-1 p-1 items-center bg-white rounded-xl overflow-x-auto"
            role="tablist"
          >
            {[
              "Head of Household",
              "Social Assistance List",
              "Social Assistance Applications",
              "Development",
              "Village Events",
            ].map((tab, index) => (
              <div
                role="tab"
                data-rttab="true"
                aria-selected={index === 0 ? "true" : "false"}
                tabIndex={index === 0 ? 0 : -1}
                key={index}
                className={`text-16 lg:flex-grow cursor-pointer hover:bg-black hover:text-white transition-all text-secondary-text-color font-medium py-2.5 px-5 flex justify-center items-center lg:py-2.5 lg:px-4.5 rounded-full border border-bg-color ${
                  index === 0 ? "bg-black text-white" : ""
                }`}
              >
                {tab}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:gap-[10px]">
          <h2 className="text-xl lg:text-2xl text-black font-semibold">
            Result based on your search (30)
          </h2>

          <div className="tabpanel react-tabs__tab-panel--selected flex flex-col">
            <div className="overflow-x-auto w-full">
              <table className="border-separate border-spacing-y-[14px] table-auto w-full">
                {Array.from({ length: 5 }, (_, index) => (
                  <tr key={index} className="bg-white w-full">
                    <td className="">
                      <div className="flex gap-3 items-center w-full">
                        <div className="bg-foreshadow rounded-full w-[50px] lg:w-[64px] overflow-hidden">
                          <img
                            src="/images/user.png"
                            alt=""
                            className="w-full h-full"
                          />
                        </div>

                        <div className="flex flex-col gap-1 lg:gap-[8px]">
                          <h3 className="text-base lg:text-[18px] font-semibold text-black">
                            Andi Alif Baro
                          </h3>
                          <div className="flex items-center gap-1">
                            <img
                              src="/icons/briefcase.svg"
                              alt=""
                              className="w-3.5 lg:w-[18px]"
                            />
                            <span className="text-14 font-medium text-secondary-text-color">
                              Vehicle Mechanic
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>

                    <td>
                      <div className="flex gap-1 flex-col w-full">
                        <div className="flex gap-1 items-center">
                          <img src="/icons/keyboard.svg" alt="" />
                          <span className="text-14 font-medium text-secondary-text-color">
                            NIK
                          </span>
                        </div>
                        <p className="text-16 text-black font-semibold">
                          2005100592201005
                        </p>
                      </div>
                    </td>

                    <td>
                      <div className="rounded-full inline-flex w-auto gap-1 items-center py-2 px-3 pr-8.5 lg:py-3.5 lg:px-4 bg-[#005CAA]/[0.09]">
                        <img src="/icons/profile-2user-blue.svg" alt="" />
                        <span className="text-16 text-[#005CAA] font-medium">
                          99 Family Members
                        </span>
                      </div>
                    </td>

                    <td>
                      <Link to={"/head-house/manage-head-house"}>
                        <Button variant="black">Manage</Button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </table>
            </div>

            <div className="flex gap-3 text-16 font-semibold text-dark-green items-center mt-3 lg:mt-6 justify-center lg:justify-end">
              <img
                src="/icons/pagination-right.svg"
                alt=""
                className="rotate-180"
              />
              {Array.from({ length: 3 }, (_, index) => (
                <div
                  key={index}
                  className="w-[44px] hover:bg-soft-green hover:text-white transition-all cursor-pointer h-[44px] rounded-full bg-foreshadow flex items-center justify-center"
                >
                  {index + 1}
                </div>
              ))}
              <img src="/icons/pagination-right.svg" alt="" />
            </div>
          </div>

          <div className="tabpanel hidden flex-col">
            <div className="overflow-x-auto w-full">
              <table className="border-separate border-spacing-y-[14px] table-auto w-full">
                {Array.from({ length: 5 }).map((_, index) => (
                  <tr key={index} className="bg-white w-full">
                    <td>
                      <div className="flex gap-4 lg:gap-6 flex-col w-full">
                        <div className="flex justify-between items-center flex-wrap gap-4">
                          <CardItemGeneral
                            imgSize="w-[70px] lg:w-[100px] h-[60px] lg:h-[80px]"
                            image="/images/bansos-1.png"
                            title="Assistance for the Underprivileged"
                            subTitleMaxWidth="max-w-[100%]"
                            titleMaxWidth="max-w-[100%]"
                            subTitle={
                              <div className="gap-1 flex items-center w-full">
                                <img
                                  src="/icons/profile-sm.svg"
                                  alt=""
                                  className="w-3.5 lg:w-4.5"
                                />
                                <p className="text-secondary-text-color text-14 font-medium w-full flex-grow">
                                  PT Shaynakit Meningkatkan Bangsa
                                </p>
                              </div>
                            }
                          />

                          <Link
                            to={
                              "/social-donate/list-social-donate/manage-social-donate"
                            }
                          >
                            <Button variant="black">Manage</Button>
                          </Link>
                        </div>

                        <hr />

                        <div className="flex items-center w-full gap-6 lg:gap-4 lg:grid grid-cols-3 whitespace-nowrap">
                          <div className="w-max flex-grow">
                            <DetailsList
                              titleColor="text-dark-green"
                              icon="/icons/money.svg"
                              title="Rp120.000.000"
                              value="Cash"
                            />
                          </div>

                          <div className="w-max flex-grow">
                            <DetailsList
                              titleColor="text-blue"
                              icon="/icons/profile-2user-blue-bg.svg"
                              title="15.600 Residents"
                              value="Total Applications"
                            />
                          </div>

                          <div className="w-max flex-grow">
                            <DetailsList
                              titleColor="text-soft-red"
                              icon="/icons/minus-square-bg.svg"
                              title="Not Available"
                              value="Social Assistance Status"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </table>
            </div>

            <div className="flex gap-3 text-16 font-semibold text-dark-green items-center mt-3 lg:mt-6 justify-center lg:justify-end">
              <img
                src="/icons/pagination-right.svg"
                alt=""
                className="rotate-180"
              />
              {Array.from({ length: 3 }, (_, index) => (
                <div
                  key={index}
                  className="w-[44px] hover:bg-soft-green hover:text-white transition-all cursor-pointer h-[44px] rounded-full bg-foreshadow flex items-center justify-center"
                >
                  {index + 1}
                </div>
              ))}
              <img src="/icons/pagination-right.svg" alt="" />
            </div>
          </div>

          <div className="tabpanel hidden flex-col">
            <div className="overflow-x-auto w-full">
              <table className="border-separate border-spacing-y-[14px] table-auto w-full">
                {Array.from({ length: 5 }).map((_, index) => (
                  <tr key={index} className="bg-white w-full">
                    <td>
                      <div className="flex gap-4 lg:gap-6 flex-col w-full">
                        <div className="flex justify-between items-center">
                          <div className="flex text-14 font-medium text-secondary-text-color items-center gap-1">
                            <img src="/icons/calendar-2.svg" alt="" />
                            <p>Tue, 09 Jan 2025 </p>
                          </div>

                          <DashboardStatus title="Pending" type="Pending" />
                        </div>

                        <hr />
                        <div className="flex justify-between items-center flex-wrap gap-4">
                          <CardItemGeneral
                            imgSize="w-[70px] lg:w-[100px] h-[60px] lg:h-[80px]"
                            image="/images/bansos-1.png"
                            title="Caring for Each Other: Rice Distribution for Village Residents"
                            subTitleMaxWidth="max-w-[100%]"
                            titleMaxWidth="max-w-[200px]"
                            subTitle={
                              <div className="gap-1 flex items-center w-full">
                                <img
                                  src="/icons/profile-sm.svg"
                                  alt=""
                                  className="w-3.5 lg:w-4.5"
                                />
                                <p className="text-secondary-text-color text-14 font-medium w-full flex-grow">
                                  PT Shaynakit Meningkatkan Bangsa
                                </p>
                              </div>
                            }
                          />

                          <DetailsList
                            customClass="flex-row-reverse"
                            icon="/icons/money.svg"
                            title="Rp120.000.000"
                            value="Cash"
                          />
                        </div>

                        <hr />

                        <div className="flex items-center w-full gap-6 lg:gap-4 lg:grid grid-cols-3 whitespace-nowrap">
                          <div className="w-max flex-grow">
                            <DetailsList
                              titleColor="text-black"
                              userImage={
                                <UserImage
                                  image="/images/user-1.png"
                                  widthHeight="w-[45px] lg:w-[54px]"
                                />
                              }
                              title="Feri Prio Utomo"
                              value={
                                <div className="gap-1 flex items-center">
                                  <img
                                    src="/icons/briefcase.svg"
                                    alt=""
                                    className="w-[14px] lg:w-[18px]"
                                  />
                                  <p className="text-secondary-text-color text-14 font-medium w-full flex-grow">
                                    Construction Worker
                                  </p>
                                </div>
                              }
                            />
                          </div>

                          <div className="w-max flex-grow">
                            <DetailsList
                              titleColor="text-dark-green"
                              icon="/icons/receive-square-2.svg"
                              title="Rice 20 Tons"
                              value="Application Amount"
                            />
                          </div>

                          <div className="w-max lg:w-full flex-grow">
                            <div className="gap-3 flex justify-end">
                              <Button
                                variant="grayTextRed"
                                customClass="lg:w-[35%]"
                              >
                                Reject
                              </Button>
                              <Link
                                className="lg:w-[35%]"
                                to={
                                  "/social-donate/applicant-social-donate/manage-applicant-social-donate"
                                }
                              >
                                <Button variant="green" customClass="w-full">
                                  Approve
                                </Button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </table>
            </div>

            <div className="flex gap-3 text-16 font-semibold text-dark-green items-center mt-3 lg:mt-6 justify-center lg:justify-end">
              <img
                src="/icons/pagination-right.svg"
                alt=""
                className="rotate-180"
              />
              {Array.from({ length: 3 }, (_, index) => (
                <div
                  key={index}
                  className="w-[44px] hover:bg-soft-green hover:text-white transition-all cursor-pointer h-[44px] rounded-full bg-foreshadow flex items-center justify-center"
                >
                  {index + 1}
                </div>
              ))}
              <img src="/icons/pagination-right.svg" alt="" />
            </div>
          </div>

          <div className="tabpanel hidden flex-col">
            <div className="overflow-x-auto w-full">
              <table className="border-separate border-spacing-y-[14px] table-auto w-full">
                {Array.from({ length: 5 }).map((_, index) => (
                  <tr key={index} className="bg-white w-full">
                    <td>
                      <div className="flex gap-4 lg:gap-6 flex-col w-full">
                        <div className="flex justify-between items-center flex-wrap gap-4">
                          <CardItemGeneral
                            imgSize="w-[70px] lg:w-[100px] h-[60px] lg:h-[80px]"
                            image="/images/event-3.png"
                            title="Main Road Development"
                            subTitleMaxWidth="max-w-[100%]"
                            titleMaxWidth="max-w-[100%]"
                            subTitle={
                              <div className="gap-1 flex items-center w-full">
                                <img
                                  src="/icons/user-square.svg"
                                  alt=""
                                  className="w-3.5 lg:w-4.5"
                                />
                                <p className="text-secondary-text-color text-14 font-medium w-full flex-grow">
                                  Person in Charge :{" "}
                                  <span className="text-dark-green">
                                    Uciha Asep
                                  </span>
                                </p>
                              </div>
                            }
                          />

                          <Link
                            to={
                              "/village-schedule/village-development-schedule/manage-village-development-schedule"
                            }
                          >
                            <Button variant="black">Manage</Button>
                          </Link>
                        </div>

                        <hr />

                        <div className="flex items-center w-full gap-6 lg:gap-4 lg:grid grid-cols-3 whitespace-nowrap">
                          <div className="w-max flex-grow">
                            <DetailsList
                              titleColor="text-soft-red"
                              icon="/icons/wallet-3.svg"
                              title="Rp499.000"
                              value="Development Fund"
                            />
                          </div>

                          <div className="w-max flex-grow">
                            <DetailsList
                              titleColor="text-blue"
                              icon="/icons/profile-2user-blue-bg.svg"
                              title="9.250 Residents"
                              value="Total Applicants"
                            />
                          </div>

                          <div className="w-max flex-grow">
                            <DetailsList
                              titleColor="text-dark-green"
                              icon="/icons/calendar-2-bg-square.svg"
                              title="Mon, 24 Feb 2025"
                              value="Implementation Date"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </table>
            </div>

            <div className="flex gap-3 text-16 font-semibold text-dark-green items-center mt-3 lg:mt-6 justify-center lg:justify-end">
              <img
                src="/icons/pagination-right.svg"
                alt=""
                className="rotate-180"
              />
              {Array.from({ length: 3 }, (_, index) => (
                <div
                  key={index}
                  className="w-[44px] hover:bg-soft-green hover:text-white transition-all cursor-pointer h-[44px] rounded-full bg-foreshadow flex items-center justify-center"
                >
                  {index + 1}
                </div>
              ))}
              <img src="/icons/pagination-right.svg" alt="" />
            </div>
          </div>

          <div className="tabpanel hidden flex-col">
            <div className="overflow-x-auto w-full">
              <table className="border-separate border-spacing-y-[14px] table-auto w-full">
                {Array.from({ length: 5 }).map((_, index) => (
                  <tr key={index} className="bg-white w-full">
                    <td>
                      <div className="flex gap-4 lg:gap-6 flex-col w-full">
                        <div className="flex justify-between items-center flex-wrap gap-4">
                          <CardItemGeneral
                            imgSize="w-[70px] lg:w-[100px] h-[60px] lg:h-[80px]"
                            image="/images/event.png"
                            title="Learn Basic HTML Together"
                            subTitleMaxWidth="max-w-[100%]"
                            titleMaxWidth="max-w-[100%]"
                            subTitle={
                              <div className="gap-1 flex items-center w-full">
                                <img
                                  src="/icons/ticket.svg"
                                  alt=""
                                  className="w-3.5 lg:w-4.5"
                                />
                                <p className="text-secondary-text-color text-14 font-medium w-full flex-grow">
                                  Registration: :{" "}
                                  <span className="text-dark-green">Open</span>
                                </p>
                              </div>
                            }
                          />

                          <Link
                            to={
                              "/village-schedule/village-event-schedule/manage-village-event-schedule"
                            }
                          >
                            <Button variant="black">Manage</Button>
                          </Link>
                        </div>

                        <hr />

                        <div className="flex items-center w-full gap-6 lg:gap-4 lg:grid grid-cols-3 whitespace-nowrap">
                          <div className="w-max flex-grow">
                            <DetailsList
                              titleColor="text-soft-red"
                              icon="/icons/ticket-bg.svg"
                              title="Rp499.000"
                              value="Event Price"
                            />
                          </div>

                          <div className="w-max flex-grow">
                            <DetailsList
                              titleColor="text-blue"
                              icon="/icons/profile-2user-blue-bg.svg"
                              title="9.250 Residents"
                              value="Total Participants"
                            />
                          </div>

                          <div className="w-max flex-grow">
                            <DetailsList
                              titleColor="text-dark-green"
                              icon="/icons/calendar-2-bg-square.svg"
                              title="Mon, 24 Feb 2025"
                              value="Implementation Date"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </table>
            </div>

            <div className="flex gap-3 text-16 font-semibold text-dark-green items-center mt-3 lg:mt-6 justify-center lg:justify-end">
              <img
                src="/icons/pagination-right.svg"
                alt=""
                className="rotate-180"
              />
              {Array.from({ length: 3 }, (_, index) => (
                <div
                  key={index}
                  className="w-[44px] hover:bg-soft-green hover:text-white transition-all cursor-pointer h-[44px] rounded-full bg-foreshadow flex items-center justify-center"
                >
                  {index + 1}
                </div>
              ))}
              <img src="/icons/pagination-right.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
