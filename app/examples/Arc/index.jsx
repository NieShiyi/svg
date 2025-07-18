import Markdown from "../../components/Markdown";
import Tabs from "../../components/Tabs";
import SvgCodeRender from "../../components/SvgCodeRender";
import MdText from "../../../docs/label-path.md?raw"; // 注意：?raw

const CubicBezierCurves = () => {
  const items = [
    {
      key: "1",
      label: "Path-Arc",
      children: <Markdown text={MdText} />,
    },
    {
      key: "2",
      label: "Moon",
      children: () => {
        return (
          <SvgCodeRender layout="flex">
            <svg width="200" height="200" viewBox="0 0 30 30">
              <path
                d="
      M 23, 5
      A 12 12 0 1 0 23, 25
      A 12 12 0 0 1 23, 5"
              />
            </svg>
          </SvgCodeRender>
        );
      },
    },
    {
      key: "3",
      label: "Candy Cane",
      children: () => {
        return (
          <SvgCodeRender layout="flex">
            {/* 为什么要这样绘制，不直接使用fill呢，因为我门相当于绘制的是一条类似7的线，然后靠stroke-linecap变胖了 */}
            {/* 绘制黑色拐棍 */}
            <svg width="200" height="400" viewBox="-100 -200 200 400">
              <path
                d="
        M 50 120
        L 50 -80
        A 50 50 0 0 0 -50 -80"
                fill="none"
                stroke="black"
                stroke-width="45"
                stroke-linecap="round"
              />

              {/* 绘制红色拐棍，宽度小于黑色拐棍，就相当于黑色是边 */}
              <path
                d="
        M 50 120
        L 50 -80
        A 50 50 0 0 0 -50 -80"
                fill="none"
                stroke="red"
                stroke-width="35"
                stroke-linecap="round"
              />

              {/* 绘制白色条纹 */}
              <path
                d="
        M 50 120
        L 50 -80
        A 50 50 0 0 0 -50 -80"
                fill="none"
                stroke="white"
                stroke-width="35"
                stroke-dasharray="30 30"
              />
            </svg>
          </SvgCodeRender>
        );
      },
    },
    {
      key: "4",
      label: "Lightbulb",
      children: () => {
        return (
          <SvgCodeRender layout="flex">
            <svg width="200" height="200" viewBox="-100 -100 200 200">
              <path
                d="
      M -30 20
      A 50 50 0 1 1 30 20
      Q 20 30 20 50
      L -20 50
      Q -20 30 -30 20"
                fill="gold"
                stroke="black"
                stroke-width="10"
                stroke-linejoin="round"
              />
              <path
                d="
      M -30 -20
      A 30 30 0 0 1 0 -50"
                fill="none"
                stroke="black"
                stroke-width="10"
                stroke-linecap="round"
              />
              <path
                d="
      M -18 62
      L 18 62
      M -15 75
      L 15 75"
                stroke="black"
                stroke-width="10"
                stroke-linecap="round"
              />
            </svg>
          </SvgCodeRender>
        );
      },
    },
  ];

  return <Tabs items={items} defaultActiveKey="4" />;
};

export default CubicBezierCurves;
