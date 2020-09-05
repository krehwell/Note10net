import React from "react";
import Button from "@material-ui/core/Button";

export default function UiButton(props) {
  return (
    <Button
      style={{ margin: 5 }}
      onClick={props.function}
      variant="contained"
      color={props.name === "login" ? "primary" : props.name === "signup" ? "secondary" : ""}
      type="submit"
      to={{ pathname: `/` }}>
      {props.name}
    </Button>
  );
}