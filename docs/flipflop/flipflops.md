---
layout: default
title: Flip-Flops
nav_order: 13
has_children: true
permalink: /docs/flipflop
---

# Flip-Flops
{: .no_toc }

## Table of Contents

1. [S-R Flip Flop](https://learn.circuitverse.org/docs/flipflop/sr_flipflop.html)
1. [D Flip-Flop](https://learn.circuitverse.org/docs/flipflop/d_flipflop.html)
1. [J-K Flip Flop](https://learn.circuitverse.org/docs/flipflop/jk_flipflop.html)
1. [T Flip Flop](https://learn.circuitverse.org/docs/flipflop/t_flipflop.html)
1. [Master Slave J-K Flip Flop](https://learn.circuitverse.org/docs/flipflop/masterslave_jk_flipflop.html)

## Introduction

In previous module, we discussed about Latches. Those are the basic building blocks of flip-flops. We can implement flip-flops in two methods.

In first method, cascade two latches in such a way that the first latch is enabled for every positive clock pulse and second latch is enabled for every negative clock pulse. So that the combination of these two latches become a flip-flop.

In second module, we can directly implement the flip-flop, which is edge sensitive. In this module, let us discuss the following flip-flops using second method.

## Differences between Latches and Flip-Flops


| Latches       | Flip-Flops     |
|:------------|:--------------|
| Level triggered | Edge triggered |
| Asynchronous device | Synchronous device |
| Doesn't contain clock signal | Contains a clock signal |
| It will change its state as long as it is enabled | It will change its state only during a given clock cycle |
| Consumes less power | Consumes more power |
| Faster | Slower |
| Examples: D-Latch, T-Latch | Examples: D-Flip flop, T-Flop flop |


## Conclusion

In this module, we will implemented various flip-flops by providing the cross coupling between NOR gates. Similarly, you can implement these flip-flops by using NAND gates.



