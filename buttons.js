const projectsContainer = document.getElementById("projects-container");
const prevBtn = document.getElementById("prev-project");
const nextBtn = document.getElementById("next-project");
const numProjects = projectsContainer.getElementsByClassName("project").length;

let projectIndex = 0;
console.log(numProjects);

function updateButtons() {
  prevBtn.style.display = projectIndex === 0 ? "none" : "block";
  nextBtn.style.display = projectIndex === numProjects - 1 ? "none" : "block";
}

function slideNext() {
  projectIndex++;
  projectsContainer.style.transform = `translateX(-${projectIndex * 125}%)`;
  updateButtons();
}

function slidePrev() {
  projectIndex--;
  projectsContainer.style.transform = `translateX(-${projectIndex * 125}%)`;
  updateButtons();
}

nextBtn.addEventListener("click", slideNext);
prevBtn.addEventListener("click", slidePrev);

updateButtons();
