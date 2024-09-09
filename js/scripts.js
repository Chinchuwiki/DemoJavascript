function includeHTML() {
    const elements = document.querySelectorAll("[id]");

    elements.forEach(el => {
        const id = el.getAttribute("id");
        fetch(`components/${id}.html`)
            .then(response => {
                if (response.ok) return response.text();
                throw new Error('Error al cargar el componente');
            })
            .then(html => {
                el.innerHTML = html;
            })
            .catch(err => console.error(err));
    });
}

document.addEventListener("DOMContentLoaded", includeHTML);