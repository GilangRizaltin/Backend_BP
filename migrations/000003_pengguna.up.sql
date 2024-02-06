CREATE TABLE "bintangpelajar".pengguna IF NOT EXISTS (
	id serial4 NOT NULL,
	email varchar(100) NOT NULL,
	user_password varchar(100) NOT NULL,
	user_type varchar(25) NULL,
	created_at timestamp NOT NULL DEFAULT now(),
	updated_at timestamp NULL,
	deleted_at timestamp NULL,
	CONSTRAINT pengguna_email_key UNIQUE (email),
	CONSTRAINT pengguna_user_type_check CHECK (((user_type)::text = ANY ((ARRAY['Head Office'::character varying, 'Admin'::character varying, 'Student'::character varying])::text[]))),
	CONSTRAINT pk_pengguna PRIMARY KEY (id)
);