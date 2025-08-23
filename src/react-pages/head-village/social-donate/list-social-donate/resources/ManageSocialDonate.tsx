import { useState } from "react";
import Button from "../../../../../components/Button";
import Modal from "../../../../../components/Modal";
import TitlePage from "../../../../../components/TitlePage";
import WrapperElement from "../../../../../components/WrapperElement";
import Title from "../../../../../components/Title";
import DashboardStatus from "../../../../../components/DashboardStatus";
import DetailsList from "../../../../../components/DetailsList";
import RecentActivity from "../../../../../components/RecentActivity";
import UserImage from "../../../../../components/UserImage";

export default function ManageSocialDonate() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div className="flex flex-col gap-6">
      <Modal
        id="modal-delete"
        confirmButtonElement={
          <Button
            variant="pink"
            customClass="flex-grow"
            dataCloseModal="modal-delete"
          >
            <img src="/icons/trash.svg" alt="" />
            Yes Delete
          </Button>
        }
        message="This action is permanent and cannot be undone!"
        header="Delete Social Donate?"
        isOpen={isOpenModal}
        setIsOpen={setIsOpenModal}
      />
      <TitlePage
        title="Manage Head House"
        subTitle={
          <div className="flex items-center gap-1">
            Social Donate
            <span className="text-dark-green font-medium">
              / Manage Social Donate
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
            <a href="/head-village/social-donate/list-social-donate/create-social-donate">
              <Button variant="black">
                Edit Data
                <img className="w-5 lg:w-6" src="/icons/edit.svg" alt="" />
              </Button>
            </a>
          </div>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-4 items-start">
        <WrapperElement customClass="md:col-span-1 lg:col-span-5">
          <Title subTitle="Social Donate Information" />

          <div className="flex justify-between items-center">
            <img
              src="/images/bansos-1.png"
              alt=""
              className="w-[100px] h-[80px] lg:w-[120px] lg:h-[100px] rounded-2xl object-cover"
            />
            <DashboardStatus title="Available" type="softGreen" />
          </div>

          <div className="flex flex-col gap-1.5">
            <h2 className="text-black font-semibold text-20 leading-6">
              Assistance for the Underprivileged
            </h2>
            <div className="gap-1 flex items-center">
              <img src="/icons/profile.svg" alt="" />
              <p className="font-medium text-14 text-secondary-text-color">
                PT Shaynakit Meningkatkan Bangsa
              </p>
            </div>
          </div>

          <hr />

          <DetailsList
            icon="/icons/money.svg"
            titleColor="text-dark-green"
            title="Rp120.000.000"
            value="Cash"
          />

          <hr />

          <DetailsList
            icon="/icons/profile-2user-blue-bg.svg"
            titleColor="text-blue"
            title="15.600 Residents"
            value="Total Applications"
          />

          <hr />

          <div className="flex gap-3 flex-col">
            <h3 className="font-medium text-secondary-text-color text-14">
              About the Assistance
            </h3>
            <p className="text-16 text-black font-medium leading-6 lg:leading-[32px]">
              This Social Donate Program is here to provide real support for
              people in need. We are committed to helping meet basic needs such
              as food, health, and education, to improve quality of life. With
              the spirit of mutual cooperation, we invite all parties to work
              together to create positive change.
            </p>
          </div>
        </WrapperElement>

        <WrapperElement customClass="md:col-span-1 lg:col-span-3">
          <Title subTitle="Latest Social Donate Recipients" />

          {Array.from({ length: 3 }).map((_, index) => (
            <RecentActivity
              key={index}
              bottomLeft={
                <>
                  <img src="/icons/profile.svg" alt="" />
                  Given To:
                </>
              }
              bottomRight={
                <div className="flex items-center gap-1 text-black">
                  Udin Louvre
                  <UserImage
                    customClass="hidden lg:inline"
                    widthHeight="w-[32px]"
                    image="/images/user-1.png"
                  />
                </div>
              }
              date="Tue, 25 Dec 2024"
              title="Rp120.000.000"
              subTitle="Application Amount"
              right={<DashboardStatus type={"Pending"} title={"Pending"} />}
            />
          ))}

          <Button variant="green">View All</Button>
        </WrapperElement>
      </div>
    </div>
  );
}
