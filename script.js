var buttons=document.querySelectorAll('button');
var input=document.querySelector('input');
var expression='';
buttons.forEach(button=>{
    button.addEventListener('click',e=>{
        e.preventDefault();
        var value=button.textContent;
        if(value=='Ac'){
            expression='';
            input.value='';
        }
        else if(value==='calc'||value==='='){
            try{
                input.value=eval(expression);
                expression=input.value;
            }catch{
                input.value='Error';
                expression='';
            }
        }
            else{
                expression+=value;
                input.value=expression;
            }
    });
});
