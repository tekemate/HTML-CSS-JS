const searchInput = document.getElementById("searchInput")

searchInput.addEventListener("keyup", function(event){
    let searchQuery = event.target.value.toLowerCase();
    let allNames = document.getElementsByClassName("name");

    for(let i = 0; allNames.length; i++){
        const currentName = allNames[i].textContent.toLowerCase();
        if (currentName.includes(searchQuery)){
            allNames[i].style.display = "block";
        } else {
            allNames[i].style.display = "none";
        }
    }

})

