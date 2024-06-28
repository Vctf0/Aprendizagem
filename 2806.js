// let arrayjogos = [
//     {
//         id: "01",
//         jogo: "Zelda",
//         estilo: "RPG",
//         plataforma: "Nintendo Switch",
//     },
//     {
//         id: "12",
//         jogo: "God Of War",
//         estilo: "Aventura",
//         plataforma: "Playstation",
//     },
//     {
//         id: "13",
//         jogo: "Pokemon",
//         estilo: "RPG",
//         plataforma: "Nintendo Switch",
//     },
//     {
//         id: "14",
//         jogo: "Call of Duty",
//         estilo: "FPS",
//         plataforma: "Computador",
//     }
// ]

// console.log(arrayjogos[0])
// console.log(arrayjogos[0].id)
// console.log(`O jogo ${arrayjogos[2].jogo} é do estilo ${arrayjogos[2].estilo}`)
// console.log(`A plataforma ${arrayjogos[0].plataforma} possui os jogos ${arrayjogos[0].jogo} e ${arrayjogos[2].jogo} `)


// let compra = {
//     compraId:1,
//     nomeObjeto:"tenis",
//     quantidade:"2",
//     valor:'120',
// }
// console.log(`A compra do objeto ${compra.nomeObjeto} e quantidade ${compra.quantidade} não foi efetuada por falta de saldo`)


const pedido = [
        { 
            id:1,
            nome: "Camiseta", 
            quantidade: 10, 
            valor: 50.00 
        },
        { 
            id:2,
            nome: "Calça Jeans", 
            quantidade: 15, 
            valor: 80.00 
        },
        { 
            id:3,
            nome: "Tênis", 
            quantidade: 8, 
            valor: 120.00 
        },
        { 
            id:4,
            nome: "Boné", 
            quantidade: 5, 
            valor: 25.00 
        },
    
      ];
    let usuarios = [
        {
            id:1,
            nome:"Jeff",
            cpf:"983748276",
            email:"jeff@gmail.com",
            telefone:"834792387",
            productId:2
        },
        {
            id:2,
            nome:"Jack",
            cpf:"54234322",
            email:"jack@gmail.com",
            telefone:"23241343",
            productId:4
        },
        {
            id:3,
            nome:"Jonas",
            cpf:"34252452342",
            email:"jonas@gmail.com",
            telefone:"23143132",
            productId:1
        },
        {
            id:4,
            nome:"Maria",
            cpf:"324252342",
            email:"maria@gmail.com",
            telefone:"87234683276",
            productId:3
        }
    ]    
    let pedido01= pedido[1].quantidade*pedido[1].valor
     // console.log(`O pedido 1 é ${pedido01}`)
    console.log(`O pedido do cliente ${usuarios[0].nome} é ${pedido01}`)
   
