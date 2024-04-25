-- Connect to the database which automatically creates it if it does not exist
\connect dependex_db;

-- Create a table to store information about each program
CREATE TABLE public.program (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    version TEXT NOT NULL,
    release_date TIMESTAMP
);

COMMENT ON TABLE public.program IS 'Stores information about individual programs including their versions.';

-- Create a table to store information about dependencies
CREATE TABLE public.dependency (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    version TEXT NOT NULL
);

COMMENT ON TABLE public.dependency IS 'Stores information about dependencies that programs might require.';

-- Create a junction table to handle the many-to-many relationship between programs and their dependencies
CREATE TABLE public.program_dependency (
    program_id INTEGER NOT NULL REFERENCES public.program(id),
    dependency_id INTEGER NOT NULL REFERENCES public.dependency(id),
    CONSTRAINT pk_program_dependency PRIMARY KEY (program_id, dependency_id)
);

COMMENT ON TABLE public.program_dependency IS 'Associative table to link programs and their dependencies.';
