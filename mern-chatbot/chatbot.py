from transformers import pipeline
import sys

# Load the Hugging Face DistilBERT model for question-answering
generator = pipeline('question-answering', model='distilbert-base-uncased')

# Print model info (just for checking)
print("Model loaded:", generator)

# Get the user's message from the command line
user_message = sys.argv[1]

# Define a diet-related context (you can replace this with actual dietary content)
context = """
A healthy diet includes fruits, vegetables, whole grains, and lean proteins. 
Proper hydration and balanced macronutrients are essential for maintaining good health.
"""

# Generate a response (ask a diet-related question)
response = generator(
    question=user_message,
    context=context  # this can later be extended with real diet info
)

# Print the response
print("Answer:", response['answer'])