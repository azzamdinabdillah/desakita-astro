import { useState } from "react";
import Label from "../../../../../components/Label";
import TitlePage from "../../../../../components/TitlePage";
import WrapperElement from "../../../../../components/WrapperElement";
import Button from "../../../../../components/Button";
import Inputs from "../../../../../components/Inputs";

export default function CreateSocialDonate() {
  const [imageProfile, setImageProfile] = useState<File | null | undefined>(
    null
  );
  return (
    <div className="flex-wrapper">
      <TitlePage
        title="Add Social Donate"
        subTitle={
          <p>
            Social Donate &nbsp;
            <span className="text-dark-green font-medium">
              /&nbsp; add Social Donate
            </span>
          </p>
        }
      />

      <WrapperElement>
        <form className="flex-wrapper">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-2 md:justify-between items-center">
            <Label customClass="col-span-2" labelFor="village-name">
              Social Donate Thumbnail
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
              Social Donate Name
            </Label>
            <div className="col-span-3">
              <Inputs
                id="head-name"
                placeholder="Determine Social Donate name"
                isIconLeft={true}
                icons="/icons/edit-plain.svg"
                type="text"
              />
            </div>
          </div>

          <hr />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-2 md:justify-between items-center">
            <Label customClass="col-span-2" labelFor="village-total-citizen">
              Choose Category Option
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
                    Basic Necessities
                  </div>
                  <img
                    src="/icons/bag-2-plain.svg"
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
                    Cash
                  </div>
                  <img
                    src="/icons/money-plain.svg"
                    alt=""
                    className="w-5 md:w-6"
                  />
                </label>
                <label
                  htmlFor="gas"
                  className="label-radio label-input-radio md:flex-[40%]"
                >
                  <div className="flex gap-2">
                    <input
                      type="radio"
                      id="gas"
                      name="head-gender"
                      className="input-radio-choose-gender"
                    />
                    Subsidized Fuel
                  </div>
                  <img
                    src="/icons/gas-station.svg"
                    alt=""
                    className="w-5 md:w-6"
                  />
                </label>
                <label
                  htmlFor="health"
                  className="label-radio label-input-radio md:flex-[40%]"
                >
                  <div className="flex gap-2">
                    <input
                      type="radio"
                      id="health"
                      name="head-gender"
                      className="input-radio-choose-gender"
                    />
                    Healthcare
                  </div>
                  <img src="/icons/health.svg" alt="" className="w-5 md:w-6" />
                </label>
              </div>
            </div>
          </div>

          <hr />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-2 md:justify-between items-center">
            <Label customClass="col-span-2" labelFor="head-email">
              Assistance Amount
            </Label>
            <div className="col-span-3">
              <Inputs
                id="head-email"
                placeholder="Type assistance amount"
                isIconLeft={true}
                icons="/icons/dollar-square.svg"
                type="number"
              />
            </div>
          </div>

          <hr />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-2 md:justify-between items-center">
            <Label customClass="col-span-2" labelFor="head-pw">
              Assistance Provider Name
            </Label>
            <div className="col-span-3">
              <Inputs
                id="head-pw"
                placeholder="Type person or organization name"
                isIconLeft={true}
                icons="/icons/user-square.svg"
                type="text"
              />
            </div>
          </div>

          <hr />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-2 md:justify-between items-center">
            <Label customClass="col-span-2" labelFor="village-location">
              Social Donate Description
            </Label>
            <div className="col-span-3">
              <Inputs
                id="village-location"
                placeholder="Explain more details about the assistance"
                type="textarea"
                rows={5}
              />
            </div>
          </div>

          <hr />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-2 md:justify-between items-center">
            <Label customClass="col-span-2" labelFor="choose-is-available">
              Choose Category Option
            </Label>
            <div className="col-span-3">
              <div className="flex flex-wrap gap-3 md:gap-6 ">
                <label
                  htmlFor="available"
                  className="label-radio label-input-radio md:flex-1"
                >
                  <div className="flex gap-2">
                    <input
                      type="radio"
                      id="available"
                      name="is-available"
                      className="input-radio-choose-gender"
                    />
                    Available
                  </div>
                  <img
                    src="/icons/tick-circle.svg"
                    alt=""
                    className="w-5 md:w-6"
                  />
                </label>
                <label
                  htmlFor="not-available"
                  className="label-radio label-input-radio md:flex-1"
                >
                  <div className="flex gap-2">
                    <input
                      type="radio"
                      id="not-available"
                      name="is-available"
                      className="input-radio-choose-gender"
                    />
                    Not Available
                  </div>
                  <img
                    src="/icons/close-circle-2.svg"
                    alt=""
                    className="w-5 md:w-6"
                  />
                </label>
              </div>
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
