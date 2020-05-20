---
layout: default
title: Parallel Input Parallel Output
parent: Digital Registers
nav_order: 4
comments: true
---

# Parallel Input Parallel Output
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}


## Introduction
 
Here, the 4-bit binary inputs B0, B1, B2, B3 are applied to the data inputs D0, D1, D2, D3, respectively, of the four flip-flops. 
As soon as a negative clock edge is applied, the input binary bits will get loaded into the flip-flops, simultaneously. 
The loaded bits will appear, simultaneously, to the output side. 
Only clock pulse is essential to load all the bits.



## Block Diagram


<div style="text-align:center"><img src="../../assets/images/pipo_blockdiagram.jpg" /></div>

{% include disqus.html %}
