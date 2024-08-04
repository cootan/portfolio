document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('update-project-form');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const projectName = document.getElementById('project-name').value;
        const projectDescription = document.getElementById('project-description').value;
        const githubLink = document.getElementById('github-link').value;
        const liveDemoLink = document.getElementById('live-demo-link').value;

        // Example AJAX request to update project info
        try {
            const response = await fetch('/admin/update-project', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    projectName,
                    projectDescription,
                    githubLink,
                    liveDemoLink
                }),
            });

            if (response.ok) {
                alert('Project updated successfully');
                form.reset();
            } else {
                alert('Failed to update project');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred');
        }
    });
});
