from app.config.mysqlconnection import connectToMySQL
from flask import flash, session
import requests

import re


EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')


class User:
    db = 'flask_ecommerce_website_schema'

    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.password = data['password']
        if 'address' in data:
            self.address = data['address']
        if 'city' in data:
            self.city = data['city']
        if 'state' in data:
            self.state = data['state']
        if 'country' in data:
            self.country = data['country']
        if 'zip_code' in data:
            self.zip_code = data['zip_code']
        if 'phone' in data:
            self.phone = data['phone']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM users;"
        results = connectToMySQL(cls.db).query_db(query)
        users = []
        for user in results:
            users.append(cls(user))
        return users

    @classmethod
    def get_one(cls, data):
        query = "SELECT * FROM users WHERE id = %(id)s;"
        results = connectToMySQL(cls.db).query_db(query, data)
        return cls(results[0])

    @classmethod
    def sign_up(cls, data):
        query = """
        INSERT INTO users (first_name, last_name, email, password) 
        VALUES (%(first_name)s, 
        %(last_name)s, 
        %(email)s, 
        %(password)s);"""
        return connectToMySQL(cls.db).query_db(query, data)

    @classmethod
    def update_user_info(cls, data):
        query = """
        UPDATE users SET first_name = %(first_name)s, last_name = %(last_name)s, email = %(email)s, address = %(address)s, city = %(city)s, state = %(state)s, country = %(country)s, zip_code = %(zip_code)s, phone = %(phone)s WHERE id = %(id)s;"""
        return connectToMySQL(cls.db).query_db(query, data)

    @classmethod
    def update_shipping_info(cls, data):
        query = """
        UPDATE users SET 
        address = %(address)s, 
        city = %(city)s, 
        state = %(state)s, 
        country = %(country)s, 
        zip_code = %(zip_code)s, 
        phone = %(phone)s 
        WHERE id = %(id)s;"""
        return connectToMySQL(cls.db).query_db(query, data)

    @staticmethod
    def validate_user(user):
        is_valid = True
        if len(user['first_name']) < 2:
            flash("First name must be at least 2 characters long.")
            is_valid = False
        if len(user['last_name']) < 2:
            flash("Last name must be at least 2 characters long.")
            is_valid = False

        # Check if email already exists in database
        query = "SELECT * FROM users WHERE email = %(email)s;"
        results = connectToMySQL(User.db).query_db(query, user)
        if len(results) > 0:
            flash("Email already exists.")
            is_valid = False
        if not EMAIL_REGEX.match(user['email']):
            flash("Invalid email address.")
            is_valid = False
        if len(user['password']) < 8:
            flash("Password must be at least 8 characters long.")
            is_valid = False
        if user['password'] != user['confirm_password']:
            flash("Passwords must match.")
            is_valid = False

        session['first_name'] = user['first_name']
        session['last_name'] = user['last_name']
        session['email'] = user['email']
        return is_valid

    @classmethod
    def get_by_email(cls, data):
        query = "SELECT * FROM users WHERE email = %(email)s;"
        results = connectToMySQL(cls.db).query_db(query, data)
        if len(results) < 1:
            return False
        return cls(results[0])

    @staticmethod
    def validate_shipping_info(user):
        is_valid = True
        if len(user['first_name']) < 2:
            flash("First name must be at least 2 characters long.")
            is_valid = False
        if len(user['last_name']) < 2:
            flash("Last name must be at least 2 characters long.")
            is_valid = False
        if len(user['address']) < 2:
            flash("Address must be at least 2 characters long.")
            is_valid = False
        if len(user['city']) < 2:
            flash("City must be at least 2 characters long.")
            is_valid = False
        if len(user['state']) < 2:
            flash("State must be at least 2 characters long.")
            is_valid = False
        if len(user['country']) < 2:
            flash("Country must be at least 2 characters long.")
            is_valid = False
        if len(user['zip_code']) < 5:
            flash("Zipcode must be at least 5 characters long.")
            is_valid = False
        if len(user['phone']) < 10:
            flash("Phone must be at least 10 characters long.")
            is_valid = False
        return is_valid
