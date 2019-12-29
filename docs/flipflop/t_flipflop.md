---
layout: default
title: T Flip-Flop
parent: Flip-Flops
nav_order: 4
---





## T Flip-Flop

T flip-flop is the simplified version of JK flip-flop. It is obtained by connecting the same input ‘T’ to both inputs of JK flip-flop. It operates with only positive clock transitions or negative clock transitions. The circuit diagram of T flip-flop is shown in the following figure.

<div style="text-align:center"><img src="../../assets/images/t_flipflop.jpg" /></div>

This circuit has single input T and two outputs Q(t) & Q(t)’. The operation of T flip-flop is same as that of JK flip-flop. Here, we considered the inputs of JK flip-flop as J = T and K = T in order to utilize the modified JK flip-flop for 2 combinations of inputs. So, we eliminated the other two combinations of J & K, for which those two values are complement to each other in T flip-flop.

### State table of **T** flip-flop.


| D    |    Q(t+1) | 
|:-------|:--------|
|  0     |    Q(t)    | 
|  1     |    Q(t)'    |

Here, Q(t) & Q(t + 1) are present state & next state respectively. So, T flip-flop can be used for one of these two functions such as Hold, & Complement of present state based on the input conditions, when positive transition of clock signal is applied. 


### Characteristic table of T flip-flop.


|T	     |Q(t)	   |Q(t + 1)|
|:-------|:--------|:-------|
|0	|0	|0|
|0	|1	|1|
|1	|0	|1|
|1	|1	|0|

From the above characteristic table, we can directly write the next state equation as


```yaml
          Q(t+1)=T′Q(t)+TQ(t)′
           
          ⇒  Q(t+1)=T⊕Q(t)
```

The output of T flip-flop always toggles for every positive transition of the clock signal, when input T remains at logic High (1). Hence, T flip-flop can be used in counters.


<iframe width="100%" height="400px" src="https://circuitverse.org/simulator/embed/12258" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>


