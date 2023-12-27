docker build --no-cache -f SQL\Dockerfile.PostgreSql -t prilozhenie-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t prilozhenie-java/app ../../..
