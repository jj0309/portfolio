let imgSlideStates={};
window.addEventListener('load',()=>{
    const name = 'Ka-son Chau';
    appendProjects();
    const nbOfProjects = countObjSize(ProjectsObj);
    initImgStates(nbOfProjects,imgSlideStates);
    gsap.fromTo(document.querySelector('.PresentationCard'),{opacity:0},{opacity:1,duration:2});
    // animation of typing name in presentation card
    animationTyping(name,document.querySelector('.PresentationCard h2'));
    setInterval(() => {
        rollImgSlides();
    }, 5000);
})

const initImgStates=(nbOfProjects,imgStateObj)=>{
    for(let index=0;index<nbOfProjects;index++)
        imgStateObj[index]=0;
}

/* 
    function to animate typing of a text
    param1:text to animate
    param2:node in which we animate
 */
const animationTyping=(Text,node)=>{
    let typed = '';
    let index = 0;
    let timer = setInterval(() => {
        typed+=Text[index];
        node.innerHTML = typed;
        index++;
        if(index>=Text.length)
            clearInterval(timer);
    }, 300);
}