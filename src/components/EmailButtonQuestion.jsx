import React from "react";
import { Button } from "@mui/material";

function EmailButtonQuestion() {
    const handleEmailClick = () => {
        window.location.href = "mailto:melih.polat@icloud.ch?subject=Sonstige Fragen";
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

export default EmailButtonQuestion;
