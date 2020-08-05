let imgSlideStates={};
window.addEventListener('load',()=>{
    appendProjects();
    const nbOfProjects = countObjSize(ProjectsObj);
    initImgStates(nbOfProjects,imgSlideStates);
    gsap.fromTo(document.querySelector('.PresentationCard'),{opacity:0},{opacity:1,duration:2});
    setInterval(() => {
        rollImgSlides();
    }, 5000);
})

const initImgStates=(nbOfProjects,imgStateObj)=>{
    for(let index=0;index<nbOfProjects;index++)
        imgStateObj[index]=0;
}