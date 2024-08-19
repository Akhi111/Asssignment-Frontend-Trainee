export const dashboardData = {
    categories: [
        {
            id: 1,
            name: "CSPM Executive Dashboard",
            widgets: [
                {
                    id: 1,
                    name: "Cloud Accounts",
                    text: "2 Total",
                    type: "pieChart",
                    data: {
                        labels: ['Connected', 'Not Connected'],
                        datasets: [{
                            data: [2, 2],
                            backgroundColor: ['#4A90E2', '#C2CFE0'],
                        }]
                    }
                },
                {
                    id: 2,
                    name: "Cloud Account Risk Assessment",
                    text: "9659 Total",
                    type: "pieChart",
                    data: {
                        labels: ['Failed', 'Warning', 'Not available', 'Passed'],
                        datasets: [{
                            data: [1689, 681, 36, 7253],
                            backgroundColor: ['#E74C3C', '#F39C12', '#BDC3C7', '#2ECC71'],
                        }]
                    }
                },
            ]
        },
        {
            id: 2,
            name: "CWPP Dashboard",
            widgets: [
                {
                    id: 3,
                    name: "Top 5 Namespace Specific Alerts",
                    text: "No Graph data available!",
                    type: "text",
                },
                {
                    id: 4,
                    name: "Workload Alerts",
                    text: "No Graph data available!",
                    type: "text",
                }
            ]
        },
        {
            id: 3,
            name: "Registry Scan",
            widgets: [
                {
                    id: 5,
                    name: "Image Risk Assessment",
                    text: "1470 Total Vulnerabilities",
                    type: "barChart",
                    data: {
                        labels: ['Critical', 'High', 'Medium', 'Low'],
                        datasets: [{
                            data: [9, 150, 657, 654],
                            backgroundColor: ['#E74C3C', '#E67E22', '#F1C40F', '#BDC3C7'],
                        }]
                    }
                },
                {
                    id: 6,
                    name: "Image Security Issues",
                    text: "2 Total Images",
                    type: "barChart",
                    data: {
                        labels: ['Critical', 'High', 'Medium', 'Low'],
                        datasets: [{
                            data: [2, 2, 0, 0],
                            backgroundColor: ['#E74C3C', '#E67E22', '#F1C40F', '#BDC3C7'],
                        }]
                    }
                }
            ]
        }
    ]
};
