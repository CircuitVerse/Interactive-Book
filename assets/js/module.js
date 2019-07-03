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


function build() {
    let i, j;
    let placeholder = document.getElementById("table-placeholder");
    let text = (document.getElementById("expression")).value;
    if (text == "") {
        placeholder.innerHTML = "<div></div>";
        return;
    }
    if (text.match(/[^ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01+'() ]/g) != null) {
        placeholder.innerHTML = "<p>One of the characters is not allowed.</p>";
        return;
    }
    text = text.replace(/ /g, '');
    text = text.toUpperCase();
    while (numOf(text, '(') > numOf(text, ')'))
        text += ")";
    let variables = [];
    for (i = 0; i < text.length; i++) {
        if ((text[i] >= 'A' && text[i] <= 'Z')) {
            if (text.indexOf(text[i]) == i) {
                variables.push(text[i]);
            }
        }
    }
    variables.sort();
    if (variables.length > 8) {
        placeholder.innerHTML = "<p>You can only have 8 variables at a time.</p>";
        return;
    }
    let string = "<tr><th style=\"letter-spacing: 0; padding: initial;\">minterm</th>";
    for (i = 0; i < variables.length; i++) {
        string += "<th>" + variables[i] + "</th>";
    }
    string += "<th>" + text + "</th></tr>";
    for (i = 0; i < Math.pow(2, variables.length); i++) {
        string += "<tr><td style=\"letter-spacing: 0; padding: initial;\">"+i.toString()+"</td>";
        let data = [];
        for (j = 0; j < variables.length; j++) {
            data[j] = Math.floor(i / Math.pow(2, variables.length - j - 1)) % 2;
            string += "<td>" + data[j] + "</td>";
        }
        let equation = text;
        for (j = 0; j < variables.length; j++) {
            equation = equation.replace(new RegExp(variables[j], 'g'), data[j]);
        }
        string += "<td>" + solve(equation) + "</td></tr>";
    }
    string = "<table align='center' id>" + string + "</table>";
    if (string.indexOf("<td></td>") == -1)
        placeholder.innerHTML = string;
    else
        placeholder.innerHTML = "<p>Invalid expression.</p>";

    function numOf(text, search) {
        let count = 0;
        for (let i = 0; i < text.length; i++)
            if (text[i] == search)
                count++;
        return count;
    }

    function solve(equation) {
        while (equation.indexOf("(") != -1) {
            let start = equation.lastIndexOf("(");
            let end = equation.indexOf(")", start);
            if (start != -1)
                equation = equation.substring(0, start)
                    + solve(equation.substring(start + 1, end))
                    + equation.substring(end + 1);
        }
        equation = equation.replace(/''/g, '');
        equation = equation.replace(/0'/g, '1');
        equation = equation.replace(/1'/g, '0');
        for (let i = 0; i < equation.length - 1; i++)
            if ((equation[i] == '0' || equation[i] == '1') && (equation[i + 1] == '0' || equation[i + 1] == '1'))
                equation = equation.substring(0, i + 1) + '*' + equation.substring(i + 1, equation.length);
        try {
            let safeEval = eval;
            let answer = safeEval(equation);
            if (answer == 0)
                return 0;
            if (answer > 0)
                return 1;
            return '';
        } catch (e) {
            return '';
        }
    }
}


var subject_name = new Array("English", "Maths", "Science", "Computing", "History", "Geography", "French", "German");

function decode()
{
    if(isNaN(document.getElementById("homework").value) | document.getElementById("homework").value < 0 | document.getElementById("homework").value > 255)
    {
        alert("The code must be a number between 0 and 255");
    }
    else
    {
        var subject_text;
        if(document.getElementById("homework").value == 0)
        {
            subject_text = "<p>There is no homework today.</p>";
        }
        else
        {
            subject_text = "<p>Today's homework:</p><ul>";
            for(var i = 0; i<=78; i++)
            {
                if(document.getElementById("homework").value & Math.pow(2, i)) { subject_text = subject_text + "<li>" + subject_name[i] + "</li>"; }
            }
            subject_text = subject_text + "</ul>";
        }
        document.getElementById("subjects").innerHTML = subject_text;
    }
}

function update_display()
{
    var values = document.querySelectorAll('input[type="text_2"]');
    var pixels = document.querySelectorAll('.pixel');

    for(var i = 0; i<64; i+=8)
    {
        if(isNaN(values[i/8].value) || values[i/8].value > 255 || values[i/8].value < 0)
        {
            alert("Only enter numbers between 0 and 255.");
            values[i/8].select();
        }
        else
        {
            for(var n = 0; n<8; n++)
            {
                if(values[i/8].value & Math.pow(2,n))
                {
                    pixels[i+(7-n)].style.backgroundColor = "#404040";
                }
                else
                {
                    pixels[i+(7-n)].style.backgroundColor = "#F0F0F0";
                }
            }
        }
    }
}
