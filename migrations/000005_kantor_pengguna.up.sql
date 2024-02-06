CREATE TABLE "bintangpelajar".kantor_pengguna IF NOT EXISTS (
	id serial4 NOT NULL,
	user_id int4 NOT NULL,
	kantor_pengguna int4 NOT NULL,
	created_at timestamp NOT NULL DEFAULT now(),
	updated_at timestamp NULL,
	deleted_at timestamp NULL,
	CONSTRAINT pk_kantor_pengguna PRIMARY KEY (id)
);


-- "bintangpelajar".kantor_pengguna foreign keys

ALTER TABLE "bintangpelajar".kantor_pengguna ADD CONSTRAINT kantor_pengguna_kantor_pengguna_fkey FOREIGN KEY (kantor_pengguna) REFERENCES "bintangpelajar".kantor_cabang(id);
ALTER TABLE "bintangpelajar".kantor_pengguna ADD CONSTRAINT kantor_pengguna_user_id_fkey FOREIGN KEY (user_id) REFERENCES "bintangpelajar".pengguna(id);