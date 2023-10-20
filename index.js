
        var nama = prompt("Your name?");
        var element = document.getElementById ("nama");
        concole.log(Element);


// function validateForm() {
//     let name = document.forms["form-section"]["name"].value;
//     if (name == "") {
//         alert(Name must be filled out);
//         return false;
//     }
// }

const validateForm = ()=> {

    
    let email = document.getElementById("name").value; 
    let name = document.getElementById("email").value; 
    let accountType = document.getElementById("accountType").value;
    let formServices = document.getElementById("formServices").value; 
    let reference = document.getElementById("reference").value; 
    let shortBrief = document.getElementById("shortBrief").value; 
    let upload = document.getElementById("upload").value; 

    if (email === "" || name === "" || accountType === "" || formServices === "") {
        alert("All fields must be filled out");
        return false; 

        alert("Message Sent!");
        return true;
    }
}