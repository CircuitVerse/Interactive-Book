---
layout: circuitverse
title: Binary cubes
nav_order: l2s003
cvib_level: advanced
parent: Logic Design
has_children: false
---


# Binary cubes representation
{: .no_toc}


## Table of contents
{: .no_toc }

1. TOC
{:toc}


## Another abstract representation

The simplicity in applying the *absorption* and *logic adjacency* in Karnaugh Maps is derived from another way of representing binary functions: the binary cubes.

This representation is also key to understand the Quine McCluskey algorithm to minimize logic functions.

More information can be found in the section on Karnaugh Maps in {% cite donzellini2018introduction --file books %}


### Functions of 1 variable

Any logic function of a single variable $f(x)$ can be represented by a line:

{% include image.html url="/assets/images/comb/binary-cube-1var.svg" description="Cube representing a logic function with one variable." %}

The points at both ends of the line indicate the values that the variable $x$ can take (0 or 1).


### Functions of 2 variables

In a similar way a function of two variables can be represented by a square in a two-dimensional space:

{% include image.html url="/assets/images/comb/binary-cube-2var.svg" description="Cube representing a logic function with two variables." %}

In the figure it is easy to see that (1,0) and (0,1) are not adjacent, while (1,1) and (0,1) are adjacent.


### Functions of 3 variables and more

This representation can be further extended to higher orders. For instance, a function with three variables would be represented by the following three-dimensional cube:

{% include image.html url="/assets/images/comb/binary-cube-3var.svg" description="Cube representing a logic function with three variables." %}

Again, the adjacencies can be identified by the lines connecting the corners of the cube. If there is not a line, those binary numbers are not adjacent.

The adjacency is key to group cubes in Karnaugh maps and in the Quine McCluskey method to obtain minimal expressions.


## References

{% bibliography --cited  --file books %}
