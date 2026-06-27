const form = document.getElementById('formPesquisa');
const resultado = document.getElementById('resultado');
const limparBtn = document.getElementById('limparBtn');

form.addEventListener('submit', async function (e) {
  e.preventDefault();

  const titulo = document.getElementById('titulo').value.trim();
  const autor = document.getElementById('autor').value.trim();

  // Validação inicial
  if (!titulo && !autor) {
    resultado.innerHTML = '<p class="erro">Por favor, preencha ao menos o título ou o autor.</p>';
    return;
  }

  // Feedback visual de carregamento
  resultado.innerHTML = '<p class="carregando">Buscando livros...</p>';

  // Construção inteligente da query string
  let query = '';
  if (titulo) query += `intitle:${encodeURIComponent(titulo)}`;
  if (autor) query += `${query ? '+' : ''}inauthor:${encodeURIComponent(autor)}`;

  try {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    
    if (!response.ok) throw new Error('Erro na requisição da API');
    
    const data = await response.json();

    if (data.items && data.items.length > 0) {
      resultado.innerHTML = data.items.slice(0, 10).map(item => {
        const volume = item.volumeInfo;
        
        // Tratamento seguro para HTTPS no thumbnail
        let thumbnail = '';
        if (volume.imageLinks && volume.imageLinks.thumbnail) {
          thumbnail = volume.imageLinks.thumbnail.replace(/^http:/i, 'https:');
        }

        // Limita o tamanho da descrição para não quebrar o layout do card
        const maxDescLength = 180;
        let descricao = volume.description || 'Sem descrição disponível.';
        if (descricao.length > maxDescLength) {
          descricao = descricao.substring(0, maxDescLength) + '...';
        }

        // Formatação dos autores
        const autores = volume.authors ? volume.authors.join(', ') : 'Desconhecido';

        // Renderização com as classes corrigidas para o CSS moderno (.livro e .livro-info)
        return `
          <div class="livro">
            ${thumbnail ? `
              <img src="${thumbnail}" alt="Capa de ${volume.title || 'Livro'}" loading="lazy">
            ` : `
              <div class="no-image" style="width: 90px; height: 130px; background: #e2e8f0; display: flex; align-items: center; text-align: center; font-size: 0.75rem; color: #64748b; border-radius: 8px; padding: 4px; flex-shrink: 0;">Sem capa</div>
            `}
            <div class="livro-info">
              <h2>${volume.title || 'Sem título'}</h2>
              <p><strong>Autor:</strong> ${autores}</p>
              <p><strong>Publicação:</strong> ${volume.publishedDate || 'N/A'}</p>
              <p><strong>Descrição:</strong> ${descricao}</p>
              ${volume.infoLink ? `
                <p style="margin-top: auto; padding-top: 8px;">
                  <a href="${volume.infoLink}" target="_blank" rel="noopener noreferrer" style="color: var(--primary); font-weight: 600; text-decoration: none;">Mais informações &rarr;</a>
                </p>
              ` : ''}
            </div>
          </div>
        `;
      }).join('');
    } else {
      resultado.innerHTML = '<p class="erro">Nenhum livro encontrado.</p>';
    }
  } catch (error) {
    resultado.innerHTML = '<p class="erro">Erro ao buscar livros. Tente novamente.</p>';
    console.error('Erro na busca:', error);
  }
});

// Ação de limpar redefinida para os padrões originais de forma limpa
limparBtn.addEventListener('click', () => {
  form.reset(); // Reseta todos os campos do formulário nativamente
  resultado.innerHTML = '<p class="text-sm text-slate-400 text-center py-4">Digite os parâmetros acima para iniciar a busca.</p>';
});
