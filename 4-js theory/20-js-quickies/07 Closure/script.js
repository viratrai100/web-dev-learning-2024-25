function x() {
    let a = 3;
    function y() {
        console.log(a);
    }
    return y;
}
const z = x()
z();
// output -> 3




// inner function apne parent function ko access kar sakta hai, parent function ke execute hone ke baad bhi.