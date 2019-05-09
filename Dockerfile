# Pull base image
FROM python:3.7

# Set work directory
WORKDIR /selfies/

# Install dependencies
RUN pip install pipenv
COPY requirements.txt /selfies/
RUN pip install -r requirements.txt

EXPOSE 8000

# Copy project
COPY . /selfies/
