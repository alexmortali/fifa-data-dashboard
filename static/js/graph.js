queue()
    .defer(d3.csv, "data/data.csv")
    .await(makeGraphs);

function makeGraphs(error, playerData) {
    var ndx = crossfilter(playerData);
    
    show_team_selector(ndx);
    show_country_selector(ndx);
    show_player_selector(ndx);
    
    dc.renderAll();
}

// Sidebar filters
// Team selector chart
function show_team_selector (ndx) {
    var dim = ndx.dimension(dc.pluck('Club'));
    var group = dim.group();
    
    dc.selectMenu("#team-selector")
        .dimension(dim)
        .group(group);
        
}

// Team selector chart
function show_country_selector (ndx) {
    var dim = ndx.dimension(dc.pluck('Nationality'));
    var group = dim.group();
    
    dc.selectMenu("#country-selector")
        .dimension(dim)
        .group(group);
        
}

// Team selector chart
function show_player_selector (ndx) {
    var dim = ndx.dimension(dc.pluck('Name'));
    var group = dim.group();
    
    dc.selectMenu("#player-selector")
        .dimension(dim)
        .group(group);
        
}