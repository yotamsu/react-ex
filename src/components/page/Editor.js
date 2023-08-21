import React from "react";
import Card from "../UI/Card";
import classes from "./Editor.module.css";
import Toolbar from "../UI/Toolbar";
import { useContext } from "react";
import ExpendContext from "../../store/expend-context";

const Editor = (props) => {
  const expendCtx = useContext(ExpendContext);

  const changeHandler = (event) => {
    props.onEdit(event.target.value);
  };

  const maximizedComp =
    expendCtx.expend === "editor" ? `${classes.maximized}` : "";

  return (
    <React.Fragment>
      <Card className={`${classes.editorWrap} ${maximizedComp}`}>
        <Toolbar title={"Editor"} compName="editor" />
        <textarea id="editor" onChange={changeHandler}></textarea>
      </Card>
    </React.Fragment>
  );
};

export default Editor;
