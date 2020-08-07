const countObjSize=(obj)=>{
    return Object.keys(obj).length;
}

const appendProjects=()=>{
    const projectNode = document.querySelector('#Projects');
    let templateHtml = document.getElementById('ProjectTemplate').innerHTML;
    const projectCount = countObjSize(ProjectsObj);
    for(let index = 0;index < projectCount;index++){
        /* collapse button */
        let collapseButton = document.createElement('button');
        collapseButton.className = 'CollapseButton '+index;
        collapseButton.innerHTML= '<p>'+ProjectsObj[index].name+'</p> <p>'+ProjectsObj[index].techno+'</p> <span>+</span>';
        if(index == 0)
        collapseButton.innerHTML= '<p>'+ProjectsObj[index].name+'</p> <p>'+ProjectsObj[index].techno+'</p> <span>-</span>';
        /* project item */
        let div = document.createElement('div');
        let img = document.createElement('img');
        div.className = 'ProjectSectionItem '+index;
        div.innerHTML = templateHtml;
        div.querySelector('.ProjectName').innerHTML = ProjectsObj[index].name;
        div.querySelector('.ProjectDescription p').innerHTML = ProjectsObj[index].description;
        img.src=ProjectsObj[index].img[0];
        img.alt='ProjectPreviewSS';
        div.appendChild(img);

        /* append both button and project */
        projectNode.appendChild(collapseButton);
        projectNode.appendChild(div);

        //hidden by default
        div.style.display='none';
        if(index == 0)
            div.style.display='block';
        /* add event listener to button */
        collapseButton.addEventListener('click',()=>{
            changePlusMinus(collapseButton);
            toggleDisplay(div);
        });
    };
}

/*
    method for image slider in projects
 */
const rollImgSlides=()=>{
    let ProjectSectionItemArr = document.querySelectorAll('.ProjectSectionItem');
    let index = 0;
    ProjectSectionItemArr.forEach(Node => {
        let projectImg = Node.querySelector('img');
        if(imgSlideStates[index]==countObjSize(ProjectsObj[index].img)-1)
            imgSlideStates[index]=0;
        else
            imgSlideStates[index]++;
        gsap.fromTo(projectImg,{opacity:1},{opacity:0,duration:2.5});
        projectImg.src = ProjectsObj[index].img[imgSlideStates[index]];
        gsap.fromTo(projectImg,{opacity:0},{opacity:1,duration:2.5});
        index++;
    })
}

/*
    method to change the plus minus text in the project collapsable button
 */
const changePlusMinus=(node)=>{
    const current = node.querySelector('span').innerHTML;
    if(current === '+')
        return node.querySelector('span').innerHTML = '-';
    return node.querySelector('span').innerHTML = '+';
}

/* 
    method to toggle either show or not show the project onclick
 */
const toggleDisplay=(div)=>{
    if(div.style.display == 'none'){
        gsap.fromTo(div,{opacity:0},{opacity:1,duration:0.5});
        return div.style.display = 'block';
    }
    gsap.fromTo(div,{opacity:1},{opacity:0,duration:0.5});
    return div.style.display = 'none';
}