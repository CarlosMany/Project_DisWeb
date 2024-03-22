document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.menu-hamburguesa').addEventListener('click', function() {
        // Lista de los ID de menús
        var ids = ['enlacesMenu', 'enlacesMenu2', 'enlacesMenu3'];

        // Itera sobre cada ID, selecciona el elemento y cambia su estado de visualización
        ids.forEach(function(id) {
            var el = document.getElementById(id);
            if (el.style.display === 'block') {
                el.style.display = 'none';
            } else {
                el.style.display = 'block';
            }
        });
    });
});
