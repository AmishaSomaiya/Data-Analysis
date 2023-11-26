//////script 2a///////////////

//data b1=0, epochs=10
const alphaa = [-3.8, -3.6, -3.5, -3, -2.8, -2.5, -2.3, -2, -1.9];
const rms1 =  [140, 140, 130, 110, 140, 140, 140, 140, 140];
const adam1 = [0.140, 0.140, 0.128, 0.110, 0.108, 0.106, 0.140, 0.140, 0.140];
const rms2 =  [140, 140, 138, 140, 140, 140, 140, 140, 140];
const adam2 = [0.140, 0.140, 0.123, 0.110, 0.113, 0.140, 0.140, 0.140, 0.140];
const rms3 =  [140, 140, 140, 140, 140, 140, 140, 140, 140];
const adam3 = [0.140, 0.140, 0.123, 0.110, 0.111, 0.115, 0.118, 0.122, 0.140];

// Set up the SVG
const svga = d3.select("#svga");
const margina = { top: 20, right: 20, bottom: 40, left: 60 };
const widtha = +svga.attr("width") - margina.left - margina.right;
const heighta = +svga.attr("height") - margina.top - margina.bottom;
const ga = svga.append("g").attr("transform", `translate(${margina.left}, ${margina.top})`);

 // X-axis
const xScalea = d3.scaleLinear()
  .domain([0, alphaa.length - 1])
  .range([0, widtha]);

let xtickLabels = [-5,-4,-3,-2,-1];  

const xAxisa = d3.axisBottom(xScalea)
  .ticks(5)      
  .tickFormat((d, i) => xtickLabels[i]);

//Y-axis
const yScalea = d3.scaleLinear()
  .domain([0.090, 0.140]) // Adjusted y-axis domain for better visualization
  .range([heighta, 0]);

const yAxisa = d3.axisLeft(yScalea).ticks(4);  

//Create the line generator
const linea = d3.line()
  .x((d, i) => xScalea(i))
  .y(d => yScalea(d) );


// Initial line plot
const pathRMS1 = ga.append("path")
  .datum(rms1)
  .attr("class", "line")
  .style("stroke", "green")
  .attr("d", linea)
  .style("display", "none");

const pathAdam1 = ga.append("path")
  .datum(adam1)
  .attr("class", "line")
  .style("stroke", "red")
  .attr("d", linea)
  .style("display", "none");

const pathRMS2 = ga.append("path")
  .datum(rms2)
  .attr("class", "line")
  .style("stroke", "green")
  .attr("d", linea)
   .style("display", "none");
  

const pathAdam2 = ga.append("path")
  .datum(adam2)
  .attr("class", "line")
  .style("stroke", "red")
  .attr("d", linea);
  

const pathRMS3 = ga.append("path")
  .datum(rms3)
  .attr("class", "line")
  .style("stroke", "green")
  .attr("d", linea)
  .style("display", "none");
  

const pathAdam3 = ga.append("path")
  .datum(adam3)
  .attr("class", "line")
  .style("stroke", "red")
  .attr("d", linea)
  .style("display", "none");

// X-axis label
ga.append("text")
  .attr("class", "axis-label")
  .style("text-anchor", "middle")
  .attr("transform", `translate(${widtha / 2}, ${heighta + margina.bottom - 10})`)
  .text("LR*");



// Y-axis label
ga.append("text")
  .attr("class", "axis-label")
  .attr("text-anchor", "middle")
  .attr("transform", `translate(${-margina.left + 30}, ${heighta / 2})rotate(-90)`)
  .text("Loss");

// Beta 1 label
ga.append("text")
  .attr("class", "axis-extralabel")
  .attr("text-anchor", "middle")
  .attr("transform", `translate(${-margina.left + 15}, ${heighta / 2})rotate(-90)`)
  .text("Beta1 = 0");



ga.append("g")
  .attr("class", "x-axis")
  .attr("transform", `translate(0, ${heighta})`)
  .call(xAxisa);


ga.append("g")
  .attr("class", "y-axis")
  .call(yAxisa);


// Define legend data
const legendData = [
{ label: "RMSprop", color: "green" },
{ label: "Adam", color: "red" }
];

// Add legend
const legenda = ga.append("g")
.attr("class", "legend")
.attr("transform", `translate(${widtha - 100}, 20)`); // Adjust the translation as needed

// Add legend items
const legendItemsa = legenda.selectAll(".legend-item")
.data(legendData)
.enter()
.append("g")
.attr("class", "legend-item")
.attr("transform", (d, i) => `translate(0, ${i * 20})`); // Adjust the vertical spacing as needed

// // Add legend lines
// legendItemsa.append("line")
// .attr("x1", 0)
// .attr("y1", 5)
// .attr("x2", 20)
// .attr("y2", 5)
// .style("stroke", d => d.color)
// .style("stroke-width", 2);

// Add legend labels
// legendItemsa.append("text")
// .attr("x", 25)
// .attr("y", 9)
// .text(d => d.label)
// .style("font-family", "sans-serif")
// .style("font-size", "12px");

//////////////script-2b////////////////

const alphab = [-4.5, -4, -3.5, -3, -2.9, -2.5, -2];
const rms1b =  [0.123, 0.105, 0.100,  0.100, 0.140, 0.140, 0.140];
const adam1b = [0.117, 0.109, 0.102,  0.104, 0.107, 0.140, 0.140];
const rms2b =  [123, 105, 100,  140, 140, 140, 140];
const adam2b = [0.123, 0.105, 0.100,  0.100, 0.107, 0.140, 0.140];
const rms3b =  [117, 110, 140, 140, 140, 140, 140];
const adam3b = [0.125, 0.103, 0.101,  0.101, 0.107, 0.140, 0.140];

// Set up the SVG
const svgb = d3.select("#svgb");
const marginb = { top: 20, right: 20, bottom: 40, left: 60};
const widthb = +svgb.attr("width") - marginb.left - marginb.right;
const heightb = +svgb.attr("height") - marginb.top - marginb.bottom;
const gb = svgb.append("g").attr("transform", `translate(${marginb.left}, ${marginb.top})`);

 // X-axis
const xScaleb = d3.scaleLinear()  
  .domain([0, 5 - 1])
  .range([0, widthb]);

//let xtickLabels = [-5,-4,-3,-2,-1];  

const xAxisb = d3.axisBottom(xScaleb)
  .ticks(5)      
  .tickFormat((d, i) => xtickLabels[i]);

// Y-axis
const yScaleb = d3.scaleLinear()
  .domain([0.090, 0.140]) 
  .range([heightb, 0]);

const yAxisb = d3.axisLeft(yScaleb).ticks(4);  

// Create the line generator
const lineb = d3.line()
  .x((d, i) => xScaleb(i))
  .y(d => yScaleb(d) );


// Initial line plot
const pathrms1b = gb.append("path")
  .datum(rms1b)
  .attr("class", "line")
  .style("stroke", "green")
  .attr("d", lineb)
  .style("display", "none");

const pathadam1b = gb.append("path")
  .datum(adam1b)
  .attr("class", "line")
  .style("stroke", "red")
  .attr("d", lineb)
  .style("display", "none");

const pathrms2b = gb.append("path")
  .datum(rms2b)
  .attr("class", "line")
  .style("stroke", "green")
  .attr("d", lineb)
  .style("display", "none");
  

const pathadam2b = gb.append("path")
  .datum(adam2b)
  .attr("class", "line")
  .style("stroke", "red")
  .attr("d", lineb);
  

const pathrms3b = gb.append("path")
  .datum(rms3b)
  .attr("class", "line")
  .style("stroke", "green")
  .attr("d", lineb)
  .style("display", "none");

const pathadam3b = gb.append("path")
  .datum(adam3b)
  .attr("class", "line")
  .style("stroke", "red")
  .attr("d", lineb)
  .style("display", "none");

// X-axis label
gb.append("text")
  .attr("class", "axis-label")
  .attr("text-anchor", "middle")
  .attr("transform", `translate(${widthb / 2}, ${heightb + marginb.bottom - 10})`)
  .text("LR*");

// Y-axis label 
gb.append("text")
  .attr("class", "axis-label")
  .attr("text-anchor", "middle")
  .attr("transform", `translate(${-marginb.left + 30}, ${heightb / 2})rotate(-90)`)
  .text("Loss");



gb.append("g")
  .attr("class", "x-axis")
  .attr("transform", `translate(0, ${heightb})`)
  .call(xAxisb);


gb.append("g")
  .attr("class", "y-axis")
  .call(yAxisb);

// Slider functionality
// const slider = d3.select("#mySlider");
// const sliderValue = d3.select("#sliderValue");
// slider.on("input", function() {
//   const valueb = +this.value;
//   sliderValue.text(valueb === 0 ? "0.99" : valueb === 1 ? "0.999" : "0.9999");

//   // Show/hide line plots based on slider position
//   if (valueb === 0) {
//     //alert("0");
//     pathrms1b.style("display", "block");
//     pathadam1b.style("display", "block");
//     pathrms2b.style("display", "none");
//     pathadam2b.style("display", "none");
//     pathrms3b.style("display", "none");
//     pathadam3b.style("display", "none");
//   } else if (valueb === 1) {
//     //alert("1");
//     pathrms1b.style("display", "none");
//     pathadam1b.style("display", "none");
//     pathrms2b.style("display", "block");        
//     pathadam2b.style("display", "block");
//     pathrms3b.style("display", "none");
//     pathadam3b.style("display", "none");
//   } else {
//     //alert("2");
//     pathrms1b.style("display", "none");
//     pathadam1b.style("display", "none");
//     pathrms2b.style("display", "none");
//     pathadam2b.style("display", "none");
//     pathrms3b.style("display", "block");
//     pathadam3b.style("display", "block");
//   }
// });

// Define legend data
// const legendData = [
// { label: "RMSprop", color: "green" },
// { label: "Adam", color: "red" }
// ];

// Add legend
const legendb= gb.append("g")
.attr("class", "legend")
.attr("transform", `translate(${widthb - 100}, 20)`); // Adjust the translation as needed

// Add legend items
const legendItemsb = legendb.selectAll(".legend-item")
.data(legendData)
.enter()
.append("g")
.attr("class", "legend-item")
.attr("transform", (d, i) => `translate(0, ${i * 20})`); // Adjust the vertical spacing as needed

// Add legend lines
// legendItemsb.append("line")
// .attr("x1", 0)
// .attr("y1", 5)
// .attr("x2", 20)
// .attr("y2", 5)
// .style("stroke", d => d.color)
// .style("stroke-width", 2);

// // Add legend labels
// legendItemsb.append("text")
// .attr("x", 25)
// .attr("y", 9)
// .text(d => d.label)
// .style("font-family", "sans-serif")
// .style("font-size", "12px");

/////////////////script 2c/////////////////

    const alphac = [-3.8, -3.6, -3.5, -3, -2.8, -2.5, -2.3, -2, -1.9];
    const rms1c =  [140, 140, 130, 110, 140, 140, 140, 140, 140];
    const adam1c = [0.140, 0.140, 0.123, 0.110, 0.106, 0.117,0.140, 0.140, 0.140];
    const rms2c =  [140, 140, 138, 140, 140, 140, 140, 140, 140];
    const adam2c = [0.140, 0.140, 0.120, 0.110, 0.105, 0.118, 0.140, 0.140, 0.140];
    const rms3c =  [140, 140, 140, 140, 140, 140, 140, 140, 140];
    const adam3c = [0.140, 0.140, 0.140, 0.120, 0.110, 0.105, 0.118,0.140, 0.140];

    // Set up the SVG
    const svgc = d3.select("#svgccc");
    const marginc = { top: 20, right: 20, bottom: 50, left: 60 };
    const widthc = +svgc.attr("width") - marginc.left - marginc.right;
    const heightc = +svgc.attr("height") - marginc.top - marginc.bottom;
    const gc = svgc.append("g").attr("transform", `translate(${marginc.left}, ${marginc.top})`);

     // X-axis
    const xScalec = d3.scaleLinear()
      .domain([0, alphac.length - 1])
      .range([0, widthc]);
   
   // let xtickLabels_1 = [-5,-4,-3,-2,-1,0,1];  

    const xAxisc = d3.axisBottom(xScalec)
      .ticks(5)      
      .tickFormat((d, i) => xtickLabels[i]);

    // Y-axis
    const yScalec = d3.scaleLinear()
      .domain([0.090, 0.140]) // Adjusted y-axis domain for better visualization
      .range([heightc, 0]);
    
    const yAxisc = d3.axisLeft(yScalec).ticks(4);  

    // Create the line generator
    const linec = d3.line()
      .x((d, i) => xScalec(i))
      .y(d => yScalec(d) );
    

    // Initial line plot
    const pathrms1c = gc.append("path")
      .datum(rms1c)
      .attr("class", "line")
      .style("stroke", "green")
      .attr("d", linec)
      .style("display", "none");

    const pathadam1c = gc.append("path")
      .datum(adam1c)
      .attr("class", "line")
      .style("stroke", "red")
      .attr("d", linec)
      .style("display", "none");

    const pathrms2c = gc.append("path")
      .datum(rms2c)
      .attr("class", "line")
      .style("stroke", "green")
      .attr("d", linec)
      .style("display", "none");
      

    const pathadam2c = gc.append("path")
      .datum(adam2c)
      .attr("class", "line")
      .style("stroke", "red")
      .attr("d", linec);
      

    const pathrms3c = gc.append("path")
      .datum(rms3c)
      .attr("class", "line")
      .style("stroke", "green")
      .attr("d", linec)
      .style("display", "none");

    const pathadam3c = gc.append("path")
      .datum(adam3c)
      .attr("class", "line")
      .style("stroke", "red")
      .attr("d", linec)
      .style("display", "none");

    // X-axis label
    gc.append("text")
      .attr("class", "axis-label")
      .attr("text-anchor", "middle")
      .attr("transform", `translate(${widthc / 2}, ${heightc + marginc.bottom - 20})`)
      .text("LR*");

   // Epochs label
    gc.append("text")
    .attr("class", "axis-extralabel")
    .attr("text-anchor", "middle")
    .attr("transform", `translate(${widthc / 2}, ${heightc + marginc.bottom-5})`)
    .text("Epochs = 10");

    // Y-axis label
    gc.append("text")
      .attr("class", "axis-label")
      .attr("text-anchor", "middle")
      .attr("transform", `translate(${-marginc.left + 30}, ${heightc / 2})rotate(-90)`)
      .text("Loss");

      // Y-axis label : beta1
    gc.append("text")
    .attr("class", "axis-extralabel")
    .attr("text-anchor", "middle")
    .attr("transform", `translate(${-marginc.left + 15}, ${heightc / 2})rotate(-90)`)
    .text("Beta1 = 0.9");

   

    gc.append("g")
      .attr("class", "x-axis")
      .attr("transform", `translate(0, ${heightc})`)
      .call(xAxisc);
    

    gc.append("g")
      .attr("class", "y-axis")
      .call(yAxisc);

    // Slider functionality
    // const sliderc = d3.select("#mySlider");
    // const sliderValuec = d3.select("#sliderValue");
    // sliderc.on("input", function() {
    //   const valuec = +this.value;
    //   sliderValuec.text(valuec === 0 ? "0.99" : valuec === 1 ? "0.999" : "0.9999");

    //   // Show/hide line plots based on slider position
    //   if (valuec === 0) {
    //     //alert("0");
    //     pathrms1c.style("display", "block");
    //     pathadam1c.style("display", "block");
    //     pathrms2c.style("display", "none");
    //     pathadam2c.style("display", "none");
    //     pathrms3c.style("display", "none");
    //     pathadam3c.style("display", "none");
    //   } else if (valuec === 1) {
    //     //alert("1");
    //     pathrms1c.style("display", "none");
    //     pathadam1c.style("display", "none");
    //     pathrms2c.style("display", "block");        
    //     pathadam2c.style("display", "block");
    //     pathrms3c.style("display", "none");
    //     pathadam3c.style("display", "none");
    //   } else {
    //     //alert("2");
    //     pathrms1c.style("display", "none");
    //     pathadam1c.style("display", "none");
    //     pathrms2c.style("display", "none");
    //     pathadam2c.style("display", "none");
    //     pathrms3c.style("display", "block");
    //     pathadam3c.style("display", "block");
    //   }
    // });

    // Define legend data
// const legendData = [
//   { label: "RMSprop", color: "green" },
//   { label: "Adam", color: "red" }
// ];

// Add legend
const legendc = gc.append("g")
  .attr("class", "legend")
  .attr("transform", `translate(${widthc - 100}, 20)`); // Adjust the translation as needed

// Add legend items
const legendItemsc = legendc.selectAll(".legend-item")
  .data(legendData)
  .enter()
  .append("g")
  .attr("class", "legend-item")
  .attr("transform", (d, i) => `translate(0, ${i * 20})`); // Adjust the vertical spacing as needed

// Add legend lines
// legendItemsc.append("line")
//   .attr("x1", 0)
//   .attr("y1", 5)
//   .attr("x2", 20)
//   .attr("y2", 5)
//   .style("stroke", d => d.color)
//   .style("stroke-width", 2);

// // Add legend labels
// legendItemsc.append("text")
//   .attr("x", 25)
//   .attr("y", 9)
//   .text(d => d.label)
//   .style("font-family", "sans-serif")
//   .style("font-size", "12px");

  ////////////////script 2d///////////

  const alphad = [-3.8, -3.6, -3.5, -3, -2.8, -2.5, -2.3, -2, -1.9,-1];
  const rms1d =  [140, 140, 130, 110, 140, 140, 140, 140, 140];
  const adam1d = [0.123, 0.105, 0.100,  0.100, 0.107, 0.140, 0.140];
  const rms2d =  [140, 140, 138, 140, 140, 140, 140, 140, 140, 140];
  const adam2d = [0.121, 0.103, 0.093,  0.103, 0.105, 0.132, 0.138, 0.139];
  const rms3d =  [140, 140, 140, 140, 140, 140, 140, 140, 140, 140];
  const adam3d = [0.123, 0.105, 0.097,  0.101, 0.107, 0.137, 0.140];

  // Set up the SVG
  const svgd = d3.select("#svgd");
  const margind = { top: 20, right: 20, bottom: 50, left: 60 };
  const widthd = +svgd.attr("width") - margind.left - margind.right;
  const heightd = +svgd.attr("height") - margind.top - margind.bottom;
  const gd = svgd.append("g").attr("transform", `translate(${margind.left}, ${margind.top})`);

   // X-axis
  const xScaled = d3.scaleLinear()
    .domain([0, 5 - 1])
    .range([0, widthd]);
 
 // let xtickLabels = [-5,-4,-3,-2,-1];  

  const xAxisd = d3.axisBottom(xScaled)
    .ticks(5)      
    .tickFormat((d, i) => xtickLabels[i]);

  // Y-axis
  const yScaled = d3.scaleLinear()
    .domain([0.090, 0.140]) // Adjusted y-axis domain for better visualization
    .range([heightd, 0]);
  
  const yAxisd = d3.axisLeft(yScaled).ticks(4);  

  // Create the line generator
  const lined = d3.line()
    .x((d, i) => xScaled(i))
    .y(d => yScaled(d) );
  

  // Initial line plot
  const pathrms1d = gd.append("path")
    .datum(rms1d)
    .attr("class", "line")
    .style("stroke", "green")
    .attr("d", lined)
    .style("display", "none");

  const pathadam1d = gd.append("path")
    .datum(adam1d)
    .attr("class", "line")
    .style("stroke", "red")
    .attr("d", lined)
    .style("display", "none");

  const pathrms2d = gd.append("path")
    .datum(rms2d)
    .attr("class", "line")
    .style("stroke", "green")
    .attr("d", lined)
    .style("display", "none");
    

  const pathadam2d = gd.append("path")
    .datum(adam2d)
    .attr("class", "line")
    .style("stroke", "red")
    .attr("d", lined);
    

  const pathrms3d = gd.append("path")
    .datum(rms3d)
    .attr("class", "line")
    .style("stroke", "green")
    .attr("d", lined)
    .style("display", "none");

  const pathadam3d = gd.append("path")
    .datum(adam3d)
    .attr("class", "line")
    .style("stroke", "red")
    .attr("d", lined)
    .style("display", "none");

  // X-axis label
  gd.append("text")
    .attr("class", "axis-label")
    .attr("text-anchor", "middle")
    .attr("transform", `translate(${widthd / 2}, ${heightd + margind.bottom - 20})`)
    .text("LR*");

    // Epochs label
  gd.append("text")
  .attr("class", "axis-extralabel")
  .attr("text-anchor", "middle")
  .attr("transform", `translate(${widthd / 2}, ${heightd + margind.bottom-5})`)
  .text("Epochs = 100");

  // Y-axis label
  gd.append("text")
    .attr("class", "axis-label")
    .attr("text-anchor", "middle")
    .attr("transform", `translate(${-margind.left + 30}, ${heightd / 2})rotate(-90)`)
    .text("Loss");

 

  gd.append("g")
    .attr("class", "x-axis")
    .attr("transform", `translate(0, ${heightd})`)
    .call(xAxisd);
  

  gd.append("g")
    .attr("class", "y-axis")
    .call(yAxisd);

  // Slider functionality
  const slider = d3.select("#mySlider");
  const sliderValue = d3.select("#sliderValue");
  slider.on("input", function() {
    const value = +this.value;
    sliderValue.text(value === 0 ? "0.99" : value === 1 ? "0.999" : "0.9999");

    // Show/hide line plots based on slider position
    if (value === 0) {
      //alert("0");
      pathrms1d.style("display", "none");
      pathadam1d.style("display", "block");
      pathrms2d.style("display", "none");
      pathadam2d.style("display", "none");
      pathrms3d.style("display", "none");
      pathadam3d.style("display", "none");

      pathrms1c.style("display", "none");
      pathadam1c.style("display", "block");
      pathrms2c.style("display", "none");
      pathadam2c.style("display", "none");
      pathrms3c.style("display", "none");
      pathadam3c.style("display", "none");

      pathrms1b.style("display", "none");
      pathadam1b.style("display", "block");
      pathrms2b.style("display", "none");
      pathadam2b.style("display", "none");
      pathrms3b.style("display", "none");
      pathadam3b.style("display", "none");

      pathRMS1.style("display", "none");
      pathAdam1.style("display", "block");
      pathRMS2.style("display", "none");
      pathAdam2.style("display", "none");
      pathRMS3.style("display", "none");
      pathAdam3.style("display", "none");

    } else if (value === 1) {
      //alert("1");
      pathrms1d.style("display", "none");
      pathadam1d.style("display", "none");
      pathrms2d.style("display", "none");        
      pathadam2d.style("display", "block");
      pathrms3d.style("display", "none");
      pathadam3d.style("display", "none");

      pathrms1c.style("display", "none");
      pathadam1c.style("display", "none");
      pathrms2c.style("display", "none");        
      pathadam2c.style("display", "block");
      pathrms3c.style("display", "none");
      pathadam3c.style("display", "none");

      pathrms1b.style("display", "none");
      pathadam1b.style("display", "none");
      pathrms2b.style("display", "none");        
      pathadam2b.style("display", "block");
      pathrms3b.style("display", "none");
      pathadam3b.style("display", "none");

      pathRMS1.style("display", "none");
      pathAdam1.style("display", "none");
      pathRMS2.style("display", "none");        
      pathAdam2.style("display", "block");
      pathRMS3.style("display", "none");
      pathAdam3.style("display", "none");

    } else {
      //alert("2");
      pathrms1d.style("display", "none");
      pathadam1d.style("display", "none");
      pathrms2d.style("display", "none");
      pathadam2d.style("display", "none");
      pathrms3d.style("display", "none");
      pathadam3d.style("display", "block");

      pathrms1c.style("display", "none");
      pathadam1c.style("display", "none");
      pathrms2c.style("display", "none");
      pathadam2c.style("display", "none");
      pathrms3c.style("display", "none");
      pathadam3c.style("display", "block");

      pathrms1b.style("display", "none");
      pathadam1b.style("display", "none");
      pathrms2b.style("display", "none");
      pathadam2b.style("display", "none");
      pathrms3b.style("display", "none");
      pathadam3b.style("display", "block");

      pathRMS1.style("display", "none");
      pathAdam1.style("display", "none");
      pathRMS2.style("display", "none");
      pathAdam2.style("display", "none");
      pathRMS3.style("display", "none");
      pathAdam3.style("display", "block");
    }
  }); 

  // Define legend data
// const legendData = [
// { label: "RMSprop", color: "green" },
// { label: "Adam", color: "red" }
// ];

// Add legend
const legendd = gd.append("g")
.attr("class", "legend")
.attr("transform", `translate(${widthd - 100}, 20)`); // Adjust the translation as needed

// Add legend items
const legendItemsd = legendd.selectAll(".legend-item")
.data(legendData)
.enter()
.append("g")
.attr("class", "legend-item")
.attr("transform", (d, i) => `translate(0, ${i * 20})`); // Adjust the vertical spacing as needed

// Add legend lines
// legendItemsd.append("line")
// .attr("x1", 0)
// .attr("y1", 5)
// .attr("x2", 20)
// .attr("y2", 5)
// .style("stroke", d => d.color)
// .style("stroke-width", 2);

// // Add legend labels
// legendItemsd.append("text")
// .attr("x", 25)
// .attr("y", 9)
// .text(d => d.label)
// .style("font-family", "sans-serif")
// .style("font-size", "12px");
