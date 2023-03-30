import * as React from "react";
import Cta from "../commons/cta";
import Hours from "../commons/hours";
import woodtexture from "../../images/wood-texture.jpg";
import mapimage from "../../images/map.svg";
import Phonesvg from "../../images/phone.svg";
import Address from "../commons/Address";
import GetDirection from "../commons/GetDirection";
import { StaticData } from "../../../sites-global/staticData";
import Holidayhours from "./Holdayhours";
import Model from "./Model";
import CustomMap from "./CustomMap";

const Contact = (props: any) => {
  const {
    address,
    phone,
    latitude,
    longitude,
    hours,
    c_specific_day,
    additionalHoursText,
    yextDisplayCoordinate,
    c_storeInfoHeading,
    c_getDirectionsCTAText,
    textScheduleTest,
    c_lLCTitle
  } = props;
  return (
    <>
      <div className="address-main-sec">
        {/* <h4 className="box-title">{c_storeInfoHeading?c_storeInfoHeading:"Store Details"}</h4> */}

        <div className="icon-row content-col">
          <div className="icon">
            {" "}
            <img className=" " src={mapimage} width="20" height="20" alt="mapimage" />
          </div>
          <div className="  address-text notHighlight">
            {address.line1}
            <div>{address.line2}</div>
            <div>{address.city}, {address.region}, {address.postalCode}</div>
            {/* <div>{address.postalCode}</div> */}
          </div>
        </div>
        <ul className="">
          <li className="getdirection-button-box">
            <GetDirection
              buttonText={c_getDirectionsCTAText?c_getDirectionsCTAText:StaticData.getDirection}
              address={address}
              latitude={latitude}
              longitude={longitude}
            />
          </li>
        </ul>


        {phone ? (
          <div className="icon-row">
            <div className="icon">
              {" "}
              <img className=" " src={Phonesvg} width="22" height="22" alt="phonesvg" />
            </div>
            <div className="content-col">
              <a id="address" className=" location-phn" href={`tel:${phone}`}>
                {phone}
              </a>
            </div>
          </div>
        ) : (
          ""
        )}

       
        <div className="map-sec">
          <CustomMap prop={yextDisplayCoordinate} />
        </div>
        <div className="Hero-ctaWrapper Hero-ctaWrapper--eyeexam">
                <a className="Hero-cta Hero-cta--eyeexam" href="#" data-ya-track="cta">{textScheduleTest}</a>
                </div>
<h4>{c_lLCTitle}</h4>
      </div>

      {hours && typeof hours.monday != "undefined" ? (
        <div className="hours">
          <div className="hours-sec">
            <div className="title-with-link-1">
              <h4 className="box-title"><b>{"Hours"}</b></h4>
            </div>
            <div className="hours-div mb-5 md:mb-1 flex flex-col">
              {hours.holidayHours && typeof hours.reopenDate == "undefined" ? (
                <>
                  <Model
                    name={StaticData.Holdiay}
                    holidayHours={hours.holidayHours}
                    c_specific_day={c_specific_day}
                  />
                </>
              ) : (
                ""
              )}

              {hours && (
                <Hours
                  title={"Hours"}
                  additionalHoursText={additionalHoursText}
                  hours={hours}
                  c_specific_day={c_specific_day}
                />
              )}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Contact;
