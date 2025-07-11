import React, { useEffect, useState } from "react";
import "./index.css";

const Detail = ({ activeItem, onBack }) => {
  const { componentName } = activeItem;
  const [Component, setComponent] = useState(null);

  const NotFoundCom = (
    <div>
      <p>组件 "{componentName}" 未找到。</p>
      <button onClick={onBack}>← 返回列表</button>
    </div>
  );

  useEffect(() => {
    if (!componentName) {
      return <NotFoundCom />;
    }
    // 动态导入示例组件
    import(`../../../examples/${componentName}/index.jsx`)
      .then((mod) =>
        setComponent(() => {
          if (mod?.default) {
            console.log("mod", mod);
            setComponent(() => mod.default);
          } else {
            console.error("模块没有 default 导出");
            setComponent(() => () => (
              <p style={{ color: "red" }}>❌ 模块无 default 导出</p>
            ));
          }
        })
      )
      .catch(() => {
        console.error("模块引入出错");
        setComponent(() => () => (
          <p style={{ color: "red" }}>❌ 无法加载组件</p>
        ));
      });
  }, [componentName]);

  return (
    <div>
      <div className="bar">
        <button onClick={onBack} className="button">
          ← 返回列表
        </button>
      </div>
      {Component && <Component />}
    </div>
  );
};

export default Detail;
