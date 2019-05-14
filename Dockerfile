# Pull base image
FROM python:3.6.5-stretch

# Set work directory
WORKDIR /selfies/

# Install dependencies
COPY requirements.txt /selfies/
RUN pip install -r requirements.txt
