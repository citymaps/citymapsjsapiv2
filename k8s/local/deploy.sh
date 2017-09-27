#!/bin/bash

echo "{\"date\":\"$(date)\"}" | jinja2 k8s/local/deployment.yaml.tmpl --format=json > k8s/local/deployment.yaml

kubectl replace -f k8s/local/deployment.yaml
