import React from "react";
import Card from "../UI/Card";
import classes from "./Previewer.module.css";
import { useContext } from "react";
import Toolbar from "../UI/Toolbar";
import ExpendContext from "../../store/expend-context";

const Previewer = (props) => {
  const expendCtx = useContext(ExpendContext);

  const maximizedComp =
    expendCtx.expend === "preview" ? `${classes.maximized}` : "";

  return (
    <React.Fragment>
      <Card className={`${classes.previewWrap} ${maximizedComp}`}>
        <Toolbar title="Previewer" compName="preview" />
        <div id="preview">{props.text}</div>
      </Card>
    </React.Fragment>
  );
};

export default Previewer;
