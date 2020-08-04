const countObjSize=(obj)=>{
    return Object.keys(obj).length;
}

const appendProjects=()=>{
    const projectNode = document.querySelector('#Projects');
    let templateHtml = document.getElementById('ProjectTemplate').innerHTML;
    const projectCount = countObjSize(ProjectsObj);
    for(let index = 0;index < projectCount;index++){
        let div = document.createElement('div');
        let img = document.createElement('img');
        const presentationWidth = (window.outerWidth/2);
        div.className = 'ProjectSectionItem '+index;
        div.innerHTML = templateHtml;
        div.style.width=presentationWidth+'px';
        div.querySelector('.ProjectName').innerHTML = ProjectsObj[index].name;
        div.querySelector('.ProjectDescription p').innerHTML = ProjectsObj[index].description;
        div.querySelector('.ProjectTechs').innerHTML = ProjectsObj[index].techno;
        img.src=ProjectsObj[index].img[0];
        img.alt='ProjectPreviewSS';
        img.width=presentationWidth;
        div.appendChild(img);
        projectNode.appendChild(div);
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
        projectImg.src = ProjectsObj[index].img[imgSlideStates[index]];
        index++;
    })
}