import { forwardRef, useState } from "react";
import Label from "../../../../../components/Label";
import TitlePage from "../../../../../components/TitlePage";
import WrapperElement from "@components/WrapperElement";
import Button from "../../../../../components/Button";
import Inputs from "../../../../../components/Inputs";
import DatePicker from "react-datepicker";

export default function CreateVillageEventSchedule() {
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
      placeholder="Pilih tanggal event"
      isIconLeft={true}
      isIconRight={true}
      iconsRight="/icons/arrow-right-plain-2.svg"
      icons="/icons/calendar-edit.svg"
      type="text"
    />
  ));

  return (
    <div className="flex-wrapper">
      <TitlePage
        title="Tambah Event Desa"
        subTitle={
          <p>
            Events Desa &nbsp;
            <span className="text-dark-green font-medium">
              /&nbsp; Tambah Event Desa
            </span>
          </p>
        }
      />

      <WrapperElement>
        <form className="flex-wrapper">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-2 md:justify-between items-center">
            <Label customClass="col-span-2" labelFor="village-name">
              Thumbnail Event Terkait
            </Label>
            <div className="flex items-center justify-between w-full col-span-3">
              <img
                src={
                  imageProfile
                    ? URL.createObjectURL(imageProfile)
                    : "/images/placeholder-upload-thumbnail-bansos.png"
                }
                alt=""
                className="w-[100px] md:w-[120px] h-[80px] md:h-[100px] rounded-3xl object-cover"
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
            <Label customClass="col-span-2" labelFor="head-name">
              Nama Event
            </Label>
            <div className="col-span-3">
              <Inputs
                id="head-name"
                placeholder="Ketik nama event terkait"
                isIconLeft={true}
                icons="/icons/edit-plain.svg"
                type="text"
              />
            </div>
          </div>

          <hr />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-2 md:justify-between items-center">
            <Label customClass="col-span-2" labelFor="village-total-citizen">
              Pilih status event
            </Label>
            <div className="col-span-3">
              <div className="flex flex-wrap gap-3 md:gap-6 ">
                <label
                  htmlFor="main-material"
                  className="label-radio label-input-radio md:flex-[40%]"
                >
                  <div className="flex gap-2">
                    <input
                      type="radio"
                      id="main-material"
                      name="head-gender"
                      className="input-radio-choose-gender"
                    />
                    Open
                  </div>
                  <img
                    src="/icons/tick-circle.svg"
                    alt=""
                    className="w-5 md:w-6"
                  />
                </label>
                <label
                  htmlFor="money"
                  className="label-radio label-input-radio md:flex-[40%]"
                >
                  <div className="flex gap-2">
                    <input
                      type="radio"
                      id="money"
                      name="head-gender"
                      className="input-radio-choose-gender"
                    />
                    Closed
                  </div>
                  <img
                    src="/icons/close-circle-3.svg"
                    alt=""
                    className="w-5 md:w-6"
                  />
                </label>
              </div>
            </div>
          </div>

          <hr />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-2 md:justify-between items-center">
            <Label customClass="col-span-2" labelFor="head-name">
              Harga Event
            </Label>
            <div className="col-span-3">
              <Inputs
                id="head-name"
                placeholder="Ketik nama event terkait"
                isIconLeft={true}
                icons="/icons/dollar-square.svg"
                type="text"
              />
            </div>
          </div>

          <hr />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-2 md:justify-between items-center">
            <Label customClass="col-span-2" labelFor="head-date-birth">
              Tanggal event dilakukan
            </Label>
            <div className="col-span-3">
              <div className="react-datepicker-wrapper">
                <div className="react-datepicker__input-container">
                  <div className="relative w-full">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 w-5 lg:w-6">
                      <img src="/icons/calendar-2-2.svg" alt="icons" />
                    </div>
                    <input
                      id="head-time-event"
                      type="date"
                      className="pl-11 lg:pl-12 w-full text-black appearance-none font-medium focus:border-1.5 focus:border-dark-green outline-none transition-all rounded-2xl border border-bg-color p-3 lg:p-4 text-sm lg:text-base placeholder:text-secondary-text-color placeholder:font-medium placeholder:text-sm lg:placeholder:text-base placeholder:leading-normal w-full w-full flex-grow"
                      placeholder="Masukan tanggal lahir"
                      defaultValue=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-2 md:justify-between items-center">
            <Label customClass="col-span-2" labelFor="head-pw">
              Waktu event dilakukan
            </Label>
            <div className="col-span-3">
              <Inputs
                right={
                  <p className="text-secondary-text-color font-medium text-16">
                    WIB
                  </p>
                }
                id="head-pw"
                placeholder="Ketik waktu event"
                isIconLeft={true}
                icons="/icons/timer.svg"
                type="number"
              />
            </div>
          </div>

          <hr />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-2 md:justify-between items-center">
            <Label customClass="col-span-2" labelFor="village-location">
              Deskripsi event terkait
            </Label>
            <div className="col-span-3">
              <Inputs
                id="village-location"
                placeholder="Jelaskan lebih detail tentang event"
                type="textarea"
                rows={5}
              />
            </div>
          </div>

          <hr />

          <div className="flex justify-end gap-3">
            <Button variant="pink">Batal, Tidak jadi</Button>
            <Button variant="green">Create Now</Button>
          </div>
        </form>
      </WrapperElement>
    </div>
  );
}
