import TitlePage from "../../../../components/TitlePage";
import WrapperElement from "@components/WrapperElement";
import Title from "../../../../components/Title";
import DashboardStatus from "../../../../components/DashboardStatus";
import DetailsList from "../../../../components/DetailsList";

export default function DetailsApplicantSocialDonate() {
  return (
    <div className="flex flex-col gap-6">
      <TitlePage
        title="Social Donate Details"
        subTitle={
          <div className="flex items-center gap-1 flex-wrap">
            Social Donate Details
            <span className="text-dark-green font-medium">/ Social Donate Details</span>
          </div>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-8 gap-4 items-start">
        <WrapperElement customClass="md:col-span-4 lg:col-span-5">
          <Title
            subTitle="Social Donate Information"
            subTitleSizeVariant="small"
          />

          <div className="flex justify-between items-center">
            <img
              src="/images/bansos-1.png"
              alt=""
              className="w-[100px] h-[80px] lg:w-[120px] lg:h-[100px] rounded-2xl object-cover"
            />
            <DashboardStatus title="Pending" type="Pending" />
          </div>

          <div className="flex flex-col gap-1.5">
            <h2 className="text-black font-semibold text-20 leading-6">
              Social Donate for Underprivileged Citizens
            </h2>
            <div className="gap-1 flex items-center">
              <img src="/icons/profile.svg" alt="" />
              <p className="font-medium text-14 text-secondary-text-color">
                PT Shaynakit Elevates the Nation
              </p>
            </div>
          </div>

          <hr />

          <DetailsList
            titleColor="text-dark-green"
            icon="/icons/bag-2.svg"
            title="20 Tons of Rice"
            value="Staple Food"
          />

          <hr />

          <DetailsList
            titleColor="text-dark-green"
            icon="/icons/send-square-2.svg"
            title="10 Tons"
            value="Remaining Social Donate"
          />

          <hr />

          <DetailsList
            icon="/icons/profile-2user-blue-bg.svg"
            titleColor="text-blue"
            title="15,600 Residents"
            value="Total Applications"
          />

          <hr />

          <div className="flex gap-3 flex-col">
            <Title subTitle="About Social Donate" subTitleSizeVariant="small" />
            <p className="text-16 text-black font-medium leading-6 lg:leading-[32px]">
              This Social Donate program is here to provide real support for communities in need. We are committed to helping fulfill basic needs such as food, health, and education, in order to improve quality of life. With the spirit of collaboration, we invite all parties to work together to create positive change.
            </p>
          </div>
        </WrapperElement>

        <div className="md:col-span-4 lg:col-span-3 flex flex-col gap-3">
          <WrapperElement customClass="">
            <div className="top flex justify-between items-center">
              <Title subTitle="Application Status" subTitleSizeVariant="small" />
              <DashboardStatus title="Pending" type="Pending" />
            </div>

            <hr />

            <div className="flex gap-4 flex-col">
              <Title
                subTitle="Proof of Receiving Social Donate"
                subTitleSizeVariant="small"
              />
              <div className="border border-dashed border-[#DDE5E1] h-[230px] flex justify-center items-center rounded-2xl">
                <p className="text-xs text-[#ACB9BB] font-medium leading-5 text-center">
                  The image will appear once the <br />
                  application status is successful 😉{" "}
                </p>
              </div>
            </div>
          </WrapperElement>

          <WrapperElement>
            <Title subTitle="Application Details" subTitleSizeVariant="small" />

            <DetailsList
              titleColor="text-dark-green"
              icon="/icons/receive-square-2.svg"
              title="2 Tons"
              value="Application Amount"
            />

            <hr />

            <DetailsList
              titleColor="text-black"
              icon="/icons/calendar-2-bg-square.svg"
              title="Tue, 09 Jan 2025"
              value="Application Date"
            />

            <hr />

            <div className="flex gap-3 flex-col">
              <Title subTitle="Application Message:" subTitleSizeVariant="small" />
              <p className="text-16 text-black font-medium leading-6 lg:leading-[32px]">
                “I will use the funds to purchase rice and other staple foods that will be consumed by me and my family.”
              </p>
            </div>
          </WrapperElement>
        </div>
      </div>
    </div>
  );
}
