import React from "react";
import ExampleStore from "../stores/ExampleStore";
import { observer } from "mobx-react";

const ExampleScreen: React.FC = observer(() => {
  const onClickIncrease = () => {
    ExampleStore.increaseAction(3);
  };

  const onClickDecrease = () => {
    ExampleStore.decreaseAction(3);
  };
  return (
    <div>
      <p>현재 값: {ExampleStore.num}</p>

      <button onClick={onClickIncrease}>증가</button>
      <button onClick={onClickDecrease}>감소</button>
    </div>
  );
});

export default ExampleScreen;
