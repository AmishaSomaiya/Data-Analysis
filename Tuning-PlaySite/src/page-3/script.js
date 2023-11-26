var margin = { top: 20, right: 80, bottom: 40, left: 120 },
    width = 750 - margin.left - margin.right,
    height = 450 - margin.top - margin.bottom;

  var x = d3.scaleLinear()
    .range([0, width-80]);
  var y = d3.scaleLinear()
    .range([height, 0]);
  var y2 = d3.scaleLinear()
    .range([height, 0]);
  //y3
  var y3 = d3.scaleLinear()
    .range([height, 0]);

  var color = d3.scaleOrdinal(["#e41a1c","#377eb8","#984ea3","#ff7f00","#f781bf","#999999"]);

  var xAxis = d3.axisBottom()
    .scale(x)
    .ticks(4);

  var yAxis = d3.axisLeft()
    .scale(y)
    .ticks(15);

  var yAxis2 = d3.axisLeft()
    .scale(y2)
    .ticks(15);

  var yAxis3 = d3.axisLeft()
    .scale(y2)
    .ticks(5);

  var maleLine = d3.line()
    .curve(d3.curveBasis)
    .x(function (d) { return x(d.Epochs); })
    .y(function (d) { return y(d.Adam_loss); });

  var femaleLine = d3.line()
    .curve(d3.curveBasis)
    .x(function (d) { return x(d.Epochs); })
    .y(function (d) { return y(d.SGD_loss); });

  var childline = d3.line()
    .curve(d3.curveBasis)
    .x(function (d) { return x(d.Epochs); })
    .y(function (d) { return y(d.RMSprop_loss); });

  var svg = d3.select("#area1").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // var div = d3.select("text").append("div")
  //   .attr("class", "tooltip")
  //   .style("opacity", 0);

   // create a tooltip  //////////////////////
// var Tooltip = d3.select("#area1")
// .append("div")
// .style("opacity", 0)
// .attr("class", "tooltip")
// .style("background-color", "blue")
// .style("border", "solid")
// .style("border-width", "2px")
// .style("border-radius", "5px")
// .style("padding", "5px");

// // Three function that change the tooltip when user hover / move / leave a cell
// var mouseovers = function(d) {
// Tooltip
//   .style("opacity", 1)
// d3.select(this)
//   .style("stroke", "black")
//   .style("opacity", 1)
// }
// var mousemove = function(d) {
//   //alert("in mouce mocve");
// Tooltip
//   .html("The exact value of<br>this cell is: " + 13)
//   .style("left", (d3.mouse(this)[0]+70) + "px")
//   .style("top", (d3.mouse(this)[1]) + "px")
// }
// var mouseleave = function(d) {
// Tooltip
//   .style("opacity", 0)
// d3.select(this)
//   .style("stroke", "none")
//   .style("opacity", 0.8)
// }

  // Get the data
  d3.tsv("page3.tsv", function (error, data) {
    data.forEach(function (d) {
      d.Epochs = +d.Epochs;
      d.Adam_loss = +d.Adam_loss;
      d.SGD_loss = +d.SGD_loss;
      d.RMSprop_loss = +d.RMSprop_loss;
    });

    x.domain([0, 50])
    y.domain([0, 5]);

    // Nest the entries by event
    dataNest = d3.nest()
      .key((d) => d.event)
      .entries(data);

    legendSpace = width / dataNest.length; // space for legend

    // Loop through each symbol / key
    dataNest.forEach(function (d, i) {
      svg.append("path")
        .attr("class", "line adam-line")
        .style("opacity", 1)
        .style("stroke", function () { return d.color = color(d.key); })
        .attr("id", 'tag' + d.key.replace(/\s+/g, ''))
        .attr("d", maleLine(d.values));

      svg.append("path")
        .attr("class", "line sgd-line")
        .style("opacity", 0)
        .style("stroke", function () { return d.color = color(d.key)})
        .style("stroke-dasharray", "12,3")
        .style("stroke-width", 3)
        .attr("id", 'tag' + d.key.replace(/\s+/g, ''))
        .attr("d", femaleLine(d.values));

      svg.append("path")
        .attr("class", "line rmsprop-line")
        .style("opacity", 0)
        .style("stroke", function () { return d.color = color(d.key); })
        .style("stroke-dasharray", "3,3")
        .style("stroke-width", 3)
        .attr("id", 'tag' + d.key.replace(/\s+/g, ''))
        .attr("d", childline(d.values));


      // Add the legend
      svg.append("text")
        .attr("x", width + margin.right - 100)
        .attr("y", (i * 45) + margin.top+50)
        .attr("class", "legend")
        .style("fill", function () { return d.color = color(d.key); })
        .on("click", function () {
          var active = d.active ? false : true,
            newOpacity = active ? 1 : 0;

          d3.selectAll("#tag" + d.key.replace(/\s+/g, ''))
            .transition().duration(100)
            .style("opacity", newOpacity);
          d3.select(this)
            .style("font-size", function () {
              if (active) { return "25px"; }
            });

          d.active = active;
        })
        .on("mouseover", function () {
          if (d.active !== true) {
            d3.selectAll("#tag" + d.key.replace(/\s+/g, ''))
              .transition()
              .duration(50)
              .style("opacity", 1);
            d3.select(this)
              .transition()
              .duration(50)
              .style("font-size", function () {
                if (d.active !== true) { return "25px"; }
              });
          }
        })
        .on("mouseout", function () {
          if (d.active !== true) {
            d3.selectAll("#tag" + d.key.replace(/\s+/g, ''))
              .transition()
              .duration(1000)
              .style("opacity", 0);
            d3.select(this)
              .transition()
              .duration(1000)
              .style("font-size", "16px");
          }
        })
        .text(d.key);
        
    });

   
    // Add x-axis label
svg.append("text")
  .attr("class", "x-axis-label")
  .attr("x", width / 2) // Position in the middle of the x-axis
  .attr("y", height - 2 + margin.bottom) // Adjust the y position as needed
  .style("text-anchor", "middle") // Center the label horizontally
  .text("Epochs");

  //learning rate label
  svg.append("text")
  .attr("class", "x-axis-label")
  .attr("x", width + margin.right - 100) // Position in the middle of the x-axis
  .attr("y", margin.top-20) // Adjust the y position as needed
  .style("text-anchor", "middle") // Center the label horizontally
  .text("Learning Rates")
  .append("tspan")
  .attr("x", width + margin.right - 100)
  .attr("dy", "1.5em")
  .text("(Hover or Click)");

  //y-axis label
  svg.append("text")
    .attr("class", "y-axis-label")
    .attr("x", -(height / 2)) // Position in the middle of the y-axis, but adjust x position negatively to rotate text
    .attr("y", -margin.left+70) // Adjust the y position as needed
    .attr("dy", "0.71em")
    .style("text-anchor", "middle")
    .attr("transform", "rotate(-90)") // Rotate the label to be vertical
    .text("Validation Loss");

    svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis)
    .append("text")
    .attr("transform", "translate(" + (width / 2) + ")")
    .attr("y", 235)
    .style("text-anchor", "middle")
    .text("Learning Rate");

    svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", -46)
      .attr("x", margin.top - height + 110)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Training Loss");
  });

function viewAdam() {
  var adamLines = d3.selectAll(".adam-line");
    var adamOpacity = adamLines.style("opacity") === "0" ? 1 : 0;
    adamLines.style("opacity", adamOpacity);
}

function viewRMSprop() {
  var rmspropLines = d3.selectAll(".rmsprop-line");
  var rmspropOpacity = rmspropLines.style("opacity") === "0" ? 1 : 0;
  rmspropLines.style("opacity", rmspropOpacity);
}

function viewSGD() {
  var sgdLines = d3.selectAll(".sgd-line");
    var sgdOpacity = sgdLines.style("opacity") === "0" ? 1 : 0;
    sgdLines.style("opacity", sgdOpacity);
}

function viewAll() {
  svg.selectAll(".adam-line").style("opacity", 1);  
    svg.selectAll(".sgd-line").style("opacity", 1);
    svg.selectAll(".rmsprop-line").style("opacity", 1);
}

function clear() {
  svg.selectAll(".adam-line").style("opacity", 0);
  svg.selectAll(".sgd-line").style("opacity", 0);
  svg.selectAll(".rmsprop-line").style("opacity", 0);
}

// Get the Adam button element
const adamButton = document.getElementById('viewAdam');

// Add the "clicked" class to the Adam button by default
adamButton.classList.add('clicked');


// Get all buttons with the class "button"
const buttons = document.querySelectorAll('.button');

// Add a click event listener to each button except those with class "no-shade"
buttons.forEach(button => {
  if (!button.classList.contains('no-shade')) {
    button.addEventListener('click', function() {
      this.classList.toggle('clicked'); // Toggle the "clicked" class for the clicked button only
    });
  }
});

// Get the "View All" and "Clear All" buttons
const viewAllButton = document.getElementById('viewAll');
const clearAllButton = document.getElementById('clear');

// Add click event listener for "View All" button
viewAllButton.addEventListener('click', function() {
  buttons.forEach(button => {
    if (!button.classList.contains('no-shade')) {
      button.classList.add('clicked'); // Apply shade to all buttons except those with class "no-shade"
    }
  });
});

// Add click event listener for "Clear All" button
clearAllButton.addEventListener('click', function() {
  buttons.forEach(button => {
    button.classList.remove('clicked'); // Remove shade from all buttons
  });
});


// Add buttons
d3.select("#viewAdam").on("click", viewAdam);
d3.select("#viewRMSprop").on("click", viewRMSprop);
d3.select("#viewSGD").on("click", viewSGD);
d3.select("#viewAll").on("click", viewAll);
d3.select("#clear").on("click", clear);

