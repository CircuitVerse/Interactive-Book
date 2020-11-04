---
layout: circuitverse
title: ROM-based µcontrollers
nav_order: l0s000
cvib_level: basic
parent: Sequential LSI
has_children: false
---


# ROM-based µcontrollers
{: .no_toc}


## Table of contents
{: .no_toc}

1. TOC
{:toc}


## Introduction

ROM-based µcontrollers take the simple approach of implementing the combinational logic block of any sequential circuit (both the next state decoder and the output decoder) in a ROM circuit, while latches and counters can be used to make a more efficient use of the ROM capacity. In some cases, additional combinational MUX components are used for the same reason.

The following are examples of different ROM-based µcontrollers


## Counter based µcontroller

![Counter based microcontroller](/assets/images/seq/rom_counter.svg)


## Preset counter based µcontroller

![Counter based microcontroller](/assets/images/seq/rom_preset_counter.svg)


## Mux based µcontroller


## Mux based µcontroller with subroutines enabled
