---
item_ids: [logisticsnetworks:mod_filter]
navigation:
  title: 模组过滤器
  parent: filters.md
  icon: logisticsnetworks:mod_filter
  position: 3
---

# 模组过滤器

模组过滤器按其模组命名空间匹配物品、流体或化学品。你可以输入命名空间，或将一个物品放入提取器槽位并从选择器中选取。

匹配精确作用于物品 ID 的命名空间部分（冒号之前的部分）。

## 示例

1. `minecraft` 匹配所有原版物品（例如 minecraft:stone、minecraft:diamond）
2. `mekanism` 匹配所有 通用机械 物品和化学品
3. `create` 匹配所有 机械动力 模组的物品和流体
4. `thermal` 匹配所有 热力系列 物品
5. `ae2` 匹配所有 应用能源2 物品

输入 `minecraft:stone` 将被规范化为 `minecraft`。

<RecipeFor id="logisticsnetworks:mod_filter" />