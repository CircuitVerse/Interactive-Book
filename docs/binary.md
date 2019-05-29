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
|:-------------|:------------------|
| 0            | We start at 0     |
| 1            | Then 1            |
| ???          | But then there is no symbol for 2 ... what do we do?  |


<h3>Well how do we count in Decimal?</h3>

| Decimal       | Explanation            |
|:-------------|:-----------------------|
| 0            | We start at 0          |
| 1            | Then 1                 |
| 2-8          | Count 1,2,3,4,5,6,7,8  |
| 9            | This is the **last digit** in Decimal|
|**1**0        | So we start back at **0** again, but add **1** on the left|

<h3>Finally</h3>

<div id="binary">
<div class="column"><div class="column_heading">128</div><div id="7" class="bit" onClick="toggle_bit(7);">0</div></div>
<div class="column"><div class="column_heading">64</div><div id="6" class="bit" onClick="toggle_bit(6);">0</div></div>
<div class="column"><div class="column_heading">32</div><div id="5" class="bit" onClick="toggle_bit(5);">0</div></div>
<div class="column"><div class="column_heading">16</div><div id="4" class="bit" onClick="toggle_bit(4);">0</div></div>
<div class="column"><div class="column_heading">8</div><div id="3" class="bit" onClick="toggle_bit(3);">0</div></div>
<div class="column"><div class="column_heading">4</div><div id="2" class="bit" onClick="toggle_bit(2);">0</div></div>
<div class="column"><div class="column_heading">2</div><div id="1" class="bit" onClick="toggle_bit(1);">0</div></div>
<div class="column"><div class="column_heading">1</div><div id="0" class="bit" onClick="toggle_bit(0);">0</div></div>
<div id="decimal">= 0</div>
</div><br style="clear:left">



## +,-,*,/ in Binary
## Compliment
## Signed and unsigned


<style>
#binary			{width: 100%;}
#decimal		{font-family: Arial, Helvetica, sans-serif; float: left; font-size: 5vw; width: 21vw; margin: 2.7vw 0 0 2vw; float: left}
.column			{font-family: Arial, Helvetica, sans-serif; float: left; text-align: center; width: calc((100% - 23.5vw) / 8)}
.column_heading	{font-size: 1.6vw; color: #666666}
.bit			{font-size: 5vw; background-color: #FFFFFF; color:#000000; border-radius: 1.3vw; margin: 0.25vw; border: 1px solid black}
</style>

<script type="text/javascript">
<!--
var bit = new Array(8);
var bit_display = new Array(2);
bit_display[false] = "0";
bit_display[true] = "1";

function toggle_bit(column)
{
	var decimal = 0;
	document.getElementById(column).innerHTML = bit_display[bit[column] = !bit[column]];
	for(var i=0; i < 8; i++)
	{
		if(bit[i]) { decimal = decimal + Math.pow(2, i); }
	}
	document.getElementById("decimal").innerHTML = " = " + decimal;
}

//-->
</script>
