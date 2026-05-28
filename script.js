let enter = document.getElementById("enter");
let myInput = document.querySelector('input');
let mainButton = document.getElementById("mainButton"); 
let playersNumber;
let footballPlayer = ['ronaldo', 'messi', 'suarez'];
let randomFootballer = footballPlayer[Math.floor(Math.random() * footballPlayer.length)];
let playersRoles = [];
let status = 'else';
let j = 0;

enter.addEventListener('click', () => {
    if((myInput.value == '') || (isNaN(myInput.value))){
        alert('Enter a number please!!')
    }else{
        let playersNumber = parseInt(myInput.value);
        document.body.removeChild(myInput);
        document.body.removeChild(enter);
        mainButton.style.visibility = 'visible';
        let falseNine = Math.floor(Math.random() * playersNumber);
        for(let i = 0; i < playersNumber; i++) {
            if(i == falseNine) {
                playersRoles[i] = 'fasleNine';
            }else{
                playersRoles[i] = randomFootballer;
            }
        }
    }
});

mainButton.addEventListener("click", () => {
    playersNumber = playersRoles.length;
    console.log(j)
    
        if(j < playersNumber) {
            if(status == 'reveal'){
                mainButton.innerHTML = 'Reveal';
                status = 'else';
            }else if(status == 'else'){
                mainButton.innerHTML = `${playersRoles[j]}<br>Press again to continue<br\>`;
                if(j != playersNumber) {
                    status = 'reveal';
                }
                j++;
            }
        }else{
            mainButton.innerHTML = 'END';
        }
});
console.log('Hello');