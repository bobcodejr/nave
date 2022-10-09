CREATE DATABASE modelo_dados;

CREATE TABLE ocorrencia (
    codigo_ocorrencia int(3) primary key,
    codigo_ocorrencia1 int(3),
    FOREIGN key (codigo_ocorrencia1) REFERENCES ocorrencia_tipo(codigo_ocorrencia1),
    codigo_ocorrencia2 int(3),
    FOREIGN key (codigo_ocorrencia2) REFERENCES aeronave(codigo_ocorrencia2),
    codigo_ocorrencia3 int(3),
    FOREIGN key (codigo_ocorrencia3) REFERENCES fator_contriuinte(codigo_ocorrencia3),
    codigo_ocorrencia4 int(3),
    FOREIGN key (codigo_ocorrencia4) REFERENCES Recomendacao(codigo_ocorrencia4),
    ocorrencia_classificação varchar(255),
    ocrrencia_latitude varchar(255),
    ocrrencia_longitude varchar(255),
    ocrrencia_cidade varchar(255),
    ocrrencia_uf varchar(255),
    ocrrencia_pais varchar(255),
    ocrrencia_aerodromo varchar(255),
    ocrrencia_dia datetime,
    ocrrencia_hora varchar(255),
    investigacao_aeronave_liberada varchar(255)
)

CREATE TABLE ocorrencia_tipo(
    codigo_ocorrencia1 int(3) primary key,
    ocorrencia_tipo varchar(255),
    ocorrencia_tipo_categoria varchar(255),
    taxonomia_tipo_icao varchar(255),
)

CREATE TABLE aeronave(
    codigo_ocorrencia2 int(3) primary key,
    aeronave_tipo varchar(255),
    aeronave_tipo_categoria varchar(255),
    aeronave_tipo_icao varchar(255),
)

CREATE TABLE fator_contriuinte(
    codigo_ocorrencia3 int(3) primary key,
    fator_nome varchar(255),
    fator_aspecto varchar(255),
    fator_condicionante varchar(255),
    fator_area varchar(255),
)

CREATE TABLE recomendacao(
    codigo_ocorrencia4 int(3) primary key,
    recomendacao_numero varchar(255),
    recomendacao_dia_assinatura varchar(255),
    recomendacao_dia_encaminhamento varchar(255),
    recomendacao_dia_feedback varchar(255),
)


