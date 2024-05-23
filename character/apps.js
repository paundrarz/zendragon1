function showDescription(charId) {
    var descId = 'desc' + charId;
    var descElement = document.getElementById(descId);
    var computedStyle = window.getComputedStyle(descElement);
    var displayStyle = computedStyle.getPropertyValue('display');
    if (displayStyle === 'flex') {
        descElement.style.display = 'none';
        window.scrollTo(0, 0);
        return
    } else {
        var allGridDesc = document.querySelectorAll('.grid-desc');
        allGridDesc.forEach(function(gridDesc) {
            gridDesc.style.display = 'none';
        });
        descElement.style.display = 'flex';
        descElement.scrollIntoView({ behavior: 'smooth' });
    }
}


const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");
menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("hidden");
});