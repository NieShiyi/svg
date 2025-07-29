import Markdown from "../../components/Markdown";
import Tabs from "../../components/Tabs";
import SvgCodeRender from "../../components/SvgCodeRender";
import MdText from "../../../docs/attr-transform.md?raw"; // 注意：?raw
import stylesheet from "./index.css?raw";
import "./index.css";

const AttrTransform = () => {
  const items = [
    {
      key: "1",
      label: "attr transform：rotate 、 translate",
      children: <Markdown text={MdText} />,
    },
    {
      key: "2",
      label: "Star",
      children: () => {
        return (
          <SvgCodeRender layout="flex">
            <svg width="200" height="200" viewBox="-100 -100 200 200">
              <g transform="translate(0 5)">
                <g>
                  <polygon points="0,0 36,-50 0,-100" fill="#EDD8B7" />
                  <polygon points="0,0 -36,-50 0,-100" fill="#E5C39C" />
                </g>
                <g transform="rotate(72)">
                  <polygon points="0,0 36,-50 0,-100" fill="#EDD8B7" />
                  <polygon points="0,0 -36,-50 0,-100" fill="#E5C39C" />
                </g>
                <g transform="rotate(-72)">
                  <polygon points="0,0 36,-50 0,-100" fill="#EDD8B7" />
                  <polygon points="0,0 -36,-50 0,-100" fill="#E5C39C" />
                </g>
                <g transform="rotate(144)">
                  <polygon points="0,0 36,-50 0,-100" fill="#EDD8B7" />
                  <polygon points="0,0 -36,-50 0,-100" fill="#E5C39C" />
                </g>
                <g transform="rotate(-144)">
                  <polygon points="0,0 36,-50 0,-100" fill="#EDD8B7" />
                  <polygon points="0,0 -36,-50 0,-100" fill="#E5C39C" />
                </g>
              </g>
            </svg>
          </SvgCodeRender>
        );
      },
    },
  ];

  return <Tabs items={items} />;
};

export default AttrTransform;
