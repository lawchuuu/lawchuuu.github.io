// --- JS
// 1
// 1 + 2 - (3 * 6 / 8)
// 1 + 2 < 3 / 4
// "text"
// var a = 1;
// var b = 1 + 2 - (3 * 6 / 8);
// var c = 1 + 2 < 3 / 4;
// var d = "text";
// window
// window.alert('x');
// window.alert(d);
// for (i = 0; i < 5; i = i + 1) { window.alert(i); }
// function cube(x) { return x * x * x; }
// ------
// var e = [];
// e.push(1);
// e[0]
// { a: 1, b: false, c: "hello", d: function() {...}, e: [123, 456] }
// --- D3
// d3.csv
// dummy data
//

d3.csv(
    "data.csv",
    function my_function(error, signals) {
        signal_count = signals.length;
        data = [];
        for (i = 0; i < signal_count; i = i + 1) {
            signal = signals[i];
            data.push({
                label: signal.StartDate,
                times: [
                    {
                        "color": signal.MyColor,
                        "starting_time": signal.MyStartTime,
                        "ending_time": signal.MyEndTime
                    }
                ]
            });
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
            .datum(data)
            .call(chart);
    }
);