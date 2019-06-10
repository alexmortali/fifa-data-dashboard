queue()
    .defer(d3.csv, "data/data-2.csv")
    .await(makeGraphs);

function makeGraphs(error, playerData) {
    var ndx = crossfilter(playerData);

    playerData.forEach(function(d) {
        d.overall = parseInt(d.overall);
    });

    show_team_selector(ndx);
    show_country_selector(ndx);
    show_player_selector(ndx);

    show_score_per_position(ndx);
    
    show_preferred_foot_pie_chart(ndx);
    show_body_type_pie_chart(ndx);
    show_work_rate_pie_chart(ndx);

    dc.renderAll();
}

// Sidebar filters
// Team selector chart
function show_team_selector(ndx) {
    var dim = ndx.dimension(dc.pluck('Club'));
    var group = dim.group();

    dc.selectMenu("#team-selector")
        .dimension(dim)
        .group(group);

}

// Team selector chart
function show_country_selector(ndx) {
    var dim = ndx.dimension(dc.pluck('Nationality'));
    var group = dim.group();

    dc.selectMenu("#country-selector")
        .dimension(dim)
        .group(group);

}

// Team selector chart
function show_player_selector(ndx) {
    var dim = ndx.dimension(dc.pluck('Name'));
    var group = dim.group();

    dc.selectMenu("#player-selector")
        .dimension(dim)
        .group(group);

}

// Average overall core for each position bar-chart with a custom reducer that will calculate the average overall score for each position.
function show_score_per_position(ndx) {

    var dim = ndx.dimension(dc.pluck('Position'));

    function add_item(p, v) {               // p is an accumulator that keeps track of the total, the count and the average. 
        p.count++;                          // v represents each of the data items being added or removed.
        p.total += v.overall;
        p.average = p.total / p.count;
        return p;
    }

    function remove_item(p, v) {
        p.count--;
        if (p.count == 0) {
            p.total = 0;
            p.average = 0;
        }
        else {
            p.total -= v.overall;
            p.average = p.total / p.count;
        }
        return p;
    }

    function initialise() { 
        return { count: 0, total: 0, average: 0 };
    }

    var averageScoreByPosition = dim.group().reduce(add_item, remove_item, initialise);

    dc.barChart("#score-to-position-chart")
        .width(1300)
        .height(470)
        .margins({ top: 50, right: 0, bottom: 50, left: 50 })
        .dimension(dim)
        .group(averageScoreByPosition)
        .valueAccessor(function(d) {
            return d.value.average.toFixed(2);
        })
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .xAxisLabel("Position")
        .yAxisLabel("Score")
        .yAxis().ticks(15);
}


// Pie Charts section
// Preferred Foot Pie Chart
function show_preferred_foot_pie_chart(ndx) {
    var foot_dim = ndx.dimension(dc.pluck('Preferred Foot'));
    var total_per_foot = foot_dim.group();

    dc.pieChart('#preferred-foot-chart')
        .height(350)
        .radius(110)
        .transitionDuration(1500)
        .dimension(foot_dim)
        .group(total_per_foot)
        .legend(dc.legend().x(1).y(40).itemHeight(13).gap(5))
        .renderLabel(false)
        .ordinalColors([
            "#0f4357",
            "#3fb1de"
        ]);
}

// Body Type Pie Chart
function show_body_type_pie_chart(ndx) {
    var body_type_dim = ndx.dimension(dc.pluck('Body Type'));
    var total_per_body_type = body_type_dim.group();
    
    dc.pieChart('#body-type-chart')
        .height(350)
        .radius(110)
        .transitionDuration(1500)
        .dimension(body_type_dim)
        .group(total_per_body_type)
        .legend(dc.legend().x(1).y(40).itemHeight(13).gap(5))
        .renderLabel(false)
        .ordinalColors([
            "#0f4357",
            "#3fb1de",
            "#a8dcf0"
        ]);
}

// Work Rate Pie Chart
function show_work_rate_pie_chart(ndx) {
    var work_rate_dim = ndx.dimension(dc.pluck('Work Rate'));
    var total_per_work_rate = work_rate_dim.group();
    
    dc.pieChart('#work-rate-chart')
        .height(350)
        .radius(110)
        .transitionDuration(1500)
        .dimension(work_rate_dim)
        .group(total_per_work_rate)
        .legend(dc.legend().x(0).y(40).itemHeight(13).gap(5))
        .renderLabel(false)
        .ordinalColors([
            "#061b23",
            "#0f4357",
            "#186b8c",
            "#2193c0",
            "#3fb1de",
            "#73c7e7",
            "#a8dcf0"
        ]);
}

