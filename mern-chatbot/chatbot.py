from transformers import pipeline
import sys

# Load the Hugging Face DistilGPT-2 model for text generation
generator = pipeline('text-generation', model='gpt2')
print("genss",generator)

# Get the user's message from the command line
user_message = sys.argv[1]

# Generate a response
response = generator(user_message, max_length=50, num_return_sequences=1)

# Print the response
print(response[0]['generated_text'])
