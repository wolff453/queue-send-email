import knex from 'knex'

export default knex({
    client: 'mysql2',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : '07142155',
      database : 'construtor'
    }
  });

  //ALTERAR PRA VARIAVEL DE AMBIENTE

 