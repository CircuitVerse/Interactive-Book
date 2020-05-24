---
layout: default
title: Binary Numbers
nav_order: 2
---

# Binary Numbers
{: .no_toc }

---

## Introduction

Binary number system was invented by **Gottfried Leibniz**. As the word is prefixed with 'Bi' which is a
Latin word and means 'two' in English. This brings us to the first two digits i.e., 0 and 1 which
means that while counting in binary we cannot exceed 1. Infact all the numbers which we tend to
represent are made up of only two digits i.e., 0 and 1 which is quite interesting.
Let us show you the binary representation of a decimal number(The numbers which we use for counting
i.e., from 0-9) in binary.
```yaml
Example:
Decimal number :: 25 
Binary Number :: 11001 
```
**_Note: There is no 2, 3, 4, 5, 6, 7, 8 or 9 in Binary!_**

---

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

## See how it is done in this little demonstration
---
Let's tell you something more about conversion. Conversion from Decimal to Binary is quite a simple task.
All you need to do is begin from the right. Follow the steps below:
- STEP 1 :: 
Write the decimal value of each digit on top of them respectively. The value which you seek to write is
2^(place value from right) beginning from 0 i.e., 2^0, 2^1, 2^2 .... continuing upto 2^7.
- STEP 2 ::
Now, multiply each digit of binary number with it's value.
- STEP 3 ::
Add 'em all.
- STEP 4 ::
Result is ready :)

**_Note: If the number is large, increase bits of binary number on the left. Keep in mind that it's value will
increase subsiquently._**
```yaml
Example ::
Decimal Number :: 25
You can convert the 1st, 4th and the 5th digit from the right by tapping on it to convert from 0 to 1.
Further, respective binary digit is multiplied with the value present on top of each digit. Now add.
In this Case ::
1x16 + 1x8 + 0x4 + 0x2 + 1x1 = 25 which is the decimal equivalent of the binary number 11001
```
<p>Click on the '0' to change it to '1' and vice-versa</p>

{% include binary.html %}

{:.quiz}
1. Is `0110103` a binary number?
   1. No
   * Yes
2. What is `10101` as a decimal number?
   1. 21
   * 10101
   * 25
   * 1000 
