import Markdown from "../../components/Markdown";
import Tabs from "../../components/Tabs";
import SvgCodeRender from "../../components/SvgCodeRender";
import MdText from "../../../docs/label-path.md?raw"; // 注意：?raw
import giftStylesheet from "./gift.css?raw";
import bearStylesheet from "./bear.css?raw";
import "./gift.css";
import "./bear.css";

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
          <SvgCodeRender sheets={[giftStylesheet]} layout="flex">
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
    {
      key: "5",
      label: "Bear",
      children: () => {
        return (
          <>
            <p>矩阵的圆角可以通过设置rx和ry来设置，如果只设置rx，默认ry=rx</p>
            <SvgCodeRender sheets={[bearStylesheet]}>
              <svg
                class="bear"
                width="200"
                height="200"
                viewBox="-100 -100 200 200"
              >
                <circle class="ear" cx="-40" cy="-50" r="18"></circle>
                <circle class="ear" cx="40" cy="-50" r="18"></circle>

                {/* 矩阵的圆角可以通过设置rx和ry来设置，如果只设置rx，默认ry=rx */}
                <rect
                  class="face"
                  x="-55"
                  y="-60"
                  width="110"
                  height="120"
                  rx="50"
                  ry="30"
                />
                <circle cx="20" cy="-30" r="3" />
                <circle cx="-20" cy="-30" r="3" />

                <path
                  d="
        M -30 0
        C -30 -25 30 -25 30 0
        L 30 30
        Q 30 40 20 40
        L -20 40
        Q -30 40 -30 30"
                  fill="#E5C39C"
                />
                <path
                  d="
        M -10 0
        L 10 0
        C 10 20 -10 20 -10 0"
                />
                <path
                  class="mouth"
                  d="
        M 0 10
        Q 0 25 10 25

        M 0 10
        Q 0 25 -10 25"
                />
              </svg>
            </SvgCodeRender>
          </>
        );
      },
    },
  ];

  return <Tabs items={items} />;
};

export default CubicBezierCurves;
