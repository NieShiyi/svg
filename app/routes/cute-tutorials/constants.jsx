import RedLantern from "../../examples/RedLantern";
import ChristmasTree from "../../examples/ChristmasTree";
import GingerBread from "../../examples/GingerBread";
import House from "../../examples/House";
import SimplePathIcon from "../../examples/SimplePathIcon";

export const ListData = [
  {
    name: "svg 元素",
    desc: "svg元素的简单使用",
    demo: "RedLantern(红灯笼)",
    doc: "",
    componentName: "RedLantern",
  },
  {
    name: "viewBox 属性",
    desc: "理解 SVG 的坐标系统",
    demo: "ChristmasTree(圣诞树)",
    doc: "/docs/viewBox.md",
    componentName: "ChristmasTree",
  },
  {
    name: "使用class定义样式",
    desc: "class的使用",
    demo: "GingerBread(姜饼人)",
    doc: "/docs/clip-path.md",
    componentName: "GingerBread",
  },
  {
    name: "polyline&polygon 元素",
    desc: "折线和多边形元素",
    demo: "House(房子)",
    doc: "/docs/basic.md",
    componentName: "House",
  },
  {
    name: "path 元素",
    desc: "重要的路径元素，可以绘制复杂图形",
    demo: "SimplePathIcon(几个简单的图标路径)",
    doc: "/docs/label-path.md",
    componentName: "SimplePathIcon",
  },
];

export const ComponentNameMaps = {
  RedLantern,
  ChristmasTree,
  GingerBread,
  SimplePathIcon,
  House,
};
