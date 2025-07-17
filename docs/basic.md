# Basic Info

## 标签

### <rect> 矩形

```
<svg viewBox="0 0 220 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Simple rectangle -->
  <rect width="100" height="100" />

  <!-- Rounded corner rectangle -->
  <rect x="120" width="100" height="100" rx="15" />
</svg>
```

- -x 长度/百分比 矩形左上角的 x 坐标（默认 0）。 x="10"
- -y 长度/百分比 矩形左上角的 y 坐标（默认 0）。 y="20"
- -width 长度/百分比 矩形的宽度（必须为正数）。 width="100"
- -height 长度/百分比 矩形的高度（必须为正数）。 height="50"
- -rx 长度/百分比 水平圆角半径（椭圆的长轴，默认 0）。 rx="10"
- -ry 长度/百分比 垂直圆角半径（椭圆的短轴，若未设置则等于 rx）。 ry="5"

**注意：圆角规则**

- -若只设置 rx 或 ry，另一个会取相同值。
- -最大值限制：rx ≤ width/2，ry ≤ height/2。
