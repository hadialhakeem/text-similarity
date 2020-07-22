from flask import Flask, request, jsonify
from flask_cors import CORS

# from backend.compute_similarity import embed

app = Flask(__name__)
CORS(app)


@app.route("/")
def helloWorld():
    return "Hello, cross-origin-world!"


@app.route("/compute", methods=['POST'])
def compute_similarity():
    data = request.get_json(force=True)
    print(type(data))
    # response = embed(data)
    return jsonify(data)


if __name__ == "__main__":
    app.run()
