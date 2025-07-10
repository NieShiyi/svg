import React from "react";
import { ComponentNameMaps } from "../constants";
import "./index.css";

const Detail = ({ componentName, onBack }) => {
  const Component = ComponentNameMaps[componentName];

  if (!Component) {
    return (
      <div>
        <p>组件 "{componentName}" 未找到。</p>
        <button onClick={onBack}>← 返回列表</button>
      </div>
    );
  }

  return (
    <div>
      <div className="bar">
        {/* <h2 className="title">示例</h2> */}
        <button onClick={onBack} className="button">
          ← 返回列表
        </button>
      </div>
      <Component />
    </div>
  );
};

export default Detail;
