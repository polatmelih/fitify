import React from "react";
import { Button } from "@mui/material";

function EmailButtonError() {
  const handleEmailClick = () => {
    window.location.href = "mailto:melih.polat@icloud.ch?subject=Fehler entdeckt";
  };

  return (
    <>
      <Button
        variant="contained"
        onClick={handleEmailClick}
      >
        E-Mail senden
      </Button>
    </>
  );
}

export default EmailButtonError;
