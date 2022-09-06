import React, { useState } from "react";
import ReactDOM from "react-dom";
const useInput = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue);
    const onChange = event => {
        const {
            target: {value}
        } = event;
        let willUpdate = true;
        if(willUpdate){
            setValue(value);
        }
        if(typeof validator === "function"){
             willUpdate = validator(value);
        };
    };
    return {value, onChange};
};
const App = () => {
    const maxLength = value => value.lenght < 10; //10글자 아래로 적용된다
    const name = useInput("Mr.");
    return(
        <input {...name} />
    )
}