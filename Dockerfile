#Use the official MySQL image as the base image
FROM mysql:latest

#Set enviroment variables for MySQL
ENV MYSQL_DATABASE=blog_db
ENV MYSQL_ROOT_PASSWORD=1234
#Optionally, define the default user and password
ENV MYSQL_USER=sofiamishell2003
ENV MYSQL_PASSWORD=1234
#Add the schema SQL script to the docker-entrypoint-iniitdb.d directory
COPY schema.sql /docker-entrypoint-initdb.d/

