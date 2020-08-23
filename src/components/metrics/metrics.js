function recordMetrics() {
    let metric = "msamariaMwema";

    let TwentFoursHours = 1000 * 60 * 60 * 24;
    let now = Date.now();
    const getItem = () => JSON.parse(localStorage.getItem(metric));
    const setItem = (now) => localStorage.setItem(metric, JSON.stringify(now));
    const removeItem = () => localStorage.removeItem(metric)
    if (localStorage) {

        //visitor
        if (getItem() === null) {

            //send to server first visit
            fetch(`./server/metrics/metrics.php?addMetrics=true&device=${window.innerWidth}&path=${location.pathname}`)
                .then(res => res.text())
                .then(res => {

                    const id = res;
                    now = now + "-" + id;
                    setItem(now);
                })
                .catch(err => console.log("Metrics", err));

        } else {

            let daysAgo = getItem().split("-");
            daysAgo = Number(daysAgo[0]);
            //number of seconds since last visit to the site
            const then = now - daysAgo;

            //if its more than 24 hours
            if (then > TwentFoursHours) {
                //clear and set fresh 
                let id = getItem().split("-");
                id = Number(id[1]);
                now = now + "-" + id;
                let daysOff = parseInt(then / TwentFoursHours);
                setItem(now);


                fetch(`./server/metrics/metrics.php?UpdateMetrics=true&
                metricsId=${id}&device=${window.innerWidth}&daysOff=${daysOff}&path=${location.pathname}`)
                    .then(res => res.text())
                    .then(res => {
                        console.log(res);
                    })
                    .catch(err => console.log("Metrics", err));


            } else {
                //your second or 3rd visit in 24 hours
            }

        }
    }
}
export default recordMetrics;