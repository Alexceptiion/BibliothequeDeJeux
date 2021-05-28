#------------------------------------------------------------
#        Script MySQL.
#------------------------------------------------------------


#------------------------------------------------------------
# Table: Utilisateurs
#------------------------------------------------------------

CREATE TABLE Utilisateurs(
        id       Int NOT NULL ,
        email    Varchar (50) NOT NULL ,
        pseudo   Varchar (100) NOT NULL ,
        password Varchar (100) NOT NULL
	,CONSTRAINT Utilisateurs_PK PRIMARY KEY (id)
)ENGINE=InnoDB;

