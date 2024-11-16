const toggleButton=document.getElementById('toggleButton') as HTMLButtonElement|null;
const SkillsDiv = document.getElementById('Skills') as HTMLButtonElement|null;

if(toggleButton && SkillsDiv){
toggleButton.addEventListener('click', () => {
    if (SkillsDiv.style.display === 'none') {
        SkillsDiv.style.display = 'block';
        toggleButton.value = 'Hide Skills';
    } else {
        SkillsDiv.style.display = 'none';
        toggleButton.value = 'Show Skills';
    }
});
}
else{
    console.log("Required Document not found in DOM")
}