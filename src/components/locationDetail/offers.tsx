import * as React from "react";


const Offers = (props: any) => {
    const {c_offerSectionTitle,c_offerItems ,textScheduleTest,name} = props;


    return (
        <>
            <div className="Offers Anchor" data-ya-scope="offers">
                <div className="Anchor-position" id="offers"></div>
                <div className="Offers-container">
                    <h2 className="Offers-title">
                       {c_offerSectionTitle}{name}
                    </h2>
                    <ul className="Offers-list l-row">
                        {c_offerItems.map((item:any)=>
                      
                        <li className="Offers-listItem l-col-xs-12-down l-col-sm-6-up">
                            <div className="Offer">
                                <div className="Offer-row">
                                    <div className="Offer-info">
                                        <div className="Offer-title">
                                            {item.offerHeadingTitle}
                                        </div>
                                        <div className="Offer-description">
                                           {item.offerDescription}
                                        </div>
                                        <div className="Offer-ctaWrapper">
                                            <a className="Offer-cta" href="#" data-ya-track="link#">
                                               {item.offerCta?.label}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                          )}
                    </ul>
                    <div className="Offers-ctaWrapper">
                        <a className="Offers-cta" href="#" data-ya-track="cta">
                        {textScheduleTest}
                        </a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Offers;