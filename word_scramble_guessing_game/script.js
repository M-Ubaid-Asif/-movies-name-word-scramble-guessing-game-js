// first project word scramble game 
const msg = document.querySelector('.msg')
const userName = document.getElementById('username')
const btn = document.querySelector('.btn')
const guess = document.getElementsByClassName('hidden')
let play = false;
let newWords= '';
let randWords = '';
let movies = ['Dangal',"Bajrangi Bhaijaan","Secret Superstar",'Sultan','Sanju','Padmaavat','Tiger Zinda Hai','Dhoom 3','war','Chennai Express','3 Idiots','Happy New Year','Kabir Singh','Good Newwz','Golmaal Again','Ek Tha Tiger','Housefull 4','Dhol','Bodyguard','Gully Boy','Total Dhamaal','Chhichhore','Kaabil','Ram Leela','Dream Girl','Agneepath','Stree','Ek Villain','Welcome Back','Sonu Ke Titu Ki Sweety','Lagan','Andaz Apna Apna','Andhadhun','judwaa 2','Rab Ne Bana Di Jodi','Raees','Zero','Jab Harry Met Sejal','Gold','Raid','Ready','Rockstar','Shershan','Dhoom 3','Dil Dhadakne Do','Ajab Prem Ki Gajab Kahani','Baaghi','Heropanti']

const createWords = () =>{
    let randNum = Math.floor(Math.random() * movies.length)
    let newRandWord = movies[randNum];
    // console.log(newRandWord.split(''))
    return newRandWord;
}

const scrambleWords = (arr) =>{
    for(let i = arr.length-1; i>0;i--){
        let temp = arr[i];
        // console.log(temp);
        let j = Math.floor(Math.random()*(i+1))
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}


btn.addEventListener('click', function(){
    let user = userName.value;
    if(!play){
        play = true;
        btn.innerHTML = 'Guess'; 
        userName.style.display = 'none';
        document.getElementsByClassName('namelabel')[0].style.display = 'none'
        guess[0].style.display = 'block'
        console.log(user);
        newWords = createWords();
        randWords = scrambleWords(newWords.split('')).join('');
        // console.log(randWords.join(""));
        msg.innerHTML = randWords;
    }else{
        let guessingVal = guess[0].value;
        console.log(guessingVal);
        if(guessingVal===newWords){
            console.log(guessingVal);
            play = false;
            msg.innerHTML = `<center>congratulation ${user}</center>\t
            <p><center>Scramble word :${randWords}</center></p>
            <center>you guess the right Name: ${newWords}</center>`;
            btn.innerHTML = 'Start Again';
            guess[0].style.display = 'none';
            guess[0].value = '';


        }else{
            // console.log('Incorrect')
            msg.innerHTML =`<center>oops! ${user}</center>
            <p><center>Scramble word :${randWords}</center></p>
            <center>your guessing is wrongguess again</center>`
        }
    }
})