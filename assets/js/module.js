var bit1 = new Array(8);
var bit1_display = new Array(2);
bit1_display[false] = "0";
bit1_display[true] = "1";
var operator = "OR";

function toggle_bitc(column)
{
    var decimal1 = 0;
    document.getElementById(column+"c").innerHTML = bit1_display[bit1[column] = !bit1[column]];
    for(var i=0; i < 8; i++)
    {
        if(bit1[i]) { decimal1 = decimal1 + Math.pow(2, i); }
    }
    document.getElementById("decimal1").innerHTML = decimal1;
}

var bit = new Array(16);
var bit_display = new Array(2);
bit_display[false] = "0";
bit_display[true] = "1";
bit.fill(false);

function set_bits()
{
    if(isNaN(document.getElementById("value_A").value) || document.getElementById("value_A").value > 255 || document.getElementById("value_A").value < 0 || isNaN(document.getElementById("value_B").value) || document.getElementById("value_B").value < 0 || document.getElementById("value_B").value > 255)
    {
        document.getElementById("value_A").value = 0;
        document.getElementById("value_B").value = 0;
        alert("Only numbers between 0 and 255 can be entered.");
        set_bits();
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
    do_bitwise(operator);
}

function change_operator(oper, ind)
{
    var tab =  document.querySelectorAll( '.oper' );
    for(var i=0; i<tab.length; i++){
        if(tab[i].classList.contains('active_oper')){
            tab[i].classList.remove('active_oper');
        }
    }
    tab[ind].classList.add('active_oper');
    document.getElementsByClassName('active_operation')[0].innerHTML = oper;
    operator = oper;
    do_bitwise(operator);
}

function do_bitwise(operator)
{
    var decimal = 0;
    var bit_value;
    
    for(var i=0; i < 8; i++)
    {
        switch(operator)
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
    document.getElementById("result").innerHTML = decimal;
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
bit_display_bool[false] = "url(/assets/images/bulb_off.png)";
bit_display_bool[true] = "url(/assets/images/bulb_on.png)";
switch_display[false] = "url(/assets/images/switch_off.png)";
switch_display[true] = "url(/assets/images/switch_on.png)";

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
            document.getElementById("operator").style.backgroundImage = "url('/assets/images/AND_gate.png')";
            document.getElementById("result").style.backgroundImage = bit_display_bool[bit_bool[0] && bit_bool[1]];
            break;
        case "OR":
            document.getElementById("operator").style.backgroundImage = "url('/assets/images/OR_gate.png')";
            document.getElementById("result").style.backgroundImage = bit_display_bool[bit_bool[0] || bit_bool[1]];
            break;
        case "XOR":
            document.getElementById("operator").style.backgroundImage = "url('/assets/images/EOR_gate.png')";
            document.getElementById("result").style.backgroundImage = bit_display_bool[bit_bool[0] != bit_bool[1]];
            break;
        default:
            document.getElementById("operator").style.backgroundImage = "url('/assets/images/NOT_gate.png')";
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
    let string = "<thead><tr><th style=\"letter-spacing: 0; padding: initial;\">minterm</th>";
    for (i = 0; i < variables.length; i++) {
        string += "<th>" + variables[i] + "</th>";
    }
    string += "<th>" + text + "</th></tr></thead><tbody>";
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
    string = "<table align='center' id='truth_generator'>" + string + "</tbody></table>";
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
        document.getElementById("subjects").style.height = "auto";
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


function PetrickMethod()
{
    this.problem;
    this.maxProblemSize = 100;
    this.solution;
    this.log = "";
    var that = this;

    this.test = function() {
        var andArray = new Array();
        var orArray;
        var monomA;
        var monomB;
        orArray = new Array();
        monomA = new Object(); // using objects ensures that (x and x) = x
        monomA[1] = 1;
        orArray.push(monomA);
        monomB = new Object();
        monomB[2] = 2;
        orArray.push(monomB);
        andArray.push(orArray);
        orArray = new Array();
        monomA = new Object();
        monomA[3] = 3;
        orArray.push(monomA);
        monomB = new Object();
        monomB[4] = 4;
        orArray.push(monomB);
        andArray.push(orArray);
        orArray = new Array();
        monomA = new Object();
        monomA[1] = 1;
        orArray.push(monomA);
        monomB = new Object();
        monomB[3] = 3;
        orArray.push(monomB);
        andArray.push(orArray);
        orArray = new Array();
        monomA = new Object();
        monomA[5] = 5;
        orArray.push(monomA);
        monomB = new Object();
        monomB[6] = 6;
        orArray.push(monomB);
        andArray.push(orArray);
        orArray = new Array();
        monomA = new Object();
        monomA[2] = 2;
        orArray.push(monomA);
        monomB = new Object();
        monomB[5] = 5;
        orArray.push(monomB);
        andArray.push(orArray);
        orArray = new Array();
        monomA = new Object();
        monomA[4] = 4;
        orArray.push(monomA);
        monomB = new Object();
        monomB[6] = 6;
        orArray.push(monomB);
        andArray.push(orArray);
        /*orArray = new Array();
         monomA = new Object();
         monomA[4] = 4;
         orArray.push(monomA);
         monomB = new Object();
         monomB[4] = 4;
         orArray.push(monomB);
         andArray.push(orArray);*/

        this.solve(andArray);
    };

    this.solve = function(eq) {

        this.problem = eq;
        this.log = "";

        //printEqnArray(eq);
        printEqnArrayFancy(eq);

        // multiply out
        var andArray = eq;
        var loopCounter = 0;
        while (andArray.length > 1) {
            var newAndArray = new Array();
            for (var i = 1; i < andArray.length; i += 2) {

                var orTermA = andArray[i - 1];
                var orTermB = andArray[i];
                var newOrArray = new Array();
                for (var a = 0; a < orTermA.length; a++) {
                    for (var b = 0; b < orTermB.length; b++) {
                        var monom1 = orTermA[a];
                        var monom2 = orTermB[b];
                        var resultingMonom = new Object();
                        for (var m in monom1) {
                            resultingMonom[monom1[m]] = monom1[m];
                        }
                        for (var n in monom2) {
                            resultingMonom[monom2[n]] = monom2[n];
                        }
                        newOrArray.push(resultingMonom);
                    }
                }

                newAndArray.push(newOrArray);
            }
            // if uneven copy last and-term
            if (andArray.length % 2 === 1) {
                newAndArray.push(andArray[andArray.length - 1]);
            }
            //printEqnArray(newAndArray);
            printEqnArrayFancy(newAndArray);

            andArray.length = 0;
            // simplify or-term
            for (var i = 0; i < newAndArray.length; i++) {
                var orTerm = newAndArray[i];
                var newOrTerm = simplifyOrTerm(orTerm);
                if (newOrTerm.length > 0) {
                    andArray.push(newOrTerm);
                }
            }

            var problemSize = eqnArrayProblemSize(andArray);
            if (problemSize > this.maxProblemSize) {
                console.log("Error: The cyclic covering problem is too large to be solved with Petrick's method (increase maxProblemSize). Size=" + problemSize);
                return false;
            }

            //printEqnArray(andArray);
            printEqnArrayFancy(andArray);
            loopCounter++;
        }
        this.solution = andArray;
        return true;
    };

    function simplifyOrTerm(orTerm) {
        // find a monom that is the same or simpler than another one
        var newOrTerm = new Array();
        var markedForDeletion = new Object();
        for (var a = 0; a < orTerm.length; a++) {
            var keepA = true;
            var monomA = orTerm[a];
            for (var b = a + 1; b < orTerm.length && keepA; b++) {
                var monomB = orTerm[b];
                var overlapBoverA = 0;
                var lengthA = 0;
                for (var m in monomA) {
                    if (monomB[m] in monomA) {
                        overlapBoverA++;
                    }
                    lengthA++;
                }

                var overlapAoverB = 0;
                var lengthB = 0;
                for (var m in monomB) {
                    if (monomA[m] in monomB) {
                        overlapAoverB++;
                    }
                    lengthB++;
                }

                if (overlapBoverA === lengthB) {
                    keepA = false;
                }

                if (lengthA < lengthB && overlapAoverB === lengthA) {
                    markedForDeletion[b] = b;
                }

            }
            if (keepA) {
                if (a in markedForDeletion) {
                    // do nothing
                } else
                    newOrTerm.push(orTerm[a]);
            }
        }
        return newOrTerm;
    }


    function printEqnArrayFancy(andArray) {
        var str = "";
        for (var i = 0; i < andArray.length; i++) {
            var first = true;
            str += "(";
            var orArray = andArray[i];
            for (var j = 0; j < orArray.length; j++) {
                if (!first)
                    str += " &or; ";
                var monom = orArray[j];
                for (var k in monom) {
                    str += "<i>p</i><sub><small>"+ monom[k] + "</small></sub>";
                }
                first = false;
            }
            str += ")";
        }
        if(that.log.length > 0) {
            that.log += "<p>&hArr;&nbsp;" + str + "</p>";
        }else{
            that.log += "<p>"+ str + "</p>";
        }
    }

    function eqnArrayProblemSize(andArray) {
        var monomCounter = 0;
        for (var i = 0; i < andArray.length; i++) {
            var orArray = andArray[i];
            monomCounter += orArray.length;
        }
        return monomCounter;
    }


    function printEqnArray(andArray) {
        var str = "";
        for (var i = 0; i < andArray.length; i++) {
            var first = true;
            str += "(";
            var orArray = andArray[i];
            for (var j = 0; j < orArray.length; j++) {
                if (!first)
                    str += " or ";
                var monom = orArray[j];
                for (var k in monom) {
                    str += monom[k];
                }
                first = false;
            }
            str += ")";
        }
        console.log(str);
    }

}

function PrimTerm() {
    this.implicant = -1;
    this.termString = "";
    this.color = [0, 0, 0];
    this.coloredTermString = "";
    this.used = false;
    this.neededByVar = new Object;
}

function Implicant() {
    this.imp = new Object();
    this.isPrim = false;
    this.isOnlyDontCare = false;
    this.bitMask = 0;
}

function ImplicantGroup() {
    this.group = new Array;
    this.order = -1;
}

function PrimTermTable(ord) {
    this.essentialPrimTerms = new Array();
    this.order = ord;
    this.remainingVars =  new Array();;
    this.remainingPrimTerms =  new Array();
    this.supersededPrimTerms =  new Array();
}

function hsvToRgb(h, s, v) {

    var r, g, b;
    var i = Math.floor(h * 6);
    var f = h * 6 - i;
    var p = v * (1 - s);
    var q = v * (1 - f * s);
    var t = v * (1 - (1 - f) * s);

    switch (i % 6) {
        case 0:
            r = v, g = t, b = p;
            break;
        case 1:
            r = q, g = v, b = p;
            break;
        case 2:
            r = p, g = v, b = t;
            break;
        case 3:
            r = p, g = q, b = v;
            break;
        case 4:
            r = t, g = p, b = v;
            break;
        case 5:
            r = v, g = p, b = q;
            break;
    }

    return [ Math.floor(r * 255), Math.floor(g * 255), Math.floor(b * 255) ];
}

function QuineMcCluskeyDataCtrl() {
    this.noOfVars = -1;
    this.funcdata = new Array;
    this.primTerms = new Array;
    this.implicantGroups = new Array;
    this.minimalTerm = "";
    this.coloredMinimalTerm = "";
    this.minimalTermPrims = new Array;
    this.primTermTables = new Array;
    this.petrickSolver = new PetrickMethod();
    this.petrickTermPrims = new Array;
    this.allowDontCare = false;

    this.init = function(no) {
        this.noOfVars = no;
        this.funcdata.length = 0;
        this.primTerms.length = 0;
        this.implicantGroups.length = 0;
        this.minimalTerm = "0";
        this.coloredMinimalTerm = "0";
        this.minimalTermPrims.length = 0;
        this.primTermTables.length = 0;
        this.petrickTermPrims.length = 0;

        var noOfFuncData = Math.pow(2, this.noOfVars);
        for (var i = 0; i < noOfFuncData; i++) {
            this.funcdata.push(0);
        }

        //this.petrickSolver.test();

    };

    this.setFuncData = function(i, val) {
        if (i < 0 || i >= this.funcdata.length)
            return;
        this.funcdata[i] = val;
    };

    this.activated = function(i) {
        if (i < 0 || i >= this.funcdata.length)
            return;

        this.funcdata[i] += 1;
        if(this.allowDontCare) {
            if (this.funcdata[i] > 2) this.funcdata[i] = 0;
        }else{
            if (this.funcdata[i] > 1) this.funcdata[i] = 0;
        }
        this.compute();
    };

    this.random = function() {
        for (var i = 0; i < this.funcdata.length; i++) {
            if(this.allowDontCare) {
                this.funcdata[i] = Math.floor(Math.random() * 3);
            }else{
                this.funcdata[i] = Math.floor(Math.random() * 2);
            }
        }
        this.compute();
    };

    this.clear = function() {
        for (var i = 0; i < this.funcdata.length; i++) {
            this.funcdata[i] = 0;
        }
        this.compute();
    };

    function bitCount(value) {
        var counter = 0;
        while (value > 0) {
            if ((value & 1) === 1) counter++;
            value >>= 1;
        }
        return counter;
    }

    this.compute = function() {
        this.primTerms.length = 0;
        this.implicantGroups.length = 0;
        this.minimalTerm = "0";
        this.coloredMinimalTerm = "0";
        this.minimalTermPrims.length = 0;
        this.primTermTables.length = 0;
        this.petrickTermPrims.length = 0;

        var counter = 0;
        var lastIg = -1;
        var continueLoop = true;
        while(continueLoop) {

            continueLoop = false;
            var ig = new ImplicantGroup();

            if(counter === 0) {
                for (var i = 0; i < this.funcdata.length; i++) {
                    if(this.funcdata[i] > 0) {
                        var impl = new Implicant();
                        impl.imp[i] = i;
                        impl.isPrim = true;
                        ig.group.push(impl);
                        continueLoop = true;
                    }
                }
            }else{

                for (var i = 0; i < lastIg.group.length; i++) {
                    for (var j = i+1; j < lastIg.group.length; j++) {
                        var imp1 = lastIg.group[i];
                        var imp2 = lastIg.group[j];

                        if (imp1.bitMask === imp2.bitMask) {

                            var found = false;
                            var xor = -1;
                            for (var m in imp1.imp) {
                                for (var n in imp2.imp) {
                                    var i1 = imp1.imp[m];
                                    var i2 = imp2.imp[n];
                                    //console.log(i1 + "<->" + i2);
                                    xor = (i1 ^ i2) & (~imp1.bitMask);
                                    if (bitCount(xor) === 1) {
                                        //console.log("found merge candidate" + i1 + "<->" + i2);
                                        found = true;
                                    }
                                    break;
                                }
                                break;
                            }
                            if (found) {
                                imp1.isPrim = false;
                                imp2.isPrim = false;

                                var impl = new Implicant();
                                impl.isPrim = true;
                                impl.bitMask = imp1.bitMask | xor;
                                for (var m in imp1.imp)
                                    impl.imp[m] = parseInt(m);
                                for (var n in imp2.imp)
                                    impl.imp[n] = parseInt(n);

                                var foundMatch = false; // determine if this combination is already there
                                for(var k=0; k < ig.group.length; k++) {
                                    var exist = ig.group[k];
                                    var isTheSame = true;
                                    for(var m in impl.imp) {
                                        var found = false;
                                        for (var n in exist.imp) {
                                            if(parseInt(m) === parseInt(n)) {
                                                found = true;
                                            }
                                        }
                                        if(!found) {
                                            isTheSame = false;
                                            break;
                                        }
                                    }
                                    if(isTheSame) {
                                        foundMatch = true;
                                        break;
                                    }
                                }
                                if(!foundMatch) {
                                    ig.group.push(impl);
                                    continueLoop = true;
                                }
                            }
                        }
                    }
                }
            }

            if(continueLoop) this.implicantGroups.push(ig);
            lastIg = ig;
            counter++;
        }

        // collect primterms
        this.primTerms.length = 0;
        this.minimalTermPrims.length = 0;
        var color = 0.0;
        for(var i= this.implicantGroups.length-1; i >=0; i--) {
            var g = this.implicantGroups[i].group;

            for(var j=0; j < g.length; j++) {
                if(g[j].isPrim) {

                    // prim terms introduced by don't cares
                    // must have at least one 1
                    var containsOne = false;
                    var allFuncPrimTerm = g[j].imp;
                    for(var kk in allFuncPrimTerm) {
                        var k = allFuncPrimTerm[kk];
                        if(this.funcdata[k] === 1) {
                            containsOne = true;
                        }
                    }

                    if(!containsOne){
                        g[j].isOnlyDontCare = true;
                    } else {
                        var primTerm = new PrimTerm();
                        primTerm.implicant = g[j];

                        // extract minTerm as string
                        for (var thisVal in primTerm.implicant.imp) {
                            var minTerm = "";
                            var one = 1;
                            var needed = (~primTerm.implicant.bitMask);
                            for (var v = 0; v < this.noOfVars; v++) {
                                if ((needed & one) === one) {
                                    if ((thisVal & one) === one) {
                                        minTerm = "<i>x</i><sub><small>" + v + "</small></sub>" + minTerm;
                                    } else {
                                        minTerm = "<i>x&#772;</i><sub><small>" + v + "</small></sub>" + minTerm;
                                    }
                                }
                                one = one << 1;
                            }
                            minTerm = "(" + minTerm + ")";
                            if (primTerm.implicant.bitMask === Math.pow(2, this.noOfVars) - 1)
                                minTerm = "1";
                            primTerm.color = hsvToRgb(color, 1.0, 0.5);
                            color += 0.22;
                            color = color % 1.0;


                            primTerm.termString = minTerm;
                            var colorStr = "rgb(" + primTerm.color[0] + "," + primTerm.color[1] + "," + primTerm.color[2] + ")";
                            primTerm.coloredTermString = "<span style='color:" + colorStr + "'>" + minTerm + "</span>";
                            break;
                        }

                        this.primTerms.push(primTerm);
                    }
                }
            }
        }


        // looking for essential prime implicants
        var remaining = new Object();
        for (var i = 0; i < this.funcdata.length; i++) {
            if(this.funcdata[i] === 1) {
                remaining[i] = i;
            }
        }

        this.primTermTables.length = 0;
        var primTableLoop = 0;
        var primTableFound = (this.primTerms.length > 0);
        var cyclicCoveringFound = false;
        var primTermTable;
        while (primTableFound) {

            primTableFound = false;

            primTermTable = new PrimTermTable(primTableLoop);
            for (var r in remaining) {
                primTermTable.remainingVars.push(remaining[r]);
            }

            if (primTableLoop === 0) {
                for (var j = 0; j < this.primTerms.length; j++) {
                    primTermTable.remainingPrimTerms.push(this.primTerms[j]);
                }
            } else {
                // remove rows
                var prevTable = this.primTermTables[primTableLoop-1];
                for(var k=0; k <prevTable.remainingPrimTerms.length; k++) {
                    if(!prevTable.remainingPrimTerms[k].used){

                        var superseded = false;
                        var impA = prevTable.remainingPrimTerms[k].implicant.imp;
                        var varCover = new Object;
                        var countA = 0;
                        for(var r in remaining) {
                            var v = remaining[r];
                            if (v in impA) {
                                varCover[v] = v;
                                countA++;
                            }
                        }

                        for (var l = 0; l < prevTable.remainingPrimTerms.length && !superseded; l++) {
                            if (!prevTable.remainingPrimTerms[l].used && k !== l) {
                                var impB = prevTable.remainingPrimTerms[l].implicant.imp;
                                var countB = 0;
                                for (var r in varCover) {
                                    var v = varCover[r];
                                    if (v in impB) {
                                        countB++;
                                    }
                                }
                                if(countA === countB) {
                                    var countBInRemaining = 0;
                                    for (var r in remaining) {
                                        var v = remaining[r];
                                        if (v in impB) {
                                            countBInRemaining++;
                                        }
                                    }
                                    if(countBInRemaining > countA) {
                                        superseded = true;
                                    }else{
                                        if(k > l) {
                                            superseded = true;
                                        }
                                    }
                                }

                            }
                        }

                        if(!superseded) {
                            primTermTable.remainingPrimTerms.push(prevTable.remainingPrimTerms[k]);
                        }else{
                            prevTable.supersededPrimTerms.push(prevTable.remainingPrimTerms[k]);
                        }
                    }
                }
            }

            if (primTermTable.remainingPrimTerms.length > 0) {
                this.primTermTables.push(primTermTable);
                var currentTerms = primTermTable.remainingPrimTerms;

                var toBeRemoved = new Object();

                for (var r in remaining) {
                    var i = remaining[r];
                    var count = 0;
                    var term = -1;
                    for (var j = 0; j < currentTerms.length && count < 2; j++) {
                        if (i in currentTerms[j].implicant.imp) {
                            term = j;
                            count++;
                        }
                    }

                    if (count === 1) {
                        currentTerms[term].neededByVar[i] = primTableLoop;
                        if(!currentTerms[term].used) {
                            this.minimalTermPrims.push(currentTerms[term]);
                            currentTerms[term].used = true;
                            primTermTable.essentialPrimTerms.push(currentTerms[term]);
                            primTableFound = true;

                            for (var r in remaining) {
                                var ii = remaining[r];
                                if (ii in currentTerms[term].implicant.imp) {
                                    toBeRemoved[ii] = ii;
                                }
                            }
                        }
                    }
                }

                // remove columns
                var tmpRemaining = new Object();
                for (var e in remaining){
                    var ee = remaining[e];
                    tmpRemaining[ee] = ee;
                    delete remaining[e];
                }
                var remainingCount = 0;
                for (var r in tmpRemaining) {
                    var t = tmpRemaining[r];
                    if(!(t in toBeRemoved)) {
                        remaining [t] = t;
                        remainingCount++;
                    }
                }
            }

            if( remainingCount === 0 ) {
                primTableFound = false; // break loop
            }else{
                if(!primTableFound) {
                    cyclicCoveringFound = true;
                }
            }

            primTableLoop++;
        }

        var solutionFound = true;

        // Petrick's Method
        if (cyclicCoveringFound) {
            //console.log("Cyclic covering found");

            var andArray = new Array();

            for (var r in remaining) {
                var ii = remaining[r];
                var orArray = new Array();

                for (var k = 0; k < primTermTable.remainingPrimTerms.length; k++) {
                    var imp = primTermTable.remainingPrimTerms[k].implicant.imp;
                    if(ii in imp){
                        var monom = new Object();
                        monom[k] = k;
                        orArray.push(monom);
                    }
                }
                andArray.push(orArray);
            }

            solutionFound = this.petrickSolver.solve(andArray);

            if (solutionFound) {
                var solutions = this.petrickSolver.solution[0];

                var bestSolution = -1;
                var bestCount = 10000000;
                var bestVarCount = 10000000;
                for (var i = 0; i < solutions.length; i++) {
                    var count = 0;
                    for (var j in solutions[i]) {
                        count++;
                    }
                    if (count <= bestCount) { // first sort accoring to monom length

                        var foundBest = true;
                        if (count === bestCount) {
                            var bestVarCountNew = 0;
                            for (var j in solutions[i]) {
                                for (var v in primTermTable.remainingPrimTerms[j].implicant.imp) {
                                    bestVarCountNew++;
                                }
                            }
                            if (bestVarCountNew >= bestVarCount)
                                foundBest = false;
                        }

                        if (foundBest) {
                            bestCount = count;
                            bestSolution = i;
                            bestVarCount = 0;
                            for (var j in solutions[bestSolution]) {
                                for (var v in primTermTable.remainingPrimTerms[j].implicant.imp) {
                                    bestVarCount++;
                                }
                            }
                        }
                    }
                }
                //console.log("Best solution " + bestSolution);

                var best = solutions[bestSolution];
                for (var b in best) {
                    var addPrimTerm = primTermTable.remainingPrimTerms[best[b]];
                    this.minimalTermPrims.push(addPrimTerm);
                    this.petrickTermPrims.push(addPrimTerm);
                }
            }
        }

        if (solutionFound) {
            this.minimalTerm = "";
            this.coloredMinimalTerm = "";
            var firstL = true;
            for (var i = 0; i < this.minimalTermPrims.length; i++) {
                if (!firstL) {
                    this.minimalTerm += " &or; ";
                    this.coloredMinimalTerm += " &or; ";
                }
                this.minimalTerm += this.minimalTermPrims[i].termString;
                this.coloredMinimalTerm += this.minimalTermPrims[i].coloredTermString;
                firstL = false;
            }

            if (this.minimalTermPrims.length === 0) {
                this.minimalTerm = "0";
                this.coloredMinimalTerm = "0";
            }
        }else{
            this.minimalTerm = 'Error: The cyclic covering problem is too large (increase the "maxProblemSize" parameter)';
            this.coloredMinimalTerm = 'Error: The cyclic covering problem is too large (increase the "maxProblemSize" parameter)';
        }
    };
}




function QuineMcCluskey(parentDivId, columns, language) {
    var myDiv = -1;
    var divId = parentDivId;
    this.cols = columns + 1;
    this.rows = Math.pow(2, columns);
    this.data =  new QuineMcCluskeyDataCtrl();
    var that = this;

    var labels;
    if(language === 0) {
        labels = {ttable:"Truth table",
            minExp:"Minimal boolean expression",
            impli:"Implicants",
            order:"Order",
            primChart:"Prime implicant chart",
            primChartReduced:"Reduced prime implicant chart (Iteration",
            extractedPrims:"Extracted essential prime implicants",
            extractedMPrims:"Extracted prime implicants",
            petricksM:"Petrick's method"};
    }else{
        labels = {ttable:"Wahrheitstafel",
            minExp:"Minimaler boolescher Ausdruck",
            impli:"Implikanten",
            order:"Ordnung",
            primChart:"Primimplikantentafel",
            primChartReduced:"Reduzierte Primimplikantentafel (Iteration",
            extractedPrims:"Extrahierte essentielle Primimplikanten",
            extractedMPrims:"Extrahierte Primimplikanten",
            petricksM:"Verfahren von Petrick"};

    }

    this.init = function() {

        this.data.init(columns);

        myDiv = document.createElement('div');
        if (!myDiv) {
            console.log("QuineMcCluskey error: can not create a canvas element");
            myDiv = -1;
        } else {

            var parent = document.getElementById(divId);
            if (!parent) {
                if(divId !== "fakeDivId") {
                    console.log("QuineMcCluskey error: can not find an element with the given name: " + divId);
                }
                myDiv = -1;
            } else {
                document.body.appendChild(myDiv);
                parent.appendChild(myDiv);
            }
        }
        this.update();
    };

    this.setNoOfVars = function(vars) {
        var c = parseInt(vars);
        if (c < 1 && c > 6)
            return;
        this.cols = c + 1;
        this.rows = Math.pow(2, c);
        this.data.init(c);
        this.update();
    };

    this.genRandom = function() {
        this.data.random();
        this.update();
    };

    this.allowDontCares = function(type) {
        if(type > 0) {
            this.data.allowDontCare = true;
        }else{
            this.data.allowDontCare = false;
        }
        this.data.clear();
        this.update();
    };

    this.drawImplicantGroup = function(g, parent, primFlag, t, drawPetrickVars) {
        var primTermTable = this.data.primTermTables[t];
        var myTable = document.createElement('table');
        myTable.setAttribute('class', 'qmcTableClass');
        var myRow = document.createElement('tr');

        var cell1h = document.createElement('td');
        cell1h.setAttribute('class', 'qmcTdNoBorder');
        cell1h.innerHTML = "";
        myRow.appendChild(cell1h);

        for (var j = 0; j < this.data.noOfVars; j++) {
            var myCell = document.createElement('th');
            myCell.innerHTML = "<i>x</i><sub><small>" + (this.data.noOfVars-1-j) + "</small></sub>";
            myCell.setAttribute('class', 'qmcHeaderX qmcBit');
            myRow.appendChild(myCell);
        }

        if (primFlag) {
            for (var i = 0; i < primTermTable.remainingVars.length; i++) {
                var cellImph = document.createElement('td');
                cellImph.setAttribute('class', 'qmcTdNoBorder');
                cellImph.innerHTML = primTermTable.remainingVars[i].toString(10);
                myRow.appendChild(cellImph);
            }
        }

        var cellImph = document.createElement('td');
        cellImph.setAttribute('class', 'qmcTdNoBorder');
        cellImph.innerHTML = "";
        myRow.appendChild(cellImph);


        myTable.appendChild(myRow);

        var iMax = 0;
        if(!primFlag) iMax = g.group.length; else iMax = primTermTable.remainingPrimTerms.length;

        for (var i = 0; i < iMax; i++) {
            var impl = -1;
            if(!primFlag) impl = g.group[i]; else impl = primTermTable.remainingPrimTerms[i].implicant;
            var bits = 0;
            var mask = impl.bitMask;

            for(var m in impl.imp) {
                bits = impl.imp[m];
                break;
            }

            myRow = document.createElement('tr');

            var cell1 = document.createElement('td');
            var cell1Str = "";
            var first = true;
            for(var m in impl.imp) {
                if(!first) cell1Str +=  ", ";
                cell1Str += impl.imp[m].toString(10);
                first = false;
            }
            cell1.innerHTML = cell1Str + ":";
            cell1.setAttribute('class', 'qmcTdNoBorder');
            myRow.appendChild(cell1);

            var res = bits.toString(2);
            for (var j = 0; j < this.data.noOfVars; j++) {
                var myCell = document.createElement('td');
                myCell.setAttribute('class', 'qmcBit');
                var str;

                var currentBit = Math.pow(2, (this.data.noOfVars - 1)-j);

                if ((currentBit & mask) === currentBit) {
                    str = "-";
                    myCell.innerHTML = str;
                } else {
                    if (j >= (this.data.noOfVars) - res.length) {
                        str = res.charAt(j - (this.data.noOfVars - res.length));
                        myCell.innerHTML = str;
                    } else {
                        str = "0";
                        myCell.innerHTML = str;
                    }
                }
                myRow.appendChild(myCell);
            }


            if (!primFlag) {
                var cellLast = document.createElement('td');
                cellLast.setAttribute('class', 'qmcTdNoBorder');
                if (impl.isPrim) {
                    cellLast.innerHTML = "&#x2713;";  //equivalent &check; in most browsers
                    if(impl.isOnlyDontCare){
                        cellLast.innerHTML = " (&times;)"
                    }
                } else {
                    cellLast.innerHTML = "&rarr;";
                }
                myRow.appendChild(cellLast);
            }else{
                for (var v = 0; v < primTermTable.remainingVars.length; v++) {
                    var ii = primTermTable.remainingVars[v];
                    var cellUsed = document.createElement('td');
                    cellUsed.setAttribute('class', 'qmcPrimItem qmcBit');
                    if (ii in impl.imp) {
                        cellUsed.innerHTML = "&#9675;";
                        if (ii in primTermTable.remainingPrimTerms[i].neededByVar) {
                            if(primTermTable.remainingPrimTerms[i].neededByVar[ii] === t) {
                                cellUsed.innerHTML = "<span style='color:green;'>&#9679;</span>";
                            }
                        }
                    }

                    myRow.appendChild(cellUsed);
                }
                var cellLast = document.createElement('td');
                cellLast.setAttribute('class', 'qmcTdNoBorder');
                cellLast.innerHTML = primTermTable.remainingPrimTerms[i].coloredTermString;
                if(drawPetrickVars) {
                    var pVars = "&nbsp;&equiv;&nbsp;<i>p</i><sub><small>" + i + "</small></sub>";
                    cellLast.innerHTML += pVars;
                }


                myRow.appendChild(cellLast);
            }


            myTable.appendChild(myRow);
        }

        parent.appendChild(myTable);
    };


    this.update = function() {

        if(myDiv === -1) return;

        // clean up
        var oldInnerDiv = document.getElementById(divId+"_innerDiv");
        if (oldInnerDiv) myDiv.removeChild(oldInnerDiv);

        var myInnerDiv = document.createElement('div');
        myInnerDiv.setAttribute('id', divId+"_innerDiv");


        var myTruthTableDiv = document.createElement('div');
        myTruthTableDiv.innerHTML = "<div>" + labels['ttable'] + ":</div>";
        myTruthTableDiv.setAttribute('class', 'qmcTableLabelDiv');

        // re-generate
        var myTable = document.createElement('table');
        myTable.setAttribute('class', 'qmcTableClass');

        var myRow = document.createElement('tr');

        var cell1h = document.createElement('td');
        cell1h.innerHTML = "";
        cell1h.setAttribute('class', 'qmcTdNoBorder');
        myRow.appendChild(cell1h);

        for (var j = 0; j < this.cols; j++) {
            var myCell = document.createElement('th');
            if (j < this.cols - 1) {
                myCell.innerHTML = "<i>x</i><sub><small>" + (this.cols-2-j) + "</small></sub>";
                myCell.setAttribute('class', 'qmcHeaderX qmcBit');
            } else {
                myCell.innerHTML = "<i>Y</i>";
                myCell.setAttribute('class', 'qmcHeaderY qmcBit');
            }
            myRow.appendChild(myCell);
        }
        myTable.appendChild(myRow);



        for (var i = 0; i < this.rows; i++) {
            myRow = document.createElement('tr');

            var cell1 = document.createElement('td');
            cell1.innerHTML = i.toString(10) + ":";
            cell1.setAttribute('class', 'qmcTdNoBorder');
            myRow.appendChild(cell1);

            var res = i.toString(2);
            for (var j = 0; j < this.cols; j++) {
                var myCell = document.createElement('td');

                if (j < this.cols - 1) { // x element
                    myCell.setAttribute('class', 'qmcBit');
                    var str;
                    if (j >= (this.cols - 1) - res.length) {
                        str = res.charAt(j - ((this.cols - 1) - res.length));
                        myCell.innerHTML = str;
                    } else {
                        str = "0";
                        myCell.innerHTML = str;
                    }
                } else { // y element
                    myCell.setAttribute('class', 'qmcBit qmcBitY');
                    myCell.setAttribute('title', i);
                    myCell.onmousedown = function(event) {
                        myCellMouseDown(event);
                    };

                    if (this.data.funcdata[i] === 0) {
                        myCell.innerHTML = "0";
                    }
                    if (this.data.funcdata[i] === 1) {
                        myCell.innerHTML = "1";
                    }
                    if (this.data.funcdata[i] === 2) {
                        myCell.innerHTML = "&times;";
                    }
                }
                myRow.appendChild(myCell);
            }
            myTable.appendChild(myRow);
        }

        myTruthTableDiv.appendChild(myTable);
        myInnerDiv.appendChild(myTruthTableDiv);


        for(var i=0; i < this.data.implicantGroups.length; i++) {
            var myImplicantDiv = document.createElement('div');
            myImplicantDiv.innerHTML = "<div>"+ labels['impli'] + " (" + labels['order'] + " "+i+"):</div>";
            myImplicantDiv.setAttribute('class', 'qmcTableLabelDiv');
            this.drawImplicantGroup(this.data.implicantGroups[i],  myImplicantDiv, false, 0, false);
            myInnerDiv.appendChild(myImplicantDiv);
        }


        for (var i = 0; i < this.data.primTermTables.length; i++) {
            var resultDiv = document.createElement('div');
            if(i === 0 ) {
                resultDiv.innerHTML = "<p>" + labels['primChart'] + ":</p";
            }else{
                resultDiv.innerHTML = "<p> " +labels['primChartReduced'] + " " + (i-1) + "):</p>";
            }

            resultDiv.setAttribute('class', 'qmcTableResultDiv');

            var drawPetrickVars = false;
            if(this.data.petrickTermPrims.length > 0 && i === this.data.primTermTables.length-1) {
                drawPetrickVars = true;
            }

            this.drawImplicantGroup(this.data.primTerms, resultDiv, true, i, drawPetrickVars);

            var essPTermsDiv = document.createElement('div');
            var essPTermsStr = "";
            var primTermTable = this.data.primTermTables[i];
            var jj = primTermTable.essentialPrimTerms.length;
            for(var j=0; j < jj; j++) {
                essPTermsStr += primTermTable.essentialPrimTerms[j].coloredTermString;
                if(j !== (jj-1)) essPTermsStr += ", ";
            }
            if(jj > 0) {
                essPTermsDiv.innerHTML = "<p>" + labels['extractedPrims'] +": <span class='qmcMathFont'>" + essPTermsStr + "</span></p>";
                essPTermsDiv.setAttribute('class', 'qmcIndent');
                resultDiv.appendChild(essPTermsDiv);
            }

            myInnerDiv.appendChild(resultDiv);
        }

        if (this.data.petrickTermPrims.length > 0) {
            var petrickDiv = document.createElement('div');
            petrickDiv.innerHTML = "<p> " + labels['petricksM'] + " </p>";

            var petrickInnerDiv = document.createElement('div');
            petrickInnerDiv.innerHTML = "<span class='qmcMathFont'>" + this.data.petrickSolver.log + "</span>";
            petrickInnerDiv.setAttribute('class', 'qmcIndent');
            petrickDiv.appendChild(petrickInnerDiv);

            var petrickEssTermsDiv = document.createElement('div');
            var petrickEssTermsStr = "";
            var jj = this.data.petrickTermPrims.length;
            for (var j = 0; j < jj; j++) {
                petrickEssTermsStr += this.data.petrickTermPrims[j].coloredTermString;
                if (j !== (jj - 1))
                    petrickEssTermsStr += ", ";
            }
            if (jj > 0) {
                petrickEssTermsDiv.innerHTML = "<p>" + labels['extractedMPrims'] + " (" + labels['petricksM'] + "): <span class='qmcMathFont'>" + petrickEssTermsStr + "</span></p>";
                petrickEssTermsDiv.setAttribute('class', 'qmcIndent');
                petrickDiv.appendChild(petrickEssTermsDiv);
            }

            myInnerDiv.appendChild(petrickDiv);
        }


        var termDiv = document.createElement('div');
        termDiv.innerHTML = "<p><strong>" + labels['minExp']+ ":</strong> </p> <p ><span class='qmcMathFont'><i>Y</i>&nbsp;=&nbsp;" + this.data.coloredMinimalTerm; +"</span></p>";
        myInnerDiv.appendChild(termDiv);
        myDiv.appendChild(myInnerDiv);
    };

    function myCellMouseDown(e) {

        var targ;
        if (e.target) {
            targ = e.target;
        } else { // deal with Microsoft
            if (e.srcElement)
                targ = e.srcElement;
        }
        if (targ.nodeType === 3) { // deal with Safari
            targ = targ.parentNode;
        }
        var i = parseInt(targ.title);
        that.data.activated(i);

        that.update();
    }
}


function UIElement(x, y, width, height, type, ref, subref, slotType) {
    this.x = x;
    this.y = y;
    this.x2 = x + width;
    this.y2 = y + height;
    this.type = type; // 0 = field, 1 = slot, 2 connection
    this.ref = ref;
}

function KVField() {
    this.position = [0.0, 0.0];
    this.value = 0;
    this.active = false;
    this.uniqueID = -1;
    this.truthmapID = -1;
}

function KVBlock() {
    this.fieldID = -1;
    this.dimx = -1;
    this.dimy = -1;
    this.used = false;
    this.color = [0, 0, 0];
    this.primTerm = "";
}

function KarnaughMapDataCtrl(qmcRef) {
    this.noOfVars = -1;
    this.fieldLines = -1;
    this.fieldPerLine = -1;
    this.fieldBorder = -1;
    this.fieldHeight = 80;
    this.fieldWidth = 80;
    this.qmc = qmcRef;
    this.fields = new Array();
    this.blocks = new Array();
    this.allowDontCare = false;

    this.init = function (no) {

        this.noOfVars = no;

        this.qmc.setNoOfVars(no);

        var noOfEvenVars = Math.floor(this.noOfVars / 2);
        var noOfOddVars = Math.floor((this.noOfVars + 1) / 2);

        this.fieldLines = Math.pow(2, noOfEvenVars);
        this.fieldPerLine = Math.pow(2, noOfOddVars);
        this.fieldBorder = noOfOddVars * 20;

        this.fields.length = 0;
        this.blocks.length = 0;

        var id = 0;
        for (var i = 0; i < this.fieldLines; i++) {
            for (var j = 0; j < this.fieldPerLine; j++) {
                var field = new KVField();
                field.position[0] = this.fieldBorder + j * this.fieldWidth;
                field.position[1] = this.fieldBorder + i * this.fieldHeight;
                field.value = 0;
                field.uniqueID = id;
                this.fields.push(field);
                id++;
            }
        }

        var mapped = 0;
        this.fields[0].truthmapID = 0;
        this.fields[1].truthmapID = 1;
        var mirrorDirection = 0;
        var mirrorXCount = 2;
        var mirrorYCount = 1;
        var mapped = 2;
        var x = 0;
        var y = 1;
        var loop = 0;
        var direction = 0;
        while (loop < this.noOfVars - 1) {
            for (var xx = 0; xx < mirrorXCount; xx++) {
                for (var yy = 0; yy < mirrorYCount; yy++) {
                    var loc = xx + yy * this.fieldPerLine;

                    if (direction === 0) {
                        var mirrorLoc = (x + xx) + (y + (mirrorYCount - 1) - yy) * this.fieldPerLine;
                        this.fields[mirrorLoc].truthmapID = this.fields[loc].truthmapID + mirrorXCount * mirrorYCount;
                    } else {
                        var mirrorLoc = (x + (mirrorXCount - 1) - xx) + (y + yy) * this.fieldPerLine;
                        this.fields[mirrorLoc].truthmapID = this.fields[loc].truthmapID + mirrorYCount * mirrorYCount;
                    }
                }
            }
            if (direction === 0) {
                mirrorYCount = mirrorYCount * 2;
                x = mirrorXCount;
                y = 0;
                direction = 1;
            } else {
                mirrorXCount = mirrorXCount * 2;
                y = mirrorYCount;
                x = 0;
                direction = 0;
            }
            loop++;
        }

    };

    this.getKVFieldsCount = function () {
        return this.fields.length;
    };

    this.getKVFieldPositionX = function (fieldId) {
        return this.fields[fieldId].position[0];
    };

    this.getKVFieldPositionY = function (fieldId) {
        return this.fields[fieldId].position[1];
    };

    this.getKVFieldTruthmapID = function (fieldId) {
        return this.fields[fieldId].truthmapID;
    };

    this.getKVFieldValue = function (fieldId) {
        return this.fields[fieldId].value;
    };

    this.activated = function (fieldId) {

        this.fields[fieldId].value += 1;
        if (this.allowDontCare) {
            if (this.fields[fieldId].value > 2)
                this.fields[fieldId].value = 0;
        } else {
            if (this.fields[fieldId].value > 1)
                this.fields[fieldId].value = 0;
        }

        this.qmc.data.setFuncData(this.fields[fieldId].truthmapID, this.fields[fieldId].value);
        this.qmc.data.compute();
        this.qmc.update();
        this.compute();
    };

    this.random = function () {
        for (var i in this.fields) {
            if (this.allowDontCare) {
                this.fields[i].value = Math.floor(Math.random() * 3);
            } else {
                this.fields[i].value = Math.floor(Math.random() * 2);
            }
            this.qmc.data.setFuncData(this.fields[i].truthmapID, this.fields[i].value);
        }
        this.qmc.data.compute();
        this.qmc.update();
        this.compute();
    };

    this.clear = function () {
        for (var i in this.fields) {
            this.fields[i].value = 0;
            this.qmc.data.setFuncData(this.fields[i].truthmapID, this.fields[i].value);
        }
        this.qmc.data.compute();
        this.qmc.update();
        this.compute();
    };

    this.compute = function () {

        this.blocks.length = 0;

        var localFieldsValues = new Array();

        for (var m = 0; m < this.qmc.data.minimalTermPrims.length; m++) {
            var minPrim = this.qmc.data.minimalTermPrims[m];

            localFieldsValues.length = 0;
            for (var i in this.fields) {
                if (this.fields[i].truthmapID in minPrim.implicant.imp) {
                    localFieldsValues.push(1);
                } else {
                    localFieldsValues.push(0);
                }
            }

            var maxX = Math.floor(Math.log(this.fieldPerLine) / Math.LN2);
            var maxY = Math.floor(Math.log(this.fieldLines) / Math.LN2);

            // this might be computationally expensive (computing all possible blocks)
            for (var x = maxX; x >= 0; x--) {
                for (var y = maxY; y >= 0; y--) {
                    var px = Math.pow(2, x);
                    var py = Math.pow(2, y);
                    var stepI = Math.max(Math.floor(py / 2), 1);
                    var stepJ = Math.max(Math.floor(px / 2), 1);
                    for (var i = 0; i < this.fieldLines; i += stepI) {
                        for (var j = 0; j < this.fieldPerLine; j += stepJ) {

                            var id = i * this.fieldPerLine + j;

                            if (localFieldsValues[id] === 1) {

                                // search zero
                                var noZero = true;
                                for (var xx = 0; xx < px && noZero; xx++) {
                                    for (var yy = 0; yy < py && noZero; yy++) {
                                        var otherId = ((i + yy) % this.fieldLines) * this.fieldPerLine + ((j + xx) % this.fieldPerLine);
                                        if (localFieldsValues[otherId] === 0)
                                            noZero = false;
                                    }
                                }

                                if (noZero) {
                                    var block = new KVBlock();
                                    block.fieldID = id;
                                    block.dimx = px;
                                    block.dimy = py;
                                    block.color = minPrim.color;
                                    this.blocks.push(block);
                                    if (true) { //clearing all 1s
                                        for (var xx = 0; xx < px; xx++) {
                                            for (var yy = 0; yy < py; yy++) {
                                                var otherId = ((i + yy) % this.fieldLines) * this.fieldPerLine + ((j + xx) % this.fieldPerLine);
                                                localFieldsValues[otherId] = 0;
                                            }
                                        }
                                    }

                                } // end if(noZero)
                            } // end if (localFieldsValues[id] === 1)
                        } // end j
                    } // end i
                } // end y
            } // end x
        } // end m
    };
}

function KarnaughMap(parentDivId, qmcRef) {
    var data = new KarnaughMapDataCtrl(qmcRef);
    var qmc = qmcRef;
    var svg;
    var svgns = "http://www.w3.org/2000/svg";
    var divId = parentDivId;
    var fieldColor = "rgba(133, 178, 255, 1.0)";
    var hooveredKVFieldColor = "#AAD7FF";
    var hooveredElement = -1;
    var hooveredKVField = -1;
    var uiElements = new Array();
    var that = this;
    var overlays = new Array();
    var overlayStyle = 'position:absolute; font-family:"Times New Roman",Georgia,Serif; visibility:inherit;';
    var overlayStyle2 = overlayStyle + 'border: 1px solid gray; background:white; pointer-events:none;';
    var resultStyle = 'position:inline; font-family:"Times New Roman",Georgia,Serif; visibility:inherit;';
    var dontShowResult = false;

    this.init = function () {

        data.init(4);

        var width = data.fieldBorder + data.fieldPerLine * data.fieldWidth + 50;
        var height = data.fieldBorder + data.fieldLines * data.fieldHeight + 50;

        svg = document.createElementNS(svgns, "svg");
        if (!svg)
            console.log("KarnaughMap error: can not create a svg element");
        //svg.setAttribute('style', 'border: 1px solid black');
        svg.setAttribute('width', width.toString());
        svg.setAttribute('height', height.toString());
        svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
        svg.setAttribute('id', parentDivId + "_KarnaughMap");
        document.body.appendChild(svg);

        var parent = document.getElementById(divId);
        if (!parent)
            console.log("KarnaughMap error: can not find an element with the given name: " + divId);
        parent.appendChild(svg);

        svg.onmousedown = function (event) {
            canvasMouseDown(event);
        };
        svg.onmousemove = function (event) {
            canvasMouseMove(event);
        };
        svg.onmouseup = function (event) {
            canvasMouseUp(event);
        };
        svg.onmouseup = function (event) {
            canvasMouseUp(event);
        };

        createOverlays();
        this.update();
    };

    this.setNoOfVars = function (no) {

        var c = parseInt(no);
        if (c < 1 && c > 10)
            return;

        hooveredKVField = -1;
        data.init(c);
        createOverlays();

        var width = data.fieldBorder + data.fieldPerLine * data.fieldWidth + 50;
        var height = data.fieldBorder + data.fieldLines * data.fieldHeight + 50;
        svg.setAttribute('width', width.toString());
        svg.setAttribute('height', height.toString());
        this.update();
    };

    this.allowDontCares = function (type) {
        if (type > 0) {
            data.allowDontCare = true;
        } else {
            data.allowDontCare = false;
        }
        data.clear();
        this.update();
    };

    this.setDontShowResult = function (type) {
        if (type > 0) {
            dontShowResult = true;
        } else {
            dontShowResult = false;
        }
        this.update();
    };

    this.genRandom = function () {
        data.random();
        this.update();
    };

    this.clear = function () {
        data.clear();
        this.update();
    };

    function createOverlays() {

        var parent = document.getElementById(divId);
        if (!parent)
            console.log("KarnaughMap error: can not find an element with the given name: " + divId);
        parent.setAttribute('style', 'position:relative;');

        // remove old ones
        for (var i in overlays) {
            parent.removeChild(overlays[i]);
        }
        overlays.length = 0;

        for (var i = 0; i < data.noOfVars + 2; i++) {
            var overlay = document.createElement('div');
            overlay.setAttribute('style', 'position:absolute; top:0px; left:0px; visibility:hidden;');
            overlay.innerHTML = "overlay" + i;
            document.body.appendChild(overlay);

            parent.appendChild(overlay);
            overlays.push(overlay);
        }
    }



    function drawKVField(fieldId) {

        var fieldPosX = data.getKVFieldPositionX(fieldId);
        var fieldPosY = data.getKVFieldPositionY(fieldId);
        var truthmapID = data.getKVFieldTruthmapID(fieldId);
        var value = data.getKVFieldValue(fieldId);
        var dn = new UIElement(fieldPosX, fieldPosY, data.fieldWidth, data.fieldHeight, 0, fieldId, 0, 0);

        var strokeColor = "#000000";
        var fillColor = "#FFFFFF";
        if (fieldId === hooveredKVField) {
            fillColor = hooveredKVFieldColor;
        }

        var dx = dn.x2 - dn.x;
        var dy = dn.y2 - dn.y;

        var rect = document.createElementNS(svgns, 'rect');
        rect.setAttribute('x', dn.x);
        rect.setAttribute('y', dn.y);
        rect.setAttribute('height', dx);
        rect.setAttribute('width', dy);
        rect.setAttribute('fill', fillColor);
        rect.setAttribute('stroke', strokeColor);
        svg.appendChild(rect);

        var text = document.createElementNS(svgns, 'text');

        var textColor = "#000000";
        if (value >= 2) {
            value = "X";
            textColor = "#C8C8C8";
        }
        text.setAttribute("fill", textColor);
        //text.setAttribute("style", "font-family: sans-serif; font-weight: normal; font-style: normal");
        text.setAttribute("font-family", "sans-serif");
        text.setAttribute("text-anchor", "middle");
        text.setAttribute("font-size", "20");
        var posX = dn.x + Math.floor(dx / 2);
        var posY = dn.y2 - Math.floor(dx / 3);
        text.setAttribute("x", posX.toString());
        text.setAttribute("y", posY.toString());
        text.textContent = value.toString();
        svg.appendChild(text);

        uiElements.push(dn);

        if (true) {
            var text2 = document.createElementNS(svgns, 'text');
            text2.setAttribute("fill", "#000");
            text2.setAttribute("text-anchor", "start");
            text2.setAttribute("font-family", "sans-serif");
            text2.setAttribute("font-size", "10");
            var posX = dn.x + Math.floor(dx / 32);
            var posY = dn.y2 - Math.floor(dy / 16);
            text2.setAttribute("x", posX.toString());
            text2.setAttribute("y", posY.toString());
            text2.textContent = truthmapID.toString();
            svg.appendChild(text2);
        }
    }

    function drawRoundRect(colorStr, x, y, width, height, radius) {
        var x1 = x + width;
        var y1 = y + height;

        var path = document.createElementNS(svgns, 'path');
        path.setAttribute("stroke-width", "3");
        path.setAttribute("stroke", colorStr);
        path.setAttribute("fill", "none");

        var d = "";
        d += "M " + (x + radius) + "," + y;
        d += " L " + (x1 - radius) + "," + y;
        d += " Q " + x1 + "," + y + " " + x1 + "," + (y + radius);
        d += " L " + x1 + "," + (y1 - radius);
        d += " Q " + x1 + "," + y1 + " " + (x1 - radius) + "," + y1;
        d += " L " + (x + radius) + "," + y1;
        d += " Q " + x + "," + y1 + " " + x + "," + (y1 - radius);
        d += " L " + x + "," + (y + radius);
        d += " Q " + x + "," + y + " " + (x + radius) + "," + y;
        d += " Z";
        path.setAttribute("d", d);
        svg.appendChild(path);
    }

    function drawRoundRectOpenRightLeft(colorStr, x, y, w, height, radius, offset) {

        var width = w / 2 + Math.floor(data.fieldWidth * 0.6);

        var x1 = x + width;
        var y1 = y + height;

        var path = document.createElementNS(svgns, 'path');
        path.setAttribute("stroke-width", "3");
        path.setAttribute("stroke", colorStr);
        path.setAttribute("fill", "none");

        var d = "";
        d += "M " + (x1 - radius) + "," + y1;
        d += " L " + (x + radius) + "," + y1;
        d += " Q " + x + "," + y1 + " " + x + "," + (y1 - radius);
        d += " L " + x + "," + (y + radius);
        d += " Q " + x + "," + y + " " + (x + radius) + "," + y;
        d += " L " + (x1 - radius) + "," + y;
        path.setAttribute("d", d);
        svg.appendChild(path);

        x1 = x + w + offset;
        x = x + offset + w / 2 - Math.floor(data.fieldWidth * 0.6);

        var path2 = document.createElementNS(svgns, 'path');
        path2.setAttribute("stroke-width", "3");
        path2.setAttribute("stroke", colorStr);
        path2.setAttribute("fill", "none");

        var d = "";
        d += "M " + (x + radius) + "," + y;
        d += " L " + (x1 - radius) + "," + y;
        d += " Q " + x1 + "," + y + " " + x1 + "," + (y + radius);
        d += " L " + x1 + "," + (y1 - radius);
        d += " Q " + x1 + "," + y1 + " " + (x1 - radius) + "," + y1;
        d += " L " + (x + radius) + "," + y1;
        path2.setAttribute("d", d);
        svg.appendChild(path2);

    }

    function drawRoundRectOpenTopDown(colorStr, x, y, width, h, radius, offset) {

        var height = h / 2 + Math.floor(data.fieldHeight * 0.6);
        var x1 = x + width;
        var y1 = y + height;


        var path = document.createElementNS(svgns, 'path');
        path.setAttribute("stroke-width", "3");
        path.setAttribute("stroke", colorStr);
        path.setAttribute("fill", "none");

        var d = "";
        d += "M " + x1 + "," + (y1 - radius);
        d += " L " + x1 + "," + (y + radius);
        d += " Q " + x1 + "," + y + " " + (x1 - radius) + "," + y;
        d += " L " + (x + radius) + "," + y;
        d += " Q " + x + "," + y + " " + x + "," + (y + radius);
        d += " L " + x + "," + (y1 - radius);
        path.setAttribute("d", d);
        svg.appendChild(path);

        y1 = y + h + offset;
        y = y + offset + h / 2 - Math.floor(data.fieldHeight * 0.6);

        var path2 = document.createElementNS(svgns, 'path');
        path2.setAttribute("stroke-width", "3");
        path2.setAttribute("stroke", colorStr);
        path2.setAttribute("fill", "none");

        var d = "";
        d += "M " + x + "," + (y + radius);
        d += " L " + x + "," + (y1 - radius);
        d += " Q " + x + "," + y1 + " " + (x + radius) + "," + y1;
        d += " L " + (x1 - radius) + "," + y1;
        d += " Q " + x1 + "," + y1 + " " + x1 + "," + (y1 - radius);
        d += " L " + x1 + "," + (y + radius);
        path2.setAttribute("d", d);
        svg.appendChild(path2);

    }


    function drawRoundRectAllOpen(colorStr, xx, yy, w, h, radius, offsetX, offsetY) {
        var height = h / 2 + Math.floor(data.fieldHeight * 0.6);
        var width = w / 2 + Math.floor(data.fieldWidth * 0.6);

        var x = xx;
        var y = yy;
        var x1 = xx + width;
        var y1 = yy + height;

        var path = document.createElementNS(svgns, 'path');
        path.setAttribute("stroke-width", "3");
        path.setAttribute("stroke", colorStr);
        path.setAttribute("fill", "none");

        var d = "";
        d += "M " + (x1 - radius) + "," + y;
        d += " L " + (x + radius) + "," + y;
        d += " Q " + x + "," + y + " " + x + "," + (y + radius);
        d += " L " + x + "," + (y1 - radius);
        path.setAttribute("d", d);
        svg.appendChild(path);

        x1 = xx + w + offsetX;
        x = xx + offsetX + w / 2 - Math.floor(data.fieldWidth * 0.6);

        var path2 = document.createElementNS(svgns, 'path');
        path2.setAttribute("stroke-width", "3");
        path2.setAttribute("stroke", colorStr);
        path2.setAttribute("fill", "none");

        var d = "";
        d += "M " + (x + radius) + "," + y;
        d += " L " + (x1 - radius) + "," + y;
        d += " Q " + x1 + "," + y + " " + x1 + "," + (y + radius);
        d += " L " + x1 + "," + (y1 - radius);
        path2.setAttribute("d", d);
        svg.appendChild(path2);

        y1 = yy + h + offsetY;
        y = yy + offsetY + h / 2 - Math.floor(data.fieldHeight * 0.6);
        x = xx;
        x1 = xx + width;

        var path3 = document.createElementNS(svgns, 'path');
        path3.setAttribute("stroke-width", "3");
        path3.setAttribute("stroke", colorStr);
        path3.setAttribute("fill", "none");

        var d = "";
        d += "M " + x + "," + (y + radius);
        d += " L " + x + "," + (y1 - radius);
        d += " Q " + x + "," + y1 + " " + (x + radius) + "," + y1;
        d += " L " + (x1 - radius) + "," + y1;
        path3.setAttribute("d", d);
        svg.appendChild(path3);

        x1 = xx + w + offsetX;
        x = xx + offsetX + w / 2 - Math.floor(data.fieldWidth * 0.6);

        var path4 = document.createElementNS(svgns, 'path');
        path4.setAttribute("stroke-width", "3");
        path4.setAttribute("stroke", colorStr);
        path4.setAttribute("fill", "none");

        var d = "";
        d += "M " + x1 + "," + (y + radius);
        d += " L " + x1 + "," + (y1 - radius);
        d += " Q " + x1 + "," + y1 + " " + (x1 - radius) + "," + y1;
        d += " L " + (x + radius) + "," + y1;
        path4.setAttribute("d", d);
        svg.appendChild(path4);
    }

    function drawKVBlock(blockId) {
        var fieldId = data.blocks[blockId].fieldID;

        var x0 = data.getKVFieldPositionX(fieldId);
        var y0 = data.getKVFieldPositionY(fieldId);
        var dx = data.blocks[blockId].dimx * data.fieldWidth;
        var dy = data.blocks[blockId].dimy * data.fieldHeight;
        var colorStr = "rgb(" + data.blocks[blockId].color[0].toString() + "," + data.blocks[blockId].color[1].toString() + "," + data.blocks[blockId].color[2].toString() + ")";

        var offsetX = (data.fieldWidth * data.fieldPerLine);
        var offsetY = (data.fieldHeight * data.fieldLines);
        var overX = (x0 + dx > offsetX + data.fieldBorder);
        var overY = (y0 + dy > offsetY + data.fieldBorder);
        if (overX && overY) {
            drawRoundRectAllOpen(colorStr, x0 + 2, y0 + 2, dx - 4, dy - 4, 17, -offsetX, -offsetY);
        } else {
            if (overX) {
                drawRoundRectOpenRightLeft(colorStr, x0 + 2, y0 + 2, dx - 4, dy - 4, 17, -offsetX);
            } else {
                if (overY) {
                    drawRoundRectOpenTopDown(colorStr, x0 + 2, y0 + 2, dx - 4, dy - 4, 17, -offsetY);
                } else {
                    drawRoundRect(colorStr, x0 + 2, y0 + 2, dx - 4, dy - 4, 17);
                }
            }
        }
    }

    function drawKVFields() {
        var count = data.getKVFieldsCount();
        for (var i = 0; i < count; i++) {
            drawKVField(i);
        }
    }

    function drawKVBlocks() {
        var count = data.blocks.length;
        for (var i = 0; i < count; i++) {
            drawKVBlock(i);
        }
    }


    this.update = function () {

        uiElements.length = 0;

        // clear svg element
        while (svg.lastChild) {
            svg.removeChild(svg.lastChild);
        }

        // draws all fields
        drawKVFields();

        // draws all blocks
        if(!dontShowResult) drawKVBlocks();

        // draw labels
        if (overlays.length !== data.noOfVars + 2)
            console.log("KarnaughMap error: overlay not available");

        var labelNum = 1;
        var labelPos = 10;
        var k = 0;
        while (k < data.noOfVars) {

            overlays[k].innerHTML = "<i>x</i><sub><small>" + k + "</small></sub>"

            for (var x = 0; x < data.fieldPerLine; x++) {
                var bits = data.getKVFieldTruthmapID(x);

                if ((bits & labelNum) === labelNum) {
                    var x0 = data.fieldWidth * x + data.fieldBorder;
                    var x1 = data.fieldWidth * (x + 1) + data.fieldBorder;

                    var path = document.createElementNS(svgns, 'path');
                    path.setAttribute("stroke-width", "2");
                    path.setAttribute("stroke", "#000000");
                    path.setAttribute("fill", "none");

                    var d = "";
                    d += "M " + x0 + "," + (labelPos - 2);  // start marker
                    d += " L " + x0 + "," + (labelPos + 2);
                    d += " M " + x0 + "," + labelPos;
                    d += " L " + x1 + "," + labelPos;
                    d += " M " + x1 + "," + (labelPos - 2);  // end marker
                    d += " L " + x1 + "," + (labelPos + 2);
                    path.setAttribute("d", d);
                    svg.appendChild(path);

                    var style = overlayStyle + 'top:' + (labelPos - 10) + 'px; left:' + (x1 + 5) + 'px;';
                    overlays[k].setAttribute('style', style);
                }
            }
            k++;
            if (k < data.noOfVars) {

                overlays[k].innerHTML = "<i>x</i><sub><small>" + k + "</small></sub>";

                labelNum = labelNum << 1; // move bit to left

                for (var y = 0; y < data.fieldLines; y++) {
                    var bits = data.getKVFieldTruthmapID(y * data.fieldPerLine);
                    if ((bits & labelNum) === labelNum) {
                        var x0 = data.fieldHeight * y + data.fieldBorder;
                        var x1 = data.fieldHeight * (y + 1) + data.fieldBorder;

                        var path = document.createElementNS(svgns, 'path');
                        path.setAttribute("stroke-width", "2");
                        path.setAttribute("stroke", "#000000");
                        path.setAttribute("fill", "none");

                        var d = "";
                        d += "M " + (labelPos - 2) + "," + x0;  // start marker
                        d += " L " + (labelPos + 2) + "," + x0;
                        d += " M " + labelPos + "," + x0;
                        d += " L " + labelPos + "," + x1;
                        d += " M " + (labelPos - 2) + "," + x1;  // end marker
                        d += " L " + (labelPos + 2) + "," + x1;
                        path.setAttribute("d", d);
                        svg.appendChild(path);

                        var style = overlayStyle + 'top:' + (x1) + 'px; left:' + (labelPos - 5) + 'px;';
                        overlays[k].setAttribute('style', style);
                    }
                }
                labelNum = labelNum << 1; // move bit to left
                labelPos += 20;
                k++;
            }
        }

        // draw binary value
        if (hooveredKVField >= 0 && hooveredKVField < data.getKVFieldsCount()) {
            var truthmapID = data.getKVFieldTruthmapID(hooveredKVField);
            var binString = truthmapID.toString(2);
            while (binString.length < data.noOfVars)
                binString = "0" + binString;

            var valueString = "";
            for (var z = 0; z < binString.length; z++) {
                valueString += binString[z];
                if (z < binString.length - 1)
                    valueString += ",";
            }

            var value = data.getKVFieldValue(hooveredKVField);
            if (value >= 2)
                value = "X";
            valueString = "&nbsp;f(" + valueString + ") = " + value;
            //valueString += " (ID: " + hooveredKVField + ")";
            var textX = Math.floor(hooveredKVField % data.fieldPerLine) * data.fieldWidth + Math.floor(data.fieldWidth * 0.8) + data.fieldBorder;
            var textY = Math.floor(hooveredKVField / data.fieldPerLine) * data.fieldHeight + Math.floor(data.fieldHeight * 0.1) + data.fieldBorder;
            var style = overlayStyle2 + 'top:' + textY + 'px; left:' + textX + 'px;';
            overlays[data.noOfVars].setAttribute('style', style);
            overlays[data.noOfVars].innerHTML = valueString;
        } else {
            overlays[data.noOfVars].innerHTML = "";
            var style = 'visibility:hidden;';
            overlays[data.noOfVars].setAttribute('style', style);
        }

        // draw minterm
        var termX = data.fieldBorder;
        var termY = data.fieldHeight * data.fieldLines + data.fieldBorder;
        var termStyle = resultStyle + 'max-width:' + data.fieldPerLine * data.fieldWidth + 'px;';
        overlays[data.noOfVars + 1].setAttribute('style', termStyle);
        if(!dontShowResult) {
            overlays[data.noOfVars + 1].innerHTML = "<span class='qmcMathFont'><i>Y</i>&nbsp;=&nbsp;" + qmc.data.coloredMinimalTerm + "</span></p>";
        }else{
            overlays[data.noOfVars + 1].innerHTML = "<span class='qmcMathFont'><i>Y</i>&nbsp;=&nbsp;" + "<span style='color:rgb(255,0,0)'>hidden</span>"+ "</span></p>";
        }
    };

    function mouseOverElement(pos) {
        var selectedElement = -1;
        for (var n in uiElements) {
            if (uiElements[n].type !== 2) {
                // not of type "connection"
                if (uiElements[n].x - 1 < pos.x &&
                    uiElements[n].x2 + 1 > pos.x &&
                    uiElements[n].y - 1 < pos.y &&
                    uiElements[n].y2 + 1 > pos.y)
                {
                    selectedElement = n;
                }
            }
        }
        return selectedElement;
    }

    function canvasMouseDown(event) {
        var pos = getMouse(event);

        // handle selection
        if (!event.altKey && event.which === 1) {
            var selectedElement = mouseOverElement(pos);
            if (selectedElement !== -1) {
                // handle field selection
                if (uiElements[selectedElement].type === 0) {
                    var newSelectedKVField = uiElements[selectedElement].ref;
                    data.activated(newSelectedKVField);
                }
            }
            that.update();
        }
        event.preventDefault();
    }

    function canvasMouseUp(event) {
    }

    function canvasMouseMove(event) {
        var pos = getMouse(event);

        hooveredKVField = -1;
        var oldHooveredElement = hooveredElement;
        hooveredElement = mouseOverElement(pos);
        console.log(hooveredElement);
        if (hooveredElement !== -1) {
            hooveredKVField = uiElements[hooveredElement].ref;
        }
        if (oldHooveredElement !== hooveredElement)
            that.update();
        oldPos = pos;
        event.preventDefault();
    }

    function getMouse(e) {
        var element = document.getElementById(divId);
        var offsetX = 0, offsetY = 0, mx, my;

        // compute the total offset
        if (element.offsetParent !== undefined) {
            do {
                offsetX += element.offsetLeft;
                offsetY += element.offsetTop;
            } while ((element = element.offsetParent));
        }

        mx = e.pageX - offsetX;
        my = e.pageY - offsetY + document.getElementById("scrollcount").scrollTop;
        console.log(mx + " " + my + " " + document.getElementById("scrollcount").scrollTop );
        return {x: mx, y: my};
    }
}
