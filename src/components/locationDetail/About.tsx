import { Link } from "@yext/pages/components";
import * as React from "react";
import CustomMap from "./CustomMap";

const About = (props: any) => {
  const {
    yextDisplayCoordinate,
    c_aboutheading,
    c_aboutdatas,
    c_aboutTitleLine1,
  } = props;
  return (
    <>
      <div className="About Anchor js-about">
        <div className="About-container">
          <div className="About-mapContainer">
            <div className="location-map-wrapper js-location-map-wrapper">
              <CustomMap prop={yextDisplayCoordinate} />
            </div>
          </div>
          <div className="About-infoContainer">
            <h2 className="About-title">{props.c_aboutheading}</h2>
            <div className="About-description">
              {props.c_aboutTitleLine1}
              
              {props.c_aboutdatas.map((item: any) => (
                <p>
                  <strong>{item.aboutHeading}</strong>
                  <br />
                  {item.aboutDesc}
                </p>
              ))}
            </div>
            <div className="About-ctaWrapper">
              <a className="About-cta" href="#" data-ya-track="cta">
                {props.c_aboutCta.label}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
