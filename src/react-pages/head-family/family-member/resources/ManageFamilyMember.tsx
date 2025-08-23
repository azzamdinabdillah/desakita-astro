import TitlePage from "../../../../components/TitlePage";
import Button from "../../../../components/Button";
import WrapperElement from "../../../../components/WrapperElement";
import DashboardStatus from "../../../../components/DashboardStatus";
import DetailsList from "../../../../components/DetailsList";
import Title from "../../../../components/Title";
import PeopleCard from "../../../../components/PeopleCard";
import { useState } from "react";
import Modal from "../../../../components/Modal";

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

export default function ManageFamilyMember() {
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
        header="Delete Family Member?"
        isOpen={isOpenModal}
        setIsOpen={setIsOpenModal}
      />
      <TitlePage
        title="Manage Family Member"
        subTitle={
          <div className="flex items-center gap-1 flex-wrap">
            Family Members
            <span className="text-dark-green font-medium">
              / Manage Family Member
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

      <div className="flex flex-col md:flex-row items-start gap-3.5">
        <div className="flex flex-col gap-3.5 w-full md:flex-grow">
          <WrapperElement>
            <Title subTitle="Head of Household (You)" />

            <PeopleCard
              image="/images/user-2.png"
              name="Azam Din Abdillah"
              job="Programmer"
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
        </div>

        <div className="flex flex-col gap-3.5 lg:max-w-[438px] w-full">
          <WrapperElement>
            <Title subTitle="Recent Activities" />

            <div className="flex flex-col gap-4 lg:gap-6">
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

                <hr />

                <Button variant="green">View Details</Button>
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

                <hr />

                <Button variant="green">View Details</Button>
              </div>
            </div>
          </WrapperElement>
        </div>
      </div>
    </div>
  );
}
