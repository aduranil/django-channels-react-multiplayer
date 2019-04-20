# Pull base image
FROM python:3.7

# Set work directory
WORKDIR /selfiesh/

# Install dependencies
RUN pip install pipenv
COPY requirements.txt /selfiesh/
RUN pip install -r requirements.txt

# Copy project
COPY . /selfiesh/
