/**
 * @author canberk.anar
 */


import React from "react";

import SuccessComponent from "../components/SuccessComponent";
import Loading from "../components/Loading";

function SuccessView(props) {

    const onHomePageClicked = () => {
        props.history.push("/mainMenu");
    };

    const pinCode = props.location.state;


    return ( !pinCode && !pinCode.error ? onHomePageClicked :
        <SuccessComponent
            onHomePageClicked={onHomePageClicked} pinCode = {pinCode}
        />
    );
}

export default SuccessView;
