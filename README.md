# Data-Analysis and Visualization
This repository contains data analysis and visualizations generated using Tableau, D3.js, VegaAltair-Python, PowerBI and SQL. 

For the collaborative data analysis project in a team of 5, visit the following link : 
https://github.com/cse512-23s/Tuning-PlaySite 
cse512-23s.github.io/Tuning-PlaySite/  

'Analysis of Global Female Employment Trends : 1991-2021' using Tableau 
The goal is to give the viewer a clear idea of global female employment over a time period of 1991 to 2021. All data fields are used raw for this viz. Starting with the 3 charts in the bottom of the dashboard,these give female employment breakdown in services, agriculture and industry over the years. The same statistics for males is also visualized in layered fashion in the same plots for quick and easy comparison. Chart type: layered, Mark: continous line. X axis encoding: year (even numbered years shown for spaced out axis view). Y axis encoding : percentage for each year. Color encoding: Female: blue, Male: orange The line ends are labeled for quicker view. These encodings are maintained through all 3 bottom graphs in both visualizations for uniformity. Moving up to the right is the literacy rate and salaried women(subset of employment in services) stacked bar chart. Chart type: stacked bar chart, Encoding: x axis: percentage, y axis: year (even numbered), Color encoding: Blue: salaried women, Teal: Literacy Rate for females. To the left of this chart, is the Global Female Labor Force map showing percentage of female labor out of total labor for all countries in 2021. Encoding: color scheme : teal-blue color from min(7.79%) to max(64.27%) in 10 steps. Last, in the top-most are the single statistics data frames for female employment taken raw from data for 2021.

INFERENCES: -There is female labor force in almost all countries. -Both female literacy and salaried women percentage has shown positive correlation and increase over the years. -Over the years, more women are moving from agriculture and industry towards employment in services. -Over the years from 1991 to 2021, there is an increase in female literacy and employment -Females found in good numbers in labor force as also in leading positions of top managers, owners as also holding seats in National Parliaments.


'Latitude Analysis of Sunshine Disparity' using VegaAltair with Python

Visualization Topic and Target Audience: This visualization investigates 'The Relation between proximity to Equator and Monthly/Annual Sunshine of 6 US Cities'. The visualization is targeted for general audience and aims quick interpretability based on expressiveness and effectiveness by utilizing the given data.The visualization consists of 1 heatmap of mean monthly sunshine for each city and and 6 donut charts of annual sunshine (in percentage and total hours of sunshine per year) for each city with regards to city's proximity (distance to Equator-information from Latitude). The cities are sorted by their distance to Equator in both for quick visual comparison.

Inferences:

Lesser distance to Equator (lesser Latitude) leads to more uniform sunshine spread over all 12 months in contrast to stark extremes when farther away from Equator i.e. very low sunshine in winter months and very high sunshine in summer months. Evident from HeatMap : Miami and Seattle.
Certain months (Summer months of June-August) have more sunshine as compared to other months regardless of Latitude or proximity to Equator. Evident from HeatMap for all cities.
Lesser distance to Equator (lesser Latitude) generally leads to more annual sunshine with some exceptions. Evident from Donut Plots, exception : San Francisco.
Direct inference of individual city analysis (for eg. which city received how much sunshine, in which month, over several months, or annualy or which city received maximum sunshine etc) or comparison with other cities(with respect to each other and/or in comparison to distance/latitude) can be done directly from the visualization.





