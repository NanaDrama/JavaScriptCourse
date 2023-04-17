//task 1
$(document).ready(function () {
    $('h2.head').css('background-color', 'lightgreen');
    $('h2.head').find('.inner').css('font-size', '35px')
});
//task 2
document.addEventListener('DOMContentLoaded', function () {
    let links = document.querySelectorAll('a[href^="https://"]');
    links.forEach(function (link) {
        link.setAttribute('target', '_blank')
    })
})
//task 3
document.addEventListener('DOMContentLoaded', function () {
    let h3 = document.querySelectorAll('h3');
    h3.forEach(function (h3) {
        let nextElem = h3.nextElementSibling;
        if (nextElem && nextElem.tagName === 'DIV') {
            h3.parentNode.insertBefore(nextElem, h3);
        }
    })

})

//task 4
document.addEventListener('DOMContentLoaded', function() {
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let counter = 0;
    checkboxes.forEach(function(checkbox){
        checkbox.addEventListener('click', function(){
            if (this.checked){
                counter += 1;
                if (counter >=3){
                    checkboxes.forEach(function(checkbox){
                        checkbox.disabled = true;
                    })
                }            }
        })
    })
    
})
