import { useState } from "react";

const TestingFun = (props) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleVisibility = () => {
    console.log("event fired");
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <h1>TestingFun</h1>
      <p>{isVisible ? "Hello world" : "hello bmtc"}</p>
      <button onClick={handleVisibility}>Click me</button>
      <div>
        <h1>{props.title}</h1>
        <h3>{props.desc}</h3>
      </div>
    </div>
  );
};

export default TestingFun;
