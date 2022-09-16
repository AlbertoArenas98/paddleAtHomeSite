DELETE FROM users;
DELETE FROM cities;
DELETE FROM group_type;
DELETE FROM day_time;
DELETE FROM levels;
DELETE FROM group_class;
DELETE FROM class_user;

DELETE FROM users
WHERE email = 'albertoarennass@gmail.com';



INSERT INTO cities (
    city
) VALUES (
    'Majadahonda'
);

INSERT INTO cities (
    city
) VALUES (
    'Boadilla del Monte'
);

INSERT INTO cities (
    city
) VALUES (
    'Pozuelo de Alarcón'
);

INSERT INTO group_type (
    type
) VALUES (
    'individual'
);

INSERT INTO group_type (
    type
) VALUES (
    'in pairs'
);

INSERT INTO group_type (
    type
) VALUES (
    'colective'
);

INSERT INTO day_time (
    time
) VALUES (
    'mornings'
);

INSERT INTO day_time (
    time
) VALUES (
    'afternoons'
);


INSERT INTO levels (
    level
) VALUES (
    'initial'
);

INSERT INTO levels (
    level
) VALUES (
    'amateur'
);

INSERT INTO levels (
    level
) VALUES (
    'advanced'
);

INSERT INTO group_class (
    name, cities_id, group_type_id, day_time_id, levels_id
) VALUES (
    'Majadahonda01', (SELECT id FROM cities WHERE city = 'Majadahonda'), (SELECT id FROM group_type WHERE type = 'colective'), (SELECT id FROM day_time WHERE time = 'mornings'), (SELECT id FROM levels WHERE level = 'initial')
);

INSERT INTO group_class (
    name, cities_id, group_type_id, day_time_id, levels_id
) VALUES (
    'Boadilla01', (SELECT id FROM cities WHERE city = 'Boadilla del Monte'), (SELECT id FROM group_type WHERE type = 'colective'), (SELECT id FROM day_time WHERE time = 'afternoons'), (SELECT id FROM levels WHERE level = 'amateur')
);

INSERT INTO group_class (
    name, cities_id, group_type_id, day_time_id, levels_id
) VALUES (
    'Pozuelo01', (SELECT id FROM cities WHERE city = 'Pozuelo de Alarcón'), (SELECT id FROM group_type WHERE type = 'colective'), (SELECT id FROM day_time WHERE time = 'afternoons'), (SELECT id FROM levels WHERE level = 'initial')
);

INSERT INTO users (
    first_name, email, password, cities_id, group_type_id, day_time_id, levels_id
) VALUES (
    'Alberto', 'albertoarennass@gmail.com', '1234', (SELECT id FROM cities WHERE city = 'Majadahonda'), (SELECT id FROM group_type WHERE type = 'colective'), (SELECT id FROM day_time WHERE time = 'mornings'), (SELECT id FROM levels WHERE level = 'initial')
) ON CONFLICT DO NOTHING;

INSERT INTO class_user (
    number, group_class_id, users_id
) VALUES (
    'M01', (SELECT id FROM group_class WHERE name = 'Majadahonda01'), (SELECT id FROM users WHERE email = 'albertoarennass@gmail.com')
);

