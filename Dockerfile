# Pull base image
FROM python:3.7

# Set work directory
WORKDIR /selfies/

# Install dependencies
RUN pip install pipenv
COPY requirements.txt /selfies/
RUN pip install -r requirements.txt

# Copy project
COPY . /selfies/
