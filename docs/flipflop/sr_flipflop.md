---
layout: default
title: SR Flip-Flop
parent: Flip-Flops
nav_order: 1
---

## SR Flip-Flop

The SR latch is operated only with the enable signal, whereas the SR Flip-flop operates with only negative or positive clock transitions. Circuit diagram of SR flip-flop is given below:

<div style="text-align:center"><img src="../../assets/images/sr_flipflop.jpg" /></div>

The above circuit has 2 inputs- 'S' & 'R', and 2 outputs Q(t) & Q(t)'. The operation of SR Flip-flop is similar to that of an SR Latch. But, this Flip-flop's output is affected only when the positive clock signal is used instead of active enable.

### State table of **SR** flip-flop.

|   S    |    R    |  Q(t+1)  |
|:-------|:--------|:---------|
|   0    |    0    |   Q(t)   |
|   0    |    1    |    0     |
|   1    |    0    |    1     |
|   1    |    1    |    -     |

Here, Q(t) is the present state and Q(t + 1) is the next state. So, the SR Flip-flop could be used for any one of the 3 functions such as Hold, Set & Reset based on its input conditions, when the positive clock signal is used. 

### Characteristic table of SR flip-flop.

Therefore, SR Latch performs three types of functions such as Hold, Set & Reset based on the input conditions.

| S      |    R    |   Q(t) |   Q(t+1) |
|:-------|:--------|:-------|:---------|
|0	|0	|0	|0|
|0	|0	|1	|1|
|0	|1	|0	|0|
|0	|1	|1	|0|
|1	|0	|0	|1|
|1	|0	|1	|1|
|1	|1	|0	|x|
|1	|1	|1	|x|

By using the 3 **variable K-Map**, we get a simplified expression for the next state, i.e. Q(t + 1). The 3 variable K-Map for Q(t + 1) is given below:

<div style="text-align:center"><img src="../../assets/images/3_variable_k_map_next_state.jpg" /></div>

Maximum possible groupings of adjacent 1's is done, in the above figure. Hence, the simplified expression of Q(t + 1) is:
```yaml
          Q(t+1) = S + R′Q(t)
```

<iframe width="100%" height="400px" src="https://circuitverse.org/simulator/embed/12264" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>
