import { Button } from "@mui/material";
import React, { useState } from "react";

const PopupForm = ({
  userId,
  id,
  updateArticle,
  handleFormState,
  createArticle,
}) => {
  console.log(
    "form data=",
    userId,
    id,
    updateArticle,
    handleFormState,
    createArticle
  );
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const description = {
    title: title,
    body: body,
  };
  const handleClick = () => {
    if (updateArticle) {
      updateArticle(id, description);
      handleFormState();
    } else {
      createArticle({
        userId,
        id,
        title,
        body,
      });
      handleFormState();
    }
  };
  return (
    <div
      style={{
        width: "500px",
        height: "300px",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        display: "flex",
        flexDirection: "column",
        background: "grey",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <input
        type="text"
        placeholder="Enter Title"
        style={{ width: "90%", height: "40px", marginBottom: "20px" }}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Body"
        style={{ width: "90%", height: "40px", marginBottom: "20px" }}
        onChange={(e) => setBody(e.target.value)}
      />
      <Button variant="contained" sx={{ margin: "2px" }} onClick={handleClick}>
        submit
      </Button>
    </div>
  );
};

export default PopupForm;
