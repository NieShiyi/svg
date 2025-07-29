# SVG `transform` 属性详解：`rotate` 和 `translate`

在 SVG 中，`transform` 属性用于对图形进行几何变换，比如旋转、平移、缩放等操作。比如 `rotate` 和 `translate` 两种常见的变换方式。

---

## 一、`translate` —— 平移

### 语法

```svg
transform="translate(tx, ty)"
```

* `tx`: 水平方向的偏移距离（正值向右，负值向左）
* `ty`: 垂直方向的偏移距离（正值向下，负值向上，可选，默认 0）

### 示例

```xml
<rect x="10" y="10" width="50" height="50" fill="skyblue" transform="translate(30, 20)" />
```

### 说明

上述代码将矩形在原始位置的基础上向右移动 30px，向下移动 20px。

> 💡 `translate` 实际上是将坐标系整体偏移，使元素看起来像是移动了。

---

## 二、`rotate` —— 旋转

### 语法

```svg
transform="rotate(angle [cx cy])"
```

* `angle`: 旋转的角度（单位为度，正值为顺时针旋转）
* `cx`, `cy`: 可选，指定旋转中心点坐标，默认是元素的原点 (0,0)

### 示例一：绕原点旋转

```xml
<rect x="0" y="0" width="50" height="50" fill="orange" transform="rotate(45)" />
```

这个矩形将绕坐标系原点 (0, 0) 顺时针旋转 45 度。

### 示例二：绕自身中心旋转

```xml
<rect x="50" y="50" width="50" height="50" fill="tomato" transform="rotate(45 75 75)" />
```

* 旋转中心点为 `(75, 75)`，即矩形的中心点。
* 实现的是矩形围绕自身中心顺时针旋转 45 度。

---

## 三、复合变换

`transform` 属性可以使用多个变换，按顺序叠加：

```xml
<rect x="0" y="0" width="50" height="50" fill="green" transform="translate(100, 100) rotate(30)" />
```

上例中，矩形先平移到 `(100, 100)`，然后再绕原点旋转 30 度。

> ⚠️ 注意：**变换的顺序非常重要**，因为每一个变换会影响后续变换所使用的坐标系。

---

## 四、可视化建议

若想更直观理解 `rotate` 和 `translate` 的效果，可以使用如下在线工具：

* [https://yqnn.github.io/svg-path-editor/](https://yqnn.github.io/svg-path-editor/)
* [https://svg-editor.freesvg.org/](https://svg-editor.freesvg.org/)

---

## 五、总结对比

| 属性        | 含义 | 参数说明            | 示例                  |
| --------- | -- | --------------- | ------------------- |
| translate | 平移 | `tx`, `ty`      | `translate(30, 10)` |
| rotate    | 旋转 | `angle [cx cy]` | `rotate(45 75 75)`  |

---

