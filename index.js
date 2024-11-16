var toggleButton = document.getElementById('toggleButton');
var SkillsDiv = document.getElementById('Skills');
if (toggleButton && SkillsDiv) {
    toggleButton.addEventListener('click', function () {
        if (SkillsDiv.style.display === 'none') {
            SkillsDiv.style.display = 'block';
            toggleButton.value = 'Hide Skills';
        }
        else {
            SkillsDiv.style.display = 'none';
            toggleButton.value = 'Show Skills';
        }
    });
}
else {
    console.log("Required Document not found in DOM");
}
