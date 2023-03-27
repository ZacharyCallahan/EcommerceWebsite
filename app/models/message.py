from app.config.mysqlconnection import connectToMySQL
from flask import flash

class Message:
    def __init__(self, data):
        self.id = data['id']
        self.full_name = data['full_name']
        self.email = data['email']
        self.subject = data['subject']
        self.message = data['message']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def save(cls, data):
        query = "INSERT INTO messages (full_name, email, subject, message) VALUES (%(full_name)s, %(email)s, %(subject)s, %(message)s);"
        return connectToMySQL('flask_ecommerce_website_schema').query_db(query, data)
    
    @staticmethod
    def validate_message(data):
        is_valid = True
        if len(data['full_name']) < 3:
            flash("Full name must be at least 3 characters")
            is_valid = False
        if len(data['email']) < 5:
            flash("Email must be at least 5 characters")
            is_valid = False
        if len(data['subject']) < 3:
            flash("Subject must be at least 3 characters")
            is_valid = False
        if len(data['message']) < 10:
            flash("Message must be at least 10 characters")
            is_valid = False
        return is_valid
    