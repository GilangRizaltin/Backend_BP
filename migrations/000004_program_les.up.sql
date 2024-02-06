CREATE TABLE "bintangpelajar".program_les IF NOT EXISTS (
	id serial4 NOT NULL,
	kantor int4 NOT NULL,
	nama_program varchar(100) NOT NULL,
	biaya_program int4 NOT NULL DEFAULT 0,
	created_at timestamp NOT NULL DEFAULT now(),
	updated_at timestamp NULL,
	deleted_at timestamp NULL,
	CONSTRAINT pk_program_les PRIMARY KEY (id)
);

-- "bintangpelajar".program_les foreign keys

ALTER TABLE "bintangpelajar".program_les ADD CONSTRAINT program_les_kantor_fkey FOREIGN KEY (kantor) REFERENCES "bintangpelajar".kantor_cabang(id);