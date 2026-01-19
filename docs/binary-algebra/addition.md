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

| A | B | Carry | Sum |Result |
| 0 | 0 |   0   |  0  |   0   |
| 0 | 1 |   0   |  1  |   1   |
| 1 | 0 |   0   |  1  |   1   |
| 1 | 1 |   1   |  0  |   10  |

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
