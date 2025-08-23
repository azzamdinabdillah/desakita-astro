import TitlePage from "../../../../components/TitlePage";
import Button from "../../../../components/Button";
import WrapperElement from "../../../../components/WrapperElement";
import DashboardStatus from "../../../../components/DashboardStatus";
import DetailsList from "../../../../components/DetailsList";
import Title from "../../../../components/Title";
import PeopleCard from "../../../../components/PeopleCard";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { useState } from "react";
import Modal from "../../../../components/Modal";
import RecentActivity from "../../../../components/RecentActivity";

const headDetail = [
  {
    title: "20051005922001005",
    value: "National Identification Number",
    icon: "/icons/detail-list-nik.svg",
  },
  {
    title: "42 Years",
    value: "Head of Household Age",
    icon: "/icons/detail-list-umur.svg",
  },
  {
    title: "Male",
    value: "Gender",
    icon: "/icons/detail-list-gender.svg",
  },
  {
    title: "fransutomo@desadigital.com",
    value: "Email Address",
    icon: "/icons/detail-list-email.svg",
  },
  {
    title: "083212349000",
    value: "Phone Number",
    icon: "/icons/detail-list-nomorhp.svg",
  },
];

export default function ManageHeadHouse() {
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
        header="Delete Head of Household?"
        isOpen={isOpenModal}
        setIsOpen={setIsOpenModal}
      />
      <TitlePage
        title="Manage Head of Household"
        subTitle={
          <div className="flex items-center gap-1">
            Head of Household
            <span className="text-dark-green font-medium">
              / Manage Head of Household
            </span>
          </div>
        }
        leftElement={
          <Button
            dataOpenModal="modal-delete"
            onClick={() => setIsOpenModal(true)}
            variant="pink"
          >
            Delete Data
            <img className="w-5 lg:w-6" src="/icons/trash.svg" alt="" />
          </Button>
        }
      />

      <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-5 items-start gap-3.5">
        <div className="flex flex-col gap-3.5 lg:flex-grow md:col-span-1 lg:col-span-3 w-full">
          <WrapperElement>
            <Title subTitle="Head of Household" />

            <PeopleCard
              image="/images/user-2.png"
              name="Andi Alif Baro"
              job="Vehicle Mechanic"
              right={<DashboardStatus title="Married" type="softGreen" />}
            />

            <hr />

            {headDetail.map((data, index) => (
              <>
                <DetailsList
                  key={index}
                  icon={data.icon}
                  title={data.title}
                  value={data.value}
                />

                {index !== headDetail.length - 1 && <hr />}
              </>
            ))}
          </WrapperElement>

          <WrapperElement>
            <Title
              subTitle="Head of Household"
              title="3"
              icon="/icons/profile-bg.svg"
            />

            <hr />

            <div className="gap-5 lg:gap-6 flex flex-col">
              <div className="gap-3.5 flex flex-col">
                <Title subTitle="Wife (1)" />

                <div className="border border-bg-color rounded-2xl flex flex-col gap-4 lg:gap-6 p-3 lg:p-4">
                  <PeopleCard
                    image="/images/user-2.png"
                    name="Andi Alif Baro"
                    job="Vehicle Mechanic"
                    right={
                      <p className="text-16 font-medium text-black">32 yrs</p>
                    }
                  />

                  <hr />

                  <div className="flex justify-between items-center flex-wrap gap-1">
                    <div className="flex gap-1 items-center">
                      <img src="/icons/keyboard.svg" alt="" />
                      <p className="text-14 font-medium text-secondary-text-color">
                        National Identification Number :
                      </p>
                    </div>
                    <p className="text-16 text-black font-medium">
                      27192018210818291
                    </p>
                  </div>
                </div>
              </div>

              <div className="gap-3.5 flex flex-col">
                <Title subTitle="Children (2)" />

                {Array.from({ length: 2 }).map((_, index) => (
                  <div
                    key={index}
                    className="border border-bg-color rounded-2xl flex flex-col gap-4 lg:gap-6 p-3 lg:p-4"
                  >
                    <PeopleCard
                      image="/images/user-3.png"
                      name="Karin Icshan"
                      job="Student"
                      right={
                        <p className="text-16 font-medium text-black">24 yrs</p>
                      }
                    />

                    <hr />

                    <div className="flex justify-between items-center flex-wrap gap-1">
                      <div className="flex gap-1 items-center">
                        <img src="/icons/keyboard.svg" alt="" />
                        <p className="text-14 font-medium text-secondary-text-color">
                          National Identification Number :
                        </p>
                      </div>
                      <p className="text-16 text-black font-medium">
                        27192018210818291
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </WrapperElement>
        </div>

        <div className="flex flex-col gap-3.5 md:col-span-1 lg:col-span-2 w-full">
          <WrapperElement>
            <Title subTitle="Recent Activities" />

            <div className="" data-rttabs="true">
              <div className="flex flex-wrap gap-3 items-center" role="tablist">
                {["Social Assistance", "Events", "Applicants"].map(
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

              <div
                role="tabpanel"
                className="gap-4 flex flex-col lg:gap-6 mt-4 lg:mt-6 react-tabs__tab-panel--selected"
              >
                <RecentActivity
                  bottomLeft="Application Amount:"
                  bottomRight="Rp2.500.000"
                  image="/icons/money.svg"
                  date="Tue, 25 Dec 2024"
                  mainTitle="Assistance for the Underprivileged"
                  title="Rp120.000.000"
                  subTitle="Application Amount"
                  right={<DashboardStatus type={"Pending"} title={"Pending"} />}
                />
                <RecentActivity
                  bottomLeft="Application Amount:"
                  bottomRight="Rice 2kg"
                  image="/icons/bag-2.svg"
                  date="Tue, 31 Dec 2024"
                  mainTitle="Daily Food Assistance"
                  title="Rice 200 Tons"
                  subTitle="Basic Necessities"
                  right={
                    <DashboardStatus type={"Accepted"} title={"Accepted"} />
                  }
                />
                <RecentActivity
                  bottomLeft="Application Amount:"
                  bottomRight="Milk 200ml"
                  image="/icons/bag-2.svg"
                  date="Tue, 12 Dec 2024"
                  mainTitle="Assistance for malnourished children"
                  title="Milk 200 Liters"
                  subTitle="Basic Necessities"
                  right={
                    <DashboardStatus type={"Rejected"} title={"Rejected"} />
                  }
                />
              </div>
              <div
                role="tabpanel"
                className="gap-4 flex-col lg:gap-6 hidden mt-4 lg:mt-6"
              >
                <RecentActivity
                  bottomLeft="Event Price:"
                  bottomRight="Rp49.000"
                  image="/images/event-2.png"
                  date="Wed, 1 Jan 2025"
                  title="Learn Basic HTML Together"
                  subTitle={
                    <div className="gap-1 flex items-center">
                      <img
                        src="/icons/profile-2user-red.svg"
                        alt=""
                        className="w-3.5 lg:w-4.5"
                      />
                      <p className="text-[#FA7139] text-14 font-medium">
                        <span className="font-semibold">9210</span> total
                        participants
                      </p>
                    </div>
                  }
                />
                <RecentActivity
                  bottomLeft="Event Price:"
                  bottomRight="Rp49.000"
                  image="/images/event-2.png"
                  date="Fri, 3 Jan 2025"
                  title="From Village to Digital World: Workshop"
                  subTitle={
                    <div className="gap-1 flex items-center">
                      <img
                        src="/icons/profile-2user-red.svg"
                        alt=""
                        className="w-3.5 lg:w-4.5"
                      />
                      <p className="text-[#FA7139] text-14 font-medium">
                        <span className="font-semibold">9210</span> total
                        participants
                      </p>
                    </div>
                  }
                />
                <RecentActivity
                  bottomLeft="Event Price:"
                  bottomRight="Rp49.000"
                  image="/images/event-2.png"
                  date="Sun, 21 Dec 2024"
                  title="Understanding AI: Exploring the World of Intelligence"
                  subTitle={
                    <div className="gap-1 flex items-center">
                      <img
                        src="/icons/profile-2user-red.svg"
                        alt=""
                        className="w-3.5 lg:w-4.5"
                      />
                      <p className="text-[#FA7139] text-14 font-medium">
                        <span className="font-semibold">9210</span> total
                        participants
                      </p>
                    </div>
                  }
                />
              </div>
              <div role="tabpanel" className="hidden mt-4 lg:mt-6">
                <div className="flex flex-col gap-4 lg:gap-6 w-full">
                  <div className="gap-4 flex-col flex rounded-2xl border border-bg-color p-3 lg:p-4">
                    <div className="top flex justify-between items-center">
                      <img
                        src="/images/image.png"
                        alt="image applicant"
                        className="w-[80px] h-[60px] object-cover rounded-2xl"
                      />
                      <DashboardStatus title="Pending" type="Pending" />
                    </div>
                    <div>
                      <h2 className="text-16 font-semibold text-black">
                        Main Road Development
                      </h2>
                      <p className="text-16 font-medium text-secondary-text-color">
                        Person in charge:{" "}
                        <span className="font-semibold text-dark-green">
                          Uzumaki Asep
                        </span>
                      </p>
                    </div>

                    <hr />

                    <DetailsList
                      titleColor="text-dark-green"
                      icon="/icons/calendar-2-bg.svg"
                      title="3 Jan 2025"
                      value="Implementation Date"
                    />

                    <hr />

                    <DetailsList
                      titleColor="text-dark-green"
                      icon="/icons/calendar-2-bg.svg"
                      title="24 Days"
                      value="Implementation Duration"
                    />
                  </div>

                  <div className="gap-4 flex-col flex rounded-2xl border border-bg-color p-3 lg:p-4">
                    <div className="top flex justify-between items-center">
                      <img
                        src="/images/image.png"
                        alt="image applicant"
                        className="w-[80px] h-[60px] object-cover rounded-2xl"
                      />
                      <DashboardStatus title="Rejected" type="Rejected" />
                    </div>
                    <div>
                      <h2 className="text-16 font-semibold text-black">
                        Main Road Development
                      </h2>
                      <p className="text-16 font-medium text-secondary-text-color">
                        Person in charge:{" "}
                        <span className="font-semibold text-dark-green">
                          Uzumaki Asep
                        </span>
                      </p>
                    </div>

                    <hr />

                    <DetailsList
                      titleColor="text-dark-green"
                      icon="/icons/calendar-2-bg.svg"
                      title="3 Jan 2025"
                      value="Implementation Date"
                    />

                    <hr />

                    <DetailsList
                      titleColor="text-dark-green"
                      icon="/icons/calendar-2-bg.svg"
                      title="24 Days"
                      value="Implementation Duration"
                    />
                  </div>
                </div>
              </div>
            </div>
          </WrapperElement>
          {/* <WrapperElement>
            <Title subTitle="Aktivitas Terbaru" />

            <Tabs className="">
              <TabList className="flex flex-wrap gap-3 items-center">
                {["Bansos", "Events", "Applicants"].map((tab, index) => (
                  <Tab
                    key={index}
                    selectedClassName="bg-black text-white"
                    className="text-16 lg:flex-grow cursor-pointer hover:bg-black hover:text-white transition-all text-secondary-text-color font-medium py-2.5 px-5 flex justify-center items-center lg:py-2.5 lg:px-4.5 rounded-full border border-bg-color"
                  >
                    {tab}
                  </Tab>
                ))}
              </TabList>

              <TabPanel className="gap-4 flex flex-col lg:gap-6 mt-4 lg:mt-6">
                <RecentActivity
                  bottomLeft="Nominal Pengajuan:"
                  bottomRight="Rp2.500.000"
                  image="/icons/money.svg"
                  date="Tue, 25 Dec 2024"
                  mainTitle="Bantuan Untuk Rakyat Kurang Mampu"
                  title="Rp120.000.000"
                  subTitle="Nominal Pengajuan"
                  right={
                    <DashboardStatus type={"Menunggu"} title={"Menunggu"} />
                  }
                />
                <RecentActivity
                  bottomLeft="Nominal Pengajuan:"
                  bottomRight="Beras 2kg"
                  image="/icons/bag-2.svg"
                  date="Tue, 31 Dec 2024"
                  mainTitle="Bantuan Pangan Sehari-hari"
                  title="Beras 200 Ton"
                  subTitle="Bahan Pokok"
                  right={
                    <DashboardStatus type={"Diterima"} title={"Diterima"} />
                  }
                />
                <RecentActivity
                  bottomLeft="Nominal Pengajuan:"
                  bottomRight="Susu 200ml"
                  image="/icons/bag-2.svg"
                  date="Tue, 12 Dec 2024"
                  mainTitle="Bantuan Untuk anak kurang gizi"
                  title="Susu 200 Liter"
                  subTitle="Bahan Pokok"
                  right={<DashboardStatus type={"Ditolak"} title={"Ditolak"} />}
                />
              </TabPanel>
              <TabPanel className="gap-4 flex flex-col lg:gap-6">
                <RecentActivity
                  bottomLeft="Harga Event:"
                  bottomRight="Rp49.000"
                  image="/images/event-2.png"
                  date="Wed, 1 Jan 2025"
                  title="Belajar HTML Dasar Bersama"
                  subTitle={
                    <div className="gap-1 flex items-center">
                      <img
                        src="/icons/profile-2user-red.svg"
                        alt=""
                        className="w-3.5 lg:w-4.5"
                      />
                      <p className="text-[#FA7139] text-14 font-medium">
                        <span className="font-semibold">9210</span> total
                        partisipasi
                      </p>
                    </div>
                  }
                />
                <RecentActivity
                  bottomLeft="Harga Event:"
                  bottomRight="Rp49.000"
                  image="/images/event-2.png"
                  date="Fri, 3 Jan 2025"
                  title="Dari Desa ke dunia digital: workshop"
                  subTitle={
                    <div className="gap-1 flex items-center">
                      <img
                        src="/icons/profile-2user-red.svg"
                        alt=""
                        className="w-3.5 lg:w-4.5"
                      />
                      <p className="text-[#FA7139] text-14 font-medium">
                        <span className="font-semibold">9210</span> total
                        partisipasi
                      </p>
                    </div>
                  }
                />
                <RecentActivity
                  bottomLeft="Harga Event:"
                  bottomRight="Rp49.000"
                  image="/images/event-2.png"
                  date="Sun, 21 Dec 2024"
                  title="Mengenal AI: Menjelajah dunia Kecerdasan"
                  subTitle={
                    <div className="gap-1 flex items-center">
                      <img
                        src="/icons/profile-2user-red.svg"
                        alt=""
                        className="w-3.5 lg:w-4.5"
                      />
                      <p className="text-[#FA7139] text-14 font-medium">
                        <span className="font-semibold">9210</span> total
                        partisipasi
                      </p>
                    </div>
                  }
                />
              </TabPanel>
              <TabPanel>
                <div className="flex flex-col gap-4 lg:gap-6">
                  <div className="gap-4 flex-col flex rounded-2xl border border-bg-color p-3 lg:p-4">
                    <div className="top flex justify-between items-center">
                      <img
                        src="/images/image.png"
                        alt="image applicant"
                        className="w-[80px] h-[60px] object-cover rounded-2xl"
                      />
                      <DashboardStatus title="Menunggu" type="Menunggu" />
                    </div>
                    <div>
                      <h2 className="text-16 font-semibold text-black">
                        Pembangunan Jalanan Utama
                      </h2>
                      <p className="text-16 font-medium text-secondary-text-color">
                        Penanggung jawab:{" "}
                        <span className="font-semibold text-dark-green">
                          Uzumaki Asep
                        </span>
                      </p>
                    </div>

                    <hr />

                    <DetailsList
                      titleColor="text-dark-green"
                      icon="/icons/calendar-2-bg.svg"
                      title="3 Jan 2025"
                      value="Tanggal Pelaksanaan"
                    />

                    <hr />

                    <DetailsList
                      titleColor="text-dark-green"
                      icon="/icons/calendar-2-bg.svg"
                      title="24 Hari"
                      value="Waktu Pelaksanaan"
                    />
                  </div>

                  <div className="gap-4 flex-col flex rounded-2xl border border-bg-color p-3 lg:p-4">
                    <div className="top flex justify-between items-center">
                      <img
                        src="/images/image.png"
                        alt="image applicant"
                        className="w-[80px] h-[60px] object-cover rounded-2xl"
                      />
                      <DashboardStatus title="Ditolak" type="Ditolak" />
                    </div>
                    <div>
                      <h2 className="text-16 font-semibold text-black">
                        Pembangunan Jalanan Utama
                      </h2>
                      <p className="text-16 font-medium text-secondary-text-color">
                        Penanggung jawab:{" "}
                        <span className="font-semibold text-dark-green">
                          Uzumaki Asep
                        </span>
                      </p>
                    </div>

                    <hr />

                    <DetailsList
                      titleColor="text-dark-green"
                      icon="/icons/calendar-2-bg.svg"
                      title="3 Jan 2025"
                      value="Tanggal Pelaksanaan"
                    />

                    <hr />

                    <DetailsList
                      titleColor="text-dark-green"
                      icon="/icons/calendar-2-bg.svg"
                      title="24 Hari"
                      value="Waktu Pelaksanaan"
                    />
                  </div>
                </div>
              </TabPanel>
            </Tabs>
          </WrapperElement> */}
        </div>
      </div>
    </div>
  );
}
