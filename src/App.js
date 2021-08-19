import React, {forwardRef, useRef} from "react";

function App() {
    const buttonRef = useRef(null);
    return (
        <div>
            <Button ref={buttonRef}>自定义按钮</Button>
        </div>
    );
}

const Button = forwardRef(function (props, ref) {
    console.log(props);
    console.log(ref);
    return (
        <button className="child" {...props} ref={ref}></button>
    );
})

export default App;
