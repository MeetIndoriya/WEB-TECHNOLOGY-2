import React from "react";

const Toogle = () => {
    const isDisplay = true;
    return(
        <div>
            {isDisplay && <h1>Hello , it's dispaly using props</h1>}
        </div>
    )
}

export default Toogle
