// Função para ativar/desativar campos com base na seleção do checkbox "Anônimo".
function toggleAnonimato() {
    // Verifica se o checkbox "Anônimo" está marcado.
    const isAnonimo = document.getElementById('anonimo').checked;
    // Seleciona todos os campos com a classe 'optional-field' que devem ser afetados.
    const fields = document.querySelectorAll('.optional-field');

    // Itera sobre cada campo e aplica as configurações de desativação e limpeza.
    fields.forEach(field => {
        // Desativa ou ativa o campo com base no estado do checkbox "Anônimo".
        field.disabled = isAnonimo;
        // Limpa o valor dos campos quando o modo anônimo é selecionado.
        field.value = '';
    });
}

// Função para pré-visualizar a imagem carregada pelo usuário.
function previewImage(event) {
    // Obtém o elemento de imagem onde a pré-visualização será mostrada.
    const preview = document.getElementById('preview');
    // Obtém o arquivo selecionado pelo usuário através do evento (geralmente um input de tipo 'file').
    const file = event.target.files[0];

    // Verifica se um arquivo foi selecionado.
    if (file) {
        // Cria um novo objeto FileReader para ler o conteúdo do arquivo.
        const reader = new FileReader();

        // Define a função de callback que será chamada quando a leitura do arquivo for concluída.
        reader.onload = function (e) {
            // Define o conteúdo da pré-visualização da imagem para o resultado da leitura do arquivo.
            preview.src = e.target.result;
            // Exibe a imagem de pré-visualização.
            preview.style.display = 'block';
        }

        // Lê o arquivo como uma URL de dados (Data URL), permitindo que a imagem seja mostrada como um URI.
        reader.readAsDataURL(file);
    } else {
        // Se nenhum arquivo for selecionado, oculta a imagem de pré-visualização.
        preview.src = "#";
        preview.style.display = 'none';
    }
}
