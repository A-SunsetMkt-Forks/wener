---
tags:
  - JavaScript
---

# SheetJS

- [SheetJS/sheetjs](https://github.com/SheetJS/sheetjs)
  - Apache-2.0, JS
  - git -> [sheetjs](https://git.sheetjs.com/sheetjs/sheetjs)
  - 不在 npm https://github.com/SheetJS/sheetjs/issues/2667
  - 开发也不在 Github 上了
- 参考
  - https://cdn.sheetjs.com/
  - [protobi/js-xlsx](https://github.com/protobi/js-xlsx)
  - https://sheetjs.com/pro/
  - [Siemienik/XToolset](https://github.com/Siemienik/XToolset)
    - MIT, TS

```bash
pnpm add https://cdn.sheetjs.com/xlsx-0.20.3/xlsx-0.20.3.tgz
# pnpm add https://cdn.sheetjs.com/xlsx-latest/xlsx-latest.tgz # for latest
```

:::tip

- 推荐使用 dense 模式

:::

:::caution CE 版本限制

- 不支持 formula 求值
- 不支持 Style
  - https://github.com/gitbrent/xlsx-js-style
  - https://github.com/ShanaMaid/sheetjs-style
- 不支持 images/graphs/PivotTables

:::

## types

```ts
// b Boolean, n Number, e error, s String, d Date, z Stub
export type ExcelDataType = 'b' | 'n' | 'e' | 's' | 'd' | 'z';
export interface Comments extends Array<Comment> {
  /** Hide comment by default */
  hidden?: boolean;
}
export interface Hyperlink {
  /** Target of the link (HREF) */
  Target: string;
  /** Plaintext tooltip to display when mouse is over cell */
  Tooltip?: string;
}
export type NumberFormat = string | number;

/** 工作表单元格对象 */
export interface CellObject {
  /**
   * 单元格的Excel数据类型。
   * b Boolean, n Number, e Error, s String, d Date, z Empty
   */
  t: ExcelDataType;
  /** 单元格的原始值。如果指定了公式，可以省略 */
  v?: string | number | boolean | Date;

  /** 格式化文本（如果适用） */
  w?: string;

  /** 单元格公式（如果适用） */
  f?: string;

  /** 如果公式是数组公式，包围数组的范围（如果适用） */
  F?: string;

  /** 如果为true，单元格是动态数组公式（对于支持的文件格式） */
  D?: boolean;

  /** 富文本编码（如果适用） */
  r?: any;

  /** 富文本的HTML渲染（如果适用） */
  h?: string;

  /** 与单元格关联的注释 */
  c?: Comments;

  /** 与单元格关联的数字格式字符串（如果需要） */
  z?: NumberFormat;

  /** 单元格超链接对象（.Target保存链接，.tooltip是工具提示） */
  l?: Hyperlink;

  /** 单元格的样式/主题（如果适用） */
  s?: any;
}
```

```json
{
  "t": "s",
  "v": "保 管\n期 限",
  "r": "<t>保 管&#10;期 限</t>",
  "h": "保 管<br/>期 限",
  "w": "保 管\n期 限"
}
```

- v 范围 0~60000
- v 如果包含小数点，则包含时间部分
- 如果 cellDates=true, 则 v 会被转换为 Date

---

- https://docs.sheetjs.com/docs/csf/cell

## Date

```ts
if (!wb?.Workbook?.WBProps?.date1904) {
  /* uses 1904 date system */
} else {
  /* uses 1900 date system */
}
```

```json
{
  "t": "n",
  "v": 44234,
  "w": "2/7/21"
}
```

- `t=d` 表示 date&time
- `n` - number
  - 标准做法
- `d` - ISO 8601 date string
- `w` 为格式化文本
- https://docs.sheetjs.com/docs/csf/features/dates/

# Common Spreadsheet Format

- https://docs.sheetjs.com/docs/csf/
- 4 种类型 sheet
  - worksheets
  - chartsheets - `!type=chart`
  - ~~macrosheets~~ - `!type=macro`
  - ~~dialogsheets~~ - `!type=dialog`
- A1-style
- dense 模式 - 影响 sheet 在内存的存储方式
  - cells 存储为 AoA - Array of Arrays
  - 数据量大的时候更节省内存
  - `sheet["!data"][R][C]`
  - `sheet["B7"]` -> `sheet["!data"]?.[6]?.[1]`
  - 特殊 key
    - `!ref` - `A1:B7`
    - `!merges` - 合并单元格
    - `!cols` - 列宽
    - `!rows` - 行高
    - `!autofilter` - 自动筛选
    - `!outline` - 分组
    - `!protect` - 保护
- `XLSX.utils.decode_cell(addr)` -> `{r,c}`
