function showElement() {
    var element = document.querySelector('.element');
    var desc0 = document.getElementById('desc0'); // Ambil elemen desc0
    var dragon = document.querySelectorAll('.grid-desc');
    var computedStyle = window.getComputedStyle(element);
    var displayStyle = computedStyle.getPropertyValue('display');

    if (displayStyle === 'flex') {
        element.style.display = 'none';
        dragon.forEach(function(desc) {
            desc.style.display = 'none';
        });
    } else {
        element.style.display = 'flex';
        element.scrollIntoView({ behavior: 'smooth' });
        desc0.style.display = 'flex'; // Tampilkan desc0
        desc0.scrollIntoView({ behavior: 'smooth' }); // Gulir ke desc0
    }
}


function showDragon(charId) {
    var descId = 'desc' + charId;
    var descElement = document.getElementById(descId);
    var computedStyle = window.getComputedStyle(descElement);
    var displayStyle = computedStyle.getPropertyValue('display');
    if (displayStyle === 'flex') {
        descElement.style.display = 'none';
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