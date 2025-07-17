import Markdown from "../../components/Markdown";
import Tabs from "../../components/Tabs";
import SvgCodeRender from "../../components/SvgCodeRender";
import MdText from "../../../docs/label-path.md?raw"; // 注意：?raw
import stylesheet from "./index.css?raw";
import "./index.css";

const CubicBezierCurves = () => {
  const items = [
    {
      key: "1",
      label: "Path-Cubic Bezier Curves",
      children: <Markdown text={MdText} />,
    },
    {
      key: "2",
      label: "profile（轮廓）",
      children: () => {
        return (
          <SvgCodeRender layout="flex">
            <svg
              width="200"
              height="200"
              viewBox="-100 -100 200 200"
              fill="none"
              stroke="black"
              stroke-width="10"
            >
              <circle cx="0" cy="-20" r="20"></circle>
              <path
                d="M -50,90 C -40,0 40,0 50,90 L -50,90"
                strokeLinecap="round"
              ></path>
              <path d="M -100,0 L 100,0" stroke="red" stroke-width="1"></path>
              <path d="M 0,-100 L 0,100" stroke="red" stroke-width="1"></path>
            </svg>
          </SvgCodeRender>
        );
      },
    },
    {
      key: "3",
      label: "profile2（轮廓）",
      children: () => {
        return (
          <SvgCodeRender layout="flex">
            <svg
              width="200"
              height="200"
              viewBox="-100 -100 200 200"
              fill="none"
              stroke="black"
              stroke-width="10"
            >
              <circle cy="-40" r="20" />
              <path
                d="
                  M -50,70
                  C -50,-20 50,-20 50,70
                  Z"
              />
            </svg>
          </SvgCodeRender>
        );
      },
    },
    {
      key: "4",
      label: "Gift",
      children: () => {
        return (
          <SvgCodeRender sheets={[stylesheet]} layout="flex">
            <svg width="200" height="200" viewBox="-100 -100 200 200">
              <circle cx="0" cy="-50" r="10" fill="#a9172a" />
              <rect class="box" x="-60" y="-40" width="120" height="100" />
              <rect class="box" x="-70" y="-47" width="140" height="20" />
              <rect class="stripe" x="-20" y="-40" width="40" height="100" />
              <rect class="stripe" x="-25" y="-47" width="50" height="20" />

              <path
                class="ribbon"
                d="
                M 0 -50
                L 30 -50
                C 50 -50 50 -70 30 -65
                L 0 -50"
              />

              <path
                class="ribbon"
                d="
                M 0 -50
                L -30 -50
                C -50 -50 -50 -70 -30 -65
                L 0 -50"
              />
            </svg>
          </SvgCodeRender>
        );
      },
    },
  ];

  return <Tabs items={items} />;
};

export default CubicBezierCurves;
