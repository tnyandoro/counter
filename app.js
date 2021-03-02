// set initial count 
let count = 0;

// Select value and buttons

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
  btn.addEventListener('click', function(e){
    const styles = e.currentTarget.classList;
    // Decreasing the value
    if(styles.contains('decrease')){
      count--;
    }
    // Icreasing the value
    else if(styles.contains('increase')){
      count++;
    }
    else{
      count = 0;
    }
    // Assign a color value to increased value
    if(count > 0){
      value.style.color = 'green';
    }
    //Change the value to count
    value.textContent = count;
  });
});