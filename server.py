from flask_app.controllers import *
from flask_app import app
from flask import Flask, render_template, session
from flask_app.models import product, user
from flask_app.controllers import order_item, users, orders, products



if __name__=="__main__":
    app.run(debug=True)