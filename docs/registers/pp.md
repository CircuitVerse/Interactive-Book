---
layout: default
title: Parallel Input Parallel Output
parent: Digital Registers
nav_order: 4
---

# Parallel Input Parallel Output
{: .no_toc }




<div class="main-sub-heading" markdown="1">
## Introduction
{: .d-inline-block}
{% include button.html %}
</div>

In this mode, the 4 bit binary input B0, B1, B2, B3 is applied to the data inputs D0, D1, D2, D3 respectively of the four flip-flops. 
As soon as a negative clock edge is applied, the input binary bits will be loaded into the flip-flops simultaneously. 
The loaded bits will appear simultaneously to the output side. 
Only clock pulse is essential to load all the bits.



<div class="main-sub-heading" markdown="1">
## Block Diagram
{: .d-inline-block}
{% include button.html %}
</div>


<div style="text-align:center"><img src="../../assets/images/pipo_blockdiagram.jpg" /></div>

