fetch("projects.json")
  .then((response) => response.json())
  .then((data) => {
    const projectsContainer = document.getElementById("projects-container");

    data.forEach((project) => {
      const projectElement = document.createElement("div");
      projectElement.classList.add("project");

      const projectImage = document.createElement("img");
      projectImage.src = project.img_url;
      projectImage.alt = project.name;

      const projectDiv = document.createElement("div");

      const projectName = document.createElement("h3");
      projectName.textContent = project.name;

      const projectDescription = document.createElement("p");
      projectDescription.textContent = project.description;

      projectDiv.appendChild(projectName);
      projectDiv.appendChild(projectDescription);

      projectElement.appendChild(projectImage);
      projectElement.appendChild(projectDiv);

      projectsContainer.appendChild(projectElement);
    });
  })
  .catch((error) => {
    console.error("Error loading projects:", error);
  });
