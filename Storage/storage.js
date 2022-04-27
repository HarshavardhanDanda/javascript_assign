window.onload=()=>{
    print();
}


function print() {
 
 if (sessionStorage.sessioncount == undefined) {
   sessionStorage.sessioncount = 0;
 }
 if (localStorage.localcount == undefined) {
   localStorage.localcount = 0;
 }
 document.querySelector(
   "#display"
 ).innerHTML = `Session Score:  ${sessionStorage.sessioncount} times <br>
      Local Score:  ${localStorage.localcount} times`;
}


function increaseSession() {
sessionStorage.sessioncount = parseInt(sessionStorage.sessioncount) + 1;
 print();
}


function increaseLocal() {
localStorage.localcount = parseInt(localStorage.localcount) + 1;
print();
}