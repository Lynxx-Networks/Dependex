# Dependex

-----------------------------

<img src="https://github.com/DavidTesar/Dependex/assets/73195563/3c4aa444-2721-4c46-ab24-61e9ad09f20a" width="250" height="250" align="left">


Dependex is a version tracking system for software programs and their dependencies.

-----------------------------

Description

-----------------------------

Dependex is designed to help maintain and visualize the relationships between software programs and their dependencies. Using a PostgreSQL database to store information about individual programs, dependencies, and their associations, Dependex provides an API built on a GraphQL server, allowing users to create, read, and manage program data effectively.

Getting Started

-----------------------------

Dependencies

-----------------------------

- PostgreSQL
- GraphQL
- PostGraphile

-----------------------------
### Details
Dependex is fully dockerized/containerized thus upon running the containers, all services should be accessible.

### Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/dependex.git](https://github.com/DavidTesar/Dependex.git
   ```
3. Run docker compose

   ```sh
   docker-compose build
   docker-compose up
   ```

3. Navigate to:
     - *\graphiql for manual query execution
     - *\graphql for API endpoint
     - *\3*** for frontend
