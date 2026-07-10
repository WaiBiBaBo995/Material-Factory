---
item_ids: [logisticsnetworks:small_filter, logisticsnetworks:medium_filter, logisticsnetworks:big_filter]
navigation:
  title: 物品过滤器
  parent: filters.md
  icon: logisticsnetworks:small_filter
  position: 1
---

# 物品过滤器

这些是基于槽位的通用过滤器：

1. 小型过滤器，9 个条目
2. 中型过滤器，18 个条目
3. 大型过滤器，27 个条目

每个条目可以存储一个目标：

1. 物品
2. 流体
3. 化学品

目标类型在过滤器 GUI 中选择。

匹配细节：

1. 物品条目按物品 ID 匹配。
2. 流体条目按带有组件的流体匹配。
3. 化学品条目按精确的化学品 ID 匹配。

菜单逻辑会阻止重复条目。

## 过滤器详情页面

Ctrl + 左键单击任意过滤器槽位以打开过滤器详情页面。每个条目的设置：

1. 数量阈值
2. 支持操作符（`=`、`!=`、`>=`、`<=`）和原始 SNBT 模式的 NBT 匹配
3. 耐久检查
4. 槽位映射（例如 0-8,13）
5. 附魔标志

从条目中移除物品以创建一个 nbtOnly 过滤器，该过滤器将匹配任何具有已配置 NBT、耐久或附魔设置的物品。

过滤器详情页面支持 JEI 幽灵 ingredients。

<RecipeFor id="logisticsnetworks:small_filter" />
<RecipeFor id="logisticsnetworks:medium_filter" />
<RecipeFor id="logisticsnetworks:big_filter" />