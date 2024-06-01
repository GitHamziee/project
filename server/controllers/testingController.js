
const axios = require("axios");
const zapApiUrl = 'http://localhost:8080/'; // The address where ZAP is running
exports.testing = async (req, res, next) => {
    try {
        // Start the spider scan
        const response = await axios.get(`${zapApiUrl}JSON/spider/action/scan/`, {
            params: {
                url: req.body.url,
                maxChildren: 10, // Adjust based on your needs
            },
        });

        const scanId = response.data.scan;
        console.log(`Started scan with ID: ${scanId}`);
        // Check the status of the scan periodically
        let progress;
        do {
            const statusResponse = await axios.get(`${zapApiUrl}JSON/spider/view/status/`, {
                params: { scanId },
            });
            progress = statusResponse.data.status;
            console.log(`Scan progress: ${progress}%`);
            await new Promise(resolve => setTimeout(resolve, 5000)); // Wait for 5 seconds before checking again
        } while (progress < 100);

        console.log('Scan completed.');

        // Retrieve the results of the scan
        const resultsResponse = await axios.get(`${zapApiUrl}JSON/core/view/alerts/`, {
            params: { baseurl: req.body.url },
        });
        const results = resultsResponse.data.alerts;
        console.log('Alerts:', results);
        res.send(results)
    } catch (err) {
        console.log(err);
    }
    
}




async function startScan(url) {
    // Start a new session
    const newSessionResponse = await axios.get(
        `${ZAP_API_URL}/core/action/newSession/?name=new_session&overwrite=true`
    );
    console.log("New session created:", newSessionResponse.data);

    // Start the spider
    const spiderResponse = await axios.get(
        `${ZAP_API_URL}/spider/action/scan/?url=${encodeURIComponent(
            url
        )}&recurse=true`
    );
    console.log("Spider started:", spiderResponse.data);

    // Poll ZAP for scan progress
    let progress = 0;
    while (progress < 100) {
        await new Promise((resolve) => setTimeout(resolve, 5000));
        const progressResponse = await axios.get(
            `${ZAP_API_URL}/spider/view/status/?scanId=${spiderResponse.data.scan}`
        );
        progress = parseInt(progressResponse.data.status);
        console.log("Spider progress:", progress, "%");
    }

    // Retrieve and display the alerts
    const alertsResponse = await axios.get(
        `${ZAP_API_URL}/core/view/alerts/?baseurl=${encodeURIComponent(
            url
        )}&start=0&count=0`
    );
    console.log("Alerts:", alertsResponse.data.alerts.length);
    return (alertsResponse.data.alerts);

    // // Shutdown ZAP
    // const shutdownResponse = await axios.get(
    //   `${ZAP_API_URL}/core/action/shutdown/`
    // );
    // console.log("ZAP shutdown:", shutdownResponse.data);
}
