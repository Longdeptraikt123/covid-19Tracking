import HighlightCard from "./highlightCard";
import React from "react";
const Highlight = ({ report ,selectedCountryId}) => {
    return (
        <HighlightCard selectedCountryId={selectedCountryId} report={report} />
    )
}
export default Highlight