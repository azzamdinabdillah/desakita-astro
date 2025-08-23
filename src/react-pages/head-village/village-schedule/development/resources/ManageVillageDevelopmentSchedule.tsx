import { useState } from "react";
import Button from "../../../../../components/Button";
import Modal from "../../../../../components/Modal";
import TitlePage from "../../../../../components/TitlePage";
import WrapperElement from "../../../../../components/WrapperElement";
import Title from "../../../../../components/Title";
import DashboardStatus from "../../../../../components/DashboardStatus";
import DetailsList from "../../../../../components/DetailsList";
import UserImage from "../../../../../components/UserImage";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

export default function ManageVillageDevelopmentSchedule() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div className="flex flex-col gap-6">
      <Modal
        id="modal-delete"
        confirmButtonElement={
          <Button variant="pink" customClass="flex-grow">
            <img src="/icons/trash.svg" alt="" />
            Yes Delete
          </Button>
        }
        message="This action is permanent and cannot be undone!"
        header="Delete Development Schedule?"
        isOpen={isOpenModal}
        setIsOpen={setIsOpenModal}
      />
      <TitlePage
        title="Village Development Details"
        subTitle={
          <div className="flex items-center gap-1 flex-wrap">
            Village Development
            <span className="text-dark-green font-medium">
              / development details
            </span>
          </div>
        }
        leftElement={
          <div className="flex gap-3">
            <Button
              dataOpenModal="modal-delete"
              onClick={() => setIsOpenModal(true)}
              variant="pink"
            >
              Delete Data
              <img className="w-5 lg:w-6" src="/icons/trash.svg" alt="" />
            </Button>
            <a href="/head-village/village-schedule/village-development-schedule/create-village-development-schedule">
              <Button variant="black">
                Edit Data
                <img className="w-5 lg:w-6" src="/icons/edit.svg" alt="" />
              </Button>
            </a>
          </div>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 items-start">
        <WrapperElement>
          <Title subTitle="Social Donate Information" />

          <div className="flex justify-between items-center">
            <img
              src="/images/event-3.png"
              alt=""
              className="w-[100px] h-[80px] lg:w-[120px] lg:h-[100px] rounded-2xl object-cover"
            />
            <DashboardStatus title="Not Started" type="accent" />
          </div>

          <div className="flex flex-col gap-1.5">
            <h2 className="text-black font-semibold text-20 leading-6">
              Main Road Development
            </h2>
            <div className="gap-1 flex items-center">
              <img src="/icons/user-square.svg" alt="" />
              <p className="font-medium text-14 text-secondary-text-color">
                Person in charge : <span>Uzumaki Asep</span>
              </p>
            </div>
          </div>

          <hr />

          <div className="flex justify-between items-center flex-wrap gap-4">
            <DetailsList
              titleColor="text-soft-red"
              icon="/icons/wallet-3.svg"
              title="Rp499.000"
              value="Development Fund"
            />

            <DashboardStatus title="Available" type="softGreen" />
          </div>

          <hr />

          <div className="flex flex-wrap justify-between items-center gap-4">
            <DetailsList
              titleColor="text-dark-green"
              icon="/icons/calendar-2-bg-square.svg"
              title="Mon, 24 Feb 2025"
              value="Implementation Date"
            />

            <DetailsList
              customClass="md:flex-row-reverse"
              titleColor="text-dark-green"
              icon="/icons/calendar-tick-bg.svg"
              title="Wed, 3 Sep 2025"
              value="Estimated Completion"
            />
          </div>

          <hr />

          <div className="flex flex-wrap justify-between items-center gap-4">
            <DetailsList
              titleColor="text-aksen"
              icon="/icons/clock-bg.svg"
              title="12:30 WIB"
              value="Implementation Time"
            />

            <DetailsList
              customClass="md:flex-row-reverse"
              titleColor="text-aksen"
              icon="/icons/timer-bg.svg"
              title="192 Days"
              value="Days Required"
            />
          </div>

          <hr />

          <DetailsList
            titleColor="text-blue"
            icon="/icons/profile-2user-blue-bg.svg"
            title="9.250 Residents"
            value="Total Participation"
          />

          <hr />

          <div className="flex gap-3 flex-col">
            <h3 className="font-medium text-secondary-text-color text-14">
              About the Development
            </h3>
            <p className="text-16 text-black font-medium leading-6 lg:leading-[32px]">
              Main Road Development is a strategic step to improve community
              accessibility and mobility. This project aims to improve
              connectivity between regions, support local economic activities,
              and create infrastructure that is more safe and comfortable for
              road users.
            </p>
          </div>
        </WrapperElement>

        <div data-rttabs="true">
          <WrapperElement>
            <div className="flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center">
              <Title
                customClass="flex-col gap-4 items-start lg:flex-row lg:items-center lg:justify-between"
                subTitle="Latest Social Donate Recipients"
              />

              <div className="lg:flex-grow">
                <div
                  className="flex flex-wrap gap-3 items-center lg:justify-end"
                  role="tablist"
                >
                  {["All", "Pending", "Accepted", "Rejected"].map(
                    (tab, index) => (
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
                    )
                  )}
                </div>
              </div>
            </div>

            <div
              role="tabpanel"
              className="tabpanel gap-4 flex flex-col lg:gap-6 react-tabs__tab-panel--selected"
            >
              <div className="flex gap-4 lg:gap-6 flex-col w-full rounded-2xl border border-bg-color p-3 lg:p-4">
                <div className="flex justify-between items-center">
                  <div className="flex text-14 font-medium text-secondary-text-color items-center gap-1">
                    <img src="/icons/calendar-2.svg" alt="" />
                    <p>Tue, 09 Jan 2025 </p>
                  </div>

                  <DashboardStatus title="Pending" type="Pending" />
                </div>

                <hr />

                <div className="flex w-full gap-6 flex-col lg:gap-4 lg:grid lg:grid-cols-3 whitespace-nowrap">
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
                    <div className="flex flex-col gap-1">
                      <div className="flex gap-1 items-center">
                        <img src="/icons/keyboard.svg" alt="" />
                        <p className="text-secondary-text-color text-14 font-medium">
                          NIK
                        </p>
                      </div>

                      <p className="text-black text-16 font-medium">
                        30183910948390193
                      </p>
                    </div>
                  </div>

                  <div className="w-full flex-grow">
                    <div className="gap-3 flex justify-end">
                      <Button
                        variant="grayTextRed"
                        customClass="w-full lg:w-[35%]"
                      >
                        Reject
                      </Button>
                      <Button variant="green" customClass="w-full lg:w-[35%]">
                        Approve
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 lg:gap-6 flex-col w-full rounded-2xl border border-bg-color p-3 lg:p-4">
                <div className="flex justify-between items-center">
                  <div className="flex text-14 font-medium text-secondary-text-color items-center gap-1">
                    <img src="/icons/calendar-2.svg" alt="" />
                    <p>Tue, 09 Jan 2025 </p>
                  </div>

                  <DashboardStatus title="Accepted" type="Accepted" />
                </div>

                <hr />

                <div className="flex w-full gap-6 flex-col lg:gap-4 lg:grid lg:grid-cols-3 whitespace-nowrap">
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
                    <div className="flex flex-col gap-1">
                      <div className="flex gap-1 items-center">
                        <img src="/icons/keyboard.svg" alt="" />
                        <p className="text-secondary-text-color text-14 font-medium">
                          NIK
                        </p>
                      </div>

                      <p className="text-black text-16 font-medium">
                        30183910948390193
                      </p>
                    </div>
                  </div>

                  <div className="w-full flex-grow">
                    <Button
                      variant="black"
                      customClass="w-full lg:w-[70%] ml-auto"
                    >
                      Manage
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 lg:gap-6 flex-col w-full rounded-2xl border border-bg-color p-3 lg:p-4">
                <div className="flex justify-between items-center">
                  <div className="flex text-14 font-medium text-secondary-text-color items-center gap-1">
                    <img src="/icons/calendar-2.svg" alt="" />
                    <p>Tue, 09 Jan 2025 </p>
                  </div>

                  <DashboardStatus title="Rejected" type="Rejected" />
                </div>

                <hr />

                <div className="flex w-full gap-6 flex-col lg:gap-4 lg:grid lg:grid-cols-3 whitespace-nowrap">
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
                    <div className="flex flex-col gap-1">
                      <div className="flex gap-1 items-center">
                        <img src="/icons/keyboard.svg" alt="" />
                        <p className="text-secondary-text-color text-14 font-medium">
                          NIK
                        </p>
                      </div>

                      <p className="text-black text-16 font-medium">
                        30183910948390193
                      </p>
                    </div>
                  </div>

                  <div className="w-full flex-grow">
                    <Button
                      variant="black"
                      customClass="w-full lg:w-[70%] ml-auto"
                    >
                      Manage
                    </Button>
                  </div>
                </div>
              </div>

              <Button variant="green">View All</Button>
            </div>

            <div
              role="tabpanel"
              className="tabpanel gap-4 flex-col lg:gap-6 hidden"
            >
              {Array.from({ length: 4 }, (_, index) => (
                <div
                  className="flex gap-4 lg:gap-6 flex-col w-full rounded-2xl border border-bg-color p-3 lg:p-4"
                  key={index}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex text-14 font-medium text-secondary-text-color items-center gap-1">
                      <img src="/icons/calendar-2.svg" alt="" />
                      <p>Tue, 09 Jan 2025 </p>
                    </div>

                    <DashboardStatus title="Pending" type="Pending" />
                  </div>

                  <hr />

                  <div className="flex w-full gap-6 flex-col lg:gap-4 lg:grid lg:grid-cols-3 whitespace-nowrap">
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
                      <div className="flex flex-col gap-1">
                        <div className="flex gap-1 items-center">
                          <img src="/icons/keyboard.svg" alt="" />
                          <p className="text-secondary-text-color text-14 font-medium">
                            NIK
                          </p>
                        </div>

                        <p className="text-black text-16 font-medium">
                          30183910948390193
                        </p>
                      </div>
                    </div>

                    <div className="w-full flex-grow">
                      <div className="gap-3 flex justify-end">
                        <Button
                          variant="grayTextRed"
                          customClass="w-full lg:w-[35%]"
                        >
                          Reject
                        </Button>
                        <Button variant="green" customClass="w-full lg:w-[35%]">
                          Approve
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <Button variant="green">View All</Button>
            </div>

            <div
              role="tabpanel"
              className="tabpanel gap-4 flex-col lg:gap-6 hidden"
            >
              {Array.from({ length: 2 }, (_, index) => (
                <div
                  className="flex gap-4 lg:gap-6 flex-col w-full rounded-2xl border border-bg-color p-3 lg:p-4"
                  key={index}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex text-14 font-medium text-secondary-text-color items-center gap-1">
                      <img src="/icons/calendar-2.svg" alt="" />
                      <p>Tue, 09 Jan 2025 </p>
                    </div>

                    <DashboardStatus title="Accepted" type="Accepted" />
                  </div>

                  <hr />

                  <div className="flex w-full gap-6 flex-col lg:gap-4 lg:grid lg:grid-cols-3 whitespace-nowrap">
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
                      <div className="flex flex-col gap-1">
                        <div className="flex gap-1 items-center">
                          <img src="/icons/keyboard.svg" alt="" />
                          <p className="text-secondary-text-color text-14 font-medium">
                            NIK
                          </p>
                        </div>

                        <p className="text-black text-16 font-medium">
                          30183910948390193
                        </p>
                      </div>
                    </div>

                    <div className="w-full flex-grow">
                      <Button
                        variant="black"
                        customClass="w-full lg:w-[70%] ml-auto"
                      >
                        Manage
                      </Button>
                    </div>
                  </div>
                </div>
              ))}

              <Button variant="green">View All</Button>
            </div>

            <div
              role="tabpanel"
              className="tabpanel gap-4 flex-col lg:gap-6 hidden"
            >
              {Array.from({ length: 1 }, (_, index) => (
                <div
                  className="flex gap-4 lg:gap-6 flex-col w-full rounded-2xl border border-bg-color p-3 lg:p-4"
                  key={index}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex text-14 font-medium text-secondary-text-color items-center gap-1">
                      <img src="/icons/calendar-2.svg" alt="" />
                      <p>Tue, 09 Jan 2025 </p>
                    </div>

                    <DashboardStatus title="Rejected" type="Rejected" />
                  </div>

                  <hr />

                  <div className="flex w-full gap-6 flex-col lg:gap-4 lg:grid lg:grid-cols-3 whitespace-nowrap">
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
                      <div className="flex flex-col gap-1">
                        <div className="flex gap-1 items-center">
                          <img src="/icons/keyboard.svg" alt="" />
                          <p className="text-secondary-text-color text-14 font-medium">
                            NIK
                          </p>
                        </div>

                        <p className="text-black text-16 font-medium">
                          30183910948390193
                        </p>
                      </div>
                    </div>

                    <div className="w-full flex-grow">
                      <Button
                        variant="black"
                        customClass="w-full lg:w-[70%] ml-auto"
                      >
                        Manage
                      </Button>
                    </div>
                  </div>
                </div>
              ))}

              <Button variant="green">View All</Button>
            </div>
          </WrapperElement>
        </div>
      </div>
    </div>
  );
}
