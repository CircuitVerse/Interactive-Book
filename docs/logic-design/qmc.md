---
layout: circuitverse
title: Quine McCluskey
nav_order: l2s002
cvib_level: advanced
parent: Logic Design
has_children: false
---


# Quine McCluskey
{: .no_toc}


## Table of contents
{: .no_toc }

1. TOC
{:toc}


## Introduction

Karnaugh Maps for functions with a large number of literals are difficult to minimise. Usually, a K-map is manageable up to 5 or 6 input literals. MEV can help for functions with a couple more variables. If we look at computer data buses, the information is 8, 16, 32, 64 bits wide or more. Additionally, to do a joint optimisation of functions with multiple output variables, the K-maps for all the combinations of the output variables must be analysed. Also, the visual minimisation using K-maps cannot be programmed to be performed by a computer program.

The Quine-McCluskey method is a tabular recursive algorithm, which can be programmed in software. It has no limitations regarding the number of input or output literals. However, it will take longer and more recursions to process functions with more variables (the complexity grows exponentially).


## Further reading

Details of the Quine McCluskey Algorithm can be found in the following references:

-   Chapter 4 "Complements in Combinational Network Design" in {% cite donzellini2018introduction --file books %}
-   Section "Tabular method of minimization" in {% cite stonham2017digital --file books %}
-   Section 4.4 "The tabulation procedure for the determination of prime implicants" in {% cite kohavi2010switching --file books %}
-   Section 6.10 "Quine–McCluskey Minimization" in {% cite ferdjallah2011introduction --file books %}
-   [Wikipedia:Quine–McCluskey algorithm](https://en.wikipedia.org/w/index.php?title=Quine%E2%80%93McCluskey_algorithm&oldid=990843883)


## References

{% bibliography --cited --file books %}
