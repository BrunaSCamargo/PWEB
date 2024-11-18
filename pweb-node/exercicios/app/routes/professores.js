module.exports = function(app){ 
    app.get('/informacao/professores', function(req,res){ 
    const sql = require ('mssql'); 
    
    const sqlConfig = { 
    user: 'BD2311016', //7 últimos dígitos do seu RA 
    password: 'A12345678a', 
    database: 'BD', 
    server: 'APOLO', 
    options: { 
        encrypt: false, 
        trustServerCertificate: true, 
    } 
    } 
    
    async function getProfessores() { 
    try { 
    const pool = await sql.connect(sqlConfig); 
    
    const results = await pool.request().query('SELECT * from PROFESSORES') 
    
    res.json(results.recordset); 
    // res.render('informacao/professores',{profs: results.recordset}) 
    
    } catch (err) { 
    console.log(err) 
    } 
    
    } 
    getProfessores(); 
  }); 
} 