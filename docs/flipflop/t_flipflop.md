---
layout: default
title: T Flip-Flop
parent: Flip-Flops
nav_order: 4
---





## T Flip-Flop

T Flip-flop is a form of JK Flip-flop.Which is obtained by connecting the input 'T' to both the inputs of JK Flip-flop. It operates with only negative or positive clock transitions. Circuit diagram of the T Flip-flop is given below:

<div style="text-align:center"><img src="../../assets/images/t_flipflop.jpg" /></div>

The above circuit has a single input 'T', and has 2 outputs Q(t) & Q(t)'. The working of T Flip-flop is similar to that of JK Flip-flop. Here, we consider the inputs of JK Flip-flop as `J,K = T` in order to use the modified JK Flip-flop for 2 combinations of the inputs. So, we removed the other 2 combinations of 'J' & 'K', for which the 2 values are the complement to each other in T Flip-flop.

### State table of **T** flip-flop.


| D    |    Q(t+1) | 
|:-------|:--------|
|  0     |    Q(t)    | 
|  1     |    Q(t)'    |

Here, Q(t) is the present state and Q(t+1) is the next state. So, T Flip-flop can be used for any one of the 2 functions such as hold & complement of Q(t) based on the input condition, when the positive clock signal is applied. 


### Characteristic table of T flip-flop.


|T	     |Q(t)	   |Q(t + 1)|
|:-------|:--------|:-------|
|0	|0	|0|
|0	|1	|1|
|1	|0	|1|
|1	|1	|0|

From the above state table, the next state equatio can be written as:


```yaml
          Q(t+1)=T′Q(t)+TQ(t)′
           
          ⇒  Q(t+1)=T⊕Q(t)
```

The output of T Flip-flop will always toggle for every positive clock signal, when the input T remains logically High(1). Therfore, T Flip-flop are used in counters.


<iframe width="100%" height="400px" src="https://circuitverse.org/simulator/embed/12258" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>
