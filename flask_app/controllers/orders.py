from flask import Flask, render_template, request, redirect, session, flash
from flask_app import app
from flask_app.models.order import Order
from flask_app.models.user import User
from flask_app.models.order_item import OrderItem

@app.route('/checkout')
def checkout():
    if 'user_id' not in session:
        flash('You must be logged in to checkout')
        return redirect('/login')
    if 'order_id' not in session:
        flash('Add items to your cart before checking out!')
        return redirect('/')
    
    
    return render_template('checkout.html', order_data=Order.get_all_order_data_by_id({'order_id': session['order_id']}), cart_total=Order.get_total_price_by_order_id({'order_id': session['order_id']}), user=User.get_one({'id': session['user_id']}))



@app.route('/process_checkout', methods=['POST'])
def process_checkout():
    if not User.validate_shipping_info(request.form):
        return redirect('/checkout')
    
    data = {
        'id': session['user_id'],
        'first_name': request.form['first_name'],
        'last_name': request.form['last_name'],
        'address': request.form['address'],
        'city': request.form['city'],
        'state': request.form['state'],
        'zip_code': request.form['zip_code'],
        'country': request.form['country'],
        'phone': request.form['phone']
    }
    Order.update_status({'id': session['order_id'], 'status': 'shipped'})
    User.update_shipping_info(data)
    
    return redirect('/confirmation')


@app.route('/confirmation')
def confirmation():
    if 'user_id' not in session:
        flash('You must be logged in to view your order confirmation')
        return redirect('/login')
    if 'order_id' not in session:
        flash('Add items to your cart before checking out!')
        return redirect('/')

    session['shopping_cart'] = 0
    session.pop('order_id')

    return render_template('confirmation.html', user=User.get_one({'id': session['user_id']}))


@app.route('/reorder/<int:order_id>')
def reorder(order_id):
    if 'user_id' not in session:
        flash('You must be logged in to reorder')
        return redirect('/login')
    if 'order_id' in session:
        flash('You must complete your current order before reordering')
        return redirect('/checkout')
    
    session['order_id'] = Order.reorder({'order_id': order_id, 'user_id': session['user_id']})

    session['shopping_cart'] = OrderItem.get_total_quantity_by_order_id({'order_id': session['order_id']})
    return redirect('/checkout')

