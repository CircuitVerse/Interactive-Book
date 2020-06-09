---
layout: default
title: Demultiplexers
parent: MSI components
nav_order: 2
---

# Demultiplexers
{: .no_toc }

1. TOC
{:toc}

## Introduction

A demultiplexer performs the reverse operation of a multiplexer i.e. it receives one input and distributes it over several outputs. 
It has only one input, n outputs, m select input. 
At a time only one output line is selected by the select lines and the input is transmitted to the selected output line. 
A de-multiplexer is equivalent to a single pole multiple way switch as shown in fig.

## Demultiplexers in multiple variations.

### 1 : 2  demultiplexer
#### Block diagram

<div style="text-align:center"><img src="../../assets/images/one_twodemultiplexer_blockdiagram.jpg" /></div>


#### Truth table

<div style="text-align:center"><img src="../../assets/images/one_twodemultiplexer_truthtable.jpg" /></div>

<iframe width="100%" height="400px" src="https://circuitverse.org/simulator/embed/756" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>


### 1 : 4  demultiplexer
<iframe width="100%" height="400px" src="https://circuitverse.org/simulator/embed/44768" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

### 1 : 8  demultiplexer

#### Truth Table

`Enable(E) = 1`

<table style="overflow-x: scroll">
    <thead>
        <tr>
            <th colspan="3"> Input </th>
            <th colspan="8"> Output </th>
        </tr>
        <tr>
            <th style="border-left: 1px solid #eeebee"> S2 </th>
            <th> S1 </th>
            <th> S0 </th>
            <th style="border-left: 1px solid #eeebee"> Y7 </th>
            <th> Y6 </th>
            <th> Y5 </th>
            <th> Y4 </th>
            <th> Y3 </th>
            <th> Y2 </th>
            <th> Y1 </th>
            <th> Y0 </th>
        </tr>
    </thead>
    <tbody style="text-align: center">
        <tr>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 1 </td>
        </tr>
        <tr>
            <td> 0 </td>
            <td> 0 </td>
            <td> 1 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 1 </td>
            <td> 0 </td>
        </tr>
        <tr>
            <td> 0 </td>
            <td> 1 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 1 </td>
            <td> 0 </td>
            <td> 0 </td>
        </tr>
        <tr>
            <td> 0 </td>
            <td> 1 </td>
            <td> 1 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 1 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
        </tr>
        <tr>
            <td> 1 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 1 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
        </tr>
        <tr>
            <td> 1 </td>
            <td> 0 </td>
            <td> 1 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 1 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
        </tr>
        <tr>
            <td> 1 </td>
            <td> 1 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 1 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
        </tr>
        <tr>
            <td> 1 </td>
            <td> 1 </td>
            <td> 1 </td>
            <td> 1 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
        </tr>
    </tbody>
</table>

<iframe width="100%" height="400px" src="https://circuitverse.org/simulator/embed/44769" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

### 1 : 16 demultiplexer
A 1 : 16 demultiplexer can be implemented using **two** 1 : 8 demultiplexers.

#### Truth Table

`Enable(E) = 1`

<table>
    <thead>
        <tr>
            <th colspan="4"> Input </th>
            <th colspan="16"> Output </th>
        </tr>
        <tr>
            <th style="border-left: 1px solid #eeebee"> S3 </th>
            <th> S2 </th>
            <th> S1 </th>
            <th style="border-left: 1px solid #eeebee"> S0 </th>
            <th> Y15 </th>
            <th> Y14 </th>
            <th> Y13 </th>
            <th> Y12 </th>
            <th> Y11 </th>
            <th> Y10 </th>
            <th> Y9 </th>
            <th> Y8 </th>
            <th> Y7 </th>
            <th> Y6 </th>
            <th> Y5 </th>
            <th> Y4 </th>
            <th> Y3 </th>
            <th> Y2 </th>
            <th> Y1 </th>
            <th> Y0 </th>
        </tr>
    </thead>
    <tbody style="text-align: center">
        <tr>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 1 </td>
        </tr>
        <tr>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 1 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 1 </td>
            <td> 0 </td>
        </tr>
        <tr>
            <td> 0 </td>
            <td> 0 </td>
            <td> 1 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 1 </td>
            <td> 0 </td>
            <td> 0 </td>
        </tr>
        <tr>
            <td> 0 </td>
            <td> 0 </td>
            <td> 1 </td>
            <td> 1 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 1 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
        </tr>
        <tr>
            <td> 0 </td>
            <td> 1 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 1 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
        </tr>
        <tr>
            <td> 0 </td>
            <td> 1 </td>
            <td> 0 </td>
            <td> 1 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 1 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
        </tr>
        <tr>
            <td> 0 </td>
            <td> 1 </td>
            <td> 1 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 1 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
        </tr>
        <tr>
            <td> 0 </td>
            <td> 1 </td>
            <td> 1 </td>
            <td> 1 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 1 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
        </tr>
        <tr>
            <td> 1 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 1 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
        </tr>
        <tr>
            <td> 1 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 1 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 1 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
        </tr>
        <tr>
            <td> 1 </td>
            <td> 0 </td>
            <td> 1 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 1 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
        </tr>
        <tr>
            <td> 1 </td>
            <td> 0 </td>
            <td> 1 </td>
            <td> 1 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 1 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
        </tr>
        <tr>
            <td> 1 </td>
            <td> 1 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 1 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
        </tr>
        <tr>
            <td> 1 </td>
            <td> 1 </td>
            <td> 0 </td>
            <td> 1 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 1 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
        </tr>
        <tr>
            <td> 1 </td>
            <td> 1 </td>
            <td> 1 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 1 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
        </tr>
        <tr>
            <td> 1 </td>
            <td> 1 </td>
            <td> 1 </td>
            <td> 1 </td>
            <td> 1 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
        </tr>
    </tbody>
</table>

<iframe width="100%" height="400px" src="https://circuitverse.org/simulator/embed/44796" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>