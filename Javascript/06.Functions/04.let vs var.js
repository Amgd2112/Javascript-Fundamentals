// Let vs var
function count1(n){
    //let just accessable by the current block
    for(let i = 0; i < n; i++)
        console.log(i);

    try{
        console.log(i);//error 
    } catch(e){
        console.error(e);
    }
}
count1(5);


function count2(n){
    //var accessable by the function scope
    for(var i = 0; i < n; i++)
        console.log(i);

    try{
        console.log(i);//not error
    } catch(e){
        console.error(e);
    }
}
count2(5);