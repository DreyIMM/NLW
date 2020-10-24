const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then( async db =>{
    // inserir dads na tabela
    // await saveOrphanage(db, {
    //     lat: "-22.9098969",
    //     lng: "43.1618718",
    //     name:"LAR NO AEROPORTO SANTOS DUMONT",
    //     about: "É ISSO MERMO",
    //     wpp: "223213",
    //     description: "Presta assistência social a criança de 06 anos a 15 anos que se encontre em situação de risco ou vulnerabilidade social.",
    //     images:[
    //         "https://images.unsplash.com/photo-1594575111057-47b35c5f98f7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    //         "https://images.unsplash.com/photo-1595009503377-e3be116106b6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
    //     ].toString(),
    //     instructions: "Venha como se sentir a vontade e traga muito amor e paciencia",
    //     hours: "Horario de visita das 18h até 8h",
    //     open_on_weekends: "1"

    //  })
//     //consultar dados na tabela

// // constular TODOS  orfanato

    //    const orphanage = await db.all('SELECT * FROM orphanages  ');
    //    console.log(orphanage);

// deletar um dado da tabela

//  console.log(await db.run("DELETE FROM orphanages "));



})

