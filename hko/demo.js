d3.csv(
    "data.csv",
    function my_function(error, csv_signals) {
        csv_signal_count = csv_signals.length;
        d3_signals = [];
        for (i = 0; i < csv_signal_count; i = i + 1) {
            raw = csv_signals[i];
            transformed = {
                label: raw.StartDate,
                times: [
                    {
                        "color": raw.MyColor,
                        "starting_time": raw.MyStartTime,
                        "ending_time": raw.MyEndTime
                    }
                ]
            };
            d3_signals.push(transformed);
        }

        chart = d3
            .timeline()
            .itemHeight(8)
            .itemMargin(8)
            .labelMargin(10)
            .margin({left: 80, right: 0, top: 0, bottom: 0})
            .relativeTime()
            .rowSeparators("LightGrey")
            .showTimeAxisTick()
            .stack();
        d3
            .select("#timeline")
            .append("svg")
            .attr("width", 1500)
            .datum(d3_signals)
            .call(chart);
    }
);