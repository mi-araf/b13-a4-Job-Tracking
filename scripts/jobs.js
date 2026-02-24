const jobs = [
    {
        id: 0,
        company: "Mobile First Corp",
        role: "React Native Developer",
        location: "Remote",
        type: "Full-time",
        salary: "$130,000 - $175,000",
        description: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
    },
    {
        id: 1,
        company: "WebFlow Agency",
        role: "Web Designer & Developer",
        location: "Los Angeles, CA",
        type: "Part-time",
        salary: "$80,000 - $120,000",
        description: "Create stunning web experiences for high-profile clients.",
    },
    {
        id: 2,
        company: "CloudFirst Inc",
        role: "Backend Developer",
        location: "Seattle, WA",
        type: "Full-time",
        salary: "$140,000 - $190,000",
        description: "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.",
    },
    {
        id: 3,
        company: "Innovation Labs",
        role: "UI/UX Engineer",
        location: "Austin, TX",
        type: "Full-time",
        salary: "$110,000 - $150,000",
        description: "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.",
    },
    {
        id: 4,
        company: "MegaCorp Solutions",
        role: "JavaScript Developer",
        location: "New York, NY",
        type: "Full-time",
        salary: "$130,000 - $170,000",
        description: "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.",
    },
    {
        id: 5,
        company: "StartupXYZ",
        role: "Full Stack Engineer",
        location: "Remote",
        type: "Full-time",
        salary: "$120,000 - $160,000",
        description: "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.",
    },
    {
        id: 6,
        company: "TechCorp Industries",
        role: "Senior Frontend Developer",
        location: "San Francisco, CA",
        type: "Full-time",
        salary: "$130,000 - $175,000",
        description: "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.",
    },
    {
        id: 7,
        company: "DataViz Solutions",
        role: "Data Visualization Specialist",
        location: "Boston, MA",
        type: "Full-time",
        salary: "$125,000 - $165,000",
        description: "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.",
    },
];


// get jobs
function allJobsGet() {
    const jobContainer = document.getElementById("all-jobs");
    jobContainer.innerHTML = "";

    for (let job of jobs) {
        const card = document.createElement("div");
        card.id = `jobCard${job.id}`;
        card.className = "card bg-base-100 border border-base-200 shadow-sm w-full myCardHover cardJob";

        card.innerHTML = `
            <div class="card-body gap-3">
                <div class="flex items-start justify-between">
                    <div class="space-y-1">
                        <h2 class="text-lg font-semibold text-[#002C5C]">${job.company}</h2>
                        <p class="text-base text-[#64748B]">${job.role}</p>
                        <div class="text-sm flex flex-wrap items-center gap-x-2 text-[#002c5cb1] py-4">
                            <span>${job.location}</span><span>•</span><span>${job.type}</span><span>•</span><span>${job.salary}</span>
                        </div>
                    </div>
                    <button onclick="deleteJob(${job.id})" class="delete-job-btn btn btn-ghost border-gray-400 btn-circle opacity-50">
                        <i class="fa-regular fa-trash-can"></i>
                    </button>
                </div>

                <div class="mb-1">
                    <span id="status${job.id}" class="px-3 py-2 text-[#002C5C] font-medium bg-[#EEF4FF] rounded">NOT APPLIED</span>
                </div>

                <p class="text-sm text-[#323B49]">${job.description}</p>

                <div class="flex gap-3 pt-1">
                    <button onclick="statusInterview(${job.id})" class="btn btn-outline btn-success font-semibold">
                        INTERVIEW
                    </button>
                    <button onclick="statusRejected(${job.id})" class="btn btn-outline btn-error font-semibold">
                        REJECTED
                    </button>
                </div>
            </div>
        `;

    jobContainer.appendChild(card);
    };
}

// for removing the default setups in interview & rejected
function updateEmpty(jobId, emptyId) {
    const jobBox = document.getElementById(jobId);
    const emptyBox = document.getElementById(emptyId);

    const jobsCount = jobBox.querySelectorAll(".cardJob").length;

    if (jobsCount > 0) {
        emptyBox.classList.add("hidden");
    } else {
        emptyBox.classList.remove("hidden");
    }
}

function statusInterview(id) {
    const status = document.getElementById(`status${id}`);
    const jobCard = document.getElementById(`jobCard${id}`);
    
    // Remove from rejected if it exists there
    const rejectedCard = document.getElementById(`jobCard${id}-rejected`);
    if (rejectedCard) {
        rejectedCard.remove();
        updateEmpty("rejected-jobs", "rejected-empty");
    }
    // Check if already in interview
    if (document.getElementById(`jobCard${id}-interview`)) {
        return;
    }
    
    // 1. change badge
    status.innerHTML = `
    <span class="mx-2 text-green-700 rounded">INTERVIEW</span>
    `;
    // 2. move the job card
    const jobCardFromBox = jobCard.cloneNode(true);
    jobCardFromBox.id = `jobCard${id}-interview`;
    document.getElementById('interview-jobs').appendChild(jobCardFromBox);
    // 3. update empty section for default looks
    updateEmpty("interview-jobs", "interview-empty");
    // change the count in header
    jobSelected();
    updateCount();
}

function statusRejected(id) {
    const status = document.getElementById(`status${id}`);
    const jobCard = document.getElementById(`jobCard${id}`);
    
    // Remove from interview if it exists there
    const interviewCard = document.getElementById(`jobCard${id}-interview`);
    if (interviewCard) {
        interviewCard.remove();
        updateEmpty("interview-jobs", "interview-empty");
    }
    // Check if already in rejected
    if (document.getElementById(`jobCard${id}-rejected`)) {
        return;
    }
    
    // 1. change badge
    status.innerHTML = `
    <span class="mx-2 text-red-700 rounded badge-animated-border">REJECTED</span>
    `;
    // 2. move the job card
    const jobCardFromBox = jobCard.cloneNode(true);
    jobCardFromBox.id = `jobCard${id}-rejected`;
    document.getElementById('rejected-jobs').appendChild(jobCardFromBox);
    // 3. update empty section for default looks
    updateEmpty("rejected-jobs", "rejected-empty");
    // change the count in header
    jobSelected();
    updateCount();
}
// call the dynamic function
allJobsGet();


let totalJobs = document.getElementById("total-jobs");
totalJobs.innerText = jobs.length;
let smallTotalJobs = document.getElementById("small-total-jobs");
smallTotalJobs.innerText = jobs.length;

// delete-btn function
function deleteJob(id) {
    // remove from all section
    const allJobs = document.getElementById(`jobCard${id}`);
    if (allJobs) { 
        allJobs.remove();
    }

    // remove from interview section (if exists)
    const onlyInter = document.getElementById(`jobCard${id}-interview`);
    if (onlyInter) { 
        onlyInter.remove();
    }

    // remove from rejected section (if exists)
    const onlyRej = document.getElementById(`jobCard${id}-rejected`);
    if (onlyRej) { 
        onlyRej.remove();
    }

    // update total counting
    totalJobs.innerText = Number(totalJobs.innerText) - 1;
    smallTotalJobs.innerText = Number(smallTotalJobs.innerText) - 1;

    if (totalJobs.innerText == 0) {
        const jobContainer = document.getElementById('all-jobs');
        jobContainer.innerHTML = `
        <div id="all-empty" class="bg-base-100 h-[400px] flex justify-center items-center flex-col space-y-1">
            <img src="./assets/jobs.png" alt="">
            <h3 class="text-lg text-[#002C5C] font-semibold md:text-2xl">No jobs available</h3>
            <p class="text-xs text-gray-500 md:text-base">Check back soon for new job opportunities</p>
        </div>
        `;
    }

    
    // showOnly() kinda works here
    updateEmpty("interview-jobs", "interview-empty");
    updateEmpty("rejected-jobs", "rejected-empty");
    
    // update interview/rejected counts in header
    jobSelected();
    updateCount();
}

function jobSelected() {
    const interviewCount = document.getElementById("interview-jobs").querySelectorAll(".cardJob").length;
    const rejectedCount = document.getElementById("rejected-jobs").querySelectorAll(".cardJob").length;

    document.getElementById("interview-count").innerText = interviewCount;
    document.getElementById("rejected-count").innerText = rejectedCount;
}

function updateCount() {
    const jobContainer = document.getElementById("all-jobs");
    const interviewSection = document.getElementById("interview-jobs");
    const rejectedSection = document.getElementById("rejected-jobs");
    
    // Find which section is visible
    let visibleSection = jobContainer;
    if (!interviewSection.classList.contains("hidden")) {
        visibleSection = interviewSection;
    } else if (!rejectedSection.classList.contains("hidden")) {
        visibleSection = rejectedSection;
    }
    
    // Count and update
    const count = visibleSection.querySelectorAll(".cardJob").length;
    smallTotalJobs.innerText = count;
}