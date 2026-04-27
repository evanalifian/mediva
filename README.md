# Mediva - Explore Health Knowledge with Precision

Mediva is a search engine application built using Python and a modern web framework, implementing information retrieval concepts such as text preprocessing, inverted indexing, and the BM25 ranking algorithm. The system is designed to extract and retrieve information from a collection of health journals, enabling efficient and relevant search results.

## 🚀 Getting Started

Follow these steps to run Mediva on your local machine.

### 1. Clone Repository

```bash
git clone https://github.com/evanalifian/mediva.git
cd mediva
```

### 2. Create & Activate Virtual Environment

#### Windows:

```bash
python -m venv env
env\Scripts\activate
```

#### macOS / Linux:

```bash
python3 -m venv env
source env/bin/activate
```

### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

### 4. Run Django Application

```bash
python manage.py runserver
```

### 5. Open in Browser

```
http://127.0.0.1:8000/
```

## 📌 Notes

* Make sure Python is already installed on your system
* Ensure virtual environment is activated before running the app
* Do not forget to add `.env` or sensitive files to `.gitignore`

## 🧠 Features

* Text Preprocessing (Tokenization, Stopword Removal, Stemming)
* Inverted Index Construction
* BM25 Ranking Algorithm
* Health Journal Search Engine
