import type { ReactNode } from "react";
import Button from "../../../components/Button";
import TitlePage from "../../../components/TitlePage";
import DashboardStatus from "../../../components/DashboardStatus";
import CardItemGeneral from "../../../components/CardItemGeneral";

const stats = [
  {
    title: "Total Population",
    value: "243.000",
    icons: "/icons/stat-jumlah-penduduk.svg",
    trendUp: true,
    trendValue: "+12%",
  },
  {
    title: "Development",
    value: "42.000",
    icons: "/icons/stat-pembangunan.svg",
    trendUp: true,
    trendValue: "+12%",
  },
  {
    title: "Head House",
    value: "9.250",
    icons: "/icons/stat-kepala-rumah.svg",
    trendUp: true,
    trendValue: "+12%",
  },
  {
    title: "Total Events",
    value: "12",
    icons: "/icons/stat-total-event.svg",
    trendUp: true,
    trendValue: "+12%",
  },
];

const lastBansos: {
  type: "money" | "goods" | "other";
  value: string;
  sender: string;
  status: "Accepted" | "Rejected" | "Pending";
}[] = [
  {
    type: "money",
    value: "Rp362.500.000",
    sender: "Azam Din Abdillah",
    status: "Pending",
  },
  {
    type: "goods",
    value: "Rice 10kg",
    sender: "Azam Din Abdillah",
    status: "Accepted",
  },
  {
    type: "money",
    value: "Rp52.500.000",
    sender: "Azam Din Abdillah",
    status: "Rejected",
  },
  {
    type: "money",
    value: "Rp52.500.000",
    sender: "Azam Din Abdillah",
    status: "Accepted",
  },
];

const applicants: {
  status: "Accepted" | "Rejected" | "Pending";
  images: string;
  name: string;
  userImage: string;
  job: string;
}[] = [
  {
    images: "/images/applicant.png",
    name: "Azam Din Abdillah",
    userImage: "/images/user-applicant.png",
    job: "Applied for Main Road Development Project",
    status: "Pending",
  },
  {
    images: "/images/applicant-2.png",
    name: "Surti Jasmine",
    userImage: "/images/user-applicant.png",
    job: "Applied for Village Hall Development",
    status: "Accepted",
  },
  {
    images: "/images/applicant-3.png",
    name: "Masayoshi",
    userImage: "/images/user-applicant.png",
    job: "Applied for Village Health Center Development",
    status: "Rejected",
  },
];

const citizens: {
  color: string;
  ageRange: string;
  total: number;
  gender: string;
}[] = [
  {
    color: "#34613A",
    ageRange: "32-36",
    total: 114.21,
    gender: "Male",
  },
  {
    color: "#8ebd55",
    ageRange: "26-31",
    total: 97.2,
    gender: "Female",
  },
  {
    color: "#FA7139",
    ageRange: "6-12",
    total: 24.3,
    gender: "Children",
  },
  {
    color: "#FBAD48",
    ageRange: "0-5",
    total: 7.29,
    gender: "Toddlers",
  },
];

function StatsDashboard({
  stat,
  bodyStat,
}: {
  stat: (typeof stats)[number];
  bodyStat?: ReactNode | null;
}) {
  return (
    <div className="gap-4 lg:gap-6 flex flex-col flex-grow bg-white rounded-3xl p-6">
      <div className="flex flex-col flex-grow gap-3">
        <div className="top flex justify-between items-center gap-3">
          <h5 className="text-16 font-medium text-secondary-text-color">
            {stat.title}
          </h5>
          <img src={stat.icons} alt="" />
        </div>
        <div className="gap-1.5 flex flex-col">
          <h2 className="text-2xl lg:text-[32px] font-semibold text-black">
            {stat.value}
          </h2>
          <p className="text-14 font-medium text-secondary-text-color flex gap-1 items-center">
            <span className="text-dark-green flex gap-1 items-center">
              <img
                src={
                  stat.trendUp ? "/icons/trend-up.svg" : "/icons/trend-down.svg"
                }
                alt=""
                className="inline"
              />
              {stat.trendValue}
            </span>
            from previous month
          </p>
        </div>
      </div>
      {bodyStat ? <hr /> : ""}
      {bodyStat ? bodyStat : ""}
    </div>
  );
}

function EmptyData({ images, message }: { images: string; message: string }) {
  return (
    <div className="flex flex-col gap-4 lg:gap-6 items-center h-[200px] lg:h-[384px] justify-center">
      <img src={images} className="w-[40px] lg:w-[52px]" alt="" />
      <p className="text-16 text-secondary-text-color font-medium text-center">
        {message}
      </p>
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="gap-3.5 flex flex-col">
      <TitlePage title="Village Statistics" />

      <div className="flex flex-col gap-3.5 lg:flex-row items-start">
        <div className="gap-6 flex flex-col color-gradient-green p-6 lg:p-6 rounded-2xl lg:max-w-[380px] w-full">
          <img src="/icons/picture.svg" alt="" className="w-fit" />
          <div className="flex flex-col gap-3">
            <p className="text-xs lg:text-sm text-yellow font-medium">
              — Social Donate
            </p>
            <h1 className="text-lg lg:text-2xl text-white font-semibold">
              From Village to Residents ❤️
            </h1>
            <p className="text-sm lg:text-base text-white leading-6 font-normal">
              Realize village welfare with targeted Social Donate.
            </p>
          </div>
          <Button variant="white" customClass="w-full justify-between">
            Create Social Donate
            <img src="/icons/add-square-2.svg" alt="" />
          </Button>
        </div>

        <div className="gap-3.5 flex flex-wrap w-full">
          {stats.map((stat, index) => (
            <StatsDashboard key={index} stat={stat} bodyStat={null} />
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-7 gap-3.5">
        <div className="md:col-span-1 lg:col-span-3">
          <StatsDashboard
            stat={{
              title: "Social Donate",
              icons: "/icons/stat-bansos.svg",
              value: "192",
              trendUp: true,
              trendValue: "+12%",
            }}
            bodyStat={
              <div className="gap-4 flex flex-col w-full">
                <h1 className="text-black text-20 font-semibold">
                  Latest Social Donate
                </h1>

                <div className="gap-4 flex flex-col">
                  {lastBansos.length ? (
                    lastBansos.map((bansos, index) => (
                      <>
                        <CardItemGeneral
                          key={index}
                          image={
                            bansos.type === "money"
                              ? "/icons/stat-bansos-uang.svg"
                              : bansos.type === "goods"
                              ? "/icons/stat-bansos-barang.svg"
                              : ""
                          }
                          title={bansos.value}
                          subTitle={`Provided By ${bansos.sender}`}
                          subTitleLeft={
                            <img
                              src="/icons/profile.svg"
                              className="inline w-[15px] lg:w-[18px]"
                              alt=""
                            />
                          }
                          right={
                            <DashboardStatus
                              type={bansos.status}
                              title={bansos.status}
                            />
                          }
                        />

                        {index !== lastBansos.length - 1 && <hr />}
                      </>
                    ))
                  ) : (
                    <EmptyData
                      images="/icons/bag-cross.svg"
                      message="Oops, seems like there's no Social Donate yet"
                    />
                  )}
                </div>
              </div>
            }
          />
        </div>

        <div className="flex flex-col gap-4 lg:gap-6 bg-white rounded-3xl p-6 md:col-span-1 lg:col-span-4">
          <div className="flex flex-col gap-4">
            <div className="top flex justify-between gap-4 items-center">
              <img
                id="calendar-prev"
                className="w-[45px] lg:w-[56px] cursor-pointer hover:opacity-70 transition-all calendar-navigation"
                src="/icons/arrow-left.svg"
                alt=""
              />
              <h1
                id="calendar-month-year"
                className="text-black text-20 font-semibold"
              >
                December 2024
              </h1>
              <img
                id="calendar-next"
                className="w-[45px] lg:w-[56px] cursor-pointer hover:opacity-70 transition-all calendar-navigation"
                src="/icons/arrow-right.svg"
                alt=""
              />
            </div>
            <div id="calendar-dates" className="flex gap-4 flex-wrap">
              {/* Dates will be generated by JavaScript */}
            </div>
          </div>
          <hr />
          <div className="flex flex-col gap-4">
            <div className="top flex justify-between gap-4 items-center">
              <img
                id="event-prev"
                className="w-[20px] lg:w-[24px] cursor-pointer hover:opacity-70 transition-all event-navigation"
                src="/icons/arrow-left-plain.svg"
                alt=""
              />
              <h1
                id="event-title"
                className="text-secondary-text-color text-16 font-medium"
              >
                Upcoming Events (0)
              </h1>
              <img
                id="event-next"
                className="w-[20px] lg:w-[24px] cursor-pointer hover:opacity-70 transition-all event-navigation"
                src="/icons/arrow-right-plain.svg"
                alt=""
              />
            </div>
            <div id="event-container" className="relative">
              <div
                id="no-event"
                className="h-[280px] lg:h-[365px] w-full bg-gray-100 rounded-2xl flex items-center justify-center"
              >
                <div className="text-center">
                  <p className="text-gray-500 text-16 font-medium">
                    No events on this date
                  </p>
                </div>
              </div>
              <div id="event-display" className="relative hidden">
                <img
                  id="event-image"
                  src="/images/event.png"
                  alt=""
                  className="h-[280px] lg:h-[365px] w-full object-cover rounded-2xl"
                />
                <div className="gap-1 lg:gap-1.5 flex flex-col absolute lg:bottom-4 bottom-3 left-1/2 -translate-x-1/2 border bg-white/[0.02] backdrop-blur-[26px] border-white/[0.02] w-[93%] p-3 lg:p-4 rounded-2xl">
                  <h3
                    id="event-name"
                    className="text-20 text-white font-semibold"
                  >
                    Event Name
                  </h3>
                  <div className="flex items-center gap-1">
                    <img src="/icons/clock.svg" alt="" />
                    <span
                      id="event-time"
                      className="text-20 text-white font-semibold"
                    >
                      00:00 WIB
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="gap-3.5 flex flex-col flex-grow w-full md:col-span-1 lg:col-span-3">
          <div>
            <StatsDashboard
              stat={{
                title: "Total Applicants",
                icons: "/icons/stat-total-applicant.svg",
                value: "1.200",
                trendUp: true,
                trendValue: "+12%",
              }}
              bodyStat={
                <div className="gap-4 flex flex-col">
                  <h1 className="text-black text-20 font-semibold">
                    Latest Applicants
                  </h1>

                  <div className="gap-4 flex flex-col">
                    {applicants.length > 0 ? (
                      applicants.map((applicant, index) => (
                        <>
                          {/* <div
                            key={index}
                            className="flex gap-2 lg:gap-3 items-center"
                          >
                            <img
                              className="w-[50px] lg:w-[72px] rounded-2xl"
                              src={appliccant.images}
                              alt=""
                            />
                            <div className="flex flex-col gap-1 lg:gap-2 overflow-hidden flex-grow">
                              <div className="flex items-center gap-1 lg:gap-2">
                                <div className="bg-foreshadow rounded-full w-6 lg:w-8 overflow-hidden">
                                  <img
                                    src={appliccant.userImage}
                                    alt=""
                                    className="w-full h-full"
                                  />
                                </div>
                                <h2 className="text-black text-[15px] lg:text-[18px] font-semibold whitespace-nowrap text-ellipsis overflow-hidden">
                                  {appliccant.name}
                                </h2>
                              </div>
                              <div className="text-xs max-w-[150px] lg:max-w-full lg:text-base text-secondary-text-color font-medium whitespace-nowrap text-ellipsis overflow-hidden">
                                {appliccant.job}
                              </div>
                            </div>
                            <div className="width-fit">
                              <DashboardStatus
                                type={appliccant.status}
                                title={appliccant.status}
                              />
                            </div>
                          </div> */}

                          <CardItemGeneral
                            key={index}
                            image={applicant.images}
                            title={applicant.name}
                            titleLeft={
                              <div className="bg-foreshadow rounded-full w-6 lg:w-8 overflow-hidden">
                                <img
                                  src={applicant.userImage}
                                  alt=""
                                  className="w-full h-full"
                                />
                              </div>
                            }
                            subTitle={applicant.job}
                            right={
                              <DashboardStatus
                                type={applicant.status}
                                title={applicant.status}
                              />
                            }
                          />

                          {index !== applicants.length - 1 && <hr />}
                        </>
                      ))
                    ) : (
                      <EmptyData
                        images="/icons/note-remove.svg"
                        message="Oops, seems like there are no applicants yet"
                      />
                    )}
                  </div>
                </div>
              }
            />
          </div>

          <div className="gap-6 flex justify-between flex-wrap color-gradient-green p-6 lg:p-6 rounded-2xl w-full">
            <div className="flex flex-col gap-1 lg:gap-3">
              <p className="text-xs lg:text-sm text-yellow font-medium">
                — Download Village Data
              </p>
              <h1 className="text-lg lg:text-2xl text-white font-semibold">
                Current Village Data
              </h1>
            </div>
            <div className="">
              <Button
                variant="white"
                customClass="w-full justify-between flex-1"
              >
                Download Report
                <img src="/icons/receive-square.svg" alt="" />
              </Button>
            </div>
          </div>
        </div>

        <div className="chart w-full lg:flex-grow md:col-span-1 lg:col-span-2">
          <div className="gap-4 lg:gap-6 flex flex-col flex-grow bg-white rounded-3xl p-6">
            <div className="flex flex-col flex-grow gap-3">
              <div className="top flex justify-between items-center gap-3">
                <h5 className="text-16 font-medium text-secondary-text-color">
                  Population Statistics
                </h5>
                <img src="/icons/stat-citizen.svg" alt="" />
              </div>
            </div>

            <hr />

            <div className="w-full flex justify-center h-[288px] relative">
              <canvas id="citizen-chart"></canvas>
            </div>

            <div className="flex flex-col gap-3 lg:gap-4">
              {citizens.map((citizen, index) => (
                <>
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col gap-[2px] lg:gap-1">
                      <div className="flex gap-1 items-center">
                        <div
                          style={{
                            backgroundColor: `${citizen.color}`,
                          }}
                          className={`w-[12px] h-[12px] rounded-full`}
                        ></div>
                        <span className="text-black text-16 font-medium">
                          {citizen.gender}
                        </span>
                      </div>
                      <p className="text-14 text-secondary-text-color font-medium">
                        Age range: {citizen.ageRange} years
                      </p>
                    </div>

                    <div className="flex items-center gap-1 text-16 text-black font-medium">
                      {citizen.total}
                      <img src="/icons/user.svg" alt="" className="w-[18px]" />
                    </div>
                  </div>

                  {index !== citizens.length - 1 && <hr />}
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
