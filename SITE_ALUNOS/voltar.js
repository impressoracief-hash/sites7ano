(function () {
  // Cria o botão
  var btn = document.createElement('a');
  btn.href = '../../contato.html';
  btn.textContent = '⬅ Voltar à Página do Professor';
  btn.style.cssText = [
    'position:fixed',
    'bottom:20px',
    'right:20px',
    'padding:10px 18px',
    'background-color:#2e7d32',
    'color:white',
    'border-radius:25px',
    'text-decoration:none',
    'font-weight:bold',
    'font-size:0.9rem',
    'font-family:Arial,sans-serif',
    'box-shadow:0 3px 10px rgba(0,0,0,0.3)',
    'z-index:9999',
    'transition:background-color 0.2s,transform 0.2s'
  ].join(';');

  btn.addEventListener('mouseover', function () {
    this.style.backgroundColor = '#1b5e20';
    this.style.transform = 'scale(1.05)';
  });
  btn.addEventListener('mouseout', function () {
    this.style.backgroundColor = '#2e7d32';
    this.style.transform = 'scale(1)';
  });

  // Insere no body assim que o DOM estiver pronto
  if (document.body) {
    document.body.appendChild(btn);
  } else {
    document.addEventListener('DOMContentLoaded', function () {
      document.body.appendChild(btn);
    });
  }
})();
