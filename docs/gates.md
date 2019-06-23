---
layout: default
title: Gates
nav_order: 3
---
# Logic Gates
{: .no_toc }


## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---


## Introduction


Logic gates are the basic building blocks of any digital system. 
It is an electronic circuit having one or more than one input and only one output. The relationship between the input and the output is based on a certain logic. Based on this, logic gates are named as AND gate, OR gate, NOT gate etc.

## NOT gate

The NOT gate is also known as an inverter because the output is the exact opposite of the input. It has one input and one output. The two possibilities are written out in the table below. Tables listing all logical possibilities like this are known as truth tables.

| Input1       | Input 2      |
|:------------:|:------------:|
| 0            | 1            | 
| 1            | 0            | 


## AND gate

The AND gate has two inputs and one output. The output is 1 if both inputs are 1, and for all other cases the output is 0.

| Input1       | Input 2      | output |
|:------------:|:------------:|:------:|
| 0            | 0            | 0      |
| 0            | 1            | 0      |
| 1            | 0            | 0      |
| 1            | 1            | 1      |


## OR gate

The OR gate has two inputs and one output. If at least one of the inputs is 1, then the output will be 1. If neither input is 1, the output will be 0.

| Input1       | Input 2      | output |
|:------------:|:------------:|:------:|
| 0            | 0            | 0      |
| 0            | 1            | 1      |
| 1            | 0            | 1      |
| 1            | 1            | 1      |


## NAND gate

The NAND gate behaves in the opposite fashion to and AND gate. You can think of it as an AND gate followed immediately by a NOT gate. Its output is 0 when the two inputs are 1, and for all other cases, its output is 0. The name NAND comes from joining NOT and AND. The symbol for NAND is the same as that for AND except for the addition of a small circle on the right side.

| Input1       | Input 2      | output |
|:------------:|:------------:|:------:|
| 0            | 0            | 1      |
| 0            | 1            | 1      |
| 1            | 0            | 1      |
| 1            | 1            | 0      |

## NOR gate

The NAND gate behaves in the opposite fashion to and AND gate. You can think of it as an AND gate followed immediately by a NOT gate. Its output is 0 when the two inputs are 1, and for all other cases, its output is 0. The name NAND comes from joining NOT and AND. The symbol for NAND is the same as that for AND except for the addition of a small circle on the right side.

| Input1       | Input 2      | output |
|:------------:|:------------:|:------:|
| 0            | 0            | 1      |
| 0            | 1            | 0      |
| 1            | 0            | 0      |
| 1            | 1            | 0      |


## XOR gate

The NAND gate behaves in the opposite fashion to and AND gate. You can think of it as an AND gate followed immediately by a NOT gate. Its output is 0 when the two inputs are 1, and for all other cases, its output is 0. The name NAND comes from joining NOT and AND. The symbol for NAND is the same as that for AND except for the addition of a small circle on the right side.

| Input1       | Input 2      | output |
|:------------:|:------------:|:------:|
| 0            | 0            | 0      |
| 0            | 1            | 1      |
| 1            | 0            | 1      |
| 1            | 1            | 0      |






<img src="../assets/images/AND_gate.png" alt="AND" class="tile">
<img src="../assets/images/OR_gate.png" alt="OR" class="tile">
<img src="../assets/images/NAND_gate.png" alt="NAND" class="tile">
<img src="../assets/images/NOR_gate.png" alt="NOR" class="tile">
<img src="../assets/images/EOR_gate.png" alt="EOR" class="tile">
<img src="../assets/images/XNOR_gate.png" alt="NXOR" class="tile">
<div id="clipboard"></div>
<p style="clear:left">You can also click/tap a symbol to copy it and then click/tap to paste it into the box. </p>
<div style="display: inline-block">
<div class="circuit">
<h2>Two-Way Light Switch</h2>
<p>In your house you probabably have a light with more than one switch - e.g. landing lights often have switches upstairs and downstairs.  Add the correct logic gate to the circuit and see if you can get this light work to work in the same way.  You can click on <em>Upstairs</em> and <em>Downstairs</em> switches to change them.</p>
<div class="container">
<div style="width: 100px; height: 210px; float:left">
<div id="2" class="switch" onClick="toggle_switch_2(2);">
  <div class="label">Upstairs</div>
</div>
<div id="3" class="switch" onClick="toggle_switch_2(3);"><div class="label">Downstairs</div></div> 
</div>
<div style="margin: 30px 0px 0px 10px; float: left"><img src="graphics/input.png" width="91" height="201" alt="Upstairs"></div>
<div id="Q2" class="drop"></div><input id="R2" onChange="show_result_2(2);" type="hidden">
<div style="margin: 28px 5px 0px 0px; float: left"><img src="graphics/output.png" width="91" height="201" alt="Downstairs"></div>
<div id="result2" class="bulb"></div>
</div></div>
<div class="circuit">
<h2 style="clear: left">Security Light</h2>
<p>You can buy security lights that come on only when it's dark and they sense some movement. Add the correct logic gate to the circuit and see if you can get it to work (you can click on <em>Darkness</em> and <em>Movement</em> to change them).</p>
<div class="container">
<div style="width: 100px; height: 210px; float:left">
<div id="0" class="dark" onClick="toggle_switch_2(0);"><div class="label">Darkness</div></div>
<div id="1" class="burglar" onClick="toggle_switch_2(1);"><div class="label">Movement</div></div> 
</div>
<div style="margin: 30px 0px 0px 10px; float: left"><img src="graphics/input.png" width="91" height="201" alt="Darkness"></div>
<div id="Q1" class="drop"></div><input id="R1" onChange="show_result_2(1);" type="hidden">
<div style="margin: 28px 5px 0px 0px; float: left"><img src="graphics/output.png" width="91" height="201" alt="Movement"></div>
<div id="result1" class="bulb"></div></div>
</div></div>


<style>
.container		{width: 450px; margin: auto}
.circuit		{display: inline-block; float: left; width: 48%; min-width: 450px; border: 1px solid black; padding: 0px 5px 0px 5px; height: 460px; margin: 2px}
.bulb			{float: left; background-image:url(graphics/bulb_off.png); width: 60px; height: 100px; margin: 80px 0px 0px 5px}
.dark			{background-image:url(graphics/dark_off.png); background-repeat: no-repeat; width: 100px; height: 115px; margin: 10px; padding: 1px}
.burglar		{background-image:url(graphics/burglar_off.png); background-repeat: no-repeat; width: 100px; height: 115px; margin: 10px; padding: 1px}
.switch			{background-image:url(graphics/switch_off.png); background-repeat: no-repeat; width: 87px; height: 105px; margin: 25px 5px 15px 5px; padding: 1px}
.label			{margin-top: 100px; text-align: center; font-style:italic}
.drop 			{height: 105px; width: 105px; padding: 5px; border: 1px dashed black; float: left; margin: 75px -9px 0 -22px}
.tile			{margin-left: 5px; float:left; max-width: 105px; max-height: 105px; height: 15%; width: 15%}
#clipboard		{position: relative; float:right; width: 110px; height: 110px; border: 1px dotted black; margin: -2px 5px 5px 5px; overflow: hidden; text-align:center}
#clipboard img	{padding: 2px; float:none}

@media screen and (max-width: 849px) {
	#clipboard	{display: none}
}
@media screen and (max-width: 499px) {
	p			{display: none}
	.circuit	{display: none}
	.tile		{display: none}
	#too_small	{diplay: block; margin-top: -14px}
}
@media screen and (min-width: 500px) {
	#too_small		{display: none}
}
</style>
