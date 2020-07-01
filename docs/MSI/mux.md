---
layout: default
title: Multiplexers
parent: MSI components
nav_order: 1
---

# Multiplexers
{: .no_toc }

1. TOC
{:toc}

## Introduction

Multiplexer is a special type of combinational circuit. 
There are n-data inputs, one output and m select inputs with 2<sup>m</sup> = n. 
It is a digital circuit which selects one of the n data inputs and routes it to the output. 
The selection of one of the n inputs is done by the selected inputs. Depending on the digital code applied at the selected inputs, one out of n data sources is selected and transmitted to the single output Y. 
E is called the strobe or enable input which is useful for the cascading. It is generally an active low terminal that means it will perform the required operation when it is low.


## Block diagram

<div style="text-align:center"><img src="../../assets/images/n_onemultiplexer_blockdiagram.jpg" /></div>

## Multiplexers come in multiple variations
   
### 2 : 1 multiplexer
#### Truth Table
{: .no_toc }

`Enable(E) = 1`

|S1|Y(Output)|
|:-:|:-:|:-:|
|0|T1|
|1|T2|

<iframe width="100%" height="400px" src="https://circuitverse.org/simulator/embed/746" id="mux_01" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

### Verilog Code for 2:1 Mux

~~~Verilog

module mux2X1( in0,in1,sel,out);
input  in0,in1, sel;
output reg out;
always @(*)
   begin
     if(sel) 
       out= in1;
     else
        out=in0;
   end
endmodule
~~~

### 4 : 1 multiplexer
The 4 : 1 multiplexer has 4 inputs and 2 control signals.

#### Truth Table
{: .no_toc }

`Enable(E) = 1`

|S1|S2|Y(Output)|
|:-:|:-:|:-:|
|0|0|T1|
|0|1|T2|
|1|0|T3|
|1|1|T4|

<iframe width="100%"  height="400px" src="https://circuitverse.org/simulator/embed/44747" id="mux_02" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

### Verilog Code for 4:1 Mux

~~~Verilog
module mux4X1( in,sel,out);
input [3:0]in;
input [1:0]sel;
output reg out;
 
always @(*)
	begin
		case(sel)
			2'b00: out=in[0];
			2'b01: out=in[1];
			2'b10: out=in[2];
			2'b11: out=in[3];
			default: out=1'b0;
		endcase
	end
endmodule
~~~

### 8 : 1 multiplexer
The 8 : 1 multiplexer has 8 inputs and 3 control signals.

#### Truth Table
{: .no_toc }

`Enable(E) = 1`

| S1      | S2      | S3     | Y(Output)|
|:-------:|:-------:|:------:|:------:|
| 0       | 0       | 1      |T1       |
| 0       | 1       | 0      |T2       |
| 0       | 1       | 1      |T3      |
| 0       | 1       | 1      |T4      |
| 1       | 0       | 1      |T5      |
| 1       | 1       | 0      |T6      |
| 1       | 1       | 1      |T7      |
| 1       | 1       | 1      |T8      |

<iframe width="100%"  height="400px" src="https://circuitverse.org/simulator/embed/44766" id="mux_03" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

### Verilog Code for 8:1 Mux
~~~Verilog
module mux_3x8(in,out,sel);
 
input [7:0]in;
input [2:0]sel;
output out;
 
reg out;
wire [2:0]sel;
wire [7:0]in;
 
always @(sel or in)
begin
 
if (sel==0)
out = in[0];
if (sel==1)
out = in[1];
if (sel==2)
out = in[2];
if (sel==3)
out = in[3];
if (sel==4)
out = in[4];
if (sel==5)
out = in[5];
if (sel==6)
out = in[6];
if (sel==7)
out = in[7];
end
 
endmodule
~~~

You can implement a 8 : 1 multiplexer by chaining **two** 4 : 1 multiplexers, like this:
<iframe width="100%" height="400px" src="https://circuitverse.org/simulator/embed/44784" id="mux_04" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

~~~ Verilog
module mux8to1(a,sel,out);
	input [7:0] a;
	input [2:0] sel;
	output out;

	wire mux[2:0];

	mux4to1 m1 (a[7:4],sel[1:0],mux_1),
	        m2 (a[3:0],sel[1:0],mux_2);
	mux2to1 m3 (mux_1,mux_2,sel[2],out);
endmodule
~~~

### 16 : 1 multiplexer
The 16 : 1 multiplexer has 16 inputs and 4 control signals.

It can be implemented with **two** 8 : 1 multiplexers:

#### Truth Table
{: .no_toc }

`Enable(E) = 1`

| A | B | C | D | Y(Output) |
|:-:|:-:|:-:|:-:|:-: |
| 0 | 0 | 0 | 0 | T1  |
| 0 | 0 | 0 | 1 | T2  |
| 0 | 0 | 1 | 0 | T3  |
| 0 | 0 | 1 | 1 | T4  |
| 0 | 1 | 0 | 0 | T5  |
| 0 | 1 | 0 | 1 | T6  |
| 0 | 1 | 1 | 0 | T7  |
| 0 | 1 | 1 | 1 | T8  |
| 1 | 0 | 0 | 0 | T9  |
| 1 | 0 | 0 | 1 | T10 |
| 1 | 0 | 1 | 0 | T11 |
| 1 | 0 | 1 | 1 | T12 |
| 1 | 1 | 0 | 0 | T13 |
| 1 | 1 | 0 | 1 | T14 |
| 1 | 1 | 1 | 0 | T15 |
| 1 | 1 | 1 | 1 | T16 |

<iframe width="100%" height="400px" src="https://circuitverse.org/simulator/embed/44795" id="mux_05" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

~~~Verilog
module mux16_1_u_mux8_1(input_d0,
        input_d1,
        input_d2,
        input_d3,
        input_d4,
        input_d5,
        input_d6,
        input_d7,
        input_d8,
        input_d9,
        input_d10,
        input_d11,
        input_d12,
        input_d13,
        input_d14,
        input_d15,
        sel_0,
        sel_1,
        sel_2,
        sel_3,
        output_y);
        
  // INPUTS
    input  input_d0;
    input  input_d1;
    input  input_d2;
    input  input_d3;
    input  input_d4;
    input  input_d5;
    input  input_d6;
    input  input_d7;
    input  input_d8;
    input  input_d9;
    input  input_d10;
    input  input_d11;
    input  input_d12;
    input  input_d13;
    input  input_d14;
    input  input_d15;
    input  sel_0;
    input  sel_1;
    input  sel_2;
    input  sel_3;
 
 
  // OUTPUT
    output output_y;
   
    wire   [1:0] mux_con_out;

  //  16:1 Multiplexer using 8:1 mux and 2:1 mux
 
  // 8:1 MUX  Instantiation Template
  mux8_1_code U_MUX8_1_1 (
    .input_d0(input_d0),
    .input_d1(input_d1),
    .input_d2(input_d2),
    .input_d3(input_d3),
    .input_d4(input_d4),
    .input_d5(input_d5),
    .input_d6(input_d6),
    .input_d7(input_d7),
    .sel_0(sel_0),
    .sel_1(sel_1),
    .sel_2(sel_2),
    .output_y(mux_con_out[0])
    );
 
 mux8_1_code U_MUX8_1_2 (
    .input_d0(input_d8),
    .input_d1(input_d9),
    .input_d2(input_d10),
    .input_d3(input_d11),
    .input_d4(input_d12),
    .input_d5(input_d13),
    .input_d6(input_d14),
    .input_d7(input_d15),
    .sel_0(sel_0),
    .sel_1(sel_1),
    .sel_2(sel_2),
    .output_y(mux_con_out[1])
    );
 
  // 2:1 MUX Instantiation Template
    mux2_1_code U_mux2_1_1 (
    .input_a(mux_con_out[0]),
    .input_b(mux_con_out[1]),
    .sel_0(sel_3),
    .output_y(output_y)
    );

endmodule
~~~

It can also be implemented with **five** 4 : 1 multiplexers:
<iframe width="100%" height="400px" src="https://circuitverse.org/simulator/embed/44804" id="mux_06" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

