---
layout: default
title: JK Flip-Flop
parent: Flip-Flops
nav_order: 3
---

## JK Flip-Flop

JK Flip-flop is the modified form of the SR Flip-flop. It operates with only negative or positive clock signals. Circuit diagram of JK Flip-flop is given below:

<div style="text-align:center"><img src="../../assets/images/jk_flipflop.jpg" /></div>

The circuit has 2 inputs- 'J' & 'K', and 2 outputs Q(t) & Q(t)’. JK Flip-flop's operation is similar to the SR Flip-flop. Here, we consider the inputs of SR Flip-flop as **R = KQ(t)** & **S = J Q(t)’** in order to use the modified SR Flip-flop for four combinations of inputs.
### State table of **SR** flip-flop.

| J      |    K    |   Q(t+1) |
|:-------|:--------|:---------|
|  0     |    0    |  Q(t)    |
|  0     |    1    |    0     |
|  1     |    0    |    1     |
|  1     |    1    |  Q(t)’   |

In the above state table, Q(t) & Q(t + 1) are the present state & the next state outputs respectively. So, JK Flip-flop can be used for any of  these  4 functions such as hold, reset, set and complement of the Q(t) based on input conditions, when positive clock signal is used.

### Characteristic table of JK Flip-flop.


| J      |    K    |   Q(t) |   Q(t+1) |
|:-------|:--------|:-------|:---------|
|0	|0	|0	|0|
|0	|0	|1	|1|
|0	|1	|0	|0|
|0	|1	|1	|0|
|1	|0	|0	|1|
|1	|0	|1	|1|
|1	|1	|0	|1|
|1	|1	|1	|0|

By using the 3 **variable K-Map**, we get a simplified expression for the next state, i.e. Q(t + 1). The 3 variable K-Map for Q(t + 1) is given below:

<div style="text-align:center"><img src="../../assets/images/jk_3_variable_kmap.jpg" /></div>

Maximum possible groupings of adjacent 1's is done, in the above figure. Hence, the simplified expression of Q(t + 1) is:
```yaml
          Q(t+1)=JQ(t)′+K′Q(t)
```

<iframe width="100%" height="400px" src="https://circuitverse.org/simulator/embed/12263" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>
