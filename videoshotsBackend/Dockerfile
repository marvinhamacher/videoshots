
FROM python:3.11-bookworm
RUN apt install -y libpq-dev

RUN mkdir /code
WORKDIR /code
RUN pip install --upgrade pip
COPY requirements.txt /code/

RUN pip install -r requirements.txt
COPY . /code/

EXPOSE 8000
ENV PYTHONUNBUFFERED=1
RUN ["python", "manage.py", "makemigrations"]
RUN ["python", "manage.py", "migrate"]
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]