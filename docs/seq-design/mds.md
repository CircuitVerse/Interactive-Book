---
layout: circuitverse
title: MDS Diagrams
nav_order: l2s001
cvib_level: advanced
parent: Sequential Design
has_children: false
---


# Mnemonic Documented State Diagrams
{: .no_toc}


## Table of contents
{: .no_toc .text-delta}

1. TOC
{:toc}


## Introduction

For very complex systems the state diagram might not be well suited. In this case a tool called the *Mnemonic Documented State* Diagram or MDS Diagram can incorporate in a more compact way all the complexities of a large system controller.

More information about MDS diagrams can be found in the book *An Engineering Approach to Digital Design* by William I. Fletcher.


## Large scale digital system design

For complex digital logic system with a large number of inputs, the following design methodology, from the point of view of a system controller, can be used:

1.  State main definitions and specifications of the problem/system
2.  Define basic operations, limits and restrictions.
    1.  Draw a basic (simplified) block diagram
    2.  Draw a simplified (general) flowchart diagram
3.  Define the system **timing** requirement
    1.  Draw a general time diagram
4.  Detail the controller's sequential behaviour
    1.  Draw detailed time diagram
    2.  Draw detailed flowchart diagram
    3.  Draw detailed block diagram
5.  Draw MDS diagram
6.  Choose the controller architecture: SSI (logic gates and flip-flops), MSI (based on MUXs, &#x2026;) or LSI (ROM based, &#x2026;)
7.  Asign state codes
8.  Implement the circuit based on the design
