import { ArrowCircleDown, ArrowCircleDownOutlined, ArrowCircleRight, ArrowCircleRightOutlined, ArrowCircleRightRounded, ArrowDownward, ArrowDownwardOutlined, ArrowDropDown, ArrowRight, ArrowRightAlt, ArrowRightOutlined, ChevronRight, ChevronRightOutlined, ChevronRightRounded, ExpandCircleDown, ExpandCircleDownOutlined } from "@mui/icons-material";
import * as React from "react";
import Button from "../Button";
import { CardRow, GenericButton } from "../Shared/shared.styled";
import { CardRowTypography } from "../Shared/typography.styled";

const CardData = (props: any) => {
    const [expanded, setExpanded] = React.useState(false);
    
    function getData() {
        if (expanded) {
            return props.data;
        } 
        else {
            return props.data.slice(0,7);
        }
    }
    
    return (
      <>
        {getData().map(function (object: any) {
          return (
            <CardRow key={object.key} style={{ display: "flex" }}>
              {object.data.map(function (data: any) {
                return <CardRowTypography>{data.text.length > 30 ? data.text.substring(0, 27) + `...` : data.text}</CardRowTypography>;
              })}
            </CardRow>
          );
        })}
        {props.data.length > 7 && (
          <CardRow style={{display: "flex"}}>
            <GenericButton padding="5px 5px 0px 5px" margin="0px 0px 0px auto" onClick={() => {
                setExpanded(expanded => !expanded);
            }}>
                {expanded ? <ArrowRight /> : <ArrowDropDown />}
            </GenericButton>
          </CardRow>
        )}
      </>
    );
}

export default CardData