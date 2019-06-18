var bit1 = new Array(8);
var bit1_display = new Array(2);
bit1_display[false] = "0";
bit1_display[true] = "1";

function toggle_bitc(column)
{
    var decimal1 = 0;
    document.getElementById(column+"c").innerHTML = bit1_display[bit1[column] = !bit1[column]];
    for(var i=0; i < 8; i++)
    {
        if(bit1[i]) { decimal1 = decimal1 + Math.pow(2, i); }
    }
    document.getElementById("decimal1").innerHTML = " = " + decimal1;
}




var bit = new Array(16);
var bit_display = new Array(2);
bit_display[false] = "0";
bit_display[true] = "1";

function set_bits()
{
    if(isNaN(document.getElementById("value_A").value) || document.getElementById("value_A").value > 255 || document.getElementById("value_A").value < 0 || isNaN(document.getElementById("value_B").value) || document.getElementById("value_B").value < 0 || document.getElementById("value_B").value > 255)
    {
        alert("Only numbers between 0 and 255 can be entered.");
    }
    else
    {
        for(var i=0; i < 8; i++)
        {
            if((document.getElementById("value_A").value&Math.pow(2,i))>0) { bit_value = true; } else { bit_value = false; }
            document.getElementById(i).innerHTML = bit_display[bit[i] = bit_value];
            if((document.getElementById("value_B").value&Math.pow(2,i))>0) { bit_value = true; } else { bit_value = false; }
            document.getElementById(i+8).innerHTML = bit_display[bit[i+8] = bit_value];
        }
        do_bitwise();
    }
}

function toggle_bit(column)
{
    var decimal = 0;
    document.getElementById(column).innerHTML = bit_display[bit[column] = !bit[column]];
    for(var i=0; i < 16; i++)
    {
        if(bit[i]) { decimal = decimal + Math.pow(2, i); }
    }
    document.getElementById("value_A").value = decimal&255;
    document.getElementById("value_B").value = Math.floor(decimal/256);
    do_bitwise();
}

function change_operator()
{
    var ops = document.getElementsByClassName("opcol");
    for (var i=0; i < ops.length; i++)
    {
        ops[i].innerHTML = document.getElementById("operator").value;
    }
    do_bitwise();
}

function do_bitwise()
{
    var decimal = 0;
    var bit_value;

    for(var i=0; i < 8; i++)
    {
        switch(document.getElementById("operator").value)
        {
            case "AND":
                bit_value = bit[i]&bit[i+8];
                break;
            case "OR":
                bit_value = bit[i]|bit[i+8];
                break;
            default:
                bit_value = (bit[i]!=bit[i+8]);
        }

        document.getElementById(i+16).innerHTML = bit_display[bit_value==true];
        if(bit_value) { decimal = decimal + Math.pow(2, i); }
    }
    document.getElementById("result").innerHTML = " = " + decimal;
}

function disableSelection(target)
{
    if(typeof target.onselectstart!="undefined") //IE route
        target.onselectstart=function(){return false;}
    else if(typeof target.style.MozUserSelect!="undefined") //Firefox route
        target.style.MozUserSelect="none";
    else //All other route (ie: Opera)
        target.onmousedown=function(){return false;}
    target.style.cursor = "default";
}

var bit_bool = new Array(2);
bit_bool[0] = false;
bit_bool[1] = false;
var image_cache1 = new Image();
image_cache1.src = "../../assets/images/bulb_on.png";
var image_cache2 = new Image();
image_cache2.src = "../../assets/images/switch_on.png";
var bit_display_bool = new Array(2);
var switch_display = new Array(2);
bit_display_bool[false] = "url(../../assets/images/bulb_off.png)";
bit_display_bool[true] = "url(../../assets/images/bulb_on.png)";
switch_display[false] = "url(../../assets/images/switch_off.png)";
switch_display[true] = "url(../../assets/images/switch_on.png)";

function toggle_switch(switch_no)
{
    document.getElementById(switch_no+"_bool").style.backgroundImage = switch_display[bit_bool[switch_no+"_bool"] = !bit_bool[switch_no+"_bool"]];
    +
    show_result();
}



function show_result()
{
    if(document.getElementById("operator").value == "NOT")
    {
        document.getElementById("0").style.backgroundImage = "none";
    }
    else
    {
        document.getElementById("0").style.backgroundImage = switch_display[bit_bool[0]];
    }

    switch(document.getElementById("operator").value)
    {
        case "AND":
            document.getElementById("result").style.backgroundImage = bit_display_bool[bit_bool[0] && bit_bool[1]];
            break;
        case "OR":
            document.getElementById("result").style.backgroundImage = bit_display_bool[bit_bool[0] || bit_bool[1]];
            break;
        case "EOR":
            document.getElementById("result").style.backgroundImage = bit_display_bool[bit_bool[0] != bit_bool[1]];
            break;
        default:
            document.getElementById("result").style.backgroundImage = bit_display_bool[!bit_bool[1]];
    }
}



function disableSelection(target)
{
    if(typeof target.onselectstart!="undefined") //IE route
        target.onselectstart=function(){return false;}
    else if(typeof target.style.MozUserSelect!="undefined") //Firefox route
        target.style.MozUserSelect="none";
    else //All other route (ie: Opera)
        target.onmousedown=function(){return false;}
    target.style.cursor = "default";
}
