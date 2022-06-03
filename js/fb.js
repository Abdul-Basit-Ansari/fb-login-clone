{ /* < link rel = "stylesheet"href = "fb.css" > </link> */ }


function f1() {

    document.getElementById('form1').style.display = "none";
    document.getElementById('form2').style.display = "inline";
    document.getElementById('fb').style.display = "none";
    document.getElementById('txt').style.display = "none";



}



function f2() {
    // var lname = document.getElementById('lname').value;
    // var username = fname + lname;
    var fname = document.getElementById('fname').value;
    var cpword = document.getElementById('cpword').value;
    var uname = document.getElementById('uname').value;
    var pword = document.getElementById('pword').value;
    if (fname === uname && cpword === pword) {
        alert('Log In Success');
        return false;

    } else {
        alert('User Id OR Password Is Incorrect');

    }

}