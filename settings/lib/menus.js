const menu = (prefix, sender) => {
  
// [MENU PRINCIPAL] NÃO APAGUE ESSE ${PREFIX} E NÃO COLOQUE NADA DENTRO POIS ESTÁ PUXANDO DA PASTA config.js SE QUIZER APAGAR APAGUE TODO
  
return `
  ╭═════════════════ ⪩
╭┤𝐃𝐈𝐕𝐄𝐑𝐒𝐎𝐒-𝐌𝐄𝐍𝐔𝐒
┃│✾ ⋟ ${prefix}Menudono
┃│✾ ⋟ ${prefix}Menuadm
┃│✾ ⋟ ${prefix}Menupremium
┃│✾ ⋟ ${prefix}Efeitosimg
┃│✾ ⋟ ${prefix}Logos
┃│✾ ⋟ ${prefix}alteradores
┃│✾ ⋟ ${prefix}Brincadeiras
┃│✾ ⋟ ${prefix}Menucoins
╰╦═════════════════ ⪩
╭┤𝐂𝐌𝐃𝐒-𝐃𝐄-𝐌𝐄𝐌𝐁𝐑𝐎
┃│✾ ⋟ ${prefix}Idiomas (Gtts)
┃│✾ ⋟ ${prefix}Saldo (Saldo/disponível)
┃│✾ ⋟ ${prefix}Bug (Questione/Erros)
┃│✾ ⋟ ${prefix}Infodono (Info-dono)
┃│✾ ⋟ ${prefix}Sugestao (Dica/Sugestão)
┃│✾ ⋟ ${prefix}Avalie (O-quanto-bom)
┃│✾ ⋟ ${prefix}Comprar (Valores)
┃│✾ ⋟ ${prefix}Alugar (Alugar/dono)
╰╦═════════════════ ⪩
╭┤𝐂𝐌𝐃𝐒-𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐕𝐎𝐒
┃│✾ ⋟ ${prefix}Ping (Velocidade/Up) 
┃│✾ ⋟ ${prefix}Atividade (do Grupo)
┃│✾ ⋟ ${prefix}Rankativo
┃│✾ ⋟ ${prefix}Checkativo (@Marcar)
┃│✾ ⋟ ${prefix}Ranklevel (do Grupo) 
╰╦══════════════════ ⪨
╭┤𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐒/𝐏𝐄𝐒𝐐𝐔𝐈𝐒𝐀𝐒
┃│✾ ⋟ ${prefix}Play (Nome)
┃│✾ ⋟ ${prefix}Playdoc (Nome)
┃│✾ ⋟ ${prefix}Playaudio 
┃│✾ ⋟ ${prefix}Playvideo
┃│✾ ⋟ ${prefix}Shazam (Mencionar-aud)
┃│✾ ⋟ ${prefix}Tiktok (Link) 
┃│✾ ⋟ ${prefix}Twitter (Link) 
┃│✾ ⋟ ${prefix}Instagram (Link) 
┃│✾ ⋟ ${prefix}Soundcloud (Link)
┃│✾ ⋟ ${prefix}Kwaivideo (Link) 
┃│✾ ⋟ ${prefix}Mediafire (Link)
┃│✾ ⋟ ${prefix}Imgpralink (Marcar-img)
┃│✾ ⋟ ${prefix}Videopralink (Marcar-vid)
╰╦═════════════════ ⪩
╭┤𝐅𝐈𝐆𝐔𝐑𝐈𝐍𝐇𝐀𝐒 
┃│✾ ⋟ ${prefix}Ttp (Seu texto)
┃│✾ ⋟ ${prefix}Fsticker (Marcar-foto)
┃│✾ ⋟ ${prefix}Sticker (Marcar-foto)
┃│✾ ⋟ ${prefix}Toimg (Marcar-sticker)
┃│✾ ⋟ ${prefix}Attp (Seu texto)
┃│✾ ⋟ ${prefix}Togif (Marcar-sticker)
┃│✾ ⋟ ${prefix}Roubar (Texto/Texto)
┃│✾ ⋟ ${prefix}Qc (Mensagem desejada)
┃│✾ ⋟ ${prefix}Figaleatoria
╰╦═════════════════ ⪩
╭┤𝐂𝐌𝐃𝐒-𝐀𝐋𝐄𝐀𝐓𝐎𝐑𝐈𝐎𝐒
┃│✾ ⋟ ${prefix}Gtts (Idioma + Texto)
┃│✾ ⋟ ${prefix}Tagme 
┃│✾ ⋟ ${prefix}Emoji (😏/Whatsapp)
┃│✾ ⋟ ${prefix}Emojimix (Emoji+Emoji)
┃│✾ ⋟ ${prefix}Tabela (Letras/Simbolos) 
┃│✾ ⋟ ${prefix}Conselhobiblico
┃│✾ ⋟ ${prefix}Simi (Fale com ela)  
┃│✾ ⋟ ${prefix}Perfil
┃│✾ ⋟ ${prefix}Calcular (10 + 10)
┃│✾ ⋟ ${prefix}Fazernick (Oq deseja)
┃│✾ ⋟ ${prefix}Ptvmsg (Mencione-V)
┃│✾ ⋟ ${prefix}Traduzir (Palavra)
╰══════════════════ ⪨ 
`;

};

exports.menu = menu;

// NÃO APAGUE ESSE ${NickDono} nem 
//${numerodn} nem ${NomeDoBot} nem ${prefix} só se quiser apagar completo, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa.

// MENU DE ADMINISTRADORES 

const adms = (prefix, sender) => { 
 
// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa. 

	return `
╭┤𝐌𝐄𝐍𝐔-𝐀𝐃𝐌𝐈𝐍𝐒
┃│✾ > ${prefix}Antiimg (1/0)
┃│✾ > ${prefix}Antivideo (1/0)
┃│✾ > ${prefix}Antiaudio (1/0)
┃│✾ > ${prefix}Antisticker (1/0)
┃│✾ > ${prefix}Antiloc (1/0)
┃│✾ > ${prefix}Anticontato (1/0)
┃│✾ > ${prefix}Antidoc (1/0)
┃│✾ > ${prefix}Antilinkgp (1/0)
┃│✾ > ${prefix}Antilinkhard (1/0)
┃│✾ > ${prefix}Antifake (1/0)
┃│✾ > ${prefix}Antinotas (1/0)
┃│✾ > ${prefix}Anticatalogo (1/0)
┃│✾ > ${prefix}Antipalavrao (1/0)
┃│✾ > ${prefix}Limitecaracteres (1/0)
┃│✾ > ${prefix}Bemvindo (1/0)
┃│✾ > ${prefix}Bemvindo2 (1/0)
┃│✾ > ${prefix}Simih (1/0)
┃│✾ > ${prefix}Simih2 (1/0)
┃│✾ > ${prefix}Autosticker (1/0)
┃│✾ > ${prefix}Autorepo (1/0)
┃│✾ > ${prefix}Leveling (1/0)
┃│✾ > ${prefix}Modonsfw (1/0)
┃│✾ > ${prefix}Odelete (1/0)
┃│✾ > ${prefix}x9visuunica (1/0)
┃│✾ > ${prefix}x9 (1/0)
┃│✾ > ${prefix}Legendabv (Texto)
┃│✾ > ${prefix}Legendasaiu (Texto)
┃│✾ > ${prefix}Legendabv2 (Texto)
┃│✾ > ${prefix}Legendasaiu2 (Texto)
┃│✾ > ${prefix}So_adm
┃│✾ > ${prefix}Listanegra (Número)
┃│✾ > ${prefix}Tirardalista (Número)
┃│✾ > ${prefix}ListanegraG (Número)
┃│✾ > ${prefix}TirardalistaG (Número)
┃│✾ > ${prefix}Multiprefixo (1/0)
┃│✾ > ${prefix}Add_prefixo
┃│✾ > ${prefix}Tirar_prefixo
┃│✾ > ${prefix}Banghost
┃│✾ > ${prefix}Mute (@mencionar)
┃│✾ > ${prefix}Desmute (@mencionar)
┃│✾ > ${prefix}Add 5511.. (Para-adicionar)
┃│✾ > ${prefix}Reviver (Responder-mensagem)
┃│✾ > ${prefix}Kick [@] (Para-remover)
┃│✾ > ${prefix}Ban (Responder-mensagem)
┃│✾ > ${prefix}Promover [@] (Ser-admin)
┃│✾ > ${prefix}Rebaixar [@] (Rebaixar-adm)
┃│✾ > ${prefix}Descgp (Texto)
┃│✾ > ${prefix}Nomegp (Nome)
┃│✾ > ${prefix}Totag (Mencionar algo)
┃│✾ > ${prefix}Grupo (f/a)
┃│✾ > ${prefix}Status
┃│✾ > ${prefix}Limpar (texto-invisível-gp)
┃│✾ > ${prefix}Atividades (DO-GRUPO)
┃│✾ > ${prefix}Linkgp
┃│✾ > ${prefix}Grupoinfo
┃│✾ > ${prefix}Hidetag (txt) (marcação)
┃│✾ > ${prefix}Marcar (marca tds do gp)
┃│✾ > ${prefix}Marcar2 (Marca-tds-wa.me)
┃│✾ > ${prefix}Anagrama (1/0)
┃│✾ > ${prefix}Antipalavra (1/0)
┃│✾ > ${prefix}Criartabela (Escreva-algo)
┃│✾ > ${prefix}Tabelagp (Veja a tabela)
╰═══════════════════ 

`;
};

exports.adms = adms;

// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa. 

// MENU DE DONO

const menudono = (prefix, sender) => {
	
// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode alterar ele tod0, menos as definições, só se quiser apagar a definição completa. 	

return `
╭┤𝐌𝐄𝐍𝐔-𝐏𝐑𝐎𝐏𝐑𝐈𝐄𝐓𝐀𝐑𝐈𝐎
┃│✾ > ${prefix}Bangp
┃│✾ > ${prefix}Unbangp
┃│✾ > ${prefix}Blockcmd (cmd)
┃│✾ > ${prefix}Unblockcmd (cmd)
┃│✾ > ${prefix}Cmdpremlist
┃│✾ > ${prefix}Addcmdprem (cmd)
┃│✾ > ${prefix}Delcmdprem (cmd)
┃│✾ > ${prefix}Fundobemvindo (marcar-img)
┃│✾ > ${prefix}Fundosaiu (marcar-img)
┃│✾ > ${prefix}Serpremium
┃│✾ > ${prefix}Listagp
┃│✾ > ${prefix}Antipalavrão (1/0)
┃│✾ > ${prefix}Antiligar (1/0)
┃│✾ > ${prefix}Modoaluguel (1/0)
┃│✾ > ${prefix}Fazertm (Texto)
┃│✾ > ${prefix}Rgtm
┃│✾ > ${prefix}Tirardatm
┃│✾ > ${prefix}Listatm
┃│✾ > ${prefix}Infocmd_add (cmd/texto)
┃│✾ > ${prefix}Infocmd_del (cmd)
┃│✾ > ${prefix}Visualizarmsg
┃│✾ > ${prefix}Console (Logs no terminal)
┃│✾ > ${prefix}Botoff (Funcionalidade do bot)
┃│✾ > ${prefix}Boton (Funcionalidade do bot)
┃│✾ > ${prefix}Addpalavra (palavrão)
┃│✾ > ${prefix}Delpalavra (palavrão)
┃│✾ > ${prefix}Ativo
┃│✾ > ${prefix}Rmpalavra_forca (palavra)
┃│✾ > ${prefix}Addpalavras_forca (titulo|tema|dica)
┃│✾ > ${prefix}Ausente (fale-oq-faz)
┃│✾ > ${prefix}Delpremium @(marca)
┃│✾ > ${prefix}Addpremium @(marca)
┃│✾ > ${prefix}Privphotobot (all/cntt/ngm)
┃│✾ > ${prefix}Privaddgroup (all/cntt/ngm)
┃│✾ > ${prefix}Clonar [@] (rouba ft de prf)
┃│✾ > ${prefix}Fotobot (img, = foto do BT)
┃│✾ > ${prefix}Descriçãogp (digite-algo)
┃│✾ > ${prefix}Block [@] (bloq de usar cmds)
┃│✾ > ${prefix}Unblock [@] (desbloquear)
┃│✾ > ${prefix}Setprefix (prefixo-novo)
┃│✾ > ${prefix}Bcgp (TM-PRA-PV-MEMBROS)
╰═══════════════════ 
`;

};

exports.menudono = menudono;

// MENU DE LOGOS 

const menulogos = (prefix, sender) => {
  
// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa.  
  
  return `
╭┤𝐋𝐎𝐆𝐎𝐒 - 𝐕𝐈𝐃𝐄𝐎
┃│✾ > ${prefix}Pubgv (Texto)
┃│✾ > ${prefix}Natalmsg (Texto)
┃│✾ > ${prefix}Anonovo (Texto)
┃│✾ > ${prefix}Trigrev (Texto)
╰╦══════════════════ 
╭┤𝐋𝐎𝐆𝐎𝐒 𝟑 𝐓𝐄𝐗𝐓𝐎𝐒
┃│✾ > ${prefix}Googlesg (txt/txt/txt)
╰╦══════════════════ 
╭┤𝐋𝐎𝐆𝐎𝐒 𝟐 𝐓𝐄𝐗𝐓𝐎𝐒
┃│✾ > ${prefix}Comporn (Texto/Texto)
┃│✾ > ${prefix}Glitch (Texto/Texto)
┃│✾ > ${prefix}Glitch3 (Texto/Texto)
┃│✾ > ${prefix}Grafity (Texto/Texto)
┃│✾ > ${prefix}Space (Texto/Texto)
┃│✾ > ${prefix}Marvel (Texto/Texto)
┃│✾ > ${prefix}GamePlay (Texto/Texto)
┃│✾ > ${prefix}Stone (Texto/Texto)
┃│✾ > ${prefix}Steel (Texto/Texto)
┃│✾ > ${prefix}Ffbanner (Texto/Texto)
┃│✾ > ${prefix}Avatar (Texto/Texto)
┃│✾ > ${prefix}Videogame (Texto/Texto)
┃│✾ > ${prefix}Pubg (Texto/Texto)
┃│✾ > ${prefix}Thorstyle (Texto/Texto)
╰╦══════════════════ 
╭┤𝐋𝐎𝐆𝐎𝐒 𝟏 𝐓𝐄𝐗𝐓𝐎
┃│✾ > ${prefix}Neonlight (Texto)
┃│✾ > ${prefix}Orangejuice (Texto)
┃│✾ > ${prefix}Rainbowequalizer (Texto)
┃│✾ > ${prefix}Peridot (Texto)
┃│✾ > ${prefix}Rock (Texto)
┃│✾ > ${prefix}Esmeralda (Texto)
┃│✾ > ${prefix}3ddragon (Texto)
┃│✾ > ${prefix}Purpleshiny (Texto)
┃│✾ > ${prefix}Robotr2 (Texto)
┃│✾ > ${prefix}Berry (Texto)
┃│✾ > ${prefix}Hologram (Texto)
┃│✾ > ${prefix}Cartoon (Texto)
┃│✾ > ${prefix}Deepsea (Texto)
┃│✾ > ${prefix}Shadow-sky (Texto)
┃│✾ > ${prefix}Metallic (Texto)
┃│✾ > ${prefix}Logoneon (Texto)
┃│✾ > ${prefix}Ninjalogo (Texto)
┃│✾ > ${prefix}Harry-potter (Texto)
┃│✾ > ${prefix}Flower-typography (Texto)
┃│✾ > ${prefix}Butterfly (Texto)
┃│✾ > ${prefix}Starballons (Texto)
┃│✾ > ${prefix}Frozen (Texto)
┃│✾ > ${prefix}3dsilver (Texto)
┃│✾ > ${prefix}Goldtext (Texto)
┃│✾ > ${prefix}Illuminated-metallic (Texto)
┃│✾ > ${prefix}Sweet-candy (Texto)
┃│✾ > ${prefix}Strawberry (Texto)
┃│✾ > ${prefix}Seta (Texto)
┃│✾ > ${prefix}Grafite (Texto)
┃│✾ > ${prefix}Goldt (Texto)
┃│✾ > ${prefix}Tela (Texto)
┃│✾ > ${prefix}3dboxtxt (Texto)
┃│✾ > ${prefix}Chocolate-cake (Texto)
┃│✾ > ${prefix}Magma (Texto)
┃│✾ > ${prefix}Green-horror (Texto)
┃│✾ > ${prefix}Blackpink2 (Texto)
┃│✾ > ${prefix}Logobear (Texto)
┃│✾ > ${prefix}Flaming (Texto)
┃│✾ > ${prefix}Carved-wood (Texto)
┃│✾ > ${prefix}Night-sky (Texto)
┃│✾ > ${prefix}Naturalleaves (Texto)
┃│✾ > ${prefix}Candycane (Texto)
┃│✾ > ${prefix}Christmas (Texto)
┃│✾ > ${prefix}Merrychristmas (Texto)
┃│✾ > ${prefix}3ddeep (Texto)
┃│✾ > ${prefix}Drug (Texto)
┃│✾ > ${prefix}Americanflag (Texto)
┃│✾ > ${prefix}Scifi (Texto)
┃│✾ > ${prefix}Sandsummer (Texto)
┃│✾ > ${prefix}Desfocado (Texto)
┃│✾ > ${prefix}Vietnam (Texto)
┃│✾ > ${prefix}Brilhante (Texto)
┃│✾ > ${prefix}Sandwriting (Texto)
┃│✾ > ${prefix}Sandengraved (Texto)
┃│✾ > ${prefix}Summerysand (Texto)
┃│✾ > ${prefix}Glue (Texto)
┃│✾ > ${prefix}Dark (Texto)
┃│✾ > ${prefix}Galaxystyle (Texto)
┃│✾ > ${prefix}Minion (Texto)
┃│✾ > ${prefix}Horrorgift (Texto)
┃│✾ > ${prefix}Holographic (Texto)
┃│✾ > ${prefix}Deluxe (Texto)
┃│✾ > ${prefix}Glossyblue (Texto)
┃│✾ > ${prefix}Deluxegold (Texto)
┃│✾ > ${prefix}Glossycarbon (Texto)
┃│✾ > ${prefix}Fabric (Texto)
┃│✾ > ${prefix}Watercolor (Texto)
┃│✾ > ${prefix}1917 (Texto)
┃│✾ > ${prefix}Multicolor (Texto)
┃│✾ > ${prefix}Generator (Texto)
┃│✾ > ${prefix}Wonderful (Texto)
┃│✾ > ${prefix}Holiday (Texto)
┃│✾ > ${prefix}Technology (Texto)
┃│✾ > ${prefix}Winter (Texto)
┃│✾ > ${prefix}Neontext (Texto)
┃│✾ > ${prefix}Halloweenfire (Texto)
┃│✾ > ${prefix}Metaldark (Texto)
┃│✾ > ${prefix}Darkgold (Texto)
┃│✾ > ${prefix}Wicker (Texto)
┃│✾ > ${prefix}Firework (Texto)
┃│✾ > ${prefix}Steeltext (Texto)
┃│✾ > ${prefix}Goldfoil (Texto)
┃│✾ > ${prefix}Ultragloss (Texto)
┃│✾ > ${prefix}Denimtext (Texto)
┃│✾ > ${prefix}Stargreen (Texto)
┃│✾ > ${prefix}Captain (Texto)
┃│✾ > ${prefix}Toxic (Texto)
┃│✾ > ${prefix}Ninjalogo (Texto)
┃│✾ > ${prefix}Txtquadrinhos (Texto)
┃│✾ > ${prefix}HackNeon (Texto)
┃│✾ > ${prefix}EquipeMascote (Texto)
┃│✾ > ${prefix}FFavatar (Texto)
┃│✾ > ${prefix}Gizquadro (Texto)
┃│✾ > ${prefix}Angelglx (Texto)
┃│✾ > ${prefix}WingEffect (Texto)
┃│✾ > ${prefix}Angelwing (Texto)
┃│✾ > ${prefix}Blackpink (Texto)
┃│✾ > ${prefix}Girlmascote (Texto)
┃│✾ > ${prefix}Mascotegame (Texto)
┃│✾ > ${prefix}Fpsmascote (Texto)
┃│✾ > ${prefix}Logogame (Texto)
┃│✾ > ${prefix}Glitch2 (Texto)
┃│✾ > ${prefix}3DGold (Texto)
┃│✾ > ${prefix}Placaloli (Texto)
┃│✾ > ${prefix}Phadow (Texto)
┃│✾ > ${prefix}Efeitoneon (Texto)
┃│✾ > ${prefix}Cemiterio (Texto)
┃│✾ > ${prefix}Metalgold (Texto)
┃│✾ > ${prefix}Narutologo (Texto)
┃│✾ > ${prefix}Narutologo2 (Texto)
┃│✾ > ${prefix}Fire (Texto)
┃│✾ > ${prefix}Romantic (Texto)
┃│✾ > ${prefix}Smoke (Texto)
┃│✾ > ${prefix}Papel (Texto)
┃│✾ > ${prefix}Lovemsg (Texto)
┃│✾ > ${prefix}Lovemsg2 (Texto)
┃│✾ > ${prefix}Lovemsg3 (Texto)
┃│✾ > ${prefix}Coffecup (Texto)
┃│✾ > ${prefix}Coffecup2 (Texto)
┃│✾ > ${prefix}Cup (Texto)
┃│✾ > ${prefix}Florwooden (Texto)
┃│✾ > ${prefix}Lobometal (Texto)
┃│✾ > ${prefix}Harryp (Texto)
┃│✾ > ${prefix}Txtborboleta (Texto)
┃│✾ > ${prefix}Madeira (Texto)
┃│✾ > ${prefix}Pornhub (Texto)
┃│✾ > ${prefix}Escudo (Texto)
┃│✾ > ${prefix}Transformer (Texto)
┃│✾ > ${prefix}America (Texto)
┃│✾ > ${prefix}Demongreen (Texto)
┃│✾ > ${prefix}Wetglass (Texto)
┃│✾ > ${prefix}Toxic (Texto)
┃│✾ > ${prefix}Neon3 (Texto)
┃│✾ > ${prefix}Neondevil (Texto)
┃│✾ > ${prefix}Neongreen (Texto)
┃│✾ > ${prefix}Lava (Texto)
┃│✾ > ${prefix}Halloween (Texto)
┃│✾ > ${prefix}Neondevil (Texto)
┃│✾ > ${prefix}DemonFire (Texto)
┃│✾ > ${prefix}DemonGreen (Texto)
┃│✾ > ${prefix}Thunderv2 (Texto)
┃│✾ > ${prefix}Thunder (Texto)
┃│✾ > ${prefix}Colaq (Texto)
┃│✾ > ${prefix}Luxury (Texto)
┃│✾ > ${prefix}Berry (Texto)
┃│✾ > ${prefix}Transformer (Texto)
┃│✾ > ${prefix}Matrix (Texto)
┃│✾ > ${prefix}Horror (Texto)
┃│✾ > ${prefix}Nuvem (Texto)
┃│✾ > ${prefix}Neon (Texto)
┃│✾ > ${prefix}Neon1 (Texto)
┃│✾ > ${prefix}Neon2 (Texto)
┃│✾ > ${prefix}Neon3d (Texto)
┃│✾ > ${prefix}NeonGreen (Texto)
┃│✾ > ${prefix}Neon3 (Texto)
┃│✾ > ${prefix}Neve (Texto)
┃│✾ > ${prefix}Areia (Texto)
┃│✾ > ${prefix}Vidro (Texto)
┃│✾ > ${prefix}Style (Texto)
┃│✾ > ${prefix}Pink (Texto)
┃│✾ > ${prefix}Carbon (Texto)
┃│✾ > ${prefix}Metalblue (Texto)
┃│✾ > ${prefix}Jeans (Texto)
┃│✾ > ${prefix}Ossos (Texto)
┃│✾ > ${prefix}Asfalto (Texto)
┃│✾ > ${prefix}3dgoldenblack (Texto)
┃│✾ > ${prefix}3d_business (Texto)
┃│✾ > ${prefix}Summer (Texto)
┃│✾ > ${prefix}Natal (Texto)
┃│✾ > ${prefix}Jokerlogo (Texto)
┃│✾ > ${prefix}Blood (Texto)
┃│✾ > ${prefix}Break (Texto)
┃│✾ > ${prefix}Fiction (Texto)
┃│✾ > ${prefix}3dstone (Texto)
┃│✾ > ${prefix}Lapis (Texto)
┃│✾ > ${prefix}Gelo (Texto)
┃│✾ > ${prefix}Rainbow (Texto)
┃│✾ > ${prefix}Metalfire (Texto)
┃│✾ > ${prefix}Cria (Texto) 
┃│✾ > ${prefix}Anime1 (Texto)
┃│✾ > ${prefix}Anime2 (Texto)
┃│✾ > ${prefix}Ff1 (Texto)
┃│✾ > ${prefix}Ff2 (Texto)
┃│✾ > ${prefix}Game (Texto)
┃│✾ > ${prefix}Entardecer (Texto)
┃│✾ > ${prefix}Indian (Texto)
┃│✾ > ${prefix}Ffrose (Texto)
┃│✾ > ${prefix}Ffgren (Texto)
┃│✾ > ${prefix}Chufuyu (Texto)
┃│✾ > ${prefix}Wolf (Texto)
┃│✾ > ${prefix}Dragonred (Texto)
┃│✾ > ${prefix}Purple (Texto)
╰═══════════════════ `;
};

exports.menulogos = menulogos;

// MENU DE ALTERAR ÁUDIOS E VÍDEOS

const alteradores = (prefix, sender) => {

// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa. 

return `
╭┤𝐀𝐋𝐓𝐄𝐑𝐀𝐑-𝐕𝐈𝐃𝐄𝐎 
┃│✾ > ${prefix}Videolento (marca)
┃│✾ > ${prefix}Videorapido (marca)
┃│✾ > ${prefix}Videocontrario (marca)
╰╦══════════════════ 
╭┤𝐀𝐋𝐓𝐄𝐑𝐀𝐑-𝐀𝐔𝐃𝐈𝐎
┃│✾ > ${prefix}Audiolento (marca)
┃│✾ > ${prefix}Audiorapido (marca)
┃│✾ > ${prefix}Grave (marca)
┃│✾ > ${prefix}Grave2 (marca)
┃│✾ > ${prefix}Esquilo (marca)
┃│✾ > ${prefix}Estourar (marca)
┃│✾ > ${prefix}Bass (marca)
┃│✾ > ${prefix}Bass2 (marca)
┃│✾ > ${prefix}Vozmenino (marca)
╰═══════════════════ 
`;
};

exports.alteradores = alteradores;

// MENU PREMIUM 

const menuprem = (prefix, sender) => { 

// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa. 

return `
╭┤𝐌𝐄𝐍𝐔-𝐏𝐑𝐄𝐌𝐈𝐔𝐌 
┃│✾ > ${prefix}Destrava
┃│✾ > ${prefix}Destrava2
┃│✾ > ${prefix}Ddd (DDD)
┃│✾ > ${prefix}GerarCPF
┃│✾ > ${prefix}PremiumList
┃│✾ > ${prefix}Encurtalink (Link)
┃│✾ > ${prefix}Encurtalink2 (Link+Nome)
┃│✾ > ${prefix}Encurtalink3 (Link)
┃│✾ > ${prefix}Encurtalink4 (Link)
┃│✾ > ${prefix}Celular (Nome)
┃│✾ > ${prefix}Scep (Número)
┃│✾ > ${prefix}Cotacao (Moeda)
┃│✾ > ${prefix}Sip (Número)
┃│✾ > ${prefix}Nome
┃│✾ > ${prefix}Nome2
┃│✾ > ${prefix}Cpf (Número)
┃│✾ > ${prefix}Cpf2 (Número)
┃│✾ > ${prefix}Cpf3 (Número)
┃│✾ > ${prefix}Cpf4 (Número)
┃│✾ > ${prefix}Tel (Número)
┃│✾ > ${prefix}Tel2 (Número)
┃│✾ > ${prefix}Tel3 (Número)
┃│✾ > ${prefix}Parentes (Cpf)
┃│✾ > ${prefix}Beneficios (Cpf)
┃│✾ > ${prefix}Score (Cpf)
┃│✾ > ${prefix}Placa (Placa)
┃│✾ > ${prefix}Placa2 (Placa)
┃│✾ > ${prefix}Cnpj (Número)
┃│✾ > ${prefix}Site (Domínio)
┃│✾ > ${prefix}Email
┃│✾ > ${prefix}Bin (Número)
┃│✾ > ${prefix}Rg (Número)
╰╦══════════════════ 
`;
};

exports.menuprem = menuprem;

// MENU DE BRINCADEIRAS.. 

const brincadeiras = (prefix, sender) => {

// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa. 

return `
╭┤𝐌𝐄𝐍𝐔-𝐁𝐑𝐈𝐍𝐂𝐀𝐃𝐄𝐈𝐑𝐀𝐒
┃│✾ > ${prefix}Gay (marca (@))
┃│✾ > ${prefix}Feio (marca (@))
┃│✾ > ${prefix}Corno (marca (@))
┃│✾ > ${prefix}Vesgo (marca (@))
┃│✾ > ${prefix}Bebado (marca (@))
┃│✾ > ${prefix}Gostoso (marca (@))
┃│✾ > ${prefix}Gostosa (marca (@))
┃│✾ > ${prefix}Beijo (marca (@))
┃│✾ > ${prefix}Matar (marca (@))
┃│✾ > ${prefix}Tapa (marca (@))
┃│✾ > ${prefix}Chute (marca (@))
┃│✾ > ${prefix}Dogolpe (marca (@))
┃│✾ > ${prefix}Nazista (marca (@))
┃│✾ > ${prefix}Chance (fale algo)
┃│✾ > ${prefix}Surubao (Quantidade)
┃│✾ > ${prefix}Jogodavelha (@Marcar)
┃│✾ > ${prefix}Anagrama (1/0)
┃│✾ > ${prefix}Gartic (1/0)
┃│✾ > ${prefix}Quizanimal (1/0)
┃│✾ > ${prefix}Enigma (1/0)
┃│✾ > ${prefix}Casal (Casal do grupo)
┃│✾ > ${prefix}R-forca (Letra)
┃│✾ > ${prefix}Resetforca (Resetar)
┃│✾ > ${prefix}Jogodaforca (Inicia)
┃│✾ > ${prefix}Ppt (Pedra/Papel/Tesoura)
┃│✾ > ${prefix}Cassino
┃│✾ > ${prefix}Quando (Perguntar)
┃│✾ > ${prefix}Rankgay (5 gays)
┃│✾ > ${prefix}Rankgado (5 gados)
┃│✾ > ${prefix}Rankcorno (5 cornos)
┃│✾ > ${prefix}Rankgostoso (5 gostosos)
┃│✾ > ${prefix}Rankgostosa (5 gostosas)
┃│✾ > ${prefix}Ranknazista (5 nazistas)
┃│✾ > ${prefix}Rankotakus (5 otakus)
┃│✾ > ${prefix}Rankpau (5 pauzudos)
┃│✾ > ${prefix}Mencionar (fale algo)
┃│✾ > ${prefix}Death (Nome)
┃│✾ > ${prefix}Steal (marca (@))
╰═══════════════════ 
`;
};

exports.brincadeiras = brincadeiras;

// MENU DE EFEITOS DE IMAGEM

const efeitos = (prefix, sender) => {
// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa. 
return `
╭┤𝐌𝐄𝐍𝐔-𝐃𝐄-𝐄𝐅𝐄𝐈𝐓𝐎𝐒 
┃│✾ > ${prefix}Comunismo (marcar)-(img)
┃│✾ > ${prefix}Bolsonaro (marcar)-(img)
┃│✾ > ${prefix}Bnw (marcar)-(img)
┃│✾ > ${prefix}Beautiful (marcar)-(img)
┃│✾ > ${prefix}Blur (marcar)-(img)
┃│✾ > ${prefix}Affect (marcar)-(img)
┃│✾ > ${prefix}Del (marcar)-(img)
┃│✾ > ${prefix}Circle (marcar)-(img)
┃│✾ > ${prefix}Beautiful (marcar)-(img)
┃│✾ > ${prefix}Dither (marcar)-(img)
┃│✾ > ${prefix}Facepalm (marcar)-(img),
┃│✾ > ${prefix}Invert (marcar)-(img)
┃│✾ > ${prefix}Lgbt (marcar)-(img)
┃│✾ > ${prefix}Magik (marcar)-(img)
┃│✾ > ${prefix}Rotate (marcar)-(img)
┃│✾ > ${prefix}Rip (marcar)-(img)
┃│✾ > ${prefix}Jail (marcar)-(img)
┃│✾ > ${prefix}Trash (marcar)-(img)
┃│✾ > ${prefix}Pixelate (marcar)-(img)
┃│✾ > ${prefix}Sepia (marcar)-(img)
┃│✾ > ${prefix}Wanted (marcar)-(img)
┃│✾ > ${prefix}Wasted (marcar)-(img)
┃│✾ > ${prefix}Animeia (marcar)-(img)
╰═══════════════ 
`;
};

exports.efeitos = efeitos;