import knex from 'knex'

export default knex({
    client: 'mysql2',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : '071jhgwbgwhi',
      database : 'construtor'
    }
  });

  //ALTERAR PRA VARIAVEL DE AMBIENTE

 
