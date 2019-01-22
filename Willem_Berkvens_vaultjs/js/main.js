var codeContainer = document.getElementById("code-container")
var clickCounter = 0;
var numberOne;
var numberTwo;
var numberThree;


var red = document.getElementById("red");

var numberButtons = document.getElementsByClassName('buttonNumber');

function getNumber(clickedButton)
{
    codeContainer.innerHTML += clickedButton.value;
    clickCounter++;

    if(clickCounter == 1)
    {
        numberOne = clickedButton.value;
    }
    else if(clickCounter == 2)
    {
        numberTwo = clickedButton.value;
    }
    else
    {
        numberThree = clickedButton.value;     
    }
    if(clickCounter == 3)
    {
        for( i = 0; i < numberButtons.length; i++) 
        {
            numberButtons[i].setAttribute('disabled', 'disabled');
        }
       if(numberOne == 1 && numberTwo == 1 && numberThree == 2)
        {
            answer.innerHTML = "Correct";
            
            var green = document.getElementById("green");

            var intervalTimer = 0;
            
            var blink = setInterval(function()
            {
                intervalTimer++;

                if(green.style.visibility =='hidden')
                {
                    green.style.visibility ='visible';
                }
                else
                {
                    green.style.visibility = 'hidden';
                }

                if(intervalTimer == 10)
                {
                    clearInterval(blink);

                    clickCounter = 0;
                    answer.innerHTML = "";
                    intervalTimer = 0;
                    enableButtons();
                    codeContainer.innerHTML = "";
                }
            }, 500
          );
        }
        else
        {
            answer.innerHTML = "Incorrect";

            var red = document.getElementById("red");

            var intervalTimer = 0;
            
            var blink = setInterval(function()
            {
                intervalTimer++;

                if(red.style.visibility =='hidden')
                {
                    red.style.visibility ='visible';
                }
                else
                {
                    red.style.visibility = 'hidden';
                }

                if(intervalTimer == 10)
                {
                    clearInterval(blink);

                    clickCounter = 0;
                    answer.innerHTML = "";
                    intervalTimer = 0;
                    enableButtons();
                    codeContainer.innerHTML = "";
                }
            }, 500
            );
        }
    function enableButtons()
    {
        for( i = 0; i < numberButtons.length; i++)
        {
           numberButtons[i].removeAttribute('disabled');
        }
    }
    }
}

