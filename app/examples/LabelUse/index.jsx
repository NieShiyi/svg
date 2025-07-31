import Markdown from "../../components/Markdown";
import Tabs from "../../components/Tabs";
import SvgCodeRender from "../../components/SvgCodeRender";
import MdText from "../../../docs/label-use.md?raw"; // 注意：?raw
import stylesheet from "./index.css?raw";
import "./index.css";

const AttrTransform = () => {
  const items = [
    {
      key: "1",
      label: "<use>",
      children: <Markdown text={MdText} />,
    },
    {
      key: "2",
      label: "Sun",
      children: () => {
        return (
          <SvgCodeRender layout="flex">
            <svg width="200" height="200" viewBox="-15 -15 30 30">
              <circle r="6" fill="pink" />

              <line
                id="ray"
                stroke="pink"
                stroke-width="2"
                stroke-linecap="round"
                x1="0"
                y1="11"
                x2="0"
                y2="14"
              />

              <use href="#ray" transform="rotate(45)" />
              <use href="#ray" transform="rotate(90)" />
              <use href="#ray" transform="rotate(135)" />
              <use href="#ray" transform="rotate(180)" />
              <use href="#ray" transform="rotate(225)" />
              <use href="#ray" transform="rotate(270)" />
              <use href="#ray" transform="rotate(315)" />
            </svg>
          </SvgCodeRender>
        );
      },
    },
    {
      key: "3",
      label: "Snowflake",
      children: () => {
        return (
          <SvgCodeRender layout="flex">
            <svg width="200" height="200" viewBox="-100 -100 200 200">
              <path
                id="branch"
                d="
      M 0 0 L 0 -90
      M 0 -20 L 20 -34
      M 0 -20 L -20 -34
      M 0 -40 L 20 -54
      M 0 -40 L -20 -54
      M 0 -60 L 20 -74
      M 0 -60 L -20 -74"
                stroke="#E5C39C"
                stroke-width="5"
              />

              <use href="#branch" transform="rotate(60)" />
              <use href="#branch" transform="rotate(120)" />
              <use href="#branch" transform="rotate(180)" />
              <use href="#branch" transform="rotate(240)" />
              <use href="#branch" transform="rotate(300)" />
            </svg>
          </SvgCodeRender>
        );
      },
    },
  ];

  return <Tabs items={items} />;
};

export default AttrTransform;
