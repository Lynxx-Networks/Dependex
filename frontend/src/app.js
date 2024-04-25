document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'http://localhost:5433/graphql';
    const query = `
      query GetPrograms {
        programs {
          id
          name
          version
          release_date
          dependencies {
            id
            name
            version
          }
        }
      }
    `;
  
    // Fetch data from GraphQL API
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ query }),
      mode: 'cors'
    })
      .then((response) => response.json())
      .then((data) => displayData(data.data))
      .catch((error) => console.error('Error fetching data: ', error));
  });
  
  // Function to handle the display of fetched data
  function displayData(data) {
    const programsContainer = document.getElementById('programs-container');
  
    // Check if programs data is present
    if (data && data.programs) {
      data.programs.forEach((program) => {
        const programElement = document.createElement('div');
        programElement.className = 'program';
        programElement.innerHTML = `
          <h3>${program.name}</h3>
          <p>Version: ${program.version}</p>
          <p>Release Date: ${new Date(program.release_date).toLocaleDateString()}</p>
          <div>Dependencies: ${program.dependencies.map(dep => dep.name).join(', ')}</div>
        `;
        programsContainer.appendChild(programElement);
      });
    } else {
      programsContainer.innerHTML = '<p>No programs to display</p>';
    }
  }
  