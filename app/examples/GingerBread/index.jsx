/**
 * viewBox
 */
import Markdown from "../../components/Markdown";
import Tabs from "../../components/Tabs";
import CodeRender from "../../components/CodeRender";
import classText from "../../../docs/class.md?raw"; // 注意：?raw
import "./index.css";

const GingerBread = () => {
  // TODO 最后做成自动转换成代码字符串的，并且封装布局组件
  const code = `<svg class="gingerbread" width="200" height="200" viewBox="-100 -100 200 200">
  <circle class="head" cx="0" cy="-50" r="30" />

  <circle class="eye" cx="-12" cy="-55" r="3" />
  <circle class="eye" cx="12" cy="-55" r="3" />
  <rect class="mouth" x="-10" y="-40" width="20" height="5" rx="2" />

  <line class="limb" x1="-40" y1="-10" x2="40" y2="-10" />
  <line class="limb" x1="-25" y1="50" x2="0" y2="-15" />
  <line class="limb" x1="25" y1="50" x2="0" y2="-15" />

  <circle cx="0" cy="-10" r="5" />
  <circle cx="0" cy="10" r="5" />
</svg>`;

  const cssCode = `
.head {
  fill: #cd803d;
}

.eye {
  fill: white;
}

.mouth {
  fill: none;
  stroke: white;
  stroke-width: 2px;
}

.limb {
  stroke: #cd803d;
  stroke-width: 35px;
  stroke-linecap: round;
}
`;

  // 圣诞树绘画代码
  const SvgRender = (
    <svg
      class="gingerbread"
      width="200"
      height="200"
      viewBox="-100 -100 200 200"
    >
      <circle class="head" cx="0" cy="-50" r="30" />

      <circle class="eye" cx="-12" cy="-55" r="3" />
      <circle class="eye" cx="12" cy="-55" r="3" />
      <rect class="mouth" x="-10" y="-40" width="20" height="5" rx="2" />

      <line class="limb" x1="-40" y1="-10" x2="40" y2="-10" />
      <line class="limb" x1="-25" y1="50" x2="0" y2="-15" />
      <line class="limb" x1="25" y1="50" x2="0" y2="-15" />

      <circle cx="0" cy="-10" r="5" />
      <circle
        cx="0"
        cy="10"
        r="5"
      />
    </svg>
  );

  const items = [
    {
      key: "1",
      label: "使用class定义样式",
      children: <Markdown text={classText} />,
    },
    {
      key: "2",
      label: "姜饼（Ginger Bread）",
      children: () => {
        return (
          <div style={{ display: "flex" }}>
            {SvgRender}
            <CodeRender code={code} />
            <CodeRender code={cssCode} />
          </div>
        );
      },
    },
  ];

  return <Tabs items={items} />;
};

export default GingerBread;
