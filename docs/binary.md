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
Binary number system was invented by Gottfried Leibniz. As the word is prefixed with 'Bi' which is a
Latin word and means 'two' in English. This brings us to the first two digits i.e., 0 and 1 which
means that while counting in binary we cannot exceed 1. Infact all the numbers which we tend to
represent are made up of only two digits i.e., 0 and 1 which is quite interesting.
Let us show you the binary representation of a decimal number(The numbers which we use for counting
i.e., from 0-9) in binary.
Example:
Decimal number :: 25
Binary Number :: 11001

Note ::
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
|**1**0        | So we start back at **0** again, but carry **1** on the left|

<h4>The same thing is done in binary ...</h4>

| Binary       | Explanation            |
|:------------:|:----------------------:|
| 0            | We start at 0          |
| 1            | Then 1        |
| **1**0     | Now start back at **0** again, but carry **1** on the left|
| 11         | 1 more           |
|???         | But NOW what ... ?|


<h4>What happens in Decimal?</h4>


| Decimal       | Explanation            |
|:-------------:|:----------------------:|
|	99	 |	When we run out of digits, we ...|
|	100	 |	... start back at **0** again, but carry **1** on the left|

<h4>And that is what we do in binary ...</h4>


| Binary     | Explanation   |
|:----------:|:-------------:|
| 0          | We start at 0    |
| 1          | Then 1        |
| **1**0     | Now start back at **0** again, but carry **1** on the left|
| 11         | 1 more        |
| **1**00    | start back at 0 again, and carry one to the number on the left but that number is already at 1 so it also goes back to 0 and 1 is carried to the next position on the left|
| 101        | |
| 110        | |
| 111        | |
| **1**000   |Start back at 0 again (for all 3 digits), add 1 on the left|




<h3>See how it is done in this little demonstration</h3>
<p>Click on the '0' to change it to '1' and vice-versa</p>

{% include binary.html %}

{% include disqus.html %}
