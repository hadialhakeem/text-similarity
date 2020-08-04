from absl import logging

import tensorflow_hub as hub
import matplotlib.pyplot as plt
import numpy as np
import seaborn as sns

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
    plt.savefig('plot.png')
    # plt.show()


def run_and_plot(messages_dict):
    keys = list(messages_dict.keys())
    values = list(messages_dict.values())
    message_embeddings_ = embed(values)
    plot_similarity(keys, message_embeddings_, 90)


'''
# @title Compute a representation for each message, showing various lengths supported.
word = "Elephant"
sentence = "I am a sentence for which I would like to get its embedding."
paragraph = (
    "Universal Sentence Encoder embeddings also support short paragraphs. "
    "There is no hard limit on how long the paragraph is. Roughly, the longer "
    "the more 'diluted' the embedding will be.")
messages = [word, sentence, paragraph]

# Reduce logging output.
logging.set_verbosity(logging.ERROR)

message_embeddings = embed(messages)

for i, message_embedding in enumerate(np.array(message_embeddings).tolist()):
    print("Message: {}".format(messages[i]))
    print("Embedding size: {}".format(len(message_embedding)))
    message_embedding_snippet = ", ".join(
        (str(x) for x in message_embedding[:3]))
    print("Embedding: [{}, ...]\n".format(message_embedding_snippet))
'''

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
    #run_and_plot(dict_messages_2)

