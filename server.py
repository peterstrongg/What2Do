from flask import Flask, render_template
import os

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/results/')
def results():
    print('Results page loading...')
    os.system('python getLocations.py 18031')
    return render_template('results.html')
    

if __name__ == '__main__':
    app.run(debug = True)