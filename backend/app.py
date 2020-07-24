from flask import Flask, request, jsonify
from werkzeug.datastructures import ImmutableMultiDict
from flask_cors import CORS

# from backend.compute_similarity import embed

app = Flask(__name__)
CORS(app)


@app.route("/")
def helloWorld():
    return "Hello, cross-origin-world!"


@app.route("/compute", methods=['POST'])
def compute_similarity():
    data = request.form.to_dict()
    print(data)
    print(data['String 1'])
    print(type(data))
    # response = embed(data)
    return jsonify(data)


if __name__ == "__main__":
    app.run()
