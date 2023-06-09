import * as React from "react";
import ApiCall from "../../Apis/ApiCall";
import Address from "../commons/Address";
import GetDirection from "../commons/GetDirection";
import OpenClose from "../commons/openClose";
import Phonesvg from "../../images/phone.svg";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Link } from "@yext/pages/components";

export default function Nearby(props: any) {
  const [neabyData, setnearbyData] = React.useState(
    props.externalApiData.response.results
  );
  const metersToMiles = (meters: number) => {
    const miles = meters * 0.000621371;
    return miles.toFixed(2);
  };

  return (
    <>
      {/* <Splide
        id="splide-nearby"
        options={{
          rewind: false,
          type: "slide",
          perPage: 3,
          perMove: 1,
          arrows: false,
          drag: false,
          pagination: false,
          lazyLoad: "nearby",
          breakpoints: {
            1279: {
              perPage: 1,
              drag: true,
              pagination: true,
              arrows: false,
              type: "splide",
            },
          },
        }}
      > */}
      {neabyData.map((location: any, index: Number) => {
        let url = "";
        var name: any = location.data.name?.toLowerCase();
        var countryCode: any = location.data.address.countryCode?.toLowerCase();
        var initialcountryCode: any = countryCode.toString();
        var finalcountryCode: any = initialcountryCode.replaceAll(" ", "-");
        var region: any = location.data.address.region?.toLowerCase();
        var initialregion: any = region.toString();
        var finalregion: any = initialregion.replaceAll(" ", "-");
        var city: any = location.data.address.city?.toLowerCase();
        var initialrcity: any = city.toString();
        var finalcity: any = initialrcity.replaceAll(" ", "-");
        var string: any = name.toString();
        let result1: any = string.replaceAll(" ", "-");
        let newurl =
          finalcountryCode +
          "/" +
          finalregion +
          "/" +
          finalcity +
          "/" +
          result1 +
          ".html";
        if (!location.data.slug) {
          url = `/${newurl}`;
        } else {
          //  url= `/${location.data.slug.toString()}.html`;
          url = newurl;
        }
        if (index > 0) {
          return (
            <>
              {/* <SplideSlide key={index}> */}

              <div className="nearby-card">
                <div className="location-name-miles icon-row">
                  <h2>
                    <Link
                      className="inline-block notHighlight"
                      href={url}
                      data-ya-track={`${location.data.name}`}
                      eventName={`${location.data.name}`}
                      rel="noopener noreferrer"
                    >
                      {location.data.name}
                    </Link>
                  </h2>
                  {location.distance ? (
                    <div className="distance text-[green]">
                      {metersToMiles(location.distance ?? 0)} <span>miles</span>
                    </div>
                  ) : (
                    ""
                  )}
                </div>

                <div className="icon-row content-col">
                  <Address address={location.data.address} />
                </div>
                {location.data.mainPhone ? (
                  <div className="icon-row">
                    <h6>Telephone</h6>
                    <Link
                      id="address"
                      className=" location-phn"
                      href={`tel:${location.data.mainPhone}`}
                    >
                      {/* <div className="icon">
                    {" "}
                    <img
                      className=" "
                      src={Phonesvg}
                      width="22"
                      height="22"
                      alt="phonesvg"
                    />
                  </div> */}
                      <div className="content-col">
                        {location.data.mainPhone}
                      </div>
                    </Link>
                  </div>
                ) : (
                  ""
                )}

                <div className="icon-row closeing-div">
                  <h6>Opening Hours</h6>
                  {location.data.hours ? (
                    <div
                      className="flex open-now-string items-center "
                      data-id={`main-shop-${location.data.id}`}
                    >
                      <OpenClose
                        timezone={location.data.timezone}
                        hours={location.data.hours}
                        deliveryHours={location.data.hours}
                      ></OpenClose>
                    </div>
                  ) : (
                    <div className="closeddot notHighlight red-dot">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="8"
                        height="8"
                        viewBox="0 0 8 8"
                      >
                        <circle
                          id="Ellipse_5"
                          data-name="Ellipse 5"
                          cx="4"
                          cy="4"
                          r="4"
                          fill="#ad1e1f"
                        />
                      </svg>
                      <div className="hours-info text-lg font-second-main-font closeddot">
                        Closed
                      </div>
                    </div>
                  )}
                </div>

                <div className="button-bx">
                  <Link
                    className="btn"
                    href={url}
                    data-ya-track={`viewstore-${location.data.name}`}
                    eventName={`viewstore-${location.data.name}`}
                    rel="noopener noreferrer"
                  >
                    {/* <div dangerouslySetInnerHTML={{__html: View_Store}}/> */}
                    STORE DETAILS
                  </Link>
                  <GetDirection
                    buttonText={
                      props.c_getDirectionsCTAText
                        ? props.c_getDirectionsCTAText
                        : "GET DIRECTION"
                    }
                    address={location.data.address}
                    latitude={
                      location.data.displayCoordinate
                        ? location.data.displayCoordinate.latitude
                        : location.data.yextDisplayCoordinate.latitude
                    }
                    longitude={
                      location.data.displayCoordinate
                        ? location.data.displayCoordinate.longitude
                        : location.data.yextDisplayCoordinate.longitude
                    }
                  />
                </div>
              </div>

              {/* </SplideSlide> */}
            </>
          );
        }
      })}
      {/* </Splide> */}
    </>
  );
}
