CREATE TABLE "bintangpelajar".identitas_siswa IF NOT EXISTS (
	id serial4 NOT NULL,
	user_id int4 NOT NULL,
	nama varchar(255) NOT NULL,
	alamat varchar(255) NOT NULL,
	kelas int4 NOT NULL,
	program_les_siswa int4 NULL,
	created_at timestamp NOT NULL DEFAULT now(),
	updated_at timestamp NULL,
	deleted_at timestamp NULL,
	CONSTRAINT pk_identitas_siswa PRIMARY KEY (id)
);


-- "bintangpelajar".identitas_siswa foreign keys

ALTER TABLE "bintangpelajar".identitas_siswa ADD CONSTRAINT identitas_siswa_program_les_siswa_fkey FOREIGN KEY (program_les_siswa) REFERENCES "bintangpelajar".program_les(id);
ALTER TABLE "bintangpelajar".identitas_siswa ADD CONSTRAINT identitas_siswa_user_id_fkey FOREIGN KEY (user_id) REFERENCES "bintangpelajar".pengguna(id);