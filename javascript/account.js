export let idNum = 0;
export let username = ["admin"];
export let password = ["root"];

export function idNumIncrement(){
  idNum++;
}

export function resetIdNum(){
  idNum = 0;
}

export function registerAccnt(){
  let accntExist = false;
  let user = document.getElementById("newUsername").value;
  let pass = document.getElementById("newPassword").value;
  let cpass = document.getElementById("confirmPassword").value;
  
  console.log(user);
  for(let u of username){
    if(user == u){
      accntExist = true
      break;
    }
  }
  
  if(accntExist){
    msgBox.style.display = "flex";
    msgTxt.textContent = "Username already exists.";
  }
  else {
    if(pass.trim() == ""){
      msgBox.style.display = "flex";
      msgTxt.textContent = "Password can't be empty.";
    }
    else if(pass != cpass){
      msgBox.style.display = "flex";
      msgTxt.textContent = "Password and confirm password are not the same.";
    }
    else if (pass == cpass) {
      msgBox.style.display = "flex";
      username.push(user);
      password.push(pass);
      msgTxt.textContent = "Account successfully made, please login.";
    }
  }
}

const msgBox = document.getElementById("msgBox2");
const msgTxt = document.getElementById("msgTxt2");