import React from "react";
import { Button } from "@mui/material";

function EmailButtonRequest() {
    const handleEmailClick = () => {
        window.location.href = "mailto:melih.polat@icloud.ch?subject=Feature Request";
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

export default EmailButtonRequest;
