#!/usr/bin/python3
"""
Start a Flask web application
"""
from flask import Flask, render_template
import uuid

app = Flask(__name__)


@app.route('/100-hbnb/', strict_slashes=False)
def hbnb():
    """
    Display HBNB HTML page
    """
    cache_id = str(uuid.uuid4())
    return render_template('100-hbnb.html', cache_id=cache_id)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port='5000')

