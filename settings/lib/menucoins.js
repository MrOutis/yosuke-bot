const menucoins = (prefix, sender) => {
  
// [MENU COINS] NÃO APAGUE ESSE ${PREFIX} E NÃO COLOQUE NADA DENTRO POIS ESTÁ PUXANDO DA PASTA config.js SE QUIZER APAGAR APAGUE TODO
  
return `
╭──────────────╮
┆Bem vindo @${sender.split("@")[0]}
├────────────
┆❅⊳ ${prefix}Banco (Ver quantos de coins você tem)
┆❅⊳ ${prefix}Trabalhar (Para ganhar coins)
┆❅⊳ ${prefix}Roubar_coins [@] (Para roubar coins de outra pessoa)
┆❅⊳ ${prefix}Pix [@] (Quantidade de deseja Transferir para a pessoa)
╰───────────────╯
`
}
exports.menucoins = menucoins