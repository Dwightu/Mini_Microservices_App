A mini microservice app
=

I use Docker and Kubernetes to create a microservice app. The microservice is based on  <a href="https://medium.com/elixirlabs/event-bus-implementation-s-d2854a9fafd5">Event-driven architecture pattern</a>.
<br>
Event-driven architecture pattern is a distributed asynchronous architecture pattern to create highly scalable reactive applications. The pattern suits for every level application stack from small to complex ones. The main idea is delivering and processing events asynchronously.<br><br>
<img src="https://github.com/Dwightu/Mini_Microservices_App/blob/master/img/overview/2.png" width="500px">


## Overview
### - Main functions
* Post Service
* Comment Service
* Query Service
* Moderation Service
* `Event-bus Service` solves the problem of how microservices communicate with each other. 
<img src="https://github.com/Dwightu/Mini_Microservices_App/blob/master/img/overview/1.png" width="500px">

### - Tech Stack
* Front-end: React
* Back-end: Node.js
* Deployment: Docker, Kubernates(Load Balancer, Ingress Controller), Skaffold
<img src="https://github.com/Dwightu/Mini_Microservices_App/blob/master/img/LoadBalancer/1.png" width="500px">

## Implementation
### - Docker and Kubernates
- Why Docker?
 Do not need to care about the running environment and precise knowledge of how to start it(npm start).
- Why Kubernates?
 Kubernates help us better manage container which Docker creates.
### - Load Balancer && Ingress Controller
- Load Balancer<br>
 Tells Kubernates to reach out to its provider and provision a load balancer. Gets traffic into a single pod.
- Ingress Controller<br>
 A pod with a set of routing rules to distribute traffic to other services
### - Skaffold<br>
 Automates many tasks in a Kubernetes dev environment. Skaffold handles the workflow for building, pushing and deploying your application, allowing me to focus on what matters most: writing code.
 

## Local Usage
### Install dependencies on each service folder

```bash
npm install
```

### Create Docker Images + Push them to docker hub

```bash
docker build -t dwightu/`servicename` .
docker push dwightu/`servicename`
```
### Run Kubernates

```bash
kubectl apply -f infra/k8s
```


