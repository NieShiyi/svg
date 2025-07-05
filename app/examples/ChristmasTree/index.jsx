/**
 * viewBox
 */
import Markdown from "../../components/Markdown";
import Tabs from "../../components/Tabs";
import CodeRender from "../../components/CodeRender";
import AttrViewBoxText from "../../../docs/attr-viewBox.md?raw"; // 注意：?raw

const ChristmasTree = () => {
  // TODO 最后做成自动转换成代码字符串的，并且封装布局组件
  const code = `<svg width="200" height="400" viewBox="-100 -150 200 400">
  <polygon points="0,0 80,120 -80,120" fill="#234236"></polygon>
  <polygon points="0,-40 60,60 -60,60" fill="#0C5C4C" />
  <polygon points="0,-80 40,0 -40,0" fill="#38755B" />
  <rect x="-20" y="120" width="40" height="30" fill="brown"></rect>
</svg>`;

  // 圣诞树绘画代码
  const SvgRender = (
    <svg width="200" height="400" viewBox="-100 -150 200 400">
      <polygon points="0,0 80,120 -80,120" fill="#234236"></polygon>
      <polygon points="0,-40 60,60 -60,60" fill="#0C5C4C" />
      <polygon points="0,-80 40,0 -40,0" fill="#38755B" />
      <rect x="-20" y="120" width="40" height="30" fill="brown"></rect>
    </svg>
  );

  const items = [
    {
      key: "1",
      label: "viewBox属性",
      children: <Markdown text={AttrViewBoxText} />,
    },
    {
      key: "2",
      label: "圣诞树",
      children: () => {
        return (
          <div style={{ display: "flex" }}>
            {SvgRender}
            <CodeRender code={code} />
          </div>
        );
      },
    },
  ];

  return <Tabs items={items} />;
};

export default ChristmasTree;
