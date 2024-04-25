\connect dependex-db;

-- Insert some dummy data into the program table
INSERT INTO public.program (name, version, release_date) VALUES
('Program A', '1.0', '2021-01-15'),
('Program B', '2.3', '2021-05-22'),
('Program C', '0.9', '2022-12-01');

-- Insert some dummy data into the dependency table
INSERT INTO public.dependency (name, version) VALUES
('Library X', '1.0'),
('Library Y', '2.2'),
('Library Z', '3.5');

-- Insert some dummy data linking programs to dependencies
INSERT INTO public.program_dependency (program_id, dependency_id) VALUES
(1, 1), -- Program A requires Library X
(1, 2), -- Program A also requires Library Y
(2, 3), -- Program B requires Library Z
(3, 1), -- Program C requires Library X
(3, 3); -- Program C also requires Library Z