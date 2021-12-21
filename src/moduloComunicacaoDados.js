// Estabelecendo respostas básicas dos Modais

const comunicacaoModal = [
  {
    idModal: 'camposVazios1',
    title: 'Campos Vazios',
    bodyModal: 'Os campos não podem estar vazios!',
    b1: 'fechar',
    b2: 'Salvar'
  },

  {
    idModal: 'usuarioNaoExiste1',
    title: 'Não encontramos o usuário',
    bodyModal: 'Não é possível encontrar o usuário solicitado',
    b1: 'Fechar',
    b2: 'Criar'
  },

  {
    idModal: 'loginExecutado1',
    title: 'Parabéns você está logado',
    bodyModal:
      'As informações foram confirmadas, a partir de agora está logado',
    b1: 'Fechar',
    b2: 'GoodPay Home'
  },

  {
    idModal: 'falhaLogin1',
    title: 'Não foi possível logar',
    bodyModal: 'Erro nas informações dadas ao sistema GoodPay',
    b1: 'Fechar',
    b2: 'Esqueci a senha'
  }
]

export default comunicacaoModal;