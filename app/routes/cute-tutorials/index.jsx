/**
 * 根据一个容易上手的教程绘制每一节课的内容，都是有趣可爱的图形呢，very funny！！！
 * https://svg-tutorial.com/
 */
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import List from "./List";
import Detail from "./Detail";

const cuteTutorials = () => {
   const [activeItem, setActiveItem] = useState(null);

  return (
    <div style={{ padding: 20}}>
      {activeItem ? (
        <Detail
          activeItem={activeItem}
          onBack={() => setActiveItem(null)}
        />
      ) : (
        <List onSelect={setActiveItem} />
      )}
    </div>
  );
};

export default cuteTutorials;
