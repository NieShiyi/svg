# SVG 中的 `<use>` 标签详解

`<use>` 标签是 SVG 中用于**复用已有元素**的关键标签。它可以引用 SVG 内部或外部的图形元素，从而避免重复编写相同的 SVG 内容，提升效率和可维护性。

---

## 🧩 基本语法

```html
<use href="#elementID" x="10" y="20" />
```

### 属性说明：

| 属性                | 说明                                                              |
| ----------------- | --------------------------------------------------------------- |
| `href`            | 要引用的目标元素的 ID（需加 `#` 号）。从 SVG 2 开始推荐使用 `href`，不再使用 `xlink:href`。 |
| `x`, `y`          | 可选，定义引用元素的平移偏移量。                                                |
| `width`, `height` | 可选，设置引用元素的尺寸（仅当引用 `<symbol>` 时有效）。                              |

---

## 🏷️ 典型用法示例

### 示例 1：复用一个圆形

```html
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <circle id="myCircle" cx="0" cy="0" r="20" fill="blue" />
  </defs>

  <use href="#myCircle" x="50" y="50" />
  <use href="#myCircle" x="100" y="100" fill="red" />
</svg>
```

📌 在上面例子中，我们定义了一个圆形 `myCircle`，然后通过 `<use>` 在不同位置复用它，第二次使用还**重写了颜色属性**。

---

## 🧩 与 `<symbol>` 搭配使用

`<symbol>` 与 `<use>` 是 SVG 中实现组件化的典范组合。

```html
<svg style="display: none;">
  <symbol id="icon-star" viewBox="0 0 100 100">
    <polygon points="50,0 61,35 98,35 68,57 79,91 50,70 21,91 32,57 2,35 39,35"/>
  </symbol>
</svg>

<svg width="50" height="50">
  <use href="#icon-star" />
</svg>
```

---

## ⚠️ 注意事项

* SVG 1.1 中使用 `xlink:href`，如 `<use xlink:href="#id">`，SVG 2 推荐使用 `href`，部分旧浏览器可能仍要求 `xlink`。
* 被引用的元素需要在 DOM 中先定义，通常放在 `<defs>` 或 `<symbol>` 中。
* 使用 `<use>` 不会引入脚本或交互逻辑，仅是图形的视觉复用。

---

## 🔗 相关链接

* [MDN 文档: `<use>`](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/use)
* [SVG 2 规范](https://svgwg.org/svg2-draft/struct.html#UseElement)

---

## 🧠 小结

* `<use>` 可以让我们像使用“组件”一样复用图形元素；
* 它支持修改颜色、位置等属性；
* 是构建大型 SVG 图像或图标系统时非常实用的工具。
