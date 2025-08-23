import Button from "../../../../../components/Button";
import TitlePage from "../../../../../components/TitlePage";
import WrapperElement from "../../../../../components/WrapperElement";
import Title from "../../../../../components/Title";
import DetailsList from "../../../../../components/DetailsList";
import UserImage from "../../../../../components/UserImage";
import CardItemGeneral from "../../../../../components/CardItemGeneral";

export default function ManageApplicantSocialDonate() {
  return (
    <div className="flex flex-col gap-6">
      <TitlePage
        leftElement={
          <a href="/head-village/village-schedule/village-event-schedule/create-village-event-schedule">
            <Button variant="black">
              Edit Data
              <img className="w-5 lg:w-6" src="/icons/edit.svg" alt="" />
            </Button>
          </a>
        }
        title="Village Event Details"
        subTitle={
          <div className="flex items-center gap-1 flex-wrap">
            Village events
            <span className="text-dark-green font-medium">
              / village event details
            </span>
          </div>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-4 items-start">
        <WrapperElement customClass="lg:col-span-5 md:col-span-1">
          <Title subTitle="Event Information" />

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
                  Registration: : <span className="text-dark-green">Open</span>
                </p>
              </div>
            }
          />

          <hr />

          <DetailsList
            titleColor="text-soft-red"
            icon="/icons/ticket-bg.svg"
            title="Rp499.000"
            value="Event Price"
          />

          <hr />

          <DetailsList
            titleColor="text-blue"
            icon="/icons/profile-2user-blue-bg.svg"
            title="9.250 Residents"
            value="Total Participants"
          />

          <hr />

          <DetailsList
            titleColor="text-dark-green"
            icon="/icons/calendar-2-bg-square.svg"
            title="Mon, 24 Feb 2025"
            value="Implementation Date"
          />

          <hr />

          <DetailsList
            titleColor="text-aksen"
            icon="/icons/clock-bg.svg"
            title="12:30 WIB"
            value="Implementation Time"
          />

          <hr />

          <div className="flex gap-3 flex-col">
            <Title subTitle="About the Event" subTitleSizeVariant="small" />
            <p className="text-16 text-black font-medium leading-6 lg:leading-[32px]">
              Learning Technology for the Future! The village head invites all
              residents to participate in the Learn Basic HTML Together event.
              In this event, we will: <br /> - Learn the basics of HTML as a
              first step in creating websites.
              <br />
              - Learn simple web page structure. <br /> - Try making web pages
              together. Start your journey to understand the important elements
              of HTML, hands-on practice, and discover how this technology opens
              new opportunities. Don't forget to keep practicing to become more
              skilled!
            </p>
          </div>
        </WrapperElement>

        <WrapperElement customClass="lg:col-span-3 md:col-span-1">
          <Title subTitle="Latest Participants" />

          <div className="flex gap-3.5 flex-col">
            {Array.from({ length: 5 }).map((_, index) => (
              <>
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

                {index !== 4 && <hr />}
              </>
            ))}
          </div>
          <Button variant="green">View All</Button>
        </WrapperElement>
      </div>
    </div>
  );
}
