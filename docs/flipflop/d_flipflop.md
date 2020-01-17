---
layout: default
title: D Flip-Flop
parent: Flip-Flops
nav_order: 2
---
## D Flip-Flop

D Flip-flop operates only with positive or negative clock signals. Whereas,the D-latch operates with the enable signal. Which means, the output of D Flip-flop is not sensitive to the changes of the input , D except for the active transition of clock signal. Circuit diagram for D Flip-flop is given below:

<div style="text-align:center"><img src="../../assets/images/d_flipflop.jpg" /></div>

The above circuit has a single input D and has two outputs Q(t) & Q(t)’. The operation of D Flip-flop is similar to that of D-Latch. But, this Flip-flop affects the output only when positive clock signal is used instead of active enable.


### State table of **D** flip-flop.

| D    |    Q(t+1) | 
|:-------|:--------|
|  0     |    0    | 
|  1     |    1    |


Hence, D Flip-flop holds the information of the data input of earlier positive clock signal. From the given state table, The next state equation can be written as:
```yaml
        Q(t + 1) = D
```
Next state of D Flip-flop will be always equal to the data input for every positive clock signal. Therefore, D Flip-flops can be used in Registers, Shift registers, and some Counters.

<iframe width="100%" height="400px" src="https://circuitverse.org/simulator/embed/12254" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>
