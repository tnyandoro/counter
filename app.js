// set initial count 
let count = 0;

// Select value and buttons

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
  btn.addEventListener('click', function(e){
    const styles = e.currentTarget.classList;
    // Decrease the value
    if(styles.contains('decrease')){
      count--;
    }
    else if(styles.contains('increase')){
      count++;
    }
    //Change the value to count
    value.textContent = count;
  });
});