/**
 * viewBox
 */
import Markdown from "../../components/Markdown";
import Tabs from "../../components/Tabs";
import CodeRender from "../../components/CodeRender";
import MdText from "../../../docs/basic.md?raw"; // 注意：?raw
import stylesheet from "./index.css?raw";
import "./index.css";

const House = () => {
  // TODO 最后做成自动转换成代码字符串的，并且封装布局组件
  const code = `<svg className="house" width="200" height="200" viewBox="-100 -100 200 200">
  {/* 五边形框架 */}
  <polygon className="wall" points="-65,80 -65,-10 0,-70 65,-10 65,80" />
  {/* 红色房顶 */}
  <polyline className="roof" points="-75,-8 0,-78 75,-8" />

  {/* 门 */}
  <rect className="door" x="-45" y="10" width="30" height="60" rx="2" />
  <circle className="door-knob" cx="-35" cy="40" r="2" />
  <rect className="stair" x="-47" y="70" width="34" height="5" />
  <rect className="stair" x="-49" y="75" width="38" height="5" />

  {/* 窗 */}
  <rect className="window" x="5" y="15" width="40" height="35" rx="5" />
  <line x1="5" y1="32.5" x2="45" y2="32.5" />
  <line x1="25" y1="15" x2="25" y2="50" />
  <rect className="window-sill" x="2" y="48" width="46" height="5" rx="5" />

  <circle className="window" cx="0" cy="-25" r="15" />
  <line x1="-15" y1="-25" x2="15" y2="-25" />
  <line x1="0" y1="-40" x2="0" y2="-10" />
</svg>`;

  // 圣诞树绘画代码
  const SvgRender = (
    <svg className="house" width="200" height="200" viewBox="-100 -100 200 200">
      {/* 五边形框架 */}
      <polygon className="wall" points="-65,80 -65,-10 0,-70 65,-10 65,80" />
      {/* 红色房顶 */}
      <polyline className="roof" points="-75,-8 0,-78 75,-8" />

      {/* 门 */}
      <rect className="door" x="-45" y="10" width="30" height="60" rx="2" />
      <circle className="door-knob" cx="-35" cy="40" r="2" />
      <rect className="stair" x="-47" y="70" width="34" height="5" />
      <rect className="stair" x="-49" y="75" width="38" height="5" />

      {/* 窗 */}
      <rect className="window" x="5" y="15" width="40" height="35" rx="5" />
      <line x1="5" y1="32.5" x2="45" y2="32.5" />
      <line x1="25" y1="15" x2="25" y2="50" />
      <rect className="window-sill" x="2" y="48" width="46" height="5" rx="5" />

      <circle className="window" cx="0" cy="-25" r="15" />
      <line x1="-15" y1="-25" x2="15" y2="-25" />
      <line x1="0" y1="-40" x2="0" y2="-10" />
    </svg>
  );

  const items = [
    {
      key: "1",
      label: "polyline 和 polygon",
      children: <Markdown text={MdText} />,
    },
    {
      key: "2",
      label: "房子（House）",
      children: () => {
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            {SvgRender}
            <CodeRender code={code} />
            <CodeRender code={stylesheet} />
          </div>
        );
      },
    },
  ];

  return <Tabs items={items} />;
};

export default House;
