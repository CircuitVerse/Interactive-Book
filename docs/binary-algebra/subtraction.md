---
layout: circuitverse
title: Subtraction
nav_order: l0s001
cvib_level: basic
parent: Binary algebra
has_children: false
---


# Binary subtraction
{: .no_toc}


## Table of contents
{: .no_toc .text-delta}

1. TOC
{:toc}


## Subtraction

Binary subtraction is also a simple task. You just need to keep in mind i.e., whenever 0 takes borrow, it becomes 10 i.e., 2 in decimal. In case number to the left is zero then look for the number more left to that until you find 1. In case nothing is present to borrow then that number becomes negative. Also, the number which gives borrow is reduced by 1.

***Note: 10 becomes 1 after giving borrow.***

```yaml
Examples :
0 - 0 = 0
1 - 0 = 1
1 - 1 = 0

    1 0   (2)This is something which will always happen in binary subtraction. Keep in mind i.e., 10-1=1
  - 0 1   (1)Reason being 10 is 2 in decimal which on subtraction with 1 gives 1.
  -----      Implies that 10 - 1 = 1
    0 1   (1)
  -----

      This 0 increases to 10 after taking the carry and reduces to 1 after giving the borrow.
      /
    1 0 0   (4)
  - 0 0 1   (1)
  -------
    0 1 1   (3)
  -------
```
