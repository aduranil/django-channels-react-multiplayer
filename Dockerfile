# Pull base image
FROM python:3.7

ENV PYTHONUNBUFFERED 1

# Set work directory
WORKDIR /selfies/

# Install dependencies
COPY requirements.txt /selfies/
RUN pip install -r requirements.txt

# Copy project
ADD . /selfies/

EXPOSE 8000

ENTRYPOINT ["/app/bin/docker-entrypoint.sh"]
