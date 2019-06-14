---
layout: default
title: Binary Numbers
nav_order: 2
---

# Binary Numbers
{: .no_toc }


## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---


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
| 0          | We start a    |
| 1          | Then 1        |
| **1**0     | Now start back at 0 again, **but add 1 on the left**|
| 11         | 1 more        |
| **1**00    | start back at 0 again, and add one to the number on the left but that number is already at 1 so it also goes back to 0 and 1 is added to the next position on the left|
| 101        | |
| 110        | |
| 111        | |
| **1**000   |Start back at 0 again (for all 3 digits), add 1 on the left|




<h3>See how it is done in this little demonstration</h3>


<div id="binary">
<div class="column"><div class="column_heading">128</div><div id="7c" class="bit" onClick="toggle_bitc(7);">0</div></div>
<div class="column"><div class="column_heading">64</div><div id="6c" class="bit" onClick="toggle_bitc(6);">0</div></div>
<div class="column"><div class="column_heading">32</div><div id="5c" class="bit" onClick="toggle_bitc(5);">0</div></div>
<div class="column"><div class="column_heading">16</div><div id="4c" class="bit" onClick="toggle_bitc(4);">0</div></div>
<div class="column"><div class="column_heading">8</div><div id="3c" class="bit" onClick="toggle_bitc(3);">0</div></div>
<div class="column"><div class="column_heading">4</div><div id="2c" class="bit" onClick="toggle_bitc(2);">0</div></div>
<div class="column"><div class="column_heading">2</div><div id="1c" class="bit" onClick="toggle_bitc(1);">0</div></div>
<div class="column"><div class="column_heading">1</div><div id="0c" class="bit" onClick="toggle_bitc(0);">0</div></div>
<div id="decimal1">= 0</div>
</div><br style="clear:left">

<style>
#binary			{width: 100%;}
#decimal1		{font-family: Arial, Helvetica, sans-serif; float: left; font-size: 5vw; width: 21vw; margin: 2.7vw 0 0 2vw; float: left}
.column			{font-family: Arial, Helvetica, sans-serif; float: left; text-align: center; width: calc((100% - 23.5vw) / 8)}
.column_heading	{font-size: 1.6vw; color: #666666}
.bit			{font-size: 5vw; background-color: #FFFFFF; color:#000000; border-radius: 1.3vw; margin: 0.25vw; border: 1px solid black}
</style>
