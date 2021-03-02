// set initial count 
let count = 0;

// Select value and buttons

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
  btn.addEventListener('click', function(e){
    const styles = e.currentTarget.classList;
    if(styles.contains('decrease')){
      count--;
    }
    //Change the value to count
    value.textContent = count;
  });
});