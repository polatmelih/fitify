import React from 'react';

function EmailButton() {
    const handleEmailClick = () => {
        window.location.href = "mailto:melih.polat@icloud.ch?subject=Gugu";
    };

    return (
        <button onClick={handleEmailClick}>
            E-Mail senden
        </button>
    );
}

export default EmailButton;