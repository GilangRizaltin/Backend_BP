CREATE TABLE "bintangpelajar".kantor_cabang IF NOT EXISTS (
	id serial4 NOT NULL,
	nama_kantor varchar(255) NOT NULL,
	created_at timestamp NOT NULL DEFAULT now(),
	updated_at timestamp NULL,
	deleted_at timestamp NULL,
	CONSTRAINT kantor_cabang_nama_kantor_key UNIQUE (nama_kantor),
	CONSTRAINT pk_kantor_cabang PRIMARY KEY (id)
);