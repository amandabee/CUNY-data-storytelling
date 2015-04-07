#install.packages("ggmap")
library(ggmap)
library(ggplot2)

setwd("~/Dropbox/CUNY Misc")

## Done:
# alums <- read.csv('where_weve_gone.csv')
# alums <- cbind(alums, geocode(as.character(alums$City)))
# write.csv(alums, file="alums_geo.csv")

## So now do:
alums <- read.csv('alums_geo.csv')


## Draw the world map  
library(maps)
library(mapdata)

map("world", col="#f2f2f2", fill=TRUE, bg="#FFFFFF", lwd=0.05)
points(alums$lon, alums$lat)

# Should help:
# http://stackoverflow.com/questions/19262805/r-geom-point-and-ggmap
# http://www.mpi.nl/departments/independent-research-groups/evolutionary-processes/tools/mapping-with-r
# > max(alums$lon)
# [1] 116.4075
# > min(alums$lon)
# [1] -122.4194
# > max(alums$lat)
# [1] 55.75583
# > min(alums$lat)
# [1] -6.208763

