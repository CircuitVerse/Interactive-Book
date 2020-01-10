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
| 1            | next at 1         |
| ???          | But then there is no symbol for 2 ... what do we do?  |


<h4>Well how do we count in Decimal?</h4>

| Decimal       | Explanation            |
|:-------------:|:----------------------:|
| 0            | We start at 0          |
| 1            | next at 1              |
| 2-8          | Count 2, 3, 4, 5 , 6, 7 and 8 |
| 9            | This is the **last digit** in Decimal|
|**1**0        | So we start again from **0**,and then **1** is added to the left. |

<h4>The same thing is done in binary ...</h4>

| Binary       | Explanation            |
|:------------:|:----------------------:|
| 0            | We start at 0          |
| 1            | next at 1              |
| **1**0     | Now again we start at 0, **and then 1 is added to the left**|
| 11         | 1 more           |
|???         | But NOW what ... ?|


<h4>What happens in Decimal?</h4>


| Decimal       | Explanation            |
|:-------------:|:----------------------:|
|	99	 |	When we run out of digits, we ...|
|	100	 |	... now start back at 0 again, but add 1 on the left|

<h4>And that is what we do in binary ...</h4>


| Binary     | Explanation   |
|:----------:|:-------------:|
| 0          | We start at 0 |
| 1          | next at 1     |
| **1**0     | Now again we start at 0, **and then 1 is added to the left**|
| 11         | 1 more        |
| **1**00    | Start again from 0, and then add 1 to the left, but the number is already 1. So it also will go back to 0 and then 1 is being added to the next place on the left |
| 101        | |
| 110        | |
| 111        | |
| **1**000   | Now again start back at 0(to all the 3 digits), then 1 is added to the left |
| 1001       | |
| 1010       | This process is repeated for all the next numbers. |



<h3>Now you can see this little demonstration on how it's done!</h3>

{% include binary.html %}

{% include disqus.html %}
