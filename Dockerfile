# Pull base image
FROM python:3.7

ENV PYTHONUNBUFFERED 1

EXPOSE 8000

# Set work directory
WORKDIR /selfies/

# Install dependencies
COPY requirements.txt /selfies/
RUN pip install -r requirements.txt

# Copy project
COPY . /selfies/
