import React from 'react';
import PopOverCom from "../Components/PopOverCom";
import TypographyText from "../Components/TypographyText";
import StackCom from "../Components/StackCom";
import ButtonsCom from "../Components/ButtonsCom";

const SecondPage = () => {
    return (
        <div>
            <h4>Second page are here</h4>
            <TypographyText />
            {/*<PopOverCom />*/}
            <StackCom />
            <ButtonsCom />
        </div>
    );
};

export default SecondPage;
