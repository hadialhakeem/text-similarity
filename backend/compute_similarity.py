import tensorflow_hub as hub
import matplotlib.pyplot as plt
import numpy as np
import seaborn as sns
import base64
from io import BytesIO


module_url = "https://tfhub.dev/google/universal-sentence-encoder/4"
model = hub.load(module_url)


def embed(input):
    return model(input)


def plot_similarity(labels, features, rotation):
    corr = np.inner(features, features)
    sns.set(font_scale=1.2)
    g = sns.heatmap(
        corr,
        xticklabels=labels,
        yticklabels=labels,
        vmin=0,
        vmax=1,
        cmap="YlOrRd")
    g.set_xticklabels(labels, rotation=rotation)
    g.set_title("Semantic Textual Similarity")
    plt.tight_layout()

    tmpfile = BytesIO()
    plt.savefig(tmpfile, format='png')
    encoded = base64.b64encode(tmpfile.getvalue()).decode('utf-8')
    img_src = 'data:image/png;base64,{}'.format(encoded)
    # html = '<img src=\'data:image/png;base64,{}\'>'.format(encoded)
    # plt.show()
    plt.close()

    return img_src


def run_and_plot(messages_dict):
    keys = list(messages_dict.keys())
    values = list(messages_dict.values())
    message_embeddings_ = embed(values)
    return plot_similarity(keys, message_embeddings_, 90)


if __name__ == "__main__":
    messages = [
        # Smartphones
        "I like my phone",
        "My phone is not good.",
        "Your cellphone looks great.",

        # Weather
        "Global warming is real",

        # Food and health
        "Eating strawberries is healthy",
        "Is paleo better than keto?",

        # Asking about age
        "How old are you?",
        "what is your age?",
    ]

    dict_messages = {
        'String 1': "I like my phone",
        'String 2': "Your cellphone looks great.",
        'String 3': "How old are you?",
        'String 4': "water"
    }

    dict_messages_2 = {
        'String 1': "a",
        'String 2': "b",
        'String 3': "c",
        'String 4': "d"
    }

    print("plotting...")
    run_and_plot(dict_messages)
