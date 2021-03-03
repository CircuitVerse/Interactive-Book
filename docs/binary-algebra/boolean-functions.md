---
layout: circuitverse
title: Boolean functions
nav_order: l1s001
cvib_level: medium
parent: Binary algebra
has_children: false
---


# Boolean functions
{: .no_toc}


## Table of contents
{: .no_toc }

1. TOC
{:toc}


## Introduction

A mathematical expression consisting of Boolean variables combined using the Boolean algebra operators: logical addition (OR), multiplication (AND) and negation (NOT) is a Boolean function.


## Mathematical definition

If $k$ is the number of Boolean variables of the function, then the function $f(x_1,\ldots,x_k)$ and its domain and codomain are defined as $f:\\{0,1\\}^k\rightarrow\\{0,1\\}$


## Important concepts

The following is a list of definitions for fundamental concepts used in Boolean functions:

-   **Literal:** A logic variable or its complement $(x,\overline{x},y_0,\ldots)$.
-   **Product term:** An expression where literals are combined by the logical AND operator $(x\overline{y}z,\ldots)$.
-   **Sum term:** An expression where literals are combined by the logical OR operator $(y+\overline{z},\ldots)$.
-   **Normal term:** A (product or sum) term without repeated variables.
-   **Sum of Products (SoP):** A sum of product terms $(\overline{x}+xwz+x\overline{y})$.
-   **Product of Sums (PoS):** A product of sum terms $((x+y+z)(z+\overline{w})(z+\overline{x}))$.


## Further reading

-   Section 3.2 "Switching functions" in {% cite kohavi2010switching --file books %}.
-   Section 1.3 "Boolean Functions" in {% cite donzellini2018introduction --file books %}.
-   Chapter 3 "Boolean Algebra and Logic" in {% cite ferdjallah2011introduction --file books %}.


## References

{% bibliography --cited --file books %}
