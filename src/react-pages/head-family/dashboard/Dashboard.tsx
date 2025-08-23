import Button from "../../../components/Button";
import TitlePage from "../../../components/TitlePage";
import DashboardStatus from "../../../components/DashboardStatus";
import WrapperElement from "../../../components/WrapperElement";
import Title from "../../../components/Title";
import RecentActivity from "../../../components/RecentActivity";
import DetailsList from "../../../components/DetailsList";
import PeopleCard from "../../../components/PeopleCard";

export default function Dashboard() {
  return (
    <div className="gap-3.5 flex flex-col">
      <TitlePage title="Household Stats" />
      <div className="grid grid-cols-1 md:grid-cols-7 gap-3">
        <div className="flex flex-col gap-3.5 md:col-span-3">
          <div className="gap-6 flex flex-col color-gradient-green p-6 lg:p-6 rounded-2xl w-full">
            <img src="/icons/picture.svg" alt="" className="w-fit" />
            <div className="flex flex-col gap-3">
              <p className="text-xs lg:text-sm text-yellow font-medium">
                — Social Assistance
              </p>
              <h1 className="text-lg lg:text-2xl text-white font-semibold">
                From Village to Residents ❤️
              </h1>
              <p className="text-sm lg:text-base text-white leading-6 font-normal">
                Realize village welfare with targeted social assistance.
              </p>
            </div>
            <Button variant="white" customClass="w-full !justify-between">
              Apply for Social Assistance
              <img src="/icons/add-square-2.svg" alt="" />
            </Button>
          </div>

          <WrapperElement>
            <Title
              subTitle="Events Joined"
              title="222 "
              icon="/icons/calendar-2-bg.svg"
            />

            <hr />

            <div className="flex flex-col gap-3 lg:gap-4">
              <Title subTitle="Latest Events" />

              {Array.from({ length: 2 }).map((_, index) => (
                <RecentActivity
                  key={index}
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
              ))}
            </div>
          </WrapperElement>

          <WrapperElement>
            <Title
              subTitle="Development"
              title="5 Applicants"
              icon="/icons/calendar-2-bg.svg"
            />

            <hr />

            <div className="flex flex-col gap-3 lg:gap-4">
              <Title subTitle="Latest Events" />

              {Array.from({ length: 2 }).map((_, index) => (
                <div
                  key={index}
                  className="gap-4 flex-col flex rounded-2xl border border-bg-color p-3 lg:p-4"
                >
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
              ))}
            </div>
          </WrapperElement>
        </div>

        <div className="flex flex-col gap-3.5 md:col-span-4">
          <WrapperElement>
            <Title
              subTitle="Family Members"
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
                        National Identification Number:
                      </p>
                    </div>
                    <p className="text-16 text-black font-medium">
                      27192018210818291
                    </p>
                  </div>
                </div>

                {/* <RecentActivity
                  bottomLeft="Event Price:"
                  bottomRight={
                    <p className="text-16 text-black font-medium">
                      27192018210818291
                    </p>
                  }
                  image="/images/user-2.png"
                  date="Wed, 1 Jan 2025"
                  right={
                    <p className="text-16 font-medium text-black">32 yrs</p>
                  }
                  title="Learn Basic HTML Together"
                  subTitle={
                    <div className="gap-1 flex items-center">
                      <img
                        src="/icons/briefcase.svg"
                        alt=""
                        className="w-3.5 lg:w-4.5"
                      />
                      <p className="text-secondary-text-color text-14 font-medium">
                        Vehicle Mechanic
                      </p>
                    </div>
                  }
                /> */}
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
                          National Identification Number:
                        </p>
                      </div>
                      <p className="text-16 text-black font-medium">
                        27192018210818291
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Button variant="green">See All</Button>
            </div>
          </WrapperElement>

          <WrapperElement>
            <Title
              subTitle="Social Assistance"
              title="12 Applications"
              icon="/icons/note-bg.svg"
            />

            <hr />

            <div className="flex flex-col gap-3 lg:gap-4">
              <Title subTitle="Latest Social Assistance" />

              {Array.from({ length: 2 }).map((_, index) => (
                <RecentActivity
                  key={index}
                  bottomLeft="Application Amount:"
                  bottomRight="Rp2.500.000"
                  image="/icons/money.svg"
                  date="Tue, 25 Dec 2024"
                  mainTitle="Assistance for the Underprivileged"
                  title="Rp120.000.000"
                  subTitle="Application Amount"
                  right={<DashboardStatus type={"Pending"} title={"Pending"} />}
                />
              ))}
            </div>
          </WrapperElement>

          <div className="gap-6 flex flex-col color-gradient-green p-6 lg:p-6 rounded-2xl w-full">
            <div className="flex gap-4 items-center">
              <img src="/icons/statistik-bg.svg" alt="" className="w-fit" />
              <div className="flex flex-col gap-1">
                <p className="text-xs lg:text-sm text-yellow font-medium">
                  — Download Household Stats
                </p>
                <h1 className="text-lg lg:text-2xl text-white font-semibold">
                  Household Statistics
                </h1>
              </div>
            </div>
            <Button variant="white" customClass="w-full !justify-between">
              Download Report
              <img src="/icons/receive-square.svg" alt="" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
