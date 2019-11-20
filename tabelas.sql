CREATE TABLE pets (
pet_id SERIAL NOT NULL, --match id
user_id INTEGER NOT NULL,
pet_nickname NCHAR(15) NOT NULL, -- Nome jogo
pet_type NCHAR(10) NOT NULL, -- Cardgame, boardgame, outro
pet_color NCHAR(60) NOT NULL, -- num jogadores
pet_injured BOOLEAN NOT NULL, -- Semanal?
pet_sick BOOLEAN NOT NULL, -- Jogo complexo/pesado?
pet_fed BOOLEAN NOT NULL, -- Coop/Vs
pet_description NCHAR(150) NOT NULL, --descricao detalhada
pet_address NCHAR(150) NOT NULL, -- address
pet_coordinates NCHAR(25) NOT NULL, -- coord
geom GEOMETRY(Point,4326), -- local
pet_date DATE NOT NULL, --Data match
pet_picture BYTEA NOT NULL, -- foto do local
pet_status INTEGER[] NOT NULL, -- DELETE: 1 - ON / 0 - OFF
PRIMARY KEY (pet_id),
FOREIGN KEY (user_id) REFERENCES users (user_id)
);