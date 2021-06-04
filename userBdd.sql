#------------------------------------------------------------
#        Script MySQL.
#------------------------------------------------------------


#------------------------------------------------------------
# Table: utilisateurs
#------------------------------------------------------------

CREATE TABLE utilisateurs(
        id       Int NOT NULL ,
        username Varchar (50) NOT NULL ,
        password Char (5) NOT NULL
	,CONSTRAINT utilisateurs_PK PRIMARY KEY (id)
)ENGINE=InnoDB;

