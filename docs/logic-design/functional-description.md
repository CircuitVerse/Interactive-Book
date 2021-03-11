---
layout: circuitverse
title: Functional description
nav_order: l0s000
cvib_level: basic
parent: Logic Design
has_children: false
---


# Functional description
{: .no_toc}


## Table of contents
{: .no_toc .text-delta}

1. TOC
{:toc}

## Introduction

Combinational circuits consist of Logic gates. These circuits operate with binary values. The output(s) of combinational circuit depends on the combination of present inputs. The following figure shows the **block diagram** of combinational circuit.

<div style="text-align:center"><img src="/assets/images/combinational1.jpg" /></div>

This combinational circuit has ‘n’ input variables and ‘m’ outputs. Each combination of input variables will affect the output(s).


## Design procedure of combinational circuits

1.  Find the required number of input variables and outputs from given specifications.   
1.  Formulate the Truth table. If there are ‘n’ input variables, then there will be 2n possible combinations. For each combination of input, find the output values.   
1.  Find the Boolean expressions for each output. If necessary, simplify those expressions.   
1.  Implement the above Boolean expressions corresponding to each output by using Logic gates.
