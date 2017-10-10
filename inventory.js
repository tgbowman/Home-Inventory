const HomeInventory = JSON.parse(localStorage.getItem("homeInventory"))
const inventoryEl = document.getElementsByClassName("inventory")[0];

for (let key in HomeInventory) {
    const currentType = HomeInventory[key];

    for (var i = 0; i < currentType.length; i++) {
        var item = currentType[i];
        
        inventoryEl.innerHTML += `
        <section class="${key} section">
            <h2>${item.name}</h2>
            <p class="${key}_location">
            Location: ${item.location} </p>
            <p class="${key}_description">
            Description: ${item.description} </p>
        `
    }










}