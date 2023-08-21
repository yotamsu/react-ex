import React, { useContext, useState } from "react";
import Editor from "./components/page/Editor";
import Previewer from "./components/page/Previewer";
import ReactMarkdown from "react-markdown";
import ExpendContext, { ExpendContextProvider } from "./store/expend-context";

function App() {
  const [textToEdit, setTextToEdit] = useState("");
  // const [expend, setExpend] = useState("");

  const editHandler = (text) => {
    setTextToEdit(<ReactMarkdown>{text}</ReactMarkdown>);
  };

  // const expendHandler = (currentExpend) => {
  //   console.log(currentExpend);
  //   setExpend(currentExpend);
  // };

  const ctx = useContext(ExpendContext);

  return (
    <React.Fragment>
      {!(ctx.expend === "preview") && <Editor onEdit={editHandler} />}
      {!(ctx.expend === "editor") && <Previewer text={textToEdit} />}
    </React.Fragment>
  );
}

export default App;
