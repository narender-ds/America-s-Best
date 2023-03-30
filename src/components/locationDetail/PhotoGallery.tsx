import * as React from "react";
// import gallerybg from "../../images/bg-service.jpg"

const PhotoGallery = (props: any) => {
  const { c_galleryitems, c_galleryimage } = props;

  // console.log(props.c_galleryimage,"bajrang")

  return (
    <>

      <div className="Categories Anchor">
        <div className="Categories-container">
          <h2 className="Categories-title">{props.c_categoryTitle}</h2>
          <ul className="Categories-list l-row">
            {props.c_categoryItems.map((items: any) => {
              return (
                <>
                  <li className="Categories-listItem l-col-sm-6-down l-col-md-3-up">
                    <div className="Category">
                      <a className="Category-link" href="#">
                        <div className="Category-imageWrapper">
                          <img className="shop-gallery" src={items.categoryPhoto?.url} alt="" />
                        </div>
                        <span className="Category-name">{items.categoryItemName}</span>
                      </a>
                    </div>
                  </li>
                </>
              )
            }
            )}
          </ul>
          <div className="Categories-ctaWrapper"><a className="Categories-cta" href="#" data-ya-track="cta">{props.c_categoryItemCta?.label}</a></div>
        </div>
      </div>
    </>
  );
};

export default PhotoGallery;