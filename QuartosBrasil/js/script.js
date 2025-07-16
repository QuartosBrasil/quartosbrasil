document.addEventListener("DOMContentLoaded", function () {
  // Máscara de telefone ao digitar
  const telefoneInput = document.getElementById('telefone');
  if (telefoneInput) {
    telefoneInput.addEventListener('input', function (e) {
      let value = e.target.value.replace(/\D/g, '');
      if (value.length > 11) value = value.slice(0, 11);

      let formatted = '';
      if (value.length > 0) formatted += '(' + value.substring(0, 2);
      if (value.length >= 3) formatted += ') ' + value.substring(2, 7);
      if (value.length >= 8) formatted += '-' + value.substring(7);

      e.target.value = formatted;
    });
  }

  // Envio do formulário para o WhatsApp
  const formContato = document.getElementById('form-contato');
  if (formContato) {
    formContato.addEventListener('submit', function (e) {
      e.preventDefault();

      // Coleta dos dados
      const nome = document.getElementById('nome').value.trim();
      const telefone = document.getElementById('telefone').value.trim();
      const mensagem = document.getElementById('mensagem').value.trim();

      // Validação básica
      if (!nome || !telefone || !mensagem) {
        alert("Por favor, preencha todos os campos.");
        return;
      }

      // Número do WhatsApp (formato internacional sem + ou espaços)
      const numeroDestino = '5567981395726';

      // Montagem da mensagem com quebra de linha
      const texto = `Olá! Me chamo ${nome}, meu telefone é ${telefone}.\n${mensagem}`;

      // Codificação da URL
      const url = `https://wa.me/${numeroDestino}?text=${encodeURIComponent(texto)}`;

      // Abre nova aba com o WhatsApp
      window.open(url, '_blank');

      // Limpa o formulário após envio
      this.reset();
    });
  }
});
