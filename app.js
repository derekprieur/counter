// set initial count
let count = 0;

// select value and buttons
const value = document.getElementById('value');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
        if (btn.className == 'btn decrease') {
            count--;
        }
        else if (btn.className == 'btn reset') {
            count = 0;
        }
        else if (btn.className == 'btn increase') {
            count++;
        }

        if (count > 0) {
            value.setAttribute('style', 'color:green');
        } else if (count < 0) {
            value.style.color = 'red';
        } else {
            value.setAttribute('style', 'color:black');
        }
        value.textContent = count
    })

});