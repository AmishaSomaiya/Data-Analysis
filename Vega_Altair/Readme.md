Tool : VegaAltair with Python

Visualization Topic and Target Audience:
This visualization depicts the 'Latitude Analysis of Sunshine Disparity' and investigates 'The Relation between proximity to Equator and Monthly/Annual Sunshine of 6 US Cities'. The visualization is targeted for general audience and aims quick interpretability based on expressiveness and effectiveness by utilizing the given data.The visualization consists of 1 heatmap of mean monthly sunshine for each city and and 6 donut charts of annual sunshine (in percentage and total hours of sunshine per year) for each city with regards to city's proximity (distance to Equator-information from Latitude). The cities are sorted by their distance to Equator in both for quick visual comparison.

Data Fields and Transformations:
'city': Nominal, used raw
'month':Nominal, used raw
'sunshine': Quantitative Ratio, Monthly 1981-2010 normals, unit: hours, used raw
'monthnur': not used since using 'month' is visually easy for general audience.
'lat': unit: decimal degrees, transformed to 'city distance from Equator' for quicker interpretaton for general audience
'lon': not used
Other Fields:
'cityDistFromEquator': Quantitative Ratio, unit: miles, transformed by multiplying 'lat' by 69 since each degree of latitude represents 69 miles. (Ref: https://www.usgs.gov/faqs). For example, for Seattle, 'lat' = 47.608013 decimal degrees. Thus, 'cityDistFromEquator'(in miles) for Seattle = 47.608013*69 = 3,284.952897 mi ~ 3285 mi. This transformation is useful for quick interpretation and comparison by general audience. Also, all the 6 cities in this dataset have positive latitude, (all 6 cities are in Northern Hemisphere),so transforming latitude to the scalar quantity of distance does not cause loss of information. 
'annualHoursOfSunshine': Quantitative Ratio, annual hours of sunshine for each city, averaged over 1981-2010 (Ref: https://www.usclimatedata.com/, from the 
A1 assignment page), unit : hours per year, used raw
'percentageOfHours' : Quantitative Ratio, percentage of average annual sunshine received in each city, unit : percentage, calculated from 'annualHoursOfSunshine' divided by total hours in 1 year = 8766. For example, for Seattle, 'percentageOfHours' = 2163/8766 = 24.67%. This field is again useful for quick interpretation and comparison by general audience.


Design Choices:
HeatMap: Encoding : 'month' on X-axis, 'city' on Y-axis (cities sorted by distance to equator i.e. latitude) and Color Encoding for 'sunshine'. Color Scheme: flipped 'YellowGreenBlue' to show months with more sunshine as yellow and darker months with dark blue. Legend shows color to sunshine hours mapping. Other designs tried include stacked bar charts, stacked density estimation, histogram, size encoding instead of color and continous line graphs.Found heatmap with color encoding design choice as more expressive and effective than other choices to clearly display individual cities monthly sunshine as well as comparison with other cities. Sorting cities by distance made comparisons further easier.
Donut Charts: Encoding: 'percentageOfHours' as theta value on arc, Color Encoding: yellow for sunshine hours and blue for non-sunshine hours. Inner Radius as 138 for non-sunshine category and 135 for sunshine category to create thin donuts for visual appeal. 'city', 'percentageOfHours', 'annualHoursOfSunshine' embedded for individual city information. Position of donut charts sorted by 'cityDistFromEquator' and shown with each donut chart. Other design tried is plot with latitude on x-axis, longitude on y-axis, mark_circles with color and size encoding with color of circle different for each city and size of circle corresponding to sunshine. Found donut charts described above and sorted in position by distance to be more expressive and effective for easier interpretation. 

 
Inferences:
1. Lesser distance to Equator (lesser Latitude) leads to more uniform sunshine spread over all 12 months in contrast to stark extremes when farther away from Equator i.e. very low sunshine in winter months and very high sunshine in summer months. Evident from HeatMap : Miami and Seattle.  
2. Certain months (Summer months of June-August) have more sunshine as compared to other months regardless of Latitude or proximity to Equator. Evident from HeatMap for all cities.
3. Lesser distance to Equator (lesser Latitude) generally leads to more annual sunshine with some exceptions. Evident from Donut Plots, exception : San Francisco. 
4. Direct inference of individual city analysis (for eg. which city received how much sunshine, in which month, over several months, or annualy or which city received maximum sunshine etc) or comparison with other cities(with respect to each other and/or in comparison to distance/latitude) can be done directly from the visualization. 
