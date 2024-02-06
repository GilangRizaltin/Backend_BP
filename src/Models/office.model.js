const db = require("../Configs/postgre");

const addOffice = (body) => {
    const sql = "insert into kantor_cabang (nama_kantor) values ($1)";
    const values = [body.office];
    return db.query(sql, values);
};

const getOffice = () => {
    const sql = `select nama_kantor from kantor_cabang`
    return db.query(sql);
}

const getProgramByOffice = (office_id) => {
    const sql = `select id, nama_program, biaya_program from program_les where kantor = $1`
    const values = [office_id];
    return db.query(sql, values);
}


module.exports = {addOffice, getOffice, getProgramByOffice};