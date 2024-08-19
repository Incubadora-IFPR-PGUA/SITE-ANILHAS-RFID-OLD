function formatDateTime(dateTime) {
    const date = new Date(dateTime);
    const pad = (num) => num.toString().padStart(2, '0');
    
    const day = pad(date.getDate());
    const month = pad(date.getMonth() + 1);
    const year = date.getFullYear();
    const hours = pad(date.getHours());
    const minutes = pad(date.getMinutes());
    const seconds = pad(date.getSeconds());
    
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}

setInterval(function () {
    $.get("https://85.31.63.241:3001/anilhas", function(data) {
        let obj = data;
        
        $('#table > tbody').empty();
        $('#table > caption').text(obj.length + " AVE(S) NO NINHO");

        obj.forEach(function(dev) {
            let person = dev.anilha;
            if (dev.nome != null) {
                person = dev.nome;
            }
            
            let actionButtons = ''; 
            const formattedDate = formatDateTime(dev.entrada);
            const currentPath = window.location.pathname;

            if (currentPath === '/tabelaAnilhas.html') {
                actionButtons = `
                    <td class='text-center'>
                        <button class='btn btn-primary btn-sm' onclick='editItem(${dev.id})'>Editar</button>
                        <button class='btn btn-danger btn-sm' onclick='deleteItem(${dev.id})'>Excluir</button>
                    </td>`;
            }

            $('#table > tbody').append(
                `<tr>
                    <td class='text-center'><b>${person}</b></td>
                    <td class='d-none d-md-table-cell text-center'><b>${formattedDate}</b></td>
                    ${actionButtons ? actionButtons : "<td></td>"}  <!-- Ensure a td element is always present -->
                </tr>`
            );
        });
    });
}, 2000);

function acceptAnilha(id) {
    
}

function deleteAnilha(id) {
    
}