let imgSlideStates={};
window.addEventListener('load',()=>{
    appendProjects();
    const nbOfProjects = countObjSize(ProjectsObj);
    initImgStates(nbOfProjects,imgSlideStates);
    setInterval(() => {
        rollImgSlides();
    }, 5000);
})

const initImgStates=(nbOfProjects,imgStateObj)=>{
    for(let index=0;index<nbOfProjects;index++)
        imgStateObj[index]=0;
}