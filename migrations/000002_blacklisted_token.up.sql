CREATE TABLE "bintangpelajar".blacklisted_token IF NOT EXISTS (
	id serial4 NOT NULL,
	token_jwt text NOT NULL,
	CONSTRAINT pk_blacklisted_token PRIMARY KEY (id)
);