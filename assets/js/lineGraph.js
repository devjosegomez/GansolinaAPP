var chart = c3.generate({
    bindto: '#chart',
    color: {
        pattern: ['#9D141C', '#023D29', '#050505']
    },
    xFormat: '%Y-%m-%dT%H:%M:%S',
    axis: {
        x: {
            type: 'timeseries', //date format in CSV file needs to be 2000-06-14
            tick: {
                format: '%m-%d %H:00'
            }
         }
    },
    data: {
        x: 'update_time',
        columns: [
            ['update_time', 22, 30, 40],
//         ['update_time', "2016-07-26T17:01:49", "2016-07-26T18:04:28", "2016-07-26T19:02:14"],
            ['premium', 30, 200, 100, 400, 150, 250],
            ['regular', 130, 300, 200, 300, 250, 450],
            ['diesel', 130, 300, 200, 300, 250, 450],
        ]
    }
});
