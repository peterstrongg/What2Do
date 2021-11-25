from flask import Flask, render_template, request, redirect, url_for
import os

app = Flask(__name__)

zipCode = ''

@app.route('/', methods = ['POST', 'GET'])
def home():
    if request.method == "POST":
        global zipCode 
        zipCode = str(request.form["zip"])
        return redirect(url_for("results"))
    return render_template('index.html')

@app.route('/results/')
def results():
    print('Results page loading for zipcode '+ zipCode +'...')
    os.system('python getLocations.py ' + zipCode)
    return render_template('results.html')
    
    
if __name__ == '__main__':
    app.run(debug = True)