const btnDropdown=document.getElementById("dropdown");
const dropdown=document.getElementById("lista");

document.addEventListener('wdn-button-clicked',(e)=>{
    console.log("tocado fuera");
            // Obtenemos el estado actual del atributo 'visible' en la dropdown
        const isVisible = dropdown.getAttribute('visible') === 'true';

        // Alternamos el atributo en la dropdown
        if (isVisible) {
            dropdown.setAttribute('visible', 'false');
        } else {
            dropdown.setAttribute('visible', 'true');
        }
});