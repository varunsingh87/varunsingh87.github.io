class Project extends HTMLLIElement {
    constructor() {
        super();
        this.id = this.getAttribute('name').replace(/\s/g, '-');
    }

    connectedCallback() {
        if (this.hasAttribute('img')) {
            const imgContainer = document.createElement('figure');
            imgContainer.className = "project-thumbnail";

            const img = document.createElement('img');
            img.src = this.getAttribute('img');

            imgContainer.appendChild(img);
            this.appendChild(imgContainer);
        }

        const projectInfoContainer = document.createElement('div');
        projectInfoContainer.className = "project-info";

        projectInfoContainer.appendChild(this.displayName());

        if (this.hasAttribute('category'))
            projectInfoContainer.appendChild(this.displayTime())

        if (this.hasAttribute('description')) {
            const description = document.createElement('p');
            description.textContent = this.getAttribute('description') + " ";
            description.className = "description";
            description.appendChild(this.learnMoreLink());
            projectInfoContainer.appendChild(description);
        }

        const skillStack = document.createElement('ul');
        skillStack.className = "skills-stack";
        const softwareDevTools = this.getAttribute('tools');

        softwareDevTools.split(";").forEach(item => {
            const softwareDevTool = document.createElement('li');
            softwareDevTool.textContent = item;
            skillStack.appendChild(softwareDevTool);
        });
        if (this.hasAttribute('github')) {
            const viewOnGitHub = document.createElement('a');
            viewOnGitHub.href = `https://github.com/${this.getAttribute('github')}`;
            viewOnGitHub.target = "_blank";
            viewOnGitHub.className = "view-project";
            viewOnGitHub.textContent = "View On GitHub";
            projectLinkContainer.appendChild(viewOnGitHub);
        }

        if (this.hasAttribute('tryitout')) {
            const tryItOut = document.createElement('a');
            tryItOut.href = this.getAttribute('tryitout');
            tryItOut.target = "_blank";
            tryItOut.className = "view-project";
            tryItOut.textContent = "Try It Out";
            projectLinkContainer.appendChild(tryItOut);
        }

        this.appendChild(projectInfoContainer);
    }

    displayName() {
        const name = this.getAttribute('name');
        const nameEl = document.createElement('h4');
        nameEl.textContent = name;
        return nameEl;
    }

    displayTime() {
        const category = document.createElement('p');
        category.textContent = this.getAttribute('years');
        category.className = "subheading";
        return category;
    }

    learnMoreLink() {
        const viewProject = document.createElement('a');
        viewProject.onclick = e => e.stopPropagation();
        viewProject.href = this.getAttribute('link');
        viewProject.target = viewProject.href.includes('https://varunsingh') ? "_self" : "_blank";
        viewProject.textContent = "Learn More";
        return viewProject;
    }
}

customElements.define('software-project', Project, { extends: 'li' })
