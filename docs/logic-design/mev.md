---
layout: circuitverse
title: Map-entered variables
nav_order: l2s000
cvib_level: advanced
parent: Logic Design
has_children: false
---


# Map-entered variables
{: .no_toc}


## Table of contents
{: .no_toc }

1. TOC
{:toc}


## Introduction

Maps with entered variables are Karnaugh Maps which can have Boolean expression in its cells, not just ones and zeros. These maps are also referred to as Variable-Entered Maps. However, in most literature the MEV acronym is used.

These maps are useful to represent functions with large number of variables in a map of lower order. They are also used to describe flip-flop's excitation functions.

For instance, given the three-variables Boolean function $f(x,y,z)$ described by the following truth-table:

|: Table 1: Simple MEV example {: .tblcap} :|||||
| $x$ | $y$ | $z$ | $f(x,y,z)$ | MEV            |
|:---:|:---:|:---:|:----------:|:--------------:|
| 0   | 0   | 0   | 0          | $z$            |
| 0   | 0   | 1   | 1          | ^^             |
| 0   | 1   | 0   | 1          | $\overline{z}$ |
| 0   | 1   | 1   | 0          | ^^             |
| 1   | 0   | 0   | 0          | $z$            |
| 1   | 0   | 1   | 1          | ^^             |
| 1   | 1   | 0   | 0          | 0              |
| 1   | 1   | 1   | 0          | ^^             |

The column labelled MEV shows the Boolean relation between $f(x,y,z)$ and $z$ for each of the four possible combinations of $(x,y)$.

This function is represented by the map:

|: Table 2: MEV for function defined by Table 1 :|||
|         |  $\boldsymbol{y}$                     ||
| $\boldsymbol{x}$ |  0           |  1             |
|:----------------:|:------------:|:--------------:|
| **0**            | $z$          | $\overline{z}$ |
| **1**            | $z$          | 0              |

The MEV can be optimized directly, just like a Karnaugh Map but the process is more complex.


## MEV and MUXs

A MEV can be directly implemented in a MUX, where the function of each cell must be connected to the corresponding data line of the MUX, while the map's variables are connected to the selection lines.

For instance, the example from Table 2 is implemented in the interactive circuit below:

<iframe width="600px" height="400px"
	src="https://circuitverse.org/simulator/embed/simple-mev"
	id="projectPreview" scrolling="no"
	title="Simple MEV"
	webkitAllowFullScreen mozAllowFullScreen allowFullScreen>
</iframe>


## Minimization method

A method of MEV minimization based on partial variables is described in:

-   Section "Variable-Entered Maps" in {% cite donzellini2018introduction --file books %}
-   Section "Minimizing MEV maps" in {% cite stonham2017digital --file books %}
-   Section "Map-entered variables" in {% cite kohavi2010switching --file books %}

Another recursive method which can be used when the MEV only has expessions of one variable (or its complement) is described next.

The expressions found in the map's cells can have these forms:

-   0s or 1s
-   $z$ or $\overline{z}$
-   $\phi$ (don't care)
-   $z\phi$ or $\overline{z}\phi$
-   $z+\overline{z}\phi$ or $\overline{z}+z\phi$

The process has two phases


### Phase 1: Coverage

Let $D$ and $\overline{D}$ (its complement) be the MEV variable, then ones correspond to $1\rightarrow D+\overline{D}$.

In this phase, the goal is to obtain the largest grouping or coverage for both the variable and its complement, independently.

1.  Start by covering the variables alone.
2.  Expand the coverage to identical adjacent variables.
3.  Expand the coverage by incorporating ones (1s).
4.  Expand the coverage by incorporating cells containing *don't cares*.
5.  Repeat from step 2 to extend the coverage as much as possible

The Boolean product expressions of the groups will be part of the final sum.


### Phase 2: Transformation

The goal of this phase is to discard the MEV variables, since they have already been covered in *Phase 1*:

1.  MEV variables $D$ and $\overline{D}$ are replaced by 0.
2.  Cells with 0s and $\phi$ remain the same.
3.  Cells with 1s become $\phi$ if both parts $D$ and $\overline{D}$ were covered. Otherwise they remain as 1s
4.  Cells containing $z\phi$ or $\overline{z}\phi$ become 0s.
5.  Cells with the expressions $z+\overline{z}\phi$ and $\overline{z}+z\phi$ become $\phi$ if the term not multiplied by $\phi$ has been covered. Otherwise they become 1s.

The new map is a normal Karnaugh Map with 1s and 0s, and can be minimised accordingly. The new product terms are added to those found in *Phase 1*.
