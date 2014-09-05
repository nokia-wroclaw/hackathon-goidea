INSERT INTO "user"(key, username, fullname, role, mail) VALUES ('1', 'makapaka', 'Maka Paka', 'ADMIN', 'makapaka@nightgarden.uk');
INSERT INTO "user"(key, username, fullname, role, mail) VALUES ('2', 'iglepigle', 'Igle Pile', 'BASIC', 'iglepigle@nightgarden.uk');
INSERT INTO "user"(key, username, fullname, role, mail) VALUES ('3', 'ninkynonk', 'Ninky nonk', 'BASIC', 'ninkynonk@nightgarden.uk');

INSERT INTO idea(title, description, creation_date, event_date, votes, status, creator_id)
	VALUES ('Obiad dla Chmursona', 'Zamawiaj jedzenie z głodnym Chmursonem', '2012-12-17 13:35:15+01', '2012-12-30 13:35:15+01', 5, 'Proposal', 1);

INSERT INTO idea(title, description, creation_date, event_date, votes, status, creator_id)
	VALUES ('Obiad dla Maki Paki', 'Zamawiaj jedzenie z głodna Maka Paka', '2012-12-18 13:35:15+01', '2012-12-31 13:35:15+01', 5, 'Closed', 0);

INSERT INTO idea(title, description, creation_date, event_date, votes, status, creator_id)
	VALUES ('Obiad dla Titiferow', 'Zamawiaj jedzenie z głodnymi Titiferami', '2012-12-19 13:35:15+01', '2012-12-31 13:35:15+01', 5, 'Closed', 2);