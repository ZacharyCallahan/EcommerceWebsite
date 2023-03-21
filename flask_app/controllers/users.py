from flask import Flask, render_template, request, redirect, session, flash
from flask_app import app
from flask_bcrypt import Bcrypt
from flask_app.models.user import User
from flask_app.models.order import Order

bcrypt = Bcrypt(app)


@app.route('/register', methods=['POST'])
def register():
    if not User.validate_user(request.form):
        return redirect('/register')

    pw_hash = bcrypt.generate_password_hash(request.form['password'])
    data = {
        "first_name": request.form['first_name'],
        "last_name": request.form['last_name'],
        "email": request.form['email'],
        "password": pw_hash
    }
    user_id = User.sign_up(data)
    session['user_id'] = user_id
    return redirect('/')


@app.route('/register')
def register_form():

    if 'first_name' not in session:
        session['first_name'] = ''
    if 'last_name' not in session:
        session['last_name'] = ''
    if 'email' not in session:
        session['email'] = ''

    return render_template('register.html', first_name=session['first_name'], last_name=session['last_name'], email=session['email'])


@app.route('/login', methods=['POST'])
def login():
    data = {
        "email": request.form['email'],
    }
    user_in_db = User.get_by_email(data)
    if not user_in_db:
        flash("Invalid email/password")
        return redirect('/login')
    if not bcrypt.check_password_hash(user_in_db.password, request.form['password']):
        flash("Invalid email/password")
        return redirect('/login')

    session['user_id'] = user_in_db.id
    return redirect('/')


@app.route('/login')
def login_form():

    return render_template('login.html')


@app.route('/logout')
def logout():
    session.clear()
    return redirect('/login')


@app.route('/confirmation')
def confirmation():
    if 'user_id' not in session:
        flash('You must be logged in to view your order confirmation')
        return redirect('/login')
    if 'order_id' not in session:
        flash('Add items to your cart before checking out!')
        return redirect('/')

    session['shopping_cart'] = 0

    return render_template('confirmation.html', user=User.get_one({'id': session['user_id']}))


@app.route('/account')
def account():
    if 'user_id' not in session:
        flash('You must be logged in to view your account')
        return redirect('/login')

    return render_template('account.html', user=User.get_one({'id': session['user_id']}), orders=Order.get_all_user_orders({'user_id': session['user_id']}))


@app.route('/order/<int:order_id>')
def order(order_id):
    if 'user_id' not in session:
        flash('You must be logged in to view your order')
        return redirect('/login')

    return render_template('order_details.html', 
                           order = Order.get_one({'id': order_id}),
                           orders=Order.get_all_order_data_by_id({'order_id': order_id}), 
                           cart_total=Order.get_total_price_by_order_id({'order_id': order_id}), 
                           user=User.get_one({'id': session['user_id']}), 
                           order_id=order_id)
