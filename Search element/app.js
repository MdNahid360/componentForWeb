let inputBox = document.getElementById('input');
inputBox.addEventListener('input', (e) => {
    let inputValue = e.target.value.toUpperCase();
    let findUl = document.getElementById('allItems');
    let findLi = findUl.getElementsByTagName('li');
    
    for (let i = 0; i < findLi.length; i++) {
        let a = findLi[i].getElementsByTagName('a')[0];
        if (a.innerText.toUpperCase().indexOf(inputValue) > -1) {
            findLi[i].style.display = 'flex';
        }else {
           findLi[i].style.display = 'none';
        }
        
    }
})