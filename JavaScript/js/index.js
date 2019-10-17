
function aa(a,...b){
    alert(a);
    alert(b);
    alert(arguments.length);
    alert(arguments[0]);
   // alert(arguments.callee);
}
document.write(aa)
aa(1,2,5,6)

