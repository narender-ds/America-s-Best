import * as React from "react";



const StickHeader = (props: any) => {
    const {c_stickheader } = props;


    return (
        <>
            <div className="StickyNav" data-ya-scope="nav">
                <div className="StickyNav-container">
                    <div className="StickyNav-title">{props._site?.c_navBar.navMenuOnThisPage}</div>
                    
                   
                    <div className="StickyNav-list">
                    {props._site?.c_navBar.navLinks.map((link:any)=>
                        <a className="StickyNav-link" href="#offers" data-ya-track="link#">{link.label}</a>
                        )}
                    </div>
                    
                </div>
            </div>
        </>
    )
}
export default StickHeader;