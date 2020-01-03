---
layout: default
title: Binary Numbers
comments: true
nav_order: 2
---

# Binary Numbers
{: .no_toc }



## Introduction

```yaml
A Binary Number is made up of only 0s and 1s.
Example: 110111

There is no 2, 3, 4, 5, 6, 7, 8 or 9 in Binary!
```

### How do we Count using Binary?
It is just like counting in decimal except we reach 10 much sooner.



| Binary       | Explanation       |
|:------------:|:-----------------:|
| 0            | We start at 0     |
| 1            | Then 1            |
| ???          | But then there is no symbol for 2 ... what do we do?  |


#### Well how do we count in Decimal?

| Decimal       | Explanation            |
|:-------------:|:----------------------:|
| 0            | We start at 0          |
| 1            | Then 1                 |
| 2-8          | Count 1,2,3,4,5,6,7,8  |
| 9            | This is the **last digit** in Decimal|
|**1**0        | So we start back at **0** again, but add **1** on the left|

#### The same thing is done in binary ...

| Binary       | Explanation            |
|:------------:|:----------------------:|
| 0            | We start at 0          |
| 1            | Then 1        |
| **1**0     | Now start back at 0 again, **but add 1 on the left**|
| 11         | 1 more           |
|???         | But NOW what ... ?|


#### What happens in Decimal?


| Decimal       | Explanation            |
|:-------------:|:----------------------:|
|	99	 |	When we run out of digits, we ...|
|	100	 |	... start back at 0 again, but add 1 on the left|

#### And that is what we do in binary ...


| Binary     | Explanation   |
|:----------:|:-------------:|
| 0          | We start a    |
| 1          | Then 1        |
| **1**0     | Now start back at 0 again, **but add 1 on the left**|
| 11         | 1 more        |
| **1**00    | start back at 0 again, and add one to the number on the left but that number is already at 1 so it also goes back to 0 and 1 is added to the next position on the left|
| 101        | |
| 110        | |
| 111        | |
| **1**000   |Start back at 0 again (for all 3 digits), add 1 on the left|




### See how it is done in this little demonstration

{% include binary.html %}


### Signed and Unsigned Numbers
Currently, we have just looked at **unsigned** numbers - they can only be positive, as there is no sign.
However, sometimes we need to work with **negative numbers** too. To do this, we add a **sign bit** on the far left of the binary number, which indicates whether the number is positive (`0`) or negative(`1`).

For example, the number `10000011` would be `131` if the number is **unsigned**, but if the number is **signed**, the actual representation would be `-3`
 - The first bit `1` represents that the number is negative
 - The remaining bits `0000011` represent the actual number, `3`

The downside to using a signed number is that it removes one bit from the actual number representation, halving the maximum value.
- The minimum and maximum values for an `unsigned 8-bit` number would be `0` to `2^8-1` (`0` to `255`)
- The minimum and maximum values for a `signed 8-bit` number would be `-2^7-1` to `2^7-1` (`-127` to `127`)

{% include disqus.html %}
