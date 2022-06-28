from flask import Flask
import os
from waitress import serve


app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/api')
def index():
    return 'API'


if __name__ == '__main__':
    port_run = int(os.environ.get("PORT", 8080))
    serve(app, host='0.0.0.0', port=port_run)
