const db = require("../Configs/postgre");

const getStudent = (office) => {
    const sql = `select i.id as "No",
    i.nama as "Full_name",
    i.alamat as "Alamat",
    i.kelas as "Kelas",
    p.nama_program as "Program",
    k.nama_kantor as "Lokasi"
    from identitas_siswa i
    join 
    program_les p on i.program_les_siswa = p.id
    join 
    kantor_cabang k on p.kantor = k.id
    where k.id = $1
    and i.deleted_at is null
    order by i.nama asc`
    const values = [office];
    return db.query(sql, values);
}

const getProfile = (id) => {
    const sql = `select i.id as "No",
    i.nama as "nama",
    i.alamat as "alamat",
    i.kelas as "kelas",
    p.nama_program as "Program",
    k.nama_kantor as "Lokasi"
    from identitas_siswa i
    join 
    program_les p on i.program_les_siswa = p.id
    join 
    kantor_cabang k on p.kantor = k.id
    where user_id = $1`
    const values = [id];
    return db.query(sql, values);
}

const addStudent = (body, hashedPassword) => {
    const sql = `insert into siswa (full_name, address, kelas, email, user_password, program_les_siswa)
    values ($1, $2, $3, $4, $5, $6) returning full_name`
    const values = [body.full_name, body.address, body.class, body.email, hashedPassword, body.program];
    return db.query(sql, values);
}

const editStudent = (id, body) => {
    let sql = "update identitas_siswa set "
    const values = [id];
    let i = 1;
    for (const [key, value] of Object.entries(body)) {
        sql += `${key} = $${i + 1}, `;
        values.push(value);
        i++;
    }
    sql += `updated_at = now() WHERE id = $1 returning nama`;
    return db.query(sql, values);
}

const deleteStudent = (id) => {
    const sql =`update identitas_siswa set deleted_at = now() where id = $1 returning id, nama`;
    const values = [id]
    return db.query(sql, values);
}

module.exports = {getStudent, getProfile, addStudent, editStudent, deleteStudent};