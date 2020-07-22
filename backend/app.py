from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
#from backend.compute_similarity import embed
app = Flask(__name__)
app = CORS(app)


@app.route("/")
def hello():
    return "Hello World!"


@app.route("/compute", methods=['POST'])
def compute_similarity():
    data = request.get_json(force=True)
    print(type(data))
    #response = embed(data)
    return jsonify(data)
    pass


if __name__ == "__main__":
    app.run()
