// select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

//set initial count
let count = 0;

btns.forEach(btn =>{
  btn.addEventListener('click', (e)=> {
    const styles = e.target.classList;
    if(styles.contains('decrease')){
      count--;
    }
    else if(styles.contains('reset')){
      count = 0;
    }
    else if(styles.contains('increase')){
      count++;
    }
    //set style if > 0 or if < 0
    if(count < 0){
      value.style.color = "red";
    }
    if(count > 0){
      value.style.color = "green";
    }
    if(count === 0){
      value.style.color = "#222";
    }
    //set the value to count
    value.textContent = count;
  })
})