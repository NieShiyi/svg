/**
 * 根据阮一峰老师文档列出常用标签的基础实用
 * https://www.ruanyifeng.com/blog/2018/08/svg.html
 * @returns 
 */

const Basic = () => {
  return (
    <>
      {/* 顶层svg */}
      <svg width="100%" height="100%">
        <circle id="mycircle" cx="50" cy="50" r="50" />
      </svg>

      {/* viewBox属性： 如果只想展示 SVG 图像的一部分，就要指定viewBox属性。 */}
      <svg width="100" height="100" viewBox="50 50 50 50">
        <circle id="mycircle" cx="50" cy="50" r="50" />
      </svg>

      {/* <circle>圆形标签 */}
      <svg width="300" height="180">
        <circle cx="30" cy="50" r="25" />
        <circle cx="90" cy="50" r="25" class="red" />
        <circle cx="150" cy="50" r="25" class="fancy" />
      </svg>

      {/* <line>直线标签 */}
      <svg width="100%" height="100%">
        <line
          x1="0"
          y1="0"
          x2="200"
          y2="0"
          style={{ stroke: "rgb(0, 0, 0)", strokeWidth: 5 }}
        />
      </svg>

      {/* <polyline>标签 */}
      <svg width="300" height="180">
        <polyline points="3,3 30,28 3,53" fill="none" stroke="black" />
      </svg>

      {/* <rect>标签 */}
      <svg width="300" height="180">
        <rect x="0" y="0" height="100" width="200" />
      </svg>

      {/* <ellipse>标签 */}
      <svg width="300" height="180">
        <ellipse
          cx="60"
          cy="60"
          ry="40"
          rx="20"
          stroke="black"
          stroke-width="5"
          fill="silver"
        />
      </svg>

      {/* <path>路径标签 */}
      <svg width="300" height="180">
        <path d="M 18,3 L 46,3 L 46,40 L 61,40 L 32,68 L 3,40 L 18,40 Z"></path>
      </svg>

      {/* <use>标签：用于复制一个图形 */}
      <svg viewBox="0 0 30 10" xmlns="http://www.w3.org/2000/svg">
        <circle id="myCircle" cx="5" cy="5" r="4" />
        <use href="#myCircle" x="10" y="0" fill="blue" />
        <use href="#myCircle" x="20" y="0" fill="white" stroke="blue" />
      </svg>

      {/* <polygon>多边形标签 */}
      <svg width="300" height="180">
        <polygon
          fill="green"
          stroke="orange"
          stroke-width="1"
          points="0,0 100,0 100,100 0,100 0,0"
        />
      </svg>

      {/* <text>文本标签 */}
      <svg width="300" height="180">
        <text x="50" y="25">
          Hello World
        </text>
      </svg>

      {/* <g>组标签 */}
      <svg width="300" height="100">
        <g id="myCircle">
          <text x="25" y="20">
            圆形
          </text>
          <circle cx="50" cy="50" r="20" />
        </g>

        <use href="#myCircle" x="100" y="0" fill="blue" />
        <use href="#myCircle" x="200" y="0" fill="white" stroke="blue" />
      </svg>

      {/* <defs>自定义形状: 标签用于自定义形状，它内部的代码不会显示，仅供引用 */}
      <svg width="300" height="100">
        <defs>
          <g id="myCircle">
            <text x="25" y="20">
              圆形
            </text>
            <circle cx="50" cy="50" r="20" />
          </g>
        </defs>

        <use href="#myCircle" x="0" y="0" />
        <use href="#myCircle" x="100" y="0" fill="blue" />
        <use href="#myCircle" x="200" y="0" fill="white" stroke="blue" />
      </svg>

      {/* <pattern>标签：标签用于自定义一个形状，该形状可以被引用来平铺一个区域 */}
      <svg width="500" height="500">
        <defs>
          <pattern
            id="dots"
            x="0"
            y="0"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <circle fill="#bee9e8" cx="50" cy="50" r="35" />
          </pattern>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#dots)" />
      </svg>

      {/* <image>标签用于插入图片文件 */}
      <svg viewBox="0 0 100 100" width="100" height="100">
        <image xlink:href="path/to/image.jpg" width="50%" height="50%" />
      </svg>

      {/* <animate>标签: 用于产生动画效果。 */}
      <svg width="500px" height="500px">
        <rect x="0" y="0" width="100" height="100" fill="#feac5e">
          <animate
            attributeName="x"
            from="0"
            to="500"
            dur="2s"
            repeatCount="indefinite"
          />
        </rect>
      </svg>

      {/* <animateTransform>标签：控制动画: 如果需要变形 */}
      <svg width="500px" height="500px">
        <rect x="250" y="250" width="50" height="50" fill="#4bc0c8">
          <animateTransform
            attributeName="transform"
            type="rotate"
            begin="0s"
            dur="10s"
            from="0 200 200"
            // to="360 400 400"
            to="360 200 200"
            repeatCount="indefinite"
          />
        </rect>
      </svg>
    </>
  );
};

export default Basic;
