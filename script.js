/* =========================================================
   MPLADS MONITORING DASHBOARD
   JavaScript
   ========================================================= */


/* ---------------------------------------------------------
   DEMO PROJECT DATA
   Note: Self-created data for prototype demonstration only.
   --------------------------------------------------------- */

const projects = [

    {
        id: "MPL-TS-003",
        state: "Telangana",
        district: "Nizamabad",
        mp: "Example Constituency",

        work: "Road Development",
        category: "Infrastructure",

        sanctioned: 4500000,
        released: 4490000,
        utilized: 4480000,

        physical: 68,
        financial: 99,

        sanctionDate: "12-04-2025",
        status: "Completed",

        riskScore: 87,
        risk: "High"
    },

    {
        id: "MPL-AP-002",
        state: "Andhra Pradesh",
        district: "Vijayawada",
        mp: "Example Constituency",

        work: "Government School Building",
        category: "Education",

        sanctioned: 3500000,
        released: 3400000,
        utilized: 2500000,

        physical: 70,
        financial: 72,

        sanctionDate: "18-05-2025",
        status: "Ongoing",

        riskScore: 34,
        risk: "Low"
    },

    {
        id: "MPL-KA-001",
        state: "Karnataka",
        district: "Bengaluru Rural",
        mp: "Example Constituency",

        work: "Village Drinking Water System",
        category: "Water Supply",

        sanctioned: 2700000,
        released: 2600000,
        utilized: 1900000,

        physical: 72,
        financial: 70,

        sanctionDate: "05-03-2025",
        status: "Ongoing",

        riskScore: 28,
        risk: "Low"
    },

    {
        id: "MPL-MH-004",
        state: "Maharashtra",
        district: "Pune",
        mp: "Example Constituency",

        work: "Rural Road Improvement",
        category: "Infrastructure",

        sanctioned: 6200000,
        released: 6100000,
        utilized: 5900000,

        physical: 38,
        financial: 95,

        sanctionDate: "22-01-2025",
        status: "Ongoing",

        riskScore: 91,
        risk: "High"
    },

    {
        id: "MPL-TN-005",
        state: "Tamil Nadu",
        district: "Chennai",
        mp: "Example Constituency",

        work: "Public Library Renovation",
        category: "Education",

        sanctioned: 1800000,
        released: 1700000,
        utilized: 900000,

        physical: 65,
        financial: 50,

        sanctionDate: "10-06-2025",
        status: "Ongoing",

        riskScore: 22,
        risk: "Low"
    },

    {
        id: "MPL-RJ-006",
        state: "Rajasthan",
        district: "Jaipur",
        mp: "Example Constituency",

        work: "Solar Street Lighting",
        category: "Energy",

        sanctioned: 3000000,
        released: 2900000,
        utilized: 2300000,

        physical: 48,
        financial: 77,

        sanctionDate: "15-02-2025",
        status: "Ongoing",

        riskScore: 64,
        risk: "Medium"
    }

];


/* ---------------------------------------------------------
   FORMAT INDIAN CURRENCY
   --------------------------------------------------------- */

function formatCurrency(amount) {

    return "₹" + amount.toLocaleString("en-IN");

}


/* ---------------------------------------------------------
   INITIAL DASHBOARD
   --------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", function () {

    updateDashboard();

    displayProjects(projects);

});


/* ---------------------------------------------------------
   UPDATE DASHBOARD NUMBERS
   --------------------------------------------------------- */

function updateDashboard() {

    const totalProjects = projects.length;

    const totalFunds = projects.reduce(
        (total, project) => total + project.sanctioned,
        0
    );

    const highRiskProjects = projects.filter(
        project => project.risk === "High"
    ).length;

    const averageProgress = Math.round(
        projects.reduce(
            (total, project) => total + project.physical,
            0
        ) / projects.length
    );


    document.getElementById("totalProjects").textContent =
        totalProjects;


    document.getElementById("totalFunds").textContent =
        formatCurrency(totalFunds);


    document.getElementById("highRisk").textContent =
        highRiskProjects;


    document.getElementById("averageProgress").textContent =
        averageProgress + "%";


    updateRiskOverview();

}


/* ---------------------------------------------------------
   RISK OVERVIEW
   --------------------------------------------------------- */

function updateRiskOverview() {

    const high = projects.filter(
        project => project.risk === "High"
    ).length;

    const medium = projects.filter(
        project => project.risk === "Medium"
    ).length;

    const low = projects.filter(
        project => project.risk === "Low"
    ).length;


    document.getElementById("highCount").textContent =
        high;

    document.getElementById("mediumCount").textContent =
        medium;

    document.getElementById("lowCount").textContent =
        low;


    const total = projects.length;


    document.getElementById("highBar").style.width =
        (high / total * 100) + "%";

    document.getElementById("mediumBar").style.width =
        (medium / total * 100) + "%";

    document.getElementById("lowBar").style.width =
        (low / total * 100) + "%";

}


/* ---------------------------------------------------------
   DISPLAY PROJECT TABLE
   --------------------------------------------------------- */

function displayProjects(projectList) {

    const table =
        document.getElementById("projectTable");


    table.innerHTML = "";


    if (projectList.length === 0) {

        table.innerHTML = `
            <tr>
                <td colspan="7"
                    style="text-align:center;padding:30px;">
                    No projects found.
                </td>
            </tr>
        `;

        return;
    }


    projectList.forEach(project => {

        const row =
            document.createElement("tr");


        row.onclick = function () {

            showProject(project.id);

        };


        let riskClass =
            project.risk.toLowerCase();


        let riskIcon =
            project.risk === "High"
                ? "🔴"
                : project.risk === "Medium"
                    ? "🟡"
                    : "🟢";


        row.innerHTML = `

            <td>
                <strong>${project.id}</strong>
            </td>

            <td>
                ${project.work}
            </td>

            <td>
                ${project.state}
            </td>

            <td>
                ${project.district}
            </td>

            <td>
                ${project.physical}%
            </td>

            <td>
                <strong>
                    ${project.riskScore}/100
                </strong>
            </td>

            <td>
                <span class="risk-badge ${riskClass}">
                    ${riskIcon} ${project.risk}
                </span>
            </td>

        `;


        table.appendChild(row);

    });

}


/* ---------------------------------------------------------
   SEARCH + FILTER
   --------------------------------------------------------- */

function filterProjects() {

    const searchInput =
        document.getElementById("searchInput")
            .value
            .toLowerCase()
            .trim();


    const selectedState =
        document.getElementById("stateFilter")
            .value;


    const selectedRisk =
        document.getElementById("riskFilter")
            .value;


    const filteredProjects =
        projects.filter(project => {


            const searchableText = `

                ${project.id}
                ${project.state}
                ${project.district}
                ${project.work}
                ${project.category}

            `.toLowerCase();


            const matchesSearch =
                searchableText.includes(searchInput);


            const matchesState =
                selectedState === "All" ||
                project.state === selectedState;


            const matchesRisk =
                selectedRisk === "All" ||
                project.risk === selectedRisk;


            return (
                matchesSearch &&
                matchesState &&
                matchesRisk
            );

        });


    displayProjects(filteredProjects);

}


/* ---------------------------------------------------------
   SHOW COMPLETE PROJECT DETAILS
   --------------------------------------------------------- */

function showProject(projectId) {

    const project =
        projects.find(
            item => item.id === projectId
        );


    if (!project) {

        return;

    }


    /* ---------- BASIC DETAILS ---------- */

    document.getElementById("detailName")
        .textContent =
        project.work;


    document.getElementById("detailLocation")
        .textContent =
        `${project.district}, ${project.state}`;


    document.getElementById("detailId")
        .textContent =
        project.id;


    document.getElementById("detailState")
        .textContent =
        project.state;


    document.getElementById("detailDistrict")
        .textContent =
        project.district;


    document.getElementById("detailMP")
        .textContent =
        project.mp;


    document.getElementById("detailWork")
        .textContent =
        project.work;


    document.getElementById("detailCategory")
        .textContent =
        project.category;


    /* ---------- FINANCIAL DETAILS ---------- */

    document.getElementById("detailSanctioned")
        .textContent =
        formatCurrency(project.sanctioned);


    document.getElementById("detailReleased")
        .textContent =
        formatCurrency(project.released);


    document.getElementById("detailUtilized")
        .textContent =
        formatCurrency(project.utilized);


    document.getElementById("detailFinancial")
        .textContent =
        project.financial + "%";


    /* ---------- PROGRESS ---------- */

    document.getElementById("physicalText")
        .textContent =
        project.physical + "%";


    document.getElementById("financialText")
        .textContent =
        project.financial + "%";


    document.getElementById("physicalBar")
        .style.width =
        project.physical + "%";


    document.getElementById("financialBar")
        .style.width =
        project.financial + "%";


    /* ---------- OTHER DETAILS ---------- */

    document.getElementById("detailDate")
        .textContent =
        project.sanctionDate;


    document.getElementById("detailStatus")
        .textContent =
        project.status;


    /* ---------- RISK ---------- */

    const riskBadge =
        document.getElementById("detailRiskBadge");


    riskBadge.className =
        "risk-badge " +
        project.risk.toLowerCase();


    if (project.risk === "High") {

        riskBadge.textContent =
            "🔴 HIGH RISK";

    }

    else if (project.risk === "Medium") {

        riskBadge.textContent =
            "🟡 MEDIUM RISK";

    }

    else {

        riskBadge.textContent =
            "🟢 LOW RISK";

    }


    document.getElementById("detailRiskScore")
        .textContent =
        project.riskScore + "/100";


    document.getElementById("anomalyScore")
        .textContent =
        `${project.riskScore}/100 ${
            project.risk === "High"
                ? "🔴"
                : project.risk === "Medium"
                    ? "🟡"
                    : "🟢"
        }`;


    /* ---------- ANOMALY EXPLANATION ---------- */

    const progressDifference =
        project.financial -
        project.physical;


    let explanation;


    if (progressDifference >= 30) {

        explanation =
            `Financial progress (${project.financial}%) is significantly higher than physical progress (${project.physical}%). This mismatch may require closer monitoring and verification.`;

    }

    else if (progressDifference >= 15) {

        explanation =
            `Financial progress (${project.financial}%) is moderately higher than physical progress (${project.physical}%). The project may require additional review.`;

    }

    else {

        explanation =
            `The difference between financial progress (${project.financial}%) and physical progress (${project.physical}%) is relatively small in this prototype. Routine monitoring is recommended.`;

    }


    document.getElementById("anomalyText")
        .textContent =
        explanation;


    /* ---------- OPEN MODAL ---------- */

    document.getElementById("projectModal")
        .classList.add("show");


    document.body.style.overflow =
        "hidden";


    /* Save selected project */

    window.selectedProject =
        project;

}


/* ---------------------------------------------------------
   CLOSE PROJECT MODAL
   --------------------------------------------------------- */

function closeProject() {

    document.getElementById("projectModal")
        .classList.remove("show");


    document.body.style.overflow =
        "auto";

}


/* ---------------------------------------------------------
   CLOSE WHEN CLICKING OUTSIDE
   --------------------------------------------------------- */

function closeModal(event) {

    if (
        event.target.id ===
        "projectModal"
    ) {

        closeProject();

    }

}


/* ---------------------------------------------------------
   ESCAPE KEY
   --------------------------------------------------------- */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeProject();

        }

    }
);


/* ---------------------------------------------------------
   DOWNLOAD PROJECT REPORT
   --------------------------------------------------------- */

function downloadReport() {

    const project =
        window.selectedProject;


    if (!project) {

        return;

    }


    const progressDifference =
        project.financial -
        project.physical;


    let anomaly;


    if (progressDifference >= 30) {

        anomaly =
            "Financial progress is significantly higher than physical progress. Closer monitoring is recommended.";

    }

    else if (progressDifference >= 15) {

        anomaly =
            "There is a moderate gap between financial and physical progress. Additional review may be useful.";

    }

    else {

        anomaly =
            "No major progress mismatch was identified in this demo dataset.";

    }


    const report = `

MPLADS PROJECT MONITORING REPORT
================================

PROJECT INFORMATION
-------------------

Project ID: ${project.id}
State: ${project.state}
District: ${project.district}
MP / Constituency: ${project.mp}
Work Description: ${project.work}
Work Category: ${project.category}


FINANCIAL INFORMATION
---------------------

Sanctioned Amount: ${formatCurrency(project.sanctioned)}
Released Amount: ${formatCurrency(project.released)}
Utilized Amount: ${formatCurrency(project.utilized)}


PROJECT PROGRESS
----------------

Physical Progress: ${project.physical}%
Financial Progress: ${project.financial}%


OTHER DETAILS
-------------

Sanction Date: ${project.sanctionDate}
Completion Status: ${project.status}


RISK ASSESSMENT
---------------

Risk Score: ${project.riskScore}/100
Risk Level: ${project.risk}


ANOMALY / MONITORING OBSERVATION
--------------------------------

${anomaly}


IMPORTANT NOTE
--------------

This report is generated from self-created demo data
for prototype demonstration purposes only.

It is NOT official MPLADS data.


Generated by:
MPLADS Monitoring Dashboard Prototype

`;


    const blob =
        new Blob(
            [report],
            {
                type: "text/plain"
            }
        );


    const url =
        URL.createObjectURL(blob);


    const link =
        document.createElement("a");


    link.href = url;


    link.download =
        `${project.id}_MPLADS_Report.txt`;


    document.body.appendChild(link);


    link.click();


    document.body.removeChild(link);


    URL.revokeObjectURL(url);

}