from flask import Flask
import os

app = Flask(__name__)


@app.route('/')
@app.route('/index')
def index():
    return "API v 1.0"


if __name__ == '__main__':
    port = int(os.environ.get("PORT", 80))
    app.run(host='0.0.0.0', port=port)
