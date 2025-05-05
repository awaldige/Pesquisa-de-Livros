const form = document.getElementById('formPesquisa');
const resultado = document.getElementById('resultado');
const limparBtn = document.getElementById('limparBtn');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const titulo = document.getElementById('titulo').value.trim();
  const autor = document.getElementById('autor').value.trim();

  if (!titulo && !autor) {
    resultado.innerHTML = '<p class="erro">Por favor, preencha ao menos o título ou o autor.</p>';
    return;
  }

  resultado.innerHTML = '<p class="carregando">Carregando...</p>';

  let query = '';
  if (titulo) query += `intitle:${encodeURIComponent(titulo)}`;
  if (autor) query += `${query ? '+' : ''}inauthor:${encodeURIComponent(autor)}`;

  fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
    .then(response => response.json())
    .then(data => {
      if (data.items && data.items.length > 0) {
        resultado.innerHTML = data.items.slice(0, 10).map(item => {
          const volume = item.volumeInfo;
          return `
            <div class="livro">
              <h2>${volume.title || 'Sem título'}</h2>
              <p><strong>Autor(es):</strong> ${volume.authors ? volume.authors.join(', ') : 'Desconhecido'}</p>
              <p><strong>Publicado em:</strong> ${volume.publishedDate || 'Data desconhecida'}</p>
              <p><strong>Descrição:</strong> ${volume.description ? volume.description : 'Sem descrição disponível'}</p>
              ${volume.imageLinks ? `<img src="${volume.imageLinks.thumbnail}" alt="Capa de ${volume.title}">` : ''}
              ${volume.infoLink ? `<p><a href="${volume.infoLink}" target="_blank">Mais informações</a></p>` : ''}
            </div>
            <hr>
          `;
        }).join('');
      } else {
        resultado.innerHTML = '<p class="erro">Nenhum livro encontrado.</p>';
      }
    })
    .catch(error => {
      resultado.innerHTML = '<p class="erro">Erro ao buscar livros. Tente novamente.</p>';
      console.error('Erro:', error);
    });
});

limparBtn.addEventListener('click', () => {
  resultado.innerHTML = '';
  document.getElementById('titulo').value = '';
  document.getElementById('autor').value = '';
});

