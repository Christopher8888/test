

// kiri 
const accordion = document.getElementsByClassName('contentbx');

for (i = 0; i<accordion.length; i++ ) {
    accordion[i].addEventListener('click', function() {
        this.classList.toggle('activex')
    })
}




// kanan 

const accordion2 = document.getElementsByClassName('contentby');

for (i = 0; i<accordion2.length; i++ ) {
    accordion2[i].addEventListener('click', function() {
        this.classList.toggle('activey')
    })
}