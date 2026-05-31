---
layout: circuitverse
title: Flowchart diagrams
nav_order: l2s000
cvib_level: advanced
parent: Sequential Design
has_children: false
---


# Flow diagrams
{: .no_toc}


## Table of contents
{: .no_toc .text-delta}

1. TOC
{:toc}

---


## Introduction

Finite State Machines can also be represented graphically by means of Flowchart diagrams. Therefore a direct conversion from Flowchart diagrams to State Diagrams is possible.

Several resources about Flowcharts can be found in the References and Further reading sections of the Wikipedia entry about [Flowcharts](https://en.wikipedia.org/wiki/Flowchart)


## Example

{% include image.html url="/assets/images/seq/flowchart-example.svg" description="Equivalence between state diagram and flowchart diagram"%}


## Algorithmic State Machines

An extension to the flowchart diagram which includes timing information is known as the Algorithmic State Machine (ASM) chart.

More information about ASM charts can be found in:

-   Section 7.2 "ASM Diagrams" in {% cite donzellini2018introduction --file books %}
-   Section "Algorithmic state machines" (Chapter 5) in {% cite stonham2017digital --file books %}
-   *ASM++* Project webpage at the Universidad de Valladolid [ASM++: a modern Algorithmic State Machine methodology for RTL designs](http://www.epyme.uva.es/asm++/)


## References

{% bibliography --cited --file books %}

{:.quiz}
1. A processing step is denoted by a  ?
   1. Rectangular box
   * Diamond
   * Arrow head
2. Flowchart helps to identify ?
   1. All of these
   * Flow of algorithms
   * Flaws
   * Bottlenecks   
3. What does a `terminator` symbol represents ?
   1. Starting or ending point
   * Document or a report
   * Direction of a process
   * Document or a report      
