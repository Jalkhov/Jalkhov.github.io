import json

OUTPUT_FOLDER = 'build/'
info = None

with open('info.json') as f:
    info = json.load(f)
