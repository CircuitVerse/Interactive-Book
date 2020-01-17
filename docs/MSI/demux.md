---
layout: default
title: Demultiplexers
parent: MSI Components
nav_order: 2
---

# Demultiplexers
{: .no_toc }

A Demultiplexer(demux) performs the reverse task of a multiplexer, i.e., it receives 1 input, and distributes it to many outputs.  
It has 1 input, n number of outputs, and m select inputs. 
At a particular time the select lines, selects only 1 output line, then the input is sent to the output line which is selected. 
The demultiplexer is equivalent to the single-pole-multiple-way-switch, as shown in the below figure.

## Demultiplexers in multiple variations.

* 1 : 2  demultiplexer.
* 1 : 4  demultiplexer.
* 1 : 16 demultiplexer.
* 1 : 32 demultiplexer.


## Block Diagram
{: .no_toc }

<div style="text-align:center"><img src="../../assets/images/one_twodemultiplexer_blockdiagram.jpg" /></div>


## Truth Table
{: .no_toc }

<div style="text-align:center"><img src="../../assets/images/one_twodemultiplexer_truthtable.jpg" /></div>

<iframe width="100%" height="400px" src="https://circuitverse.org/simulator/embed/756" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>
