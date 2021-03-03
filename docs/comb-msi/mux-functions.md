---
layout: circuitverse
title: MUX-based functions
nav_order: l1s000
cvib_level: medium
parent: Combinational MSI
has_children: false
---


# MUX-based functions
{: .no_toc}


## Table of contents
{: .no_toc }

1. TOC
{:toc}


## Mathematical formulation of the Multiplexer

An MUX of order $p$, $M(p)$ is formulated as:

$ \begin{equation}F(\underbrace{x_1,\ldots,x_p}\_{\text{inputs}}, \underbrace{y_0,\ldots,y_k}\_{\text{control}})= \sum\_{i=0}^{2^p-1}\underbrace{\left(\dot{x_1}\dot{x_2}\cdots\dot{x_p}\right)_i}\_{i^{th}\text{ Miniterm of }F}\cdot y_i \end{equation}$

where $k=2^p-1$ and $\dot{x_j} \in \\{x_j, \overline{x_j}\\}$

More examples can be found in {% cite kohavi2010switching --file books %} (Section on Data Selectors).


## Shannon theorem with MUX

Shannon decomposition theorem can also be implemented using MUXs:

$ f(x_1,x_2,x_3,\ldots, x_n) = x_1 \cdot f_1(1,x_2,x_3,\ldots,x_n) + \overline{x_1} \cdot f_0(0,x_2,x_3,\ldots,x_n) $

{% include image.html url="/assets/images/comb/mux-shannon.svg" description="MUX based implementation of Shannon decomposition theorem." %}

See {% cite cerny1979 --file books --file mux %} for a more general description.


## Interactive MUX based logic gates

The set $\\{M(1),0,1\\}$ is functionally complete (See section **Functionally Complete \*Operation Sets** in {% cite lameres2019introduction --file books %} or [Wikipedia:Functional completeness](https://en.wikipedia.org/w/index.php?title=Functional_completeness&oldid=986190082)). Therefore, any logic function can be implemented using multiplexers, check the interactive circuit below, which implements the basic logic gates using MUXs:

-   MUX-based AND gate
-   MUX-based OR gate
-   MUX-based NAND gate
-   MUX-based NOR gate
-   MUX-based NOT gate

<iframe width="600px" height="400px"
	src="https://circuitverse.org/simulator/embed/mux-based-not-gate"
	id="projectPreview" scrolling="no"
	title="MUX-based NOT gate"
	webkitAllowFullScreen mozAllowFullScreen allowFullScreen>
</iframe>


## References

{% bibliography --cited --file books --file mux %}
