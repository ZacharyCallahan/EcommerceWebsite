from app.controllers import *
from app import app
from flask import Flask, render_template, session
from app.models import product, user
from app.controllers import order_item, users, orders, products, messages



if __name__=="__main__":
    app.run(debug=True)