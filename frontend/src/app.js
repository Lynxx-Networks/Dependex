document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'http://localhost:5433/graphql';
    const query = `
    query {
      allPrograms {
        nodes {
          id
          name
          version
          releaseDate
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
    console.log(data);
    const programsContainer = document.getElementById('programs-container');
  
    // Check if allPrograms data is present
    if (data && data.allPrograms && data.allPrograms.nodes) {
      // Clear previous content
      programsContainer.innerHTML = '';
  
      // Iterate over each program
      data.allPrograms.nodes.forEach((program) => {
        const programElement = document.createElement('div');
        programElement.className = 'program';
        programElement.innerHTML = `
          <h3>${program.name}</h3>
          <p>Version: ${program.version}</p>
          <p>Release Date: ${new Date(program.releaseDate).toLocaleDateString()}</p>
        `;
        programsContainer.appendChild(programElement);
      });
    } else {
      programsContainer.innerHTML = '<p>No programs to display</p>';
    }
  }
  
  