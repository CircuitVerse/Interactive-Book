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


<h4>Well how do we count in Decimal?</h4>

| Decimal       | Explanation            |
|:-------------:|:----------------------:|
| 0            | We start at 0          |
| 1            | Then 1                 |
| 2-8          | Count 1,2,3,4,5,6,7,8  |
| 9            | This is the **last digit** in Decimal|
|**1**0        | So we start back at **0** again, but add **1** on the left|

<h4>The same thing is done in binary ...</h4>

| Binary       | Explanation            |
|:------------:|:----------------------:|
| 0            | We start at 0          |
| 1            | Then 1        |
| **1**0     | Now start back at 0 again, **but add 1 on the left**|
| 11         | 1 more           |
|???         | But NOW what ... ?|


<h4>What happens in Decimal?</h4>


| Decimal       | Explanation            |
|:-------------:|:----------------------:|
|	99	 |	When we run out of digits, we ...|
|	100	 |	... start back at 0 again, but add 1 on the left|

<h4>And that is what we do in binary ...</h4>


| Binary     | Explanation   |
|:----------:|:-------------:|
| 0          | We start at 0    |
| 1          | Then 1        |
| **1**0     | Now start back at 0 again, **but add 1 on the left**|
| 11         | 1 more        |
| **1**00    | start back at 0 again, and add one to the number on the left but that number is already at 1 so it also goes back to 0 and 1 is added to the next position on the left|
| 101        | |
| 110        | |
| 111        | |
| **1**000   |Start back at 0 again (for all 3 digits), add 1 on the left|




<h3>See how it is done in this little demonstration</h3>

{% include binary.html %}

{% include disqus.html %}
