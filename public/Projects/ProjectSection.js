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
        collapseButton.innerHTML= '<h4>'+ProjectsObj[index].name+'</h4> <h4>'+ProjectsObj[index].techno+'</h4> <span>+</span>';

        /* project item */
        let div = document.createElement('div');
        let img = document.createElement('img');
        const presentationWidth = (window.outerWidth/2);
        div.className = 'ProjectSectionItem '+index;
        div.innerHTML = templateHtml;
        div.style.width=presentationWidth+'px';
        div.querySelector('.ProjectName').innerHTML = ProjectsObj[index].name;
        div.querySelector('.ProjectDescription p').innerHTML = ProjectsObj[index].description;
        img.src=ProjectsObj[index].img[0];
        img.alt='ProjectPreviewSS';
        img.width=presentationWidth;
        div.appendChild(img);

        /* append both button and project */
        projectNode.appendChild(collapseButton);
        projectNode.appendChild(div);

        //hidden by default
        div.style.display='none';

        /* add event listener to button */
        collapseButton.addEventListener('click',(event)=>{
            changePlusMinus(event);
            toggleDisplay(div);
        });
    };
}

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

const changePlusMinus=(e)=>{
    const current = e.target.querySelector('span').innerHTML;
    if(current === '+')
        return e.target.querySelector('span').innerHTML = '-';
    return e.target.querySelector('span').innerHTML = '+';
}

const toggleDisplay=(div)=>{
    console.log(div)
    if(div.style.display == 'none'){
        gsap.fromTo(div,{opacity:0},{opacity:1,duration:0.5});
        return div.style.display = 'block';
    }
    gsap.fromTo(div,{opacity:1},{opacity:0,duration:0.5});
    return div.style.display = 'none';
}