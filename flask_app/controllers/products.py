from flask import Flask, render_template, session
from flask_app import app
from flask_app.models.product import Product

@app.route('/')
def index():
    if 'shopping_cart' not in session:
        session['shopping_cart'] = 0

    return render_template('index.html', data=Product.get_all())