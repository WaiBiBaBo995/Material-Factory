---
item_ids: [logisticsnetworks:logistics_node]
navigation:
  title: 节点
  parent: index.md
  icon: logisticsnetworks:logistics_node
  position: 2
---

# 节点

物流节点是该模组的核心方块附件。

代码中的放置规则：

1. 不能放置在空气上。
2. 不能放置在被列入黑名单的方块上。
3. 该方块必须暴露至少一种存储能力。
4. 每个方块只能附加一个节点。

当你破坏附加的方块时，节点会被移除。
其过滤器和升级会掉落。
如果配置中 `dropNodeItem` 为 true，则节点物品会掉落。

节点实体包含：

1. 9 个通道
2. 每个通道 9 个过滤器槽位
3. 4 个共享升级槽位

新节点上通道 0 默认启用。其余通道默认禁用。