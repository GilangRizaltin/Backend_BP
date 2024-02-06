const db = require("../Configs/postgre");

const register = (body, hashedPassword) => {
    const sql = "insert into pengguna (email, user_password, user_type) VALUES ($1, $2, $3) returning id";
    const values = [body.email, hashedPassword, body.user_type];
    return db.query(sql, values);
};

const addUserOffice = (office_id, id) => {
  const sql = "insert into kantor_pengguna (user_id, kantor_pengguna) VALUES ($1, $2) returning id";
  const values = [office_id, id];
  return db.query(sql, values);
}

const addStudentIdentity = (body, id) => {
  const sql = "insert into identitas_siswa (user_id, nama, alamat, kelas, program_les_siswa) VALUES ($1, $2, $3, $4, $5) returning id";
  const values = [id, body.full_name, body.address, body.class, body.program];
  return db.query(sql, values);
}

const selectUser = (email) => {
    const sql = "select id, user_password, user_type from pengguna where email = $1";
    const values = [email];
    return db.query(sql, values);
};

const selectOffice = (id) => {
  const sql = "select kantor_pengguna from kantor_pengguna where user_id = $1";
  const values = [id];
  return db.query(sql, values);
};
module.exports = {register,addUserOffice, addStudentIdentity, selectUser, selectOffice};