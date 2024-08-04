document.getElementById('project-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const github = document.getElementById('github').value;
    const live = document.getElementById('live').value;

    // Save the data to your backend or local storage
    // Example: Sending to an API endpoint

    fetch('/api/update-projects', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, description, github, live }),
    })
    .then(response => response.json())
    .then(data => {
        alert('Project updated successfully!');
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
