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



var bit_bool = new Array(2);
bit_bool[0] = false;
bit_bool[1] = false;
var image_cache1 = new Image();
image_cache1.src = "../assets/images/bulb_on.png";
var image_cache2 = new Image();
image_cache2.src = "../assets/images/switch_on.png";
var bit_display_bool = new Array(2);
var switch_display = new Array(2);
bit_display_bool[false] = "url(../assets/images/bulb_off.png)";
bit_display_bool[true] = "url(../assets/images/bulb_on.png)";
switch_display[false] = "url(../assets/images/switch_off.png)";
switch_display[true] = "url(../assets/images/switch_on.png)";

function toggle_switch(switch_no)
{
    document.getElementById(switch_no + "_bool").style.backgroundImage = switch_display[bit_bool[switch_no] = !bit_bool[switch_no]];
    show_result();
}

function show_result()
{
    if(document.getElementById("operator").value == "NOT")
    {
        document.getElementById("0_bool").style.backgroundImage = "none";
    }
    else
    {
        document.getElementById("0_bool").style.backgroundImage = switch_display[bit_bool[0]];
    }

    switch(document.getElementById("operator").value)
    {
        case "AND":
            document.getElementById("result").style.backgroundImage = bit_display_bool[bit_bool[0] && bit_bool[1]];
            break;
        case "OR":
            document.getElementById("result").style.backgroundImage = bit_display_bool[bit_bool[0] || bit_bool[1]];
            break;
        case "XOR":
            document.getElementById("result").style.backgroundImage = bit_display_bool[bit_bool[0] != bit_bool[1]];
            break;
        default:
            document.getElementById("result").style.backgroundImage = bit_display_bool[!bit_bool[1]];
    }
}

var bit_2 = new Array(4);
bit_2[0] = false;
bit_2[1] = false;
bit_2[2] = false;
bit_2[3] = false;
var bit_display_2 = new Array(2);
var switch_display_2 = new Array(4);
var image_cache1_2 = new Image();
image_cache1_2.src = "../assets/images/bulb_on.png";
var image_cache2_2 = new Image();
image_cache2_2.src = "../assets/images/dark_on.png";
var image_cache3_2 = new Image();
image_cache3_2.src = "../assets/images/burglar_on.png";
var image_cache4_2 = new Image();
image_cache4_2.src = "../assets/images/switch_on.png";
switch_display_2[0] = new Array(2);
switch_display_2[1] = new Array(2);
switch_display_2[2] = new Array(2);
switch_display_2[3] = new Array(2);
bit_display_2[false] = "url(../assets/images/bulb_off.png)";
bit_display_2[true] = "url(../assets/images/bulb_on.png)";
switch_display_2[0][false] = "url(../assets/images/dark_off.png)";
switch_display_2[0][true] = "url(../assets/images/dark_on.png)";
switch_display_2[1][false] = "url(../assets/images/burglar_off.png)";
switch_display_2[1][true] = "url(../assets/images/burglar_on.png)";
switch_display_2[2][false] = "url(../assets/images/switch_off.png)";
switch_display_2[2][true] = "url(../assets/images/switch_on.png)";
switch_display_2[3][false] = "url(../assets/images/switch_off.png)";
switch_display_2[3][true] = "url(../assets/images/switch_on.png)";


function toggle_switch_2(switch_no)
{
    document.getElementById(switch_no).style.backgroundImage = switch_display[switch_no][bit_2[switch_no] = !bit_2[switch_no]];
    if(switch_no < 2) { show_result_2(1); } else { show_result_2(2); }
}

function show_result_2(circuit_no)
{
    if(circuit_no == 1) { var a = 0, b = 1; } else { var a = 2, b = 3; }

    switch(document.getElementById("R"+circuit_no).value)
    {
        case "AND":
            document.getElementById("result"+circuit_no).style.backgroundImage = bit_display_2[bit[a] && bit_2[b]];
            break;
        case "OR":
            document.getElementById("result"+circuit_no).style.backgroundImage = bit_display_2[bit[a] || bit_2[b]];
            break;
        case "NAND":
            document.getElementById("result"+circuit_no).style.backgroundImage = bit_display_2[!(bit[a] && bit_2[b])];
            break;
        case "NOR":
            document.getElementById("result"+circuit_no).style.backgroundImage = bit_display_2[!(bit[a] || bit_2[b])];
            break;
        case "XOR":
            document.getElementById("result"+circuit_no).style.backgroundImage = bit_display_2[bit[a] != bit_2[b]];
            break;
        case "NXOR":
            document.getElementById("result"+circuit_no).style.backgroundImage = bit_display_2[!(bit[a] != bit_2[b])];
            break;
        default:
            document.getElementById("result"+circuit_no).style.backgroundImage = bit_display_2[false];
    }
}


function receive_drop(e)
{
    if(e.target.tagName == "IMG") { var drop_area = e.target.parentNode.id; } else { var drop_area = e.target.id; }
    var answer_area = "R" + drop_area.substring(1);
    e.preventDefault();
    if(e.dataTransfer.getData('Text') != null && e.dataTransfer.getData('Text').substring(0,4) != "http")
    {
        document.getElementById(drop_area).innerHTML = e.dataTransfer.getData('Text');
        document.getElementById(answer_area).value = image.getAttribute('alt');
    }
    e.cancelBubble = true;
    show_result_2(1);
    show_result_2(2);
    return false;
}

function clicked(e)
{
    if(e.target.tagName == "IMG") { var drop_area = e.target.parentNode.id; } else { var drop_area = e.target.id; }
    var answer_area = "R" + drop_area.substring(1);
    e.preventDefault();
    if(document.getElementById("clipboard").innerHTML > "")
    {
        document.getElementById(drop_area).innerHTML = document.getElementById("clipboard").innerHTML;
        document.getElementById(answer_area).value = answer;
        document.getElementById("clipboard").innerHTML = "";
    }
    e.cancelBubble = true;
    show_result_2(1);
    show_result_2(2);
    return false;
}

function cancelEvent() { return false; }

var image, copied, answer;
disableSelection(document.body);

var drops = document.getElementsByClassName('drop'), i = drops.length;
while(i--) {
    drops[i].ondragenter = cancelEvent;
    drops[i].ondragover = cancelEvent;
    drops[i].ondrop = function (event) { receive_drop(event || window.event); };
    drops[i].ondragover = function () { return false; };
    drops[i].onclick = function (event) { clicked(event || window.event); };
}

var imgs = document.getElementsByClassName('tile');
i = imgs.length;
while(i--) {
    imgs[i].ondragstart = function (event) {
        event = event || window.event;
        event.dataTransfer.setData('Text', '<img src="'+this.src+'">');
        image = this;
    }
    imgs[i].onclick = function (event) {
        event = event || window.event;
        document.getElementById("clipboard").innerHTML = '<img src="'+this.src+'">';
        copied = this;
        answer = this.getAttribute('alt');
    }
}


