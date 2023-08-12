A few things need to be set up before being able to run this backend

- Set up environment variable:
    - POSTGRES_PASS: this is the password for the postgres user in the database (more on that next)
- Create/setup database
Yes, this isn't ideal, but this is how it has to be for now. Will be N/A when I get this set up on a deployed server
    - Download/install postgresql (these instrucitons should be fine: https://www.postgresqltutorial.com/postgresql-getting-started/install-postgresql/)
    - Using the GUI (or cmd if you prefer), create a database called 'smart-brain' with the following tables and fields. I'll just give the SQL syntax to create the tables to make it easier:
        - Create the 'users' table:
        ```
        CREATE TABLE users (
            id serial PRIMARY KEY,
            name VARCHAR(100),
            email test UNIQUE NOT NULL,
            entries BIGINT DEFAULT 0,
            joined TIMESTAMP NOT NULL
        );
        ```
        - And the 'login' table:
        ``` 
        CREATE TABLE login (
            id serial PRIMARY KEY,
            hash varchar(100) NOT NULL,
            email text UNIQUE NOT NULL
        );
        ```

There's probably an easier way to do this, but my goal here wasn't to make it perfect, but to practice some backend stuff. In future iterations, I'll be working on making this more streamlined