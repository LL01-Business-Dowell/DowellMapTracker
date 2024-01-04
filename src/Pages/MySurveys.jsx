import { useGlobalContext } from "../Context/PreviewContext";
import CountryDropdown from "../components/Dropdown/CountryDropdown";
import LocationDropdown from "../components/Dropdown/LocationDropdown";
import Category from "../components/Categories";
import PropTypes from "prop-types";

export default function MySurveys({ loading }) {
  const { setInputData, inputData } = useGlobalContext();
  return (
    <>
      <div className="relative ml-[60px]">
        <div className="px-4 md:px-10 mx-auto w-full -m-24 md:pl-[20px]">
          <div className="relative md:pt-32 pb-32 pt-12 ">
            <div className="mx-4 items-center flex justify-between flex-wrap">
              <h1 className=" text-[#737373] text-3xl font-bold pt-1 pb-3 no-underline">
                DoWell Surveys
              </h1>
              {/* <h6 className=" text-[#288437] text-sm font-bold pb-0 no-underline">
                Samantha will do surveys in 150000 locations worldwide
              </h6> */}
            </div>

            <div className="h-1 mx-4 bg-[#A6A6A6]"></div>

            <div className="mt-4 flex flex-wrap">
              <div className="w-full xl:w-4/12 px-4">
                <div className="sm:col-span-3">
                  <div className="mt-2">
                    <div className="mt-2">
                      <CountryDropdown loading={loading} />
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <div className="mt-2">
                    <LocationDropdown loading={loading} country={inputData.country} />
                  </div>
                </div>
              </div>
              <div className="w-full xl:w-4/12 px-4 ">
                <div className="sm:col-span-3">
                  <div className="mt-2 ">
                    <h6 className="h-8 p-1 text-center font-bold text-white text-sm bg-[#FF3131]">
                      Select distance from center of location
                    </h6>
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <div className="mt-2 items-center flex justify-between flex-wrap">
                    <div className="relative mb-4 flex flex-wrap items-stretch">
                      <span className="flex items-center px-1 py-[0.25rem] font-bold text-center text-white text-sm bg-[#FF3131]">
                        From
                      </span>
                      <input
                        type="text"
                        className="relative m-0 block w-24 flex-auto bg-[#D9D9D9] px-3 py-[0.25rem] outline-none"
                        placeholder="Meters"
                        value={inputData.radius1}
                        onChange={(e) =>
                          setInputData((prevData) => ({
                            ...prevData,
                            radius1: e.target.value,
                          }))
                        }
                        disabled={loading}
                      />
                    </div>
                    <div className="relative mb-4 flex flex-wrap items-stretch">
                      <span className="flex items-center px-1 py-[0.25rem] font-bold text-center text-white text-sm bg-[#FF3131]">
                        To
                      </span>
                      <input
                        type="text"
                        className="relative m-0 block w-24 flex-auto bg-[#D9D9D9] px-3 py-[0.25rem] outline-none"
                        placeholder="Meters"
                        value={inputData.radius2}
                        onChange={(e) =>
                          setInputData((prevData) => ({
                            ...prevData,
                            radius2: e.target.value,
                          }))
                        }
                        disabled={loading}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full xl:w-4/12 px-4">
                <div className="mt-2">
                  <Category loading={loading} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

MySurveys.propTypes = {
  loading: PropTypes.bool.isRequired,
};
