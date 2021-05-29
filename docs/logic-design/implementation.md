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
{: .no_toc .text-delta}

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

using Boolean algebra's rules and laws the function can be re-arranged as

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


## Optimizing a circuit

As it was shown in the example above, in general, a Boolean function is reduced before its implementation. The reduced expression leads to a more optimal circuit, with fewer gates and connections. In turn, this makes the circuit less complex and easier to implement, debug and repair. It may also reduce the total cost and energy requirements due to the reduced number of components. Additionally, if the circuit is being implemented with discrete components, it will be more compact in size.

There are several methods to minimise a logic function:

1.  Use the Boolean algebra's laws and rules. This process is complex and difficult but it works for any function, independent of the number of variables.
2.  A graphical, visual inspection method based on the representation using Karnaugh Maps as described in section [K-Maps]({% link docs/logic-design/kmaps.md %}) or the extension using Map-entered Variables shown in section [Map-entered variables]({% link docs/logic-design/mev.md %}) or the
3.  A tabular recursive algorithm known as Quine-McCluskey method which is explained in section [Quine McCluskey]({% link docs/logic-design/qmc.md %}).
4.  Even other optimisation methods can be used (for instance, heuristic based, or evolutionary computation), specially with extremely large circuits or when additional restrictions need to be satisfied.
