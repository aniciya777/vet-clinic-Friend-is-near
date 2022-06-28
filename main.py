from flask import Flask, render_template, Blueprint
import os


app = Flask(__name__, template_folder='dist')

client_bp = Blueprint("vue_js_bp", __name__, # 'Client Blueprint'
    template_folder="dist", # Required for our purposes
    static_folder="dist", # Again, this is required
    static_url_path="/" # Flask will be confused if you don't do this
)


@client_bp.route('/')
def index():
    return render_template('index.html')


@app.route('/api')
def api():
    return 'API'


if __name__ == '__main__':
    port_run = int(os.environ.get("PORT", 80))
    app.register_blueprint(client_bp)
    app.run(host='0.0.0.0', port=port_run)
