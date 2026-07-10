---
item_ids: [logisticsnetworks:name_filter]
navigation:
  title: 正则过滤器
  parent: filters.md
  icon: logisticsnetworks:name_filter
  position: 4
---

# 正则过滤器

正则过滤器使用 Java 正则表达式模式按名称匹配物品、流体或化学品。所有匹配不区分大小写且为部分匹配（模式不需要匹配完整名称）。

匹配范围：

1. 名称：仅匹配显示名称
2. 提示：仅匹配提示行
3. 两者：匹配名称和提示行

## 示例

1. `stone` 匹配任何包含 "stone" 的内容（例如 石头、圆石、切石机）
2. `^Iron` 匹配以 "Iron" 开头的名称（例如 铁锭、铁剑）
3. `Sword$` 匹配以 "Sword" 结尾的名称（例如 钻石剑、下界合金剑）
4. `^Diamond .+` 匹配以 "Diamond " 开头后跟任意内容的名称
5. `Potion|Arrow` 匹配任何包含 "Potion" 或 "Arrow" 的内容
6. `Deepslate.*Ore` 匹配包含 "Deepslate" 后跟 "Ore" 的名称（例如 深板岩铁矿石）
7. `^(?!Golden).*Helmet` 匹配除金头盔外的任何头盔

<RecipeFor id="logisticsnetworks:name_filter" />