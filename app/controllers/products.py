from flask import Flask, render_template, session, redirect, flash, request
from app import app
from app.models.product import Product
from app.models.order import Order
from app.models.order_item import OrderItem

@app.route('/')
def index():
    if 'shopping_cart' not in session:
        session['shopping_cart'] = 0

    return render_template('index.html', data=Product.get_all())

@app.route('/product/<int:id>')
def show_product(id):
    return render_template('show_product.html', product=Product.get_one(id))


