const searchWrapper = document.getElementById('searchInput');
const inputBox = document.getElementById('input')
const suggestBox = document.getElementById('autocomplete')

inputBox.onkeyup = (e) => {
    let userData = e.target.value;
    let emptyArray = [];
    if (userData) {
        emptyArray = suggestions.filter((data) => {
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase())

        });
        emptyArray = emptyArray.map((data) => {
            return data = '<li id="lItem" class="uItem">' + data + '</li>'
        });
        searchWrapper.classList.add('active');
        showSuggestions(emptyArray);

        let selectList = suggestBox.querySelectorAll("li");
        for (let i = 0; i < selectList.length; i++) {
            selectList[i].setAttribute("onmouseover", "select(this)");


        }
    } else {
        searchWrapper.classList.remove('active');
    }

}


// select function
function select(element){
        let selectUserData = element.textContent;
        inputBox.value = selectUserData;
        
 }

function showSuggestions(list) {
    let listData;
    if (!list.length) {
        let userValue = inputBox.value;
        listData = '<li>' + userValue + '</li>';
    } else {
        listData = list.join('');
    }
    suggestBox.innerHTML = listData;
}