{ /* < link rel = "stylesheet"href = "fb.css" > </link> */ }


function f1() {

    // document.getElementById('form1').style.display = "none";
    document.getElementById('body').style.opacity = .2;
    document.getElementById('form2').style.display = "inline";
    // document.getElementById('fb').style.display = "none";
    // document.getElementById('txt').style.display = "none";



}
function c1() {

    // document.getElementById('form1').style.display = "none";
    document.getElementById('body').style.opacity = 1;
    document.getElementById('form2').style.display = "none";
    // document.getElementById('fb').style.display = "none";
    // document.getElementById('txt').style.display = "none";



}




function create() {
console.log("clicled")
first_name = document.getElementById("fname").value
last_name = document.getElementById("lname").value
mobile = document.getElementById("mobile").value
pword = document.getElementById("pword").value
date = document.getElementById("date").value
month = document.getElementById("month").value
y = document.getElementById("year").value
year = Number(y)
console.log( year +1)
if (first_name.length < 3 || last_name.length < 3) {
    alert("First Name And Last Name Is Must Be Grater Then 3 Characters")
    
}
else if (year > 2007) {
    alert("Sorry You Can't Signup Because Your Age Is Less Than 15 Years")
    
}
else if (pword.length < 4) {
    alert("Please Choose 4 Character or 4+ Password")
    
}
else if (first_name === "" || last_name === "" || mobile === ""|| pword === "") {
    alert("Please Fill All Section")
    
}

// else if(first_name.length <! 3 && last_name.length <! 3 && year <! 2007&& pword.length <! 4 && first_name != "" && last_name != "" && mobile != "" && pword != "") {

//     document.getElementById('body').style.opacity = 1;
//        document.getElementById('form2').style.display = "none";

//        f2();
// }
 else{
    document.getElementById('body').style.opacity = 1;
    document.getElementById('form2').style.display = "none";
    alert("YOUR ACCOUNT IS CREATED PLEASE FILL LOGIN FORM & LOGIN")
    
    }
 





}

function f2() {
    // var lname = document.getElementById('lname').value;
    // var username = fname + lname;
console.log("Sorry bhai")
    let mobile = document.getElementById("mobile").value
    let pword = document.getElementById("pword").value
    let lmobile = document.getElementById('lfname').value;
    let lpword = document.getElementById('cpword').value;
    console.log(mobile , pword , lmobile ,lpword)
    if (lmobile === mobile && lpword === pword) {
        alert('Log In Success');
        

    } 
    if (lmobile === "" || lpword === "") {
        alert('Please Fill Both Sections');
        return false;
        
    } 
    
    if (lmobile != mobile || lpword != pword) {
        alert('User Id OR Password Is Incorrect');
        
        
    } 

}