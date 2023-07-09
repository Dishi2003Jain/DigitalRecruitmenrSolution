function activateLink(event) {
    const currentLink = event.target;
  
    // Remove active class from all links
    const links = document.querySelectorAll('.topnav a');
    links.forEach(link => link.classList.remove('active'));
  
    // Add active class to the clicked link
    currentLink.classList.add('active');
  }

  document.getElementById('logout').addEventListener('click', function() {
    window.location.href = 'login.html';
    alert("You have been logged out successfully!")
  });
  document.getElementById('login').addEventListener('click', function() {
    window.location.href = 'login.html';
    alert("You have been logged out successfully!")
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('searchForm');
    const locationInput = document.getElementById('locationInput');
    const jobRoleInput = document.getElementById('jobRoleInput');
    const candidatesList = document.getElementById('candidatesList');
  
    // Simulating fetched candidates data
    const fetchedCandidates = [
      { name: 'Candidate 1', location: 'Delhi', jobRole: 'Role X' },
      { name: 'Candidate 2', location: 'Mumbai', jobRole: 'Role Y' },
      { name: 'Candidate 3', location: 'Kolkata', jobRole: 'Role Z' },
      { name: 'Candidate 4', location: 'Chennai', jobRole: 'Role Z' },
      { name: 'Candidate 5', location: 'Delhi', jobRole: 'Role Y' },
      { name: 'Candidate 6', location: 'Kolkata', jobRole: 'Role X' },
      { name: 'Candidate 7', location: 'Chennai', jobRole: 'Role X' },
      { name: 'Candidate 8', location: 'Delhi', jobRole: 'Role Y' },
      { name: 'Candidate 9', location: 'Kolkata', jobRole: 'Role Z' },
      { name: 'Candidate 10', location: 'Mumbai', jobRole: 'Role X' },
    ];
  
    // Function to render candidates
    function renderCandidates(candidates) {
      candidatesList.innerHTML = '';
  
      if (candidates.length === 0) {
        const noResultsMsg = document.createElement('p');
        noResultsMsg.textContent = 'No candidates found.';
        candidatesList.appendChild(noResultsMsg);
        return;
      }
  
      candidates.forEach(candidate => {
        const candidateCard = document.createElement('div');
        candidateCard.classList.add('candidateCard');
  
        const candidateName = document.createElement('h3');
        candidateName.textContent = candidate.name;
  
        const candidateLocation = document.createElement('p');
        candidateLocation.textContent = `Location: ${candidate.location}`;
  
        const candidateJobRole = document.createElement('p');
        candidateJobRole.textContent = `Job Role: ${candidate.jobRole}`;
  
        candidateCard.appendChild(candidateName);
        candidateCard.appendChild(candidateLocation);
        candidateCard.appendChild(candidateJobRole);
  
        candidatesList.appendChild(candidateCard);
      });
    }
  
    // Initial rendering of all candidates
    renderCandidates(fetchedCandidates);
  
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const selectedLocation = locationInput.value;
      const selectedJobRole = jobRoleInput.value;
  
      // Filter candidates based on selected location and job role
      const filteredCandidates = fetchedCandidates.filter(candidate =>
        (selectedLocation === '' || candidate.location === selectedLocation) &&
        (selectedJobRole === '' || candidate.jobRole === selectedJobRole)
      );
  
      // Render filtered candidates
      renderCandidates(filteredCandidates);
    });
  });
  
