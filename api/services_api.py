import flask
from data import db_session
from data.services import Services
from flask import jsonify


blueprint = flask.Blueprint('services_api', __name__,
                            template_folder='templates')


@blueprint.route('/api/v1.0/services')
def get_services():
    session = db_session.create_session()
    jobs = session.query(Services).all()
    return jsonify(
        {
            'services':
                [item.to_dict() for item in jobs]
        }
    )
