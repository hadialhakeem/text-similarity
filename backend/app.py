from flask import Flask, request, jsonify
from flask_cors import CORS
from backend.compute_similarity import run_and_plot

app = Flask(__name__)
CORS(app)


@app.route("/")
def helloWorld():
    return "Hello, cross-origin-world!"


@app.route("/compute", methods=['POST'])
def compute_similarity():
    data = request.form.to_dict()
    print(data)
    print(type(data))
    run_and_plot(data)
    response = {'img_src': 'backend/plot.png'}
    return jsonify(response)


if __name__ == "__main__":
    app.run()
