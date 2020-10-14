---
layout: circuitverse
title: Universal gates
nav_order: l1s001
cvib_level: medium
parent: Combinational SSI
has_children: false
---


# Universal gates
{: .no_toc}


## Table of contents
{: .no_toc}

1. TOC
{:toc}

## NAND gate

The NAND gate is the complement of the AND gate. You can think of it as an AND gate followed immediately by a NOT gate. Its output is low (0) when both the inputs are 1, and for all other cases, its output is high (1). The symbol of NAND gate consists of AND gate followed by a small circle.
The Truth table of NAND gate which consists of two inputs is given below

| Input 1       | Input 2      | Output |
|:-------------:|:------------:|:------:|
| 0             | 0            | 1      |
| 0             | 1            | 1      |
| 1             | 0            | 1      |
| 1             | 1            | 0      |

<img src="/assets/images/NandGate.svg" />

<iframe width="100%" height="220px" src="https://circuitverse.org/simulator/embed/46604" id="gates_04" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

### Verilog code for NAND gate

```verilog
module nand_gate(
    input a,
    input b,
    output c );
assign c=~(a & b);
endmodule
```



## NOR gate

The NOR gate is the complement of the OR gate. You can think of it as an OR gate followed immediately by a NOT gate. Its output is low (0) when one or both of the inputs are 1, and for all other cases, its output is high (1). The symbol of NOR gate consists of OR gate followed by a small circle.
The Truth table of NOR gate which consists of two inputs is given below

| Input 1       | Input 2      | Output |
|:-------------:|:------------:|:------:|
| 0             | 0            | 1      |
| 0             | 1            | 0      |
| 1             | 0            | 0      |
| 1             | 1            | 0      |

<img src="/assets/images/NorGate.svg" />

<iframe width="100%" height="220px" src="https://circuitverse.org/simulator/embed/46606" id="gates_05" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

### Verilog code for NOR gate

```verilog
module nor_gate(
    input a,
    input b,
    output c );
assign c=~(a | b);
endmodule
```
