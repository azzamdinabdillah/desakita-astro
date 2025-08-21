import TitlePage from "../../../components/TitlePage";
import Button from "../../../components/Button";
import WrapperElement from "@components/WrapperElement";
import Title from "../../../components/Title";
import { PeopleCardComplete } from "../../../components/PeopleCard";

export default function FamilyMember() {
  return (
    <div className="flex flex-col gap-6">
      <TitlePage
        title="Anggota Keluarga"
        leftElement={
          <a href={"/head-family/family-member/create-family-member.html"}>
            <Button variant="green">
              <img className="w-5 md:w-6" src="/icons/add-square.svg" alt="" />
              Add New
            </Button>
          </a>
        }
      />

      <WrapperElement>
        <Title subTitle="Kepala (You)" />

        <div className="flex-col-4-6">
          <PeopleCardComplete
            right={
              <a
                href={"/head-family/family-member/manage-family-member.html"}
                className="w-full md:w-max"
              >
                <Button variant="black" customClass="w-full">
                  Manage
                </Button>
              </a>
            }
            image="/images/user-2.png"
            name="Azam Din Abdillah"
            job="Programmer"
            nik="2005100592201005"
            age={42}
          />
        </div>
      </WrapperElement>

      <WrapperElement>
        <Title subTitle="Istri (1)" />

        <div className="flex-col-4-6">
          <PeopleCardComplete
            right={
              <a
                href={"/head-family/family-member/manage-family-member.html"}
                className="w-full md:w-max"
              >
                <Button variant="black" customClass="w-full">
                  Manage
                </Button>
              </a>
            }
            image="/images/user-3.png"
            name="Rosita Luna R"
            job="Ibu Rumah Tangga"
            nik="2005100592201005"
            age={42}
          />
        </div>
      </WrapperElement>

      <WrapperElement>
        <Title subTitle="Anak (1)" />

        <div className="flex-col-4-6">
          {Array.from({ length: 3 }).map((_, index) => (
            <PeopleCardComplete
              key={index}
              right={
                <a
                  href={"/head-family/family-member/manage-family-member.html"}
                  className="w-full md:w-max"
                >
                  <Button variant="black" customClass="w-full">
                    Manage
                  </Button>
                </a>
              }
              image="/images/user-1.png"
              name="Andi Alif R"
              job="Mahasiswa"
              nik="2005100592201005"
              age={42}
            />
          ))}
        </div>
      </WrapperElement>
    </div>
  );
}
