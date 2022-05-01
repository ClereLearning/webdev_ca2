/*window.addEventListener('load', (event) => {
    let spinner = document.getElementById("spinnersql");
    spinner.style.visibility = 'visible'; 

  });
  
  window.onload = (event) => {
    let spinner = document.getElementById("spinnersql");
    spinner.style.visibility = 'hidden'; 
  };
*/

function ExcecuteSQL(objhtml)
{   
    document.getElementById("output").innerHTML= "See results here";
    document.getElementById("error").innerHTML= "";    
    var sqlcommand = objhtml.getAttribute('data-sql');
    editor.setValue(sqlcommand);    
}

