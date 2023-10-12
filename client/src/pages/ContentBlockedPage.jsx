import React from "react";
import ContentBlocker from "../components/ContentBlocker/ContentBlocker";

const ContentBlockedPage = (props) => {
  return (
    <div className=" h-[82vh] sm:h-[85vh] md:h-[86vh] w-full flex flex-col justify-start items-start  p-2 ">
      <ContentBlocker headingText={props.heading} />
    </div>
  );
};

export default ContentBlockedPage;
