function buscarUsuario() {
  return new Promise((resolve, reject) => {
    const tempo = Math.floor(Math.random() * 3000) + 1000; // 1 a 3s

    setTimeout(() => {
      const sucesso = Math.random() > 0.5; // 50% de chance
      
      if (sucesso) {
        resolve({ id: 1, nome: "André" });
      } else {
        reject("Falha na conexão");
      }
    }, tempo);
  });
}
buscarUsuario()
    .then(usuario => {
        console.log('Usuário encontrado:', usuario)
    })
    .catch(erro => {
        console.error('Erro:', erro)
    })