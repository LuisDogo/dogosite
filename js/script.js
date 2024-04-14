function downloadResume() {
    const url = 'docs/Resume.pdf';
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.setAttribute('download', 'YourResume.pdf');
    anchor.click();
}