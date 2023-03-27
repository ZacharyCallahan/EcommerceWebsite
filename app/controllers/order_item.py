from flask import Flask, render_template, request, redirect, session, flash
from app import app
from app.models.order import Order
from app.models.order_item import OrderItem


@app.route('/add_to_cart', methods=['POST'])
def add_to_cart():
    if 'user_id' not in session:
        flash('You must be logged in to add items to your cart')
        return redirect('/login')

    if 'order_id' not in session:
        session['order_id'] = Order.create(
            {'user_id': session['user_id'], 'status': 'in_cart'})

    data = {
        'order_id': session['order_id'],
        'product_id': request.form['product_id'],
        'price': request.form['product_price'],
        'quantity': int(request.form['product_quantity'])
    }
    if OrderItem.item_is_in_cart(data):
        OrderItem.update(data)
    else:
        OrderItem.save(data)

    Order.update_order_total_price({'order_id': session['order_id']})
    session['shopping_cart'] = OrderItem.get_total_quantity_by_order_id({'order_id': session['order_id']})

    return redirect('/')


@app.route('/remove_item/<int:product_id>')
def remove_item(product_id):
    data = {
        'order_id': session['order_id'],
        'product_id': product_id
    }
    OrderItem.remove_item_from_cart(data)

    session['shopping_cart'] = OrderItem.get_total_quantity_by_order_id({'order_id': session['order_id']})

    Order.update_order_total_price({'order_id': session['order_id']})

    if session['shopping_cart'] == 0:
        session.pop('order_id')
        return redirect('/')
    return redirect('/checkout')
