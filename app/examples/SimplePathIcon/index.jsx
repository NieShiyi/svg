import Markdown from "../../components/Markdown";
import Tabs from "../../components/Tabs";
import SvgCodeRender from "../../components/SvgCodeRender";
import MdText from "../../../docs/label-path.md?raw"; // 注意：?raw
import stylesheet from "./index.css?raw";
import "./index.css";

const SimplePathIcon = () => {
  const items = [
    {
      key: "1",
      label: "Path",
      children: <Markdown text={MdText} />,
    },
    {
      key: "2",
      label: "红心图标",
      children: () => {
        return (
            <SvgCodeRender sheets={[stylesheet]} layout="flex">
              <svg width="200" height="200" viewBox="-100 -100 200 200">
                <path
                  d="M -45,-45 L 0,0 L 45,-45"
                  fill="none"
                  stroke-width="70"
                  stroke="red"
                  stroke-linecap="round"
                ></path>
              </svg>
            </SvgCodeRender>
        );
      },
    },
    {
      key: "3",
      label: "箭头图标",
      children: () => {
        return (
            <SvgCodeRender sheets={[stylesheet]} layout="flex">
              <svg width="200" height="200" viewBox="-100 -100 200 200">
                <path
                  d="M -45,-45 L 0,0 L 45,-45"
                  fill="none"
                  stroke-width="70"
                  stroke="red"
                  stroke-linecap="round"
                ></path>
              </svg>
            </SvgCodeRender>
        );
      },
    },
    {
      key: "4",
      label: "全屏图标",
      children: () => {
        return (
            <SvgCodeRender sheets={[stylesheet]} layout="flex">
              <svg width="200" height="200" viewBox="-100 -100 200 200">
                <path
                  d="M -45,-45 L 0,0 L 45,-45"
                  fill="none"
                  stroke-width="70"
                  stroke="red"
                  stroke-linecap="round"
                ></path>
              </svg>
            </SvgCodeRender>
        );
      },
    },
  ];

  return <Tabs items={items} />;
};

export default SimplePathIcon;
