---
layout: circuitverse
title: Shannon decomposition
nav_order: l2s001
cvib_level: advanced
parent: Binary algebra
has_children: false
---


# Shannon decomposition
{: .no_toc}


## Table of contents
{: .no_toc .text-delta}

1. TOC
{:toc}


## Boole's expansion theorem

The *Shannon expansion* or *decomposition* theorem, also known as *Boole's expansion* theorem is an identity which allow the expansion of any logic function to broken down in parts. One consequence of this theorem is the possibility to implement any logic function using multiplexers.

The expansion can take any of these three variations:

$\begin{align} f(x_1,x_2,\ldots,x_n)&= x_1 \cdot f(1,x_2,\ldots,x_n) + \overline{x_1}\cdot f(0,x_2,\ldots,x_n) \\\\\\ &= \bigl(x_1+f(0,x_2,\ldots,x_n)\bigr)\cdot \bigl(\overline{x_1}+f(1,x_2,\ldots,x_n)\bigr) \\\\\\ &= x_1 \cdot f(1,x_2,\ldots,x_n) \oplus \overline{x_1}\cdot f(0,x_2,\ldots,x_n)  \end{align}$

More details can be found in Section 1.9 "Shannon's Expansion Theorem" in {% cite donzellini2018introduction --file books %} and in Section 3.2 "Switching functions" in {% cite kohavi2010switching --file books %}.


## References

{% bibliography --cited --file books %}
