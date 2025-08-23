import { forwardRef, useState } from "react";
import Button from "../../../../components/Button";
import Inputs from "../../../../components/Inputs";
import Label from "../../../../components/Label";
import TitlePage from "../../../../components/TitlePage";
import WrapperElement from "@components/WrapperElement";
import DatePicker from "react-datepicker";

export default function CreateFamilyMember() {
  const [imageProfile, setImageProfile] = useState<File | null | undefined>(
    null
  );
  const [startDate, setStartDate] = useState<Date | null>(null);
  const CustomInputDate = forwardRef<
    HTMLInputElement,
    {
      value?: string;
      onClick?: () => void;
      className?: string;
    }
  >(({ value, onClick, className }, ref) => (
    <Inputs
      readonly={true}
      customClass={className || ""}
      value={value as string}
      onClick={onClick}
      ref={ref && undefined}
      id="head-date-birth"
      placeholder="Enter date of birth"
      isIconLeft={true}
      icons="/icons/calendar-2-2.svg"
      type="text"
    />
  ));

  return (
    <div className="flex-wrapper">
      <TitlePage
        title="Add New Family Member"
        subTitle={
          <p>
            Family Members &nbsp;
            <span className="text-dark-green font-medium">
              /&nbsp; Add Family Member
            </span>
          </p>
        }
      />

      <WrapperElement>
        <form className="flex-wrapper">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-2 md:justify-between items-center">
            <Label customClass="col-span-2" labelFor="village-name">
              Profile Photo
            </Label>
            <div className="flex items-center justify-between w-full col-span-3">
              <img
                src={
                  imageProfile
                    ? URL.createObjectURL(imageProfile)
                    : "/icons/placeholder-upload-profile.svg"
                }
                alt=""
                className="w-[80px] md:w-[100px] h-[80px] md:h-[100px] rounded-full object-cover"
              />
              <Button
                variant="black"
                onClick={() =>
                  (
                    document.querySelector(
                      "#upload-profile-image"
                    ) as HTMLInputElement
                  )?.click()
                }
              >
                <img src="/icons/send-square.svg" alt="" />
                Upload
              </Button>
              <input
                type="file"
                hidden
                id="upload-profile-image"
                onChange={(e) => setImageProfile(e.target.files?.[0])}
              />
            </div>
          </div>

          <hr />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-2 md:justify-between items-center">
            <Label customClass="col-span-2" labelFor="village-total-citizen">
              Gender
            </Label>
            <div className="col-span-3">
              <div className="grid grid-cols-2 gap-3 md:gap-6 ">
                <label
                  htmlFor="gender-men"
                  className="label-radio label-input-radio"
                >
                  <div className="flex gap-2">
                    <input
                      type="radio"
                      id="gender-men"
                      name="head-gender"
                      className="input-radio-choose-gender"
                    />
                    Male
                  </div>
                  <img src="/icons/man.svg" alt="" className="w-5 md:w-6" />
                </label>
                <label
                  htmlFor="gender-woman"
                  className="label-radio label-input-radio"
                >
                  <div className="flex gap-2">
                    <input
                      type="radio"
                      id="gender-woman"
                      name="head-gender"
                      className="input-radio-choose-gender"
                    />
                    Female
                  </div>
                  <img src="/icons/woman.svg" alt="" className="w-5 md:w-6" />
                </label>
              </div>
            </div>
          </div>

          <hr />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-2 md:justify-between items-center">
            <Label customClass="col-span-2" labelFor="head-name">
              Name
            </Label>
            <div className="col-span-3">
              <Inputs
                id="head-name"
                placeholder="Enter full name"
                isIconLeft={true}
                icons="/icons/user-gray.svg"
                type="text"
              />
            </div>
          </div>

          <hr />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-2 md:justify-between items-center">
            <Label customClass="col-span-2" labelFor="head-nik">
              National Identification Number
            </Label>
            <div className="col-span-3">
              <Inputs
                id="head-nik"
                placeholder="Type NIK"
                isIconLeft={true}
                icons="/icons/keyboard-2.svg"
                type="number"
              />
            </div>
          </div>

          <hr />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-2 md:justify-between items-center">
            <Label customClass="col-span-2" labelFor="head-phone-number">
              Occupation
            </Label>
            <div className="col-span-3">
              <Inputs
                id="head-phone-number"
                placeholder="Enter job title"
                isIconLeft={true}
                icons="/icons/briefcase-2.svg"
                type="number"
              />
            </div>
          </div>

          <hr />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-2 md:justify-between items-center">
            <Label customClass="col-span-2" labelFor="head-phone-number">
              Phone Number
            </Label>
            <div className="col-span-3">
              <Inputs
                id="head-phone-number"
                placeholder="Enter active phone number"
                isIconLeft={true}
                icons="/icons/call.svg"
                type="number"
              />
            </div>
          </div>

          <hr />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-2 md:justify-between items-center">
            <Label customClass="col-span-2" labelFor="head-date-birth">
              Date of Birth
            </Label>
            <div className="col-span-3">
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                <div className="react-datepicker-wrapper">
                  <div className="react-datepicker__input-container">
                    <div className="relative w-full">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 w-5 lg:w-6">
                        <img src="/icons/calendar-2-2.svg" alt="icons" />
                      </div>
                      <input
                        id="date-birth-family-member"
                        type="date"
                        className="pl-11 lg:pl-12 w-full text-black appearance-none font-medium focus:border-1.5 focus:border-dark-green outline-none transition-all rounded-2xl border border-bg-color p-3 lg:p-4 text-sm lg:text-base placeholder:text-secondary-text-color placeholder:font-medium placeholder:text-sm lg:placeholder:text-base placeholder:leading-normal w-full w-full flex-grow"
                        placeholder="Enter date of birth"
                        defaultValue=""
                      />
                    </div>
                  </div>
                </div>
                <div className="md:max-w-[180px] w-full p-3 md:p-4 flex justify-center items-center text-16 font-medium text-dark-green rounded-2xl border border-foreshadow bg-foreshadow">
                  Age:&nbsp;
                  <span data-age-display="">0</span>&nbsp;years
                </div>
              </div>
            </div>
          </div>

          <hr />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-2 md:justify-between items-center">
            <Label customClass="col-span-2" labelFor="village-total-citizen">
              Status
            </Label>
            <div className="col-span-3">
              <div className="grid grid-cols-1 gap-3 md:gap-6 md:grid-cols-2">
                <label
                  htmlFor="status-nonmerried"
                  className="label-radio label-input-radio"
                >
                  <div className="flex gap-2">
                    <input
                      type="radio"
                      id="status-nonmerried"
                      name="head-status"
                      className="input-radio-choose-gender"
                    />
                    Single
                  </div>
                  <img
                    src="/icons/nonmerried.svg"
                    alt=""
                    className="w-5 md:w-6"
                  />
                </label>
                <label
                  htmlFor="status-merried"
                  className="label-radio label-input-radio"
                >
                  <div className="flex gap-2">
                    <input
                      type="radio"
                      id="status-merried"
                      name="head-status"
                      className="input-radio-choose-gender"
                    />
                    Married
                  </div>
                  <img src="/icons/merried.svg" alt="" className="w-5 md:w-6" />
                </label>
              </div>
            </div>
          </div>

          <hr />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-2 md:justify-between items-center">
            <Label customClass="col-span-2" labelFor="village-total-citizen">
              Family Category
            </Label>
            <div className="col-span-3">
              <div className="grid grid-cols-1 gap-3 md:gap-6 md:grid-cols-3">
                <label
                  htmlFor="category-wife"
                  className="label-radio label-input-radio"
                >
                  <div className="flex gap-2">
                    <input
                      type="radio"
                      id="category-wife"
                      name="category"
                      className="input-radio-choose-gender"
                    />
                    Wife
                  </div>
                </label>
                <label
                  htmlFor="category-child"
                  className="label-radio label-input-radio"
                >
                  <div className="flex gap-2">
                    <input
                      type="radio"
                      id="category-child"
                      name="category"
                      className="input-radio-choose-gender"
                    />
                    Child
                  </div>
                </label>
                <label
                  htmlFor="category-husband"
                  className="label-radio label-input-radio"
                >
                  <div className="flex gap-2">
                    <input
                      type="radio"
                      id="category-husband"
                      name="category"
                      className="input-radio-choose-gender"
                    />
                    Husband
                  </div>
                </label>
              </div>
            </div>
          </div>

          <hr />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-2 md:justify-between items-center">
            <Label customClass="col-span-2" labelFor="head-email">
              Email
            </Label>
            <div className="col-span-3">
              <Inputs
                id="head-email"
                placeholder="Enter Email"
                isIconLeft={true}
                icons="/icons/sms.svg"
                type="email"
              />
            </div>
          </div>

          <hr />

          <div className="flex justify-end gap-3">
            <Button variant="pink">Cancel, Don't proceed</Button>
            <Button variant="green">Create Now</Button>
          </div>
        </form>
      </WrapperElement>
    </div>
  );
}
