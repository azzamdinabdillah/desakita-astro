import TitlePage from "../../../../components/TitlePage";
import WrapperElement from "@components/WrapperElement";
import Title from "../../../../components/Title";
import DetailsList from "../../../../components/DetailsList";
import CardItemGeneral from "../../../../components/CardItemGeneral";
import Button from "../../../../components/Button";

export default function DetailsVillageEventSchedule() {
  return (
    <div className="flex flex-col gap-6">
      <TitlePage
        title="Village Event Details"
        subTitle={
          <div className="flex items-center gap-1 flex-wrap">
            Village Events
            <span className="text-dark-green font-medium">
              / Village Event Details
            </span>
          </div>
        }
      />

      <div className="grid grid-cols-1 gap-4 items-start md:grid-cols-10">
        <WrapperElement customClass="md:col-span-5 lg:col-span-6">
          <Title subTitle="Event Details" subTitleSizeVariant="small" />

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
                  Registration: <span className="text-dark-green">Open</span>
                </p>
              </div>
            }
          />

          <hr />

          <DetailsList
            titleColor="text-blue"
            icon="/icons/profile-2user-blue-bg.svg"
            title="9,250 Residents"
            value="Total Participants"
          />

          <hr />

          <DetailsList
            titleColor="text-dark-green"
            icon="/icons/calendar-2-bg-square.svg"
            title="Mon, 24 Feb 2025"
            value="Event Date"
          />

          <hr />

          <DetailsList
            titleColor="text-aksen"
            icon="/icons/clock-bg.svg"
            title="12:30 WIB"
            value="Event Time"
          />

          <hr />

          <div className="flex gap-3 flex-col">
            <Title subTitle="About the Event" subTitleSizeVariant="small" />
            <p className="text-16 text-black font-medium leading-6 lg:leading-[32px]">
              Learn Technology for the Future! The village head invites all residents to join the Learn Basic HTML Together event. In this event, we will: <br /> - Get to know the basics of HTML as the first step to creating a website.
              <br />
              - Learn the simple structure of a web page. <br /> - Try creating a web page together. Start your journey to understand the essential elements of HTML, practice directly, and discover how this technology opens up new opportunities. Don't forget to keep practicing to become more proficient!
            </p>
          </div>
        </WrapperElement>

        <WrapperElement customClass="md:col-span-5 lg:col-span-4">
          <Title subTitle="Payment Details" subTitleSizeVariant="small" />

          <div className="flex justify-between items-center gap-3 flex-wrap">
            <DetailsList
              titleColor="text-soft-red"
              icon="/icons/ticket-bg.svg"
              title="Rp499,000"
              value="Event Price"
            />

            <div className="flex items-center gap-3 border border-bg-color py-2 px-3 lg:py-3 lg:px-4 rounded-2xl">
              <img
                src="/icons/minus-square.svg"
                alt=""
                className="w-5 lg:w-6"
              />
              <p className="text-lg text-black font-medium lg:text-[22px]">1</p>
              <img
                src="/icons/add-square-gray.svg"
                alt=""
                className="w-5 lg:w-6"
              />
            </div>
          </div>

          <hr />

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1.5">
              <img src="/icons/receipt-2.svg" alt="" className="w-5 lg:w-6" />
              <p className="text-14 text-secondary-text-color font-medium">
                VAT 12%
              </p>
            </div>

            <p className="text-18 font-semibold text-black">Rp119,760</p>
          </div>

          <hr />

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1.5">
              <img
                src="/icons/profile-2user.svg"
                alt=""
                className="w-5 lg:w-6"
              />
              <p className="text-14 text-secondary-text-color font-medium">
                Quantity
              </p>
            </div>

            <p className="text-18 font-semibold text-black">2x residents</p>
          </div>

          <hr />

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1.5">
              <img src="/icons/money-plain.svg" alt="" className="w-5 lg:w-6" />
              <p className="text-14 text-secondary-text-color font-medium">
                Total Price
              </p>
            </div>

            <p className="text-18 font-semibold text-black">1,117,760</p>
          </div>

          <hr />

          <Button variant="green">Buy Ticket</Button>
        </WrapperElement>
      </div>
    </div>
  );
}
