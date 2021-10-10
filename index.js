// intanciate an object ajax
var xhr = new XMLHttpRequest();
var index = 0;
// use function open() with three params 
//: method , url, asyn

var btn = document.getElementById('btn');
var paragraph = document.getElementById('para');
btn.addEventListener('click',function(){
    xhr.open('GET', 'json'+index+'.json',true);
        xhr.onload = function(){
           var n = JSON.parse(xhr.responseText);
           renderHtml(n);
        };     
        xhr.send();
        index++;
        if( index>2){
            btn.style.display = 'none';
        }
});

function renderHtml(data){
    for (let i = 0; i < data.length; i++) {
        var dataString="";
        dataString = "<p> L'eleve "+ data[i].name+ " dont l'identifiant est "+ data[i].id+ " est etudiant a " +data[i].school+" du Cameroun" ;
       
        dataString +='</p>';
        
    
        paragraph.insertAdjacentHTML('beforeend', dataString);
            
    } 
}
btn2 = document.getElementById('btne');
paragraph1 = document.getElementById('info-git');
var users = new XMLHttpRequest();


btn2.addEventListener('click', function(){
    users.open('GET', 'https://api.github.com/users',true)
    users.onload = function(){
        console.log(JSON.parse(users.responseText));
    
    }
    users.send();

})

function githUsers(data){
    var output='';
    for(i in data){
        output += `<p> ${data[i].login}</p>`
        paragraph1.insertAdjacentHTML('beforeend', output);
    }

}