import * as React from "react";

const Header = (props: any) => {
  const { c_middleHeader, c_topbar } = props;

  return (
    <>
      <header>
        <div className="header" id="header">
          {/* topper  */}
          <div className="Header-topper">
            <div className="Header-topper-wrap">
              <div className="Header-bannerText">
                {props._site?.c_upperHeaderText}
              </div>
              <a className="topper-bannerlink" href="#">
                <span className="Header-linktext">
                  {props._site?.c_upperHeaderCta?.label}
                </span>
              </a>
            </div>
          </div>
          {/* middle header */}
          <div className="Header-containerWrapper Header-containerWrapper---middle">
            <div className="Header-container">
              <div className="Header-wrapper Header-wrapper--middle">
                <div className="Header-logoWrapper">
                  <a
                    className="Header-logoLink"
                    href="#"
                    data-ya-track="logo"
                    id="brand-logo"
                  >
                    <img
                      className="Header-logo"
                      src={props?._site?.c_headerLogo.url}
                      alt=""
                    />
                  </a>
                </div>
                <div className="Header-searchBarAndCtasWrapper">
                  <div className="Header-searchBarWrapper">
                    {/* <a className="Header-searchLabelText" href="search"><img className="location-logo" src={props?._site?.c_middleHeader.icon.url} alt="" /></a> */}
                    <form
                      method="get"
                      id="HeaderSearchForm"
                      className="search Header-form"
                      action="#"
                    >
                      <div className="Header-searchBar">
                        <input
                          placeholder="Search by City, State, or ZIP code"
                          className="search-input Header-input"
                          type="text"
                          name="inputStoreValue"
                          id="HeaderSearchInput"
                          required
                        />
                        <button
                          type="submit"
                          className="search-button Header-submit"
                          data-ya-track="search"
                        >
                          <span className="Header-submitLabel">
                            FIND A STORE
                          </span>
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="Header-links Header-links--ctas">
                    <div className="Header-linkWrapper Header-linkWrapper--ctas">
                      <a
                        className="Header-link Header-link--ctas"
                        href="#"
                        data-ya-track="cta1"
                      >
                        <span className="Header-linktext">
                          {props?._site?.c_examScheduleCta?.label}
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Header-containerWrapper Header-containerWrapper--bottom">
            <div className="Header-container">
              <div className="Header-wrapper Header-wrapper--bottom">
                <div className="l-hidden-xs l-hidden-sm">
                  <div className="Header-links Header-links--main">
                    {props._site?.c_headerMenus?.headerLinks?.map(
                      (item: any) => (
                        <div className="Header-linkWrapper Header-linkWrapper--main">
                          <a
                            className="Header-link Header-link--main"
                            href="#"
                            data-ya-track="mainLink1"
                          >
                            <span className="Header-linktext">
                              {item.label}
                            </span>
                          </a>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
