<script>
  function downloadPDF() {
    // Replace 'path_to_your_pdf.pdf' with the actual path to your PDF file
    const pdfUrl = 'docs/Resume.pdf';
    // Create a hidden link element
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Luis Daniel Moreno  Santamaría.pdf'; // Change 'your_pdf_file_name.pdf' to the desired file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
</script>
