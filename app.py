from flask import Flask, render_template, request
import csv
import requests
import os

app = Flask(__name__, template_folder='.')

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/generate', methods=['POST'])
def generate():

    csv_file = request.files['csv_file']
    output_folder = request.form['output_folder']
    api_key = request.form['api_key']
    voice_id = request.form['voice_id']

    os.makedirs(output_folder, exist_ok=True)

    csv_path = "temp.csv"
    csv_file.save(csv_path)

    url = f"https://api.elevenlabs.io/v1/text-to-speech/{voice_id}"

    headers = {
        "Accept": "audio/mpeg",
        "Content-Type": "application/json",
        "xi-api-key": api_key
    }

    with open(csv_path, newline='', encoding='utf-8') as file:
        reader = csv.DictReader(file)

        for row in reader:

            filename = row["filename"]
            text = row["text"]

            data = {
                "text": text,
                "model_id": "eleven_multilingual_v2"
            }

            response = requests.post(url, json=data, headers=headers)

            if response.status_code == 200:

                output_path = os.path.join(output_folder, f"{filename}.mp3")

                with open(output_path, "wb") as f:
                    f.write(response.content)

                print("Saved:", output_path)

            else:
                print("Error:", response.text)

    return render_template('index.html', status="Audio Generated Successfully!")

if __name__ == '__main__':
    app.run(debug=True)