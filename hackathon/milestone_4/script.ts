// get reference to the form and display area
const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeDisplayElement = document.getElementById("resume-display") as HTMLDivElement;

// handle form submission
form.addEventListener("submit", (event: Event) => {
    event.preventDefault(); // prevent page reload

    // collect input values
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const dateOfBirth = (document.getElementById("date-of-birth") as HTMLInputElement).value;
    const education = (document.getElementById("education") as HTMLTextAreaElement).value;
    const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
    const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;

    // generate the resume content dynamicly
    const resumeHTML = `
        <h2><b>Editable Resume</b></h2>
        <h3>Personal Information</h3>
        <p><b>Name:</b> <span contenteditable="true">${name} </span></p>
        <p><b>Email:</b> <span contenteditable="true"> ${email} </span></p>
        <p><b>Phone:</b> <span contenteditable="true"> ${phone} </span></p>
        <p><b>Date of Birth:</b> <span contenteditable="true"> ${dateOfBirth} </span></p>
        <h3>Education</h3>
        <p contenteditable="true">${education}</p>
        <h3>Work Experience</h3>
        <p contenteditable="true">${experience}</p>
        <h3>Skills</h3>
        <p contenteditable="true">${skills}</p>
    `;

    // display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    } else {
        console.error("Resume display element not found.");
    }
});