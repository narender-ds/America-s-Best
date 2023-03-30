import * as React from "react";

const Footer = (props: any) => {
  return (
    <>
      <footer className="Footer" data-ya-scope="footer">
        <div className="Footer-container">
          <div className="Footer-row Footer-row--main">
            <div className="Footer-col Footer-col--sloganAndSocials">
              <div className="Footer-slogan">
                {props._site?.c_footerSlogan}
                {/* <br /> */}
                {/* {props._site?.c_footersocials.line2} */}
              </div>
              <div className="Footer-socials">
                <div
                  className="SocialLinks Socials-socialLinks"
                  data-ya-scope="social"
                >
                  {props._site?.c_footerSocialIcons.map((icon: any) => (
                    <div className="SocialLinks-linkWrapper">
                      <a
                        className="Link SocialLinks-link Link--facebook"
                        href="#"
                      >
                        <img
                          className="footer-social-icons"
                          src={icon.url}
                          alt=""
                        />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h4 className="Footer-colHeading">
                {" "}
                {props._site.c_footerMenu?.helpMenu}
              </h4>

              {props._site.c_footerMenu?.helpLinks?.map((item: any) => (
                <>
                  <div className="Footer-col Footer-col--links">
                    {/* <div className="Footer-links"> */}
                    {/* <div className="Footer-linkWrapper Footer-linkWrapper--main"> */}
                    <a
                      className="Footer-link Footer-link--main"
                      href="#"
                      data-ya-track="link#"
                    >
                      <span className="Footer-linktext">{item.label}</span>
                    </a>
                    {/* </div> */}
                    {/* </div> */}
                  </div>
                </>
              ))}
            </div>
            <div>
              <h4 className="Footer-colHeading">
                {" "}
                {props._site.c_footerMenu?.learnMoreMenu}
              </h4>

              {props._site.c_footerMenu?.learnMoreLinks?.map((item: any) => (
                <>
                  <div className="Footer-col Footer-col--links">
                    {/* <div className="Footer-links"> */}
                    {/* <div className="Footer-linkWrapper Footer-linkWrapper--main"> */}
                    <a
                      className="Footer-link Footer-link--main"
                      href="#"
                      data-ya-track="link#"
                    >
                      <span className="Footer-linktext">{item.label}</span>
                    </a>
                    {/* </div> */}
                    {/* </div> */}
                  </div>
                </>
              ))}
            </div>
            <div>
              <h4 className="Footer-colHeading">
                {" "}
                {props._site.c_footerMenu?.ourCompanyMenu}
              </h4>

              {props._site.c_footerMenu?.ourCompanyLinks?.map((item: any) => (
                <>
                  <div className="Footer-col Footer-col--links">
                    {/* <div className="Footer-links"> */}
                    {/* <div className="Footer-linkWrapper Footer-linkWrapper--main"> */}
                    <a
                      className="Footer-link Footer-link--main"
                      href="#"
                      data-ya-track="link#"
                    >
                      <span className="Footer-linktext">{item.label}</span>
                    </a>
                    {/* </div> */}
                    {/* </div> */}
                  </div>
                </>
              ))}
            </div>
          </div>
          <div className="Footer-row Footer-row--utility">
            <div className="Footer-col Footer-col--utility">
              <div className="Footer-links Footer-links--utility">
                {props._site?.c_otherFooterLinks.map((links: any) => (
                  <div className="Footer-linkWrapper Footer-linkWrapper--utility">
                    <a
                      className="Footer-link Footer-link--utility"
                      href="#"
                      data-ya-track="link#"
                    >
                      <span className="Footer-linktext">{links.label}</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="Footer-row Footer-row--copyright">
            <div className="Footer-col">
              {props._site.c_footerTermsConditionsLines.line1}
              <br />
              {props._site.c_footerTermsConditionsLines.line2}
              <a
                className="Footer-copyrightLink"
                href="https://www.americasbest.com/state-legal-disclosures"
                data-ya-track="copyrightlink"
              >
                {props._site.c_footerTermsConditionsLines.clickHereCta.label}
              </a>
              {props._site.c_footerTermsConditionsLines.line2AfterCta}
              {props._site.c_footerTermsConditionsLines.line3}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
