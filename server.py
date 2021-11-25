from flask import Flask, render_template, request, redirect, url_for
import os

app = Flask(__name__)

zipCode = ''
category = ''

@app.route('/', methods = ['POST', 'GET'])
def home():
    if request.method == "POST":
        global zipCode 
        global category

        zipCode = str(request.form["zip"])
        category = str(request.form["selectCategory"]).lower()
        
        return redirect(url_for("results"))

    return render_template('index.html')

@app.route('/results/')
def results():
    print('Results page loading for '+ category +'\'s in zipcode '+ zipCode +'...')
    os.system('python getLocations.py ' + zipCode + ' ' + category)
    return render_template('results.html')
    
    
if __name__ == '__main__':
    app.run(debug = True)