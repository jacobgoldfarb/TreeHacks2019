var array = [];
var elements = document.body.getElementsByTagName('*');
for(var i = 0; i < elements.length; i++) {
    var current = elements[i];
    if(current.children.length === 0 && current.textContent.replace(/ |\n/g,'') !== '') {
        array.push(current.textContent);
    }
}
for(var i = 0; i < array.length; i++) {
    alert(array[i]);
}
