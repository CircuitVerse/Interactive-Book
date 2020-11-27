---
layout: circuitverse
title: Implementation
nav_order: l0s001
cvib_level: basic
parent: Logic Design
has_children: false
---


# Implementation
{: .no_toc}


## Table of contents
{: .no_toc}

1. TOC
{:toc}


## From Boolean function to a logic circuit

The easiest path to go from a logic design to an actual logic circuit is to obtain its Boolean function and replace the logical addition, multiplication and negation operators by the logical OR, AND and NOT gates.

If the design is expressed as a truth table or a map (such as the ones described in [K-Maps]({% link docs/logic-design/kmaps.md %})) it is better to transform them to the equivalent Boolean function.

Another representation presented in the section [Map-entered Variables]({% link docs/logic-design/mev.md %}) can be directly implemented with *multiplexers*, a medium scale integration (MSI) component described in section [MUX/DEMUX]({% link docs/comb-msi/mux-demux.md %}).


### Example

The logic system defined by the truth table in Table 1:

|: Table 1: Truth table of function $F(x,y,z)$  {: .tblcap } :|||||
| $i$ | $x$ | $y$ | $z$ | $F$ |
|:---:|:---:|:---:|:---:|:---:|
|  0  |  0  |  0  |  0  |  0  |
|  1  |  0  |  0  |  1  |  1  |
|  2  |  0  |  1  |  0  |  0  |
|  3  |  0  |  1  |  1  |  0  |
|  4  |  1  |  0  |  0  |  0  |
|  5  |  1  |  0  |  1  |  0  |
|  6  |  1  |  1  |  0  |  1  |
|  7  |  1  |  1  |  1  |  1  |

can be represented by the function:

$F(x,y,z) = \overline{x}\overline{y}z + xy\overline{z} + xyz$

using Boolean algebra's ruels and laws the function can be re-arranged as

$\begin{align\*}
F(x,y,z) &= \overline{x}\overline{y}z + xy\underbrace{(\overline{z} + z)}\_{=1}\\\\\\
F(x,y,z) &= \overline{x}\overline{y}z + xy
\end{align\*}$

By replacing the negations by NOT gates, the sum by an OR gate and the products by AND gates, the following circuit is implemented:

<iframe width="600px" height="400px"
	src="https://circuitverse.org/simulator/embed/boolean-implementation-example"
	id="projectPreview" scrolling="no"
	title="Boolean implementation example"
	webkitAllowFullScreen mozAllowFullScreen allowFullScreen>
</iframe>
