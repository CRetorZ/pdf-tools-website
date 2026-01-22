document.addEventListener('DOMContentLoaded', () => {
    // Drag-and-drop for merge tool
    const dropZone = document.querySelector('.drop-zone[data-tool="merge"]');
    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.style.background = '#e0e0e0';
    });
    dropZone.addEventListener('dragleave', () => {
        dropZone.style.background = '#f9f9f9';
    });
    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.style.background = '#f9f9f9';
        const files = Array.from(e.dataTransfer.files);
        alert(`Dropped ${files.length} files for merging.`);
        // Integrate with PDF merge library here
    });

    // Process buttons (demo alerts)
    document.querySelectorAll('.process-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            alert('Processing... (Demo: Integrate with backend for real functionality)');
        });
    });

    // Basic file input handling
    document.querySelectorAll('input[type="file"]').forEach(input => {
        input.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                alert(`Selected file: ${file.name}`);
            }
        });
    });
});