function myFunction() {
    let x = document.forms["myForm"]["fname"].value;
    let y = document.forms["myForm"]["sname"].value;
    let z = document.forms["myForm"]["uname"].value;
    let a = document.forms["myForm"]["gm"].value;
    let b = document.forms["myForm"]["pw"].value;
    let c = document.forms["myForm"]["re-pw"].value;
    res = ( x   +  y   +   z   +   a   +   b  +  c )
    document.write( "Input Data" + res )
    console.log(res)
}