function ExcecuteSQL(objhtml)
{    
    var sqlcommand = objhtml.getAttribute('data-sql');
    editor.setValue(sqlcommand);      
}