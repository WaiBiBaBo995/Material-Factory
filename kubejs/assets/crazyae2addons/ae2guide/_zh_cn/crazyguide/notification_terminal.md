---
navigation:
   parent: crazyae2addons_index.md
   title: 无线通知终端
   icon: crazyae2addons:wireless_notification_terminal
categories:
   - 监控与自动化
item_ids:
   - crazyae2addons:wireless_notification_terminal
---

# 无线通知终端

无线通知终端是一种无线终端，它会监视你的 ME 存储，并在选定的物品、流体或其他资源越过配置的库存阈值时显示吐司通知。

它用于简单的“库存高于或低于 X”警报。

## [视频教程](https://youtu.be/l7OcgG5FD_s&list=PLB8Rr5Xojkr5T1qoPr_4JdETiBkF4qF6r)

---

## 要求

* 终端必须链接到 AE 网络（与其他无线终端相同）。

---

## 快速开始

1. 打开终端 GUI。
2. 在第一行，将要监视的物品或流体放入过滤槽。
3. 在旁边的字段中输入一个阈值。
4. 对更多行重复此操作（最多 32 行）。

当存储的数量发生变化并越过阈值时，你会收到一个吐司通知：

* 高于阈值（数量变得大于或等于阈值）
* 低于阈值（数量变得小于阈值）

检查和更新每秒进行一次。

## 注意事项

* 仅当状态翻转（从低于变为高于，或从高于变为低于）时才会触发通知。
* 更改过滤物品或编辑阈值会重置该行的存储状态（因此它不会立即通知，直到再次越过阈值）。
* 即使 GUI 关闭，只要终端物品在你的物品栏中，它也会工作（服务器端每秒检查一次）。
* 也适用于通用无线终端 (WUT)。