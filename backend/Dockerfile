
# Stage 1: Build the Spring Boot application
FROM maven:3.9-eclipse-temurin-21 AS build

WORKDIR /app

COPY pom.xml .
COPY src ./src

RUN mvn clean package -DskipTests

# Stage 2: Run the application
FROM eclipse-temurin:21-jre

WORKDIR /app

COPY --from=build /app/target/*.jar app.jar
COPY src/main/resources/certs/isrgrootx1.pem /app/certs/isrgrootx1.pem
RUN keytool -importcert -noprompt -trustcacerts \
    -alias tidb-ca \
    -file /app/certs/isrgrootx1.pem \
    -keystore /app/certs/tidb-truststore.p12 \
    -storetype PKCS12 \
    -storepass changeit

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]
