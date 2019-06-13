---
layout: default
title: Mathematical Operators in Binary
nav_order: 2
---

# Mathematical Operators in Binary


## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Addition

```yaml 
1. 0 + 0 = 0
2. 0 + 1 = 1
3. 1 + 0 = 1
4. 1 + 1 = 1
```

## Subtraction

```yaml
1. 0 - 0 = 0
2. 1 - 0 = 1
3. 1 - 1 = 0
```

## Multiplication

```yaml
          1  1  0       (6)
      *   1  0  1       (5)
      ------------
          1  1  0 
       0  0  0  x
    1  1  0  x  x
    --------------
    1  1  1  1  0       (30)
    --------------   
```

## Division

```yaml
          1 1 1 1 0 / 1 0 1
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
                  0                   ans = 6 (110)
        -------------                 -------
```

## Binary system complements

As the binary system has base r = 2. So the two types of complements for the binary system are 2's complement and 1's complement.


### 1's complement

The 1's complement of a number is found by changing all 1's to 0's and all 0's to 1's. This is called as taking complement or 1's complement. Example of 1's Complement is as follows.

```yaml
Given number        1  0  1  0  1
1's complement      0  1  0  1  0 
```
### 2's complement

The 2's complement of binary number is obtained by adding 1 to the Least Significant Bit (LSB) of 1's complement of the number.
2's complement = 1's complement + 1


```yaml
Given number        1  0  1  0  1
1's complement      0  1  0  1  0 

add 1               +           1
                   ---------------
2's complement      0  1  0  1  1             
                   --------------- 

```

<div id="container">
<div class="binary">
<div class="column"><div class="column_heading">128</div><div id="7" class="bit" onClick="toggle_bit(7);">0</div></div>
<div class="column"><div class="column_heading">64</div><div id="6" class="bit" onClick="toggle_bit(6);">0</div></div>
<div class="column"><div class="column_heading">32</div><div id="5" class="bit" onClick="toggle_bit(5);">0</div></div>
<div class="column"><div class="column_heading">16</div><div id="4" class="bit" onClick="toggle_bit(4);">0</div></div>
<div class="column"><div class="column_heading">8</div><div id="3" class="bit" onClick="toggle_bit(3);">0</div></div>
<div class="column"><div class="column_heading">4</div><div id="2" class="bit" onClick="toggle_bit(2);">0</div></div>
<div class="column"><div class="column_heading">2</div><div id="1" class="bit" onClick="toggle_bit(1);">0</div></div>
<div class="column"><div class="column_heading">1</div><div id="0" class="bit" onClick="toggle_bit(0);">0</div></div>
<div class="decimal">= <input type="text" id="value_A" onInput="set_bits();" size="3" maxlength="3"></div>
</div><br style="clear: left">
<div id="operators"><select id="operator" onChange="change_operator();">
  <option value="AND">AND</option>
  <option value="OR"> OR</option>
  <option value="EOR">EOR</option>
</select>
<div class="opcol">AND</div>
<div class="opcol">AND</div>
<div class="opcol">AND</div>
<div class="opcol">AND</div>
<div class="opcol">AND</div>
<div class="opcol">AND</div>
<div class="opcol">AND</div>
<div class="opcol">AND</div>
</div><input type="button" value="Calculate" onClick="set_bits();" class="ok" style="margin-top: 22px"><br style="clear: left">
<div class="binary">
<div class="column"><div class="column_heading">128</div><div id="15" class="bit" onClick="toggle_bit(15);">0</div></div>
<div class="column"><div class="column_heading">64</div><div id="14" class="bit" onClick="toggle_bit(14);">0</div></div>
<div class="column"><div class="column_heading">32</div><div id="13" class="bit" onClick="toggle_bit(13);">0</div></div>
<div class="column"><div class="column_heading">16</div><div id="12" class="bit" onClick="toggle_bit(12);">0</div></div>
<div class="column"><div class="column_heading">8</div><div id="11" class="bit" onClick="toggle_bit(11);">0</div></div>
<div class="column"><div class="column_heading">4</div><div id="10" class="bit" onClick="toggle_bit(10);">0</div></div>
<div class="column"><div class="column_heading">2</div><div id="9" class="bit" onClick="toggle_bit(9);">0</div></div>
<div class="column"><div class="column_heading">1</div><div id="8" class="bit" onClick="toggle_bit(8);">0</div></div>
<div class="decimal">= <input type="text" id="value_B" onInput="set_bits();" size="3" maxlength="3"></div>
</div><br style="clear: left">
<div class="binary">
<div class="opeq">=</div>
<div class="opeq">=</div>
<div class="opeq">=</div>
<div class="opeq">=</div>
<div class="opeq">=</div>
<div class="opeq">=</div>
<div class="opeq">=</div>
<div class="opeq">=</div>
</div><br style="clear: left">
<div class="binary">
<div class="column"><div class="column_heading">128</div><div id="23" class="bit">0</div></div>
<div class="column"><div class="column_heading">64</div><div id="22" class="bit">0</div></div>
<div class="column"><div class="column_heading">32</div><div id="21" class="bit">0</div></div>
<div class="column"><div class="column_heading">16</div><div id="20" class="bit">0</div></div>
<div class="column"><div class="column_heading">8</div><div id="19" class="bit">0</div></div>
<div class="column"><div class="column_heading">4</div><div id="18" class="bit">0</div></div>
<div class="column"><div class="column_heading">2</div><div id="17" class="bit">0</div></div>
<div class="column"><div class="column_heading">1</div><div id="16" class="bit">0</div></div>
<div id="result">= 0</div>
</div>
</div>




<style>
#binary			{width: 100%;}
#decimal		{font-family: Arial, Helvetica, sans-serif; float: left; font-size: 5vw; width: 21vw; margin: 2.7vw 0 0 2vw; float: left}
.column_heading	{font-size: 1.6vw; color: #666666}
.binary			{width: 620px; margin: auto}
#container		{width: 560px; display: block; margin: auto; margin-bottom :30px}
#too_big		{display: none; font-style: italic; clear: left}
#operators		{width: 680px; margin: auto; margin-left: -20%}
.decimal		{font-size: 48px; width: 160px; font-size:48px; margin: 25px 0 0 10px; float:left}
#result			{font-size: 48px; width: 160px; margin: 25px 0 0 10px; float:left}
.column			{font-family: Arial, Helvetica, sans-serif; float: left; text-align: center; width: 54px}
.opcol			{float: left; text-align: center; width: 54px; height: 45px; padding-top: 20px; vertical-align:middle; -webkit-transform: rotate(90deg); -moz-transform: rotate(90deg); -o-transform:rotate(90deg); -ms-transform:rotate(90deg)}
.opeq			{float: left; text-align: center; padding-bottom: 10px; width: 54px; height: 30px; font-size: 38px; -webkit-transform: rotate(90deg); -moz-transform: rotate(90deg); -o-transform:rotate(90deg); -ms-transform:rotate(90deg)}
.bit			{font-size: 64px; background-color: #FFFFFF; color:#000000; border-radius: 7px; margin: 2px; border: 1px solid black}
#operator		{display: inline;  background: transparent; border: 0; font-size: 37px; width: 120px; margin: auto; float: left; margin-top: 11px}
#value_A, #value_B	{font-size: 32px; width: 58px; vertical-align: top; padding-top: 0px; margin-top: 6px}
@media screen and (max-width: 720px) {
	#container	{display: none}
	#too_big	{display: block}
}
</style>



<script type="text/javascript">
<!--
var bit1 = new Array(8);
var bit1_display = new Array(2);
bit1_display[false] = "0";
bit1_display[true] = "1";

function toggle_bit1(column)
{
	var decimal1 = 0;
	document.getElementById(column+"c").innerHTML = bit1_display[bit1[column] = !bit1[column]];
	for(var i=0; i < 8; i++)
	{
		if(bit1[i]) { decimal1 = decimal1 + Math.pow(2, i); }
	}
	document.getElementById("decimal").innerHTML = " = " + decimal1;
}



var bit = new Array(16);
var bit_display = new Array(2);
bit_display[false] = "0";
bit_display[true] = "1";

function set_bits()
{
	if(isNaN(document.getElementById("value_A").value) || document.getElementById("value_A").value > 255 || document.getElementById("value_A").value < 0 || isNaN(document.getElementById("value_B").value) || document.getElementById("value_B").value < 0 || document.getElementById("value_B").value > 255)
	{
		alert("Only numbers between 0 and 255 can be entered.");
	}
	else
	{
		for(var i=0; i < 8; i++)
		{
			if((document.getElementById("value_A").value&Math.pow(2,i))>0) { bit_value = true; } else { bit_value = false; }
			document.getElementById(i).innerHTML = bit_display[bit[i] = bit_value];
			if((document.getElementById("value_B").value&Math.pow(2,i))>0) { bit_value = true; } else { bit_value = false; }
			document.getElementById(i+8).innerHTML = bit_display[bit[i+8] = bit_value];
		}
		do_bitwise();
	}
}

function toggle_bit(column)
{
	var decimal = 0;
	document.getElementById(column).innerHTML = bit_display[bit[column] = !bit[column]];
	for(var i=0; i < 16; i++)
	{
		if(bit[i]) { decimal = decimal + Math.pow(2, i); }
	}
	document.getElementById("value_A").value = decimal&255;
	document.getElementById("value_B").value = Math.floor(decimal/256);
	do_bitwise();
}

function change_operator()
{
	var ops = document.getElementsByClassName("opcol");
	for (var i=0; i < ops.length; i++)
	{
		ops[i].innerHTML = document.getElementById("operator").value;
	}
	do_bitwise();
}

function do_bitwise()
{
	var decimal = 0;
	var bit_value;
	
	for(var i=0; i < 8; i++)
	{
		switch(document.getElementById("operator").value)
		{
			case "AND":
			bit_value = bit[i]&bit[i+8];
			break;
			case "OR":
			bit_value = bit[i]|bit[i+8];
			break;
			default:
			bit_value = (bit[i]!=bit[i+8]);
		}

		document.getElementById(i+16).innerHTML = bit_display[bit_value==true];
		if(bit_value) { decimal = decimal + Math.pow(2, i); }
	}
	document.getElementById("result").innerHTML = " = " + decimal;
}
function disableSelection(target)
{
	if(typeof target.onselectstart!="undefined") //IE route
		target.onselectstart=function(){return false;}
	else if(typeof target.style.MozUserSelect!="undefined") //Firefox route
		target.style.MozUserSelect="none";
	else //All other route (ie: Opera)
		target.onmousedown=function(){return false;}
	target.style.cursor = "default";
}
//-->
</script>
