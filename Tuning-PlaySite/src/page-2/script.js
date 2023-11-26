let margin = { top: 20, right: 20, bottom: 35, left: 60 },
  width = 500 - margin.left - margin.right,
  height = 500 - margin.top - margin.bottom;

//let x = d3.scaleLinear().range([0, width]); // comment this line
let x = d3.scaleLog().range([0, width]).base(2);  // uncomment this line
let y = d3.scaleLinear().range([height, 0]);

let xAxis = d3.axisBottom(x);
let yAxis = d3.axisLeft(y);

let svg = d3.select("#chart")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//x.domain([0, 10]); // comment this line
x.domain([2, 256]); // uncomment this line
y.domain([0.6, 1.0]); // uncomment this line
//y.domain([0, 10]); // comment this line

let realData = [
  { x: 2, y: 0.7324 },
  { x: 4, y: 0.8023 },
  { x: 8, y: 0.8562 },
  { x: 16, y: 0.8973 },
  { x: 32, y: 0.9218},
  { x: 64, y: 0.9474 },
  { x: 128, y: 0.9812 },
  { x: 256, y: 0.9991 },
];

svg.append("g")
  .attr("class", "x axis")
  .attr("transform", "translate(0," + height + ")")
  .call(xAxis);

svg.append("g")
  .attr("class", "y axis")
  .call(yAxis);

// Add a transparent rectangle to capture mouse events
svg.append("rect")
  .attr("width", width)
  .attr("height", height)
  .style("fill", "none")
  .style("pointer-events", "all");

let lineGenerator = d3.line()
  .x(function (d) { return x(d.x); })
  .y(function (d) { return y(d.y); });

let isDrawing = false;
let points = [];

d3.select("svg").on('mousedown', function (event) {
  isDrawing = true;
  var coords = d3.pointer(event);
  var newData = { x: x.invert(coords[0] - margin.left), y: y.invert(coords[1] - margin.top) };
  points.push(newData);
});

d3.select("svg").on('mousemove', function (event) {
  if (!isDrawing) return;
  var coords = d3.pointer(event);
  var newData = { x: x.invert(coords[0] - margin.left), y: y.invert(coords[1] - margin.top) };
  points.push(newData);

  svg.selectAll('.userPath').remove(); // Remove the old line before drawing a new one
  svg.append('path')
    .datum(points)
    .attr('class', 'userPath')
    .attr('fill', 'none')
    .attr('stroke', 'blue')
    .attr('stroke-width', 2)
    .attr('d', lineGenerator);
});



d3.select("svg").on('mouseup', function () {
  isDrawing = false;
  // Do not reset points array to keep the user's line

  // Replace with real data
  //let realData = [{ x: 1, y: 1 }, { x: 5, y: 5 }, { x: 9, y: 9 }];



  

  // Simulating some delay (0.5s) for real data to appear
  setTimeout(() => {
    let realPath = svg.append("path")
      .datum(realData)
      .attr("class", "realDataPath")
      .attr("fill", "none")
      .attr("stroke", "red")
      .attr("stroke-width", 2)
      .attr("d", lineGenerator);

    let totalLength = realPath.node().getTotalLength();

    realPath
      .attr("stroke-dasharray", totalLength + " " + totalLength)
      .attr("stroke-dashoffset", totalLength)
      .transition()
      .duration(500)
      .ease(d3.easeLinear)
      .attr("stroke-dashoffset", 0);
  }, 500);

});

  // Add a circle for the reference point
svg.append("circle")
  .attr("class", "reference-point")
  .attr("cx", x(realData[0].x))
  .attr("cy", y(realData[0].y))
  .attr("r", 6)
  .attr("fill", "orange");
  
  
  // Add a label for the reference point
svg.append("text")
  .attr("class", "reference-label")
  .attr("x", x(realData[0].x) + 10)
  .attr("y", y(realData[0].y) + 20)
  .text("Start the line here")
  .style("fill", "orange");


// Add X axis label
svg.append("text")
  .attr("class", "x label")
  .attr("text-anchor", "end")
  .attr("x", width / 2 + margin.right + 20)
  .attr("y", height + margin.bottom)
  .text("Batch size");

// Add Y axis label
svg.append("text")
  .attr("class", "y label")
  .attr("text-anchor", "end")
  .attr("y", -margin.left + 5)
  .attr("x", -height +300)
  .attr("dy", ".75em")
  .attr("transform", "rotate(-90)")
  .text("Validation Accuracy");















// Create new svg for second chart
let svg2 = d3.select("#chart2")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

let x2 = d3.scaleLog().base(2).range([0, width]); // use a logarithmic scale for x-axis
let y2 = d3.scaleLinear().range([height, 0]);

let xAxis2 = d3.axisBottom(x2);
let yAxis2 = d3.axisLeft(y2);

x2.domain([2, 256]); // start from 2 and increase exponentially
y2.domain([0.8, 1]); // acc ranges from 0 to 1

svg2.append("g")
  .attr("class", "x axis")
  .attr("transform", "translate(0," + height + ")")
  .call(xAxis2);

svg2.append("g")
  .attr("class", "y axis")
  .call(yAxis2);

// Add a transparent rectangle to capture mouse events for second chart
svg2.append("rect")
  .attr("width", width)
  .attr("height", height)
  .style("fill", "none")
  .style("pointer-events", "all");

let points2 = [];



let lineGenerator2 = d3.line()
  .x(function (d) { return x2(d.x); })
  .y(function (d) { return y2(d.y); });

// Add similar mouse events for second chart
d3.select(svg2.node().parentNode).on('mousedown', function (event) {
  isDrawing = true;
  var coords = d3.pointer(event);
  var newData = { x: x2.invert(coords[0] - margin.left), y: y2.invert(coords[1] - margin.top) };
  points2.push(newData);
});

d3.select(svg2.node().parentNode).on('mousemove', function (event) {
  if (!isDrawing) return;
  var coords = d3.pointer(event);
  var newData = { x: x2.invert(coords[0] - margin.left), y: y2.invert(coords[1] - margin.top) };
  points2.push(newData);

  svg2.selectAll('.userPath').remove();
  svg2.append('path')
    .datum(points2)
    .attr('class', 'userPath')
    .attr('fill', 'none')
    .attr('stroke', 'blue')
    .attr('stroke-width', 2)
    .attr('d', lineGenerator2);
});

d3.select(svg2.node().parentNode).on('mouseup', function () {
  isDrawing = false;

  // Simulating some delay (0.5s) for real data to appear
  setTimeout(() => {
    let realPath2 = svg2.append("path")
      .datum(realData2)
      .attr("class", "realDataPath")
      .attr("fill", "none")
      .attr("stroke", "red")
      .attr("stroke-width", 2)
      .attr("d", lineGenerator2);

    let totalLength2 = realPath2.node().getTotalLength();

    realPath2
      .attr("stroke-dasharray", totalLength2 + " " + totalLength2)
      .attr("stroke-dashoffset", totalLength2)
      .transition()
      .duration(500)
      .ease(d3.easeLinear)
      .attr("stroke-dashoffset", 0);
  }, 500);
});

// Replace with real data for the second chart
//let realData2 = d3.range(2, 513, 2).map(i => { return { x: i, y: 0.5 }; });

let realData2 = [
  { x: 2, y: 0.9956 },
  { x: 4, y: 0.9962 },
  { x: 8, y: 0.9971 },
  { x: 16, y: 0.9977 },
  { x: 32, y: 0.9982 },
  { x: 64, y: 0.9988 },
  { x: 128, y: 0.9992 },
  { x: 256, y: 0.9998 },
];

// Add a circle for the reference point
svg2.append("circle")
  .attr("class", "reference-point")
  .attr("cx", x2(realData2[7].x))
  .attr("cy", y2(realData2[7].y))
  .attr("r", 6)
  .attr("fill", "orange");


// Add a label for the reference point
svg2.append("text")
  .attr("class", "reference-label")
  .attr("x", x2(realData2[0].x) + 300)
  .attr("y", y2(realData2[0].y) + 20)
  .text("End the line here")
  .style("fill", "orange");


//scaleLog().base(2).range([0, width])

// Add X axis label
svg2.append("text")
  .attr("class", "x label")
  .attr("text-anchor", "end")
  .attr("x", width / 2 + margin.right + 20)
  .attr("y", height + margin.bottom)
  .text("Batch size");

// Add Y axis label
svg2.append("text")
  .attr("class", "y label")
  .attr("text-anchor", "end")
  .attr("y", -margin.left + 5)
  .attr("x", -height +300)
  .attr("dy", ".75em")
  .attr("transform", "rotate(-90)")
  .text("Validation Accuracy");



// Create new svg for third chart

let svg3 = d3.select("#chart3")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//let x3 = d3.scaleLinear().range([0, width]);
let x3 = d3.scaleLog().base(2).range([0, width]); // use a logarithmic scale for x-axis
let y3 = d3.scaleLinear().range([height, 0]);

let xAxis3 = d3.axisBottom(x3);
let yAxis3 = d3.axisLeft(y3).tickFormat(d3.format(".1e"));;

x3.domain([2, 256]); // set domain for x-axis
y3.domain([Math.pow(2, 5), Math.pow(2, 17)]); // set domain for y-axis

let lineGenerator3 = d3.line()
  .x(function (d) { return x3(d.x); })
  .y(function (d) { return y3(d.y); });

svg3.append("g")
  .attr("class", "x axis")
  .attr("transform", "translate(0," + height + ")")
  .call(xAxis3);

svg3.append("g")
  .attr("class", "y axis")
  .call(yAxis3);

// Theoretical curve - Exponential decay
//let theoryData = Array.from({ length: 11 }, (_, i) => ({ x: i, y: 10 - i }));
//let theoryData = Array.from({ length: 11 }, (_, i) => ({ x: x3(i), y: y3(10 - i) }));
let theoryData = [
  { x: 2, y: Math.pow(2, 17) },
  { x: 4, y: Math.pow(2, 16) },
  { x: 8, y: Math.pow(2, 15) },
  { x: 16, y: Math.pow(2, 14) },
  { x: 32, y: Math.pow(2, 13) },
  { x: 64, y: Math.pow(2, 12) },
  { x: 128, y: Math.pow(2, 11) },
  { x: 256, y: Math.pow(2, 10) },
];
let theoryPath = svg3.append("path")
  .datum(theoryData)
  .attr("fill", "none")
  .attr("stroke", "blue")
  .attr("stroke-width", 2)
  //.style("stroke-dasharray", ("3, 3"))
  .attr("d", lineGenerator3)
  .style("opacity", 0); // Hide initially

// Actual curve - Negative slope
//let actualData = Array.from({ length: 101 }, (_, i) => ({ x: i / 10, y: 5 * (2 - Math.pow((i / 100), 0.5)) }));
//let actualData = Array.from({ length: 101 }, (_, i) => ({ x: x3(i / 10), y: y3(5 * (2 - Math.pow((i / 100), 0.5))) }));

let actualData = [
  { x: 2, y: Math.pow(2, 17) },
  { x: 4, y: Math.pow(2, 16) },
  { x: 8, y: Math.pow(2, 15) },
  { x: 16, y: Math.pow(2, 14) },
  { x: 32, y: Math.pow(2, 13) },
  { x: 64, y: Math.pow(2, 12) },
  { x: 128, y: Math.pow(2, 12) },
  { x: 256, y: Math.pow(2, 12) },
];
let actualPath = svg3.append("path")
  .datum(actualData)
  .attr("fill", "none")
  .attr("stroke", "red")
  .attr("stroke-width", 2)
  .attr("d", lineGenerator3)
  .style("opacity", 0); // Hide initially


// make it to dash line
let totalLength = theoryPath.node().getTotalLength();
let dashing = "3, 3";
let dashLength = dashing.split(/[\s,]/).map(a => parseFloat(a) || 0).reduce((a, b) => a + b);
let dashCount = Math.ceil(totalLength / dashLength);
let newDashes = new Array(dashCount).join(dashing + " ");
let dashArray = newDashes + " 0, " + totalLength;

theoryPath.attr("stroke-dasharray", dashArray)
  .attr("stroke-dashoffset", totalLength);  
  
// Define the animation duration
const animationDuration = 1000;

// Function to animate the line segments
function animateLineSegments() {
  theoryPath
    //.style("opacity", 1)
    //.attr("stroke-dasharray", theoryPath.node().getTotalLength())
    //.attr("stroke-dashoffset", theoryPath.node().getTotalLength())
    //.transition()
    //.duration(animationDuration)
    //.ease(d3.easeLinear)
    //.attr("stroke-dashoffset", 0);

    .style("opacity", 1)
    .transition()
    .duration(animationDuration)
    .ease(d3.easeLinear)
    .attr("stroke-dashoffset", 0);

  actualPath
    .style("opacity", 1)
    .attr("stroke-dasharray", actualPath.node().getTotalLength())
    .attr("stroke-dashoffset", actualPath.node().getTotalLength())
    .transition()
    .duration(animationDuration)
    .ease(d3.easeLinear)
    .attr("stroke-dashoffset", 0);
}

// Function to reset the lines to initial state
function resetLines() {
  theoryPath
    .transition()
    .duration(0)
    .style("opacity", 0);

  actualPath
    .transition()
    .duration(0)
    .style("opacity", 0);
}

// Get the SVG element
const svgElement3 = document.getElementById("chart3");



// Attach mouseenter event handler to the SVG element
svgElement3.addEventListener("mouseenter", function handleMouseEnter() {
  // Remove the mouseenter event handler after the first invocation
  svgElement3.removeEventListener("mouseenter", handleMouseEnter);

  // Animate the line segments
  animateLineSegments();
});

// Attach mouseout event handler to reset the lines
// svgElement3.addEventListener("mouseout", resetLines);


// Add X axis label
svg3.append("text")
  .attr("class", "x label")
  .attr("text-anchor", "end")
  .attr("x", width / 2 + margin.right+20)
  .attr("y", height + margin.bottom)
  .text("Batch size");

// Add Y axis label
svg3.append("text")
  .attr("class", "y label")
  .attr("text-anchor", "end")
  .attr("y", -margin.left - 0)
  .attr("x", -height + 375)
  .attr("dy", "0.75em")
  .attr("transform", "rotate(-90)")
  .text("Steps to reach 90% Validation Accuracy");
