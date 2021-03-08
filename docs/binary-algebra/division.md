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
{: .no_toc .text-delta}

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
