
function appendToDisplay(value){
    document.getElementById('display').value +=value;
}
function clearDisplay(){
    document.getElementById('display').value = '';
}
function delate()
{
  document.getElementById('display').value = display.value.slice(0,-1);
}
function CalculatResalt(){
   try{document.getElementById('display').value = 
    eval(document.getElementById('display').value  );
   }
   catch(error){
    document.getElementById('display').value = 'error'
   }
  }
 

  const bodyElement = document.body;
    const themeSlider = document.getElementById('theme-slider');

    // استرجاع الوضع المحفوظ
    let currentTheme = localStorage.getItem('theme') || "light";
    let currentPosition = localStorage.getItem('themePosition') || "0";

    bodyElement.setAttribute('data-theme', currentTheme);
    themeSlider.setAttribute('data-position', currentPosition);

    // الدالة التي تقوم بتغيير الوضع
    function toggleTheme() {
        let newPosition;
        let newTheme;

        if (currentPosition === "0") {
            newPosition = "1";
            newTheme = "dark";
        } else if (currentPosition === "1") {
            newPosition = "2";
            newTheme = "blue";
        } else {
            newPosition = "0";
            newTheme = "light";
        }

        bodyElement.setAttribute('data-theme', newTheme);
        themeSlider.setAttribute('data-position', newPosition);
        
        localStorage.setItem('theme', newTheme);
        localStorage.setItem('themePosition', newPosition);

        currentPosition = newPosition;
    }

    // إضافة حدث النقر
    themeSlider.addEventListener('click', toggleTheme);
