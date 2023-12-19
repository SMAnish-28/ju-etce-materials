function downloadDocument(filename) {
    // For simplicity, this example uses a placeholder link
    // Replace this with the actual path to your documents
    const documentPath = '/path/to/documents/' + filename;
    
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = documentPath;
    
    // Set the download attribute and simulate a click
    link.download = filename;
    link.click();
}
