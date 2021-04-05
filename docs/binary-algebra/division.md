---
layout: circuitverse
title: Division
nav_order: l0s003
cvib_level: basic
parent: Binary algebra
has_children: false
---


# Binary division
{: .no_toc}


## Table of contents
{: .no_toc}

1. TOC
{:toc}


## Division

The division in binary is achieved by binary subtraction. The sole motive of the Binary Division is to subtract the divisor from dividends until 0 is obtained or a number that cannot be further subtracted. The number of times you subtract is known as a quotient(this can be converted to binary) and the number which cannot be reduced or 0 is obtained after some step is known as Remainder.

Another method which can achieve Division in binary is by using Binary Multiplication and subtraction. It is similar to Decimal Division. Multiply the divisor by 1 or 0 wherever needed and reduce the number further.

```yaml

  1 1 1 1 0 / 1 0 1 (Dividend/Divisor)

 -    1 0 1                     1st
-------------
  1 1 0 0 1
 -    1 0 1                     2nd
-------------
  1 0 1 0 0
 -    1 0 1                     3rd
-------------
  0 1 1 1 1
 -    1 0 1                     4th
-------------
    1 0 1 0
 -    1 0 1                     5th
-------------
      1 0 1
 -    1 0 1                     6th
-------------                 -------
	  0  (Remainder)     ans = 6 (110) (Quotient)
-------------                 -------
```

{:.quiz}
1. Perform division of the binary numbers: `1010101` by `101` = ?
   1. 010001
   * 110101
   * 1111000
   * 101
2. Division of the binary numbers: `101001` by `1011` will give remainder as ?
   1. 1000
   * 1010
   * 1101
   * 0011
3. Division of the binary numbers: `011010000` by `0101` will give quotient as ?
   1. 0101010
   * 0000010
   * 0110010
   * 0101110 
