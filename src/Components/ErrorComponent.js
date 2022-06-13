import React from "react";


const ErrorComponent = () => {
    return (
        <>
            <img src="data:image/png;base64,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" alt= "404" />
        </>
    );
}

export default ErrorComponent;