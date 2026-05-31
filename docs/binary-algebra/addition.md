---
layout: circuitverse
title: Addition
nav_order: l0s000
cvib_level: basic
parent: Binary algebra
has_children: false
---


# Binary addition
{: .no_toc}


## Table of contents
{: .no_toc .text-delta}

1. TOC
{:toc}


## Addition

Binary addition is similar to Decimal addition. As this addition is binary, it implies that you cannot have a number greater than 1 i.e., when you do '1+1' it gives 0 with carry 1 i.e, 10.

```yaml

Rules:
0 + 0 = 0
0 + 1 = 1
1 + 0 = 1
1 + 1 = 10 (0 with carry 1)

| A | B | Carry Out | Sum | Result |
|---|---|-----------|-----|--------|
| 0 | 0 |     0     |  0  |   0    |
| 0 | 1 |     0     |  1  |   1    |
| 1 | 0 |     0     |  1  |   1    |
| 1 | 1 |     1     |  0  |   10   |

Example 1:
  1 1 (3)
+ 1 0 (2)
-----
1 0 1 (5)
-----
```

In the example above, the units column adds 1 + 0 to get 1. In the next column, 1 + 1 equals 10 (binary for 2). We write down the 0 and carry the 1 to the next position, just like in decimal addition

```yaml
Example 2:
  1 1 0  (6)
+ 1 0 1  (5)
-------
1 0 1 1  (11)
-------
```

In the example above, we add the numbers from right to left. First, 0 + 1 = 1, so we write 1 in the rightmost column. Next, 1 + 0 = 1, so we write 1 in the next column. Then, 1 + 1 = 10, so we write 0 and carry 1 to the next column. Finally, we bring down the carried 1, giving the result 1011. Therefore, 110₂ + 101₂ = 1011₂, which is equal to 6 + 5 = 11 in decimal.


{:.quiz}
1. What is the answer to `1100` + `0011`= ?
   1. 1111
   * 1101
   * 1110
   * 1100
2. `11111111` + `00100000` = `100011111` is an example of `______`
   1. Overflow error
   * 8 bit binary addition
3. What is the answer to `01101011` + `01010100`= ?
   1. 10111111
   * 01111011
   * 11101111
   * 11101101  
